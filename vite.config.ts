import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/components/index.ts', // Punto de entrada
      name: 'MyReactLibrary',            // Nombre de la librería
      fileName: (format) => `my-react-library.${format}.js`, // Nombre del archivo de salida
    },
    rollupOptions: {
      // Excluir dependencias externas
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
