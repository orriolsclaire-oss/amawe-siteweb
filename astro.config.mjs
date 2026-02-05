import { defineConfig } from "astro/config"
import cloudflare from "@astrojs/cloudflare"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://amawe.com",
  output: "server",
  adapter: cloudflare(),

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: {
          fr: "fr",
          en: "en",
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  trailingSlash: "always",

  server: {
    port: 3000,
  },
})
