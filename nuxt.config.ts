import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  app: {
    head: {
      title: "Nuxt3 Static Shop",
      meta: [
        { name: "description", content: "Simple static shop built with Nuxt 3" }
      ]
    }
  }
});
