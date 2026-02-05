import type { WebSite, WithContext } from "schema-dts"

const SITE_URL = "https://amawe.fr"

/**
 * Generate JSON-LD structured data for the website.
 */
export function generateWebsiteSchema(
  lang: "fr" | "en",
): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amawe",
    url: lang === "fr" ? SITE_URL : `${SITE_URL}/en`,
    inLanguage: lang === "fr" ? "fr-FR" : "en-US",
    description:
      lang === "fr"
        ? "Amawe — Site officiel"
        : "Amawe — Official website",
  }
}
