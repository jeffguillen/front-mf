import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),

    federation({
          name: 'admin',
          filename:'remoteEntry.js',
          exposes:{},
          remotes:{
            login: 'http://localhost:3001/assets/remoteEntry.js',
            home: 'http://localhost:3002/assets/remoteEntry.js'
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
