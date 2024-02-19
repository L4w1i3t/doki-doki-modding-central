import { resolve } from "path";
export default defineNuxtConfig({
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

  modules: ["@nuxt/image", "@nuxtjs/device"]
})