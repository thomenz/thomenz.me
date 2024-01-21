// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'pt',
        iso: 'pt-BR'
      },
    ],
    baseUrl: 'https://thomenz.me'
  },
  devtools: { enabled: true },
  ui: {
    icons: ['tabler']
  },
  app: {
    head: {
      title: 'Thiago Menzinger',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    }
}})