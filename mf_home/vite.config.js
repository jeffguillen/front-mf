import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'home',
      filename:'remoteEntry.js',
      exposes:{
        './Home': './src/components/Home'
      },
      remotes:{
        componentes: 'http://localhost:3003/assets/remoteEntry.js'
      },
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
