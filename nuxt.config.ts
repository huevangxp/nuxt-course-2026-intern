// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'HueDev - Modern Tech & Gadgets Store',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'HueDev - The premier modern tech, smartphones, computers, and electronics store.' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Noto+Sans+Lao:wght@300;400;500;600;700;800&display=swap'
        }
      ]
    }
  },
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              primary: '#4F46E5', // Modern Electric Indigo
              secondary: '#0EA5E9', // Sky Cyan
              accent: '#8B5CF6', // Vivid Violet
              info: '#06B6D4',
              success: '#10B981', // Emerald
              warning: '#F59E0B', // Amber
              error: '#EF4444', // Red
              surface: '#FFFFFF',
              background: '#F8FAFC',
            }
          }
        }
      }
    }
  },
  devServer: {
    port: 5000
  }
})