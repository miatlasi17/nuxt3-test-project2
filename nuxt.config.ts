import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  modules: ["@nuxtjs/i18n", "@unlok-co/nuxt-stripe", "vue3-carousel-nuxt", "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Nuxt3 Static Shop",
      short_name: "StaticShop",
      theme_color: "#0b1021",
      background_color: "#0b1021",
    },
  },
  stripe: {
    client: {
      key: process.env.STRIPE_PUBLIC_KEY,
    },
  },
  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "es", name: "Spanish", file: "es.json" }
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    lazy: true,
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "en"
    },
    vueI18n: "./i18n.config.ts"
  },
  app: {
    head: {
      title: "Nuxt3 Static Shop",
      meta: [
        { name: "description", content: "Simple static shop built with Nuxt 3" }
      ]
    }
  }
});
