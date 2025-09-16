import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        post1: resolve(__dirname, 'blog/blog0.html'),
        post2: resolve(__dirname, 'blog/blog1.html'),
        post3: resolve(__dirname, 'blog/blog2.html'),
        post4: resolve(__dirname, 'blog/blog3.html'),
      },
    },
  },
})
