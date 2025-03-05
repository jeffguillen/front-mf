import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'componentes',
      filename:'remoteEntry.js',
      exposes:{
        './Body': './src/components/Body',
        './Footer': './src/components/Footer',
        './Header': './src/components/Header',
        './Nav': './src/components/Nav',
      },
      remotes:{},
      shared: ['react', 'react-dom']
    })
  ],
  build:{
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit:false
  }

})