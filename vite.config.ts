// @ts-nocheck
import { fileURLToPath, URL } from 'node:url'
import istanbul from 'vite-plugin-istanbul'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


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
  }),
  istanbul({
    include: 'src/*',
    exclude: ['node_modules', 'test/'],
    extension: ['.js', '.ts', '.vue'],
    cypress: true
  })
],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
