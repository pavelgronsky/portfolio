import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import env from 'vite-plugin-env-compatible'
import svgr from 'vite-plugin-svgr'

export const config = {
    base: '/',
    build: {
        outDir: 'build',
        sourcemap: true,
    },
    optimizeDeps: {
    },
    server: {
        open: true,
        port: 3000,
        hmr: true,
    },
    plugins: [
        react(),
        tsconfigPaths(),
        svgr(),
        env({
            prefix: 'REACT_APP_',
        }),
    ],
    preview: {
        port: 8080,
    },
}

// https://vitejs.dev/config/
export default defineConfig(config)
