import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'

// https://vite.dev/config/
export default defineConfig({
    base: '/ui/',
    // build:
    // {
    //   assetsDir: "assets",
    // },
    server: {
        port: 5555,
        proxy: {
            '^/logout': 'http://localhost:8000/logout',
            '^/api/v3/.*': 'http://localhost:8000/',
            '^/api/v1/.*': 'http://localhost:8000/',
        },
    },
    build: {
        // rollupOptions: {
        //     output: {
        //         // dir: 'dist',
        //         entryFileNames: 'ui/js/[name]-[hash].js',
        //       chunkFileNames: 'ui/js/[name]-[hash].js',
        //         assetFileNames: 'ui/[name][extname]',
        //     },
        // },
    },
    plugins: [reactRouter(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
