/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import {createVuetify} from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#008F39',
          secondary: '#FFD700',
          accent: '#006400',
          background: '#FFFFFF',
          surface: '#FFFFFF',
          error: '#B00020',
          info: '#2196F3',
          success: '#008F39',
          warning: '#FFD700',
          text: '#4A2E00',
          card: '#FFFFFF',
          border: '#4A2E00',
          shadow: '#4A2E00',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#00A650',
          secondary: '#FFD700',
          accent: '#008F39',
          background: '#002B16',
          surface: '#242424',
          error: '#CF6679',
          info: '#64B5F6',
          success: '#00A650',
          warning: '#FFC107',
          text: '#FFD700',
          card: '#242424',
          border: '#4A2E00',
          shadow: '#000000',
        },
      },
    }
  },
})
