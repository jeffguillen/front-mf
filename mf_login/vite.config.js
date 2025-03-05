import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'login',
      filename:'remoteEntry.js',
      exposes:{
        './Login': './src/components/Login'
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
