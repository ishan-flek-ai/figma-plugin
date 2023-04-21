import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

const config = defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  return {
    plugins: [reactPlugin(), viteSingleFile()],
    build: {
      outDir: 'plugin/ui',
      minify: !isDev,
      watch: isDev ? {} : null,
      sourcemap: isDev,
      cssCodeSplit: false,
      assetsInlineLimit: 100000000,
      rollupOptions: {
        output: {
          // Add rollup output options here if required
        },
      },
    },
  }
})

export default config
