// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    asyncContext: true,
    typedPages: true,
    noScripts: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  sourcemap: {
    server: true,
    client: true,
  },
})
