// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'rolldown-vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import CopyPlugin from 'vite-copy-plugin'
import replace from '@rollup/plugin-replace'

export default defineConfig(({ mode }) => {
  return {
    // root: "livedemo",
    resolve: {
      alias: {
        zlib: '@jspm/core/nodelibs/zlib'
      }
    },
    plugins: [
      replace({
        preventAssignment: false,
        include: ['node_modules/wavedrom/**/*.js'],
        values: {
          eval: 'window.eval'
        }
      }),
      nodePolyfills(),
      CopyPlugin([{ from: 'dist', to: 'docs/dist' }])
    ],
    build: {
      // target: 'ESNext',
      // outDir: 'dist',
      sourcemap: true,
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'imark',
        // the proper extensions will be added
        fileName: 'imark'
      },
      minify: mode === 'dev' ? false : undefined,
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vite', 'typescript'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            imark: 'imark'
          }
        }
      }
    },
    experimental: {
      enableNativePlugin: true
    }
  }
})
