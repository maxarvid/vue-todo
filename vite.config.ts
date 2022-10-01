// @ts-nocheck
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { NodeTransform } from '@vue/compiler-core'


const removeDataTestAttrs = (node) => {
  if (node.type === 1 /* NodeTypes.ELEMENT */) {
    node.props = node.props.filter(prop => prop.type === 6 /* NodeTypes.ATTRIBUTE */
      ? prop.name !== 'data-cy' : true)
  }
}

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
