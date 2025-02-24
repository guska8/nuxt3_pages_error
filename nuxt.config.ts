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

  experimental: {
    defaults: {
      nuxtLink: {
        prefetch: false
      }
    }
  },

  // modules
  modules: [
    // chore
    ['@nuxtjs/eslint-module', { lintOnStart: false }],
  ],

  components: {
    dirs: [],
  },

  hooks: {
    'build:manifest' (manifest) {
      for (const item of Object.values(manifest)) {
        // item.dynamicImports = []
        item.prefetch = false
        item.preload = false
      }
    }
  },

  compatibilityDate: '2025-01-31',
})
