import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  builder: 'webpack',

  devtools: { enabled: true },
  sourcemap: {
    client: true
  },
  typescript: { strict: false },

  nitro: {
    esbuild: {
      options: {
        target: 'es2023'
      }
    }
  },

  // exp
  experimental: {
    localLayerAliases: true,
    defaults: {
      nuxtLink: {
        prefetch: false
      }
    }
  },

  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // modules
  modules: [
    // chore
    ['@nuxtjs/eslint-module', { lintOnStart: false }],
    // styling & ui
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    // management
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // contents,
    '@nuxt/content',
  ],

  css: [
    resolve('./assets/scss/_variables.scss'),
    resolve('./assets/scss/app.scss'),
  ],

  components: {
    dirs: [],
  },

  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },

  // module::pinia
  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**'],
  },

  // module::headlessui
  headlessui: {
    prefix: 'Headless',
  },

  // module::color-mode
  colorMode: {
    classSuffix: '',
  },

  // module::content
  content: {
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },

  hooks: {
    // eslint-disable-next-line space-before-function-paren
    'build:manifest'(manifest) {
      for (const item of Object.values(manifest)) {
        // item.dynamicImports = []
        item.prefetch = false
        item.preload = false
      }
    }
  },

  compatibilityDate: '2025-01-31',
})
