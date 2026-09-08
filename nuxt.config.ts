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
        { name: 'description', content: 'HueDev - The premier modern tech, smartphones, and gadgets store.' }
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
            dark: false,
            colors: {
              primary: '#FF2A85', // Neon Hot Pink
              'primary-darken-1': '#DB2777',
              secondary: '#F472B6', // Soft Rose Pink
              accent: '#E879F9', // Vivid Fuchsia
              info: '#FB7185',
              success: '#10B981', // Emerald
              warning: '#F59E0B', // Amber
              error: '#FF4D6D', // Crimson Pink
              surface: '#FFFFFF', // Pure White Surface
              'surface-bright': '#FFFFFF',
              'surface-light': '#F8FAFC',
              'surface-variant': '#F1F5F9',
              background: '#FFFFFF', // Pure White Background
            }
          },
          dark: {
            dark: true,
            colors: {
              primary: '#FF2A85',
              'primary-darken-1': '#DB2777',
              secondary: '#F472B6',
              accent: '#E879F9',
              surface: '#121217',
              background: '#09090D',
            }
          }
        }
      }
    }
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000
  }
})