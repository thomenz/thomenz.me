// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    'nuxt-gtag',
  ],

  gtag: {
    initMode: 'manual',
    id: 'G-50LN39EDHW'
  },

  colorMode: {
    preference: 'system', 
    fallback: 'light',
  },

  icon: {
    provider: 'server',
  },

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
    baseUrl: 'https://thomenz.me',
    detectBrowserLanguage: {
      useCookie: false,
    }
  },

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Thiago Menzinger',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/itig_logo.svg' }
      ]
    }
  },

  nitro: {
      preset: 'cloudflare_pages'
    },

  site: {
    url: 'https://thomenz.me',
    name: 'Thiago Menzinger',
  },

  compatibilityDate: '2024-07-19',
})