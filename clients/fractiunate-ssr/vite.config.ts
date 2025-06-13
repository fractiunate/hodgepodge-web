import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path'

console.log('Resolving @ to:', path.resolve(__dirname, './app'));


export default defineConfig(({ isSsrBuild }) => ({
  build: {
    rollupOptions: isSsrBuild
      ? {
          input: "./server/app.ts",
        }
      : undefined,
  },
  resolve: {
    alias: {
       '~': path.resolve(__dirname, './'), // this should match your tsconfig
      '@': path.resolve(__dirname, './app'),
    },
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
}));
