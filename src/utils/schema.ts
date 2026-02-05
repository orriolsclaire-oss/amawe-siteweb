import type { WebSite, WithContext, Person } from "schema-dts"

const SITE_URL = "https://amawe.com"

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
        ? "Amawe par Claire Orriols. Coach en nutrition et sante holistique, formatrice MovNat et facilitatrice de retraites en nature."
        : "Amawe by Claire Orriols. Holistic nutrition and health coach, MovNat trainer and nature retreat facilitator.",
  }
}

/**
 * Generate JSON-LD structured data for Claire Orriols.
 */
export function generatePersonSchema(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Claire Orriols",
    jobTitle: "Coach en Sante Holistique",
    url: SITE_URL,
    sameAs: [
      "https://instagram.com/claireorriols",
      "https://instagram.com/amawefrance",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Amawe",
      url: SITE_URL,
    },
    knowsAbout: [
      "Holistic Nutrition",
      "Natural Movement",
      "MovNat",
      "Naturopathy",
      "Detox",
      "Wellness Retreats",
    ],
  }
}
