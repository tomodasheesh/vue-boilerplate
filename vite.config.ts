import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),
    AutoImport({
      dts: 'src/types/imports.d.ts',
      imports: ['vue', 'vue-router']
    }),
    Components({
      dts: 'src/types/components.d.ts',
      dirs: ['./src/components']
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Vue Vite Qauasar TS',
        short_name: 'VVQT',
        description: 'Boilerplate',
        start_url: '/home',
        theme_color: '#9B0035',
        background_color: '#0f0f0f',
        display: 'standalone'
        // icons: [
        //   {
        //     src: 'android-chrome-192x192.png',
        //     sizes: '192x192',
        //     type: 'image/png'
        //   },
        //   {
        //     src: 'android-chrome-512x512.png',
        //     sizes: '512x512',
        //     type: 'image/png'
        //   }
        // ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
