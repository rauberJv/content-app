// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  content: {
    experimental: {
      search: {
        indexed: true,
        options: {
          fields:['title', 'description', 'parent']
        }
      }
    },
    markdown: {
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: 'noopener noreferer'
          }
        ]
      ]
    }
  },
  ssr: true,
  experimental: {
    payloadExtraction: false
  },
  router: {
    options:{
      strict: false
    }
  },
  sourcemap: false
})
