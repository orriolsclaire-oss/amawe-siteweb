import type { APIRoute } from "astro"

export const prerender = false

type Intent =
  | "lead_audit_roue"
  | "newsletter"
  | "contact"
  | "waitlist_ei"
  | "waitlist_retraite_silence"
  | "stages_avant_premiere"

const INTENT_TO_GROUP_ENV: Record<Intent, string> = {
  lead_audit_roue: "MAILERLITE_GROUP_LEAD_AUDIT",
  newsletter: "MAILERLITE_GROUP_NEWSLETTER",
  contact: "MAILERLITE_GROUP_CONTACT",
  waitlist_ei: "MAILERLITE_GROUP_WAITLIST_EI",
  waitlist_retraite_silence: "MAILERLITE_GROUP_WAITLIST_RETRAITE_SILENCE",
  stages_avant_premiere: "MAILERLITE_GROUP_STAGES_AVANT_PREMIERE",
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function titleCaseName(raw: string): string {
  return raw
    .trim()
    .toLocaleLowerCase("fr-FR")
    .replace(/(^|[\s\-'])(\p{L})/gu, (_, sep, ch) =>
      sep + ch.toLocaleUpperCase("fr-FR"),
    )
}

interface SubscribePayload {
  intent: Intent
  email: string
  name?: string
  phone?: string
  message?: string
  intent_question?: string
  subject?: string
  website?: string // honeypot — should always be empty
}

function getEnv(locals: any, key: string): string | undefined {
  return (
    locals?.runtime?.env?.[key] ??
    (import.meta.env as Record<string, string | undefined>)[key]
  )
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

export const POST: APIRoute = async ({ request, locals }) => {
  let body: SubscribePayload
  try {
    body = (await request.json()) as SubscribePayload
  } catch {
    return json({ ok: false, error: "invalid_body" }, 400)
  }

  const { intent, email, name, phone, message, intent_question, subject, website } = body ?? {}

  // Honeypot : si le champ caché "website" est rempli, c'est un bot.
  // On retourne ok:true silencieusement pour qu'il pense avoir réussi (= ne réessaie pas).
  if (website && typeof website === "string" && website.trim()) {
    console.log("[subscribe] honeypot triggered, silently rejecting")
    return json({ ok: true })
  }

  if (!intent || !INTENT_TO_GROUP_ENV[intent as Intent]) {
    return json({ ok: false, error: "invalid_intent" }, 400)
  }
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: "invalid_email" }, 400)
  }

  const apiKey = getEnv(locals, "MAILERLITE_API_KEY")
  const groupId = getEnv(locals, INTENT_TO_GROUP_ENV[intent])

  if (!apiKey) {
    console.error("[subscribe] missing MAILERLITE_API_KEY")
    return json({ ok: false, error: "server_misconfigured" }, 500)
  }
  if (!groupId) {
    console.error(
      `[subscribe] missing group id for intent ${intent} (env ${INTENT_TO_GROUP_ENV[intent]})`,
    )
    return json({ ok: false, error: "server_misconfigured" }, 500)
  }

  const fields: Record<string, string> = {}
  if (name) fields.name = titleCaseName(name)
  if (phone) fields.phone = phone.trim()
  if (message) fields.message = message
  if (intent_question) fields.intent_question = intent_question
  if (subject) fields.subject = subject

  // API MailerLite Classic (compte Classic) :
  // POST /api/v2/groups/{group_id}/subscribers avec header X-MailerLite-ApiKey.
  const mlBody: Record<string, unknown> = { email }
  if (fields.name) {
    mlBody.name = fields.name
    delete fields.name
  }
  if (Object.keys(fields).length > 0) {
    mlBody.fields = fields
  }

  try {
    const res = await fetch(
      `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-MailerLite-ApiKey": apiKey,
        },
        body: JSON.stringify(mlBody),
      },
    )

    if (!res.ok) {
      const errText = await res.text().catch(() => "")
      console.error(`[subscribe] mailerlite ${res.status}: ${errText}`)
      return json({ ok: false, error: "upstream_error" }, 502)
    }

    return json({ ok: true })
  } catch (err) {
    console.error("[subscribe] fetch failed", err)
    return json({ ok: false, error: "network_error" }, 502)
  }
}
