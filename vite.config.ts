import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const removeDataTestAttrs = (node) => {
  if (node.type === 1) {
    node.props = node.props.filter(prop => prop.type === 6 ? prop.name !== 'data-cy' : true)
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        nodeTransforms: process.env.NODE_ENV === 'production' ? [removeDataTestAttrs] : []
      }
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
