import { defineConfig, loadEnv } from "vite";
import pkg from "./package.json";
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  

  return defineConfig({
    define: {
      'process.env': {}, // Define process.env para evitar el error
    },
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: "./src/main.ts",
        // the proper extensions will be added
        fileName: "index",
        name: pkg.name,
        
      },
      
      rollupOptions: {
        external: ["lit",   "@uxland/primary-shell"],
        output: {
          globals: {
            lit: "lit",
            "@uxland/primary-shell": "@uxland/primary-shell",
          },
          inlineDynamicImports: true, // Incluye todas las importaciones dinámicas en un solo archivo
          manualChunks: undefined, // Desactiva la fragmentación para generar un solo archivo
        }
      },
      minify: true,
      sourcemap: true,
    },
  });
};