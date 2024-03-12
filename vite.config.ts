import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/lib/index.ts"),
        name: "ReactRRuleWidget",
        formats: ["es", "cjs"],
        fileName: (format) => `react-rrule-widget.${format}.js`,
      },
      //outDir: "dist",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    base: "./",
    root: command === "serve" ? path.resolve(__dirname, "src/sample") : "./",
  };
});
