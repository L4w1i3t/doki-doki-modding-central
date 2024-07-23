import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/")
  },

  css: ["~/assets/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  modules: ["@nuxt/image", "@nuxtjs/device"],
  compatibilityDate: "2024-07-22"
})