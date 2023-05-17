// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false,
      },
    css: ["@/assets/css/tailwind.css", "@/assets/css/global.css"],
    modules: ["@nuxtjs/tailwindcss",'@nuxtjs/i18n','@formkit/nuxt'],
    i18n: {
      vueI18n: '/i18n.config.ts' // if you are using custom path, default 
    },
    app: {
      baseURL: './'
    },
})
