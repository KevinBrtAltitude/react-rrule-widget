import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/lib/index.ts"),
        name: "React RRule Widget",
        fileName: (format: string) => `react-rrule-widget.${format}.js`,
      },
      outDir: "dist",
    },
    resolve: {
      alias: {
        // Définissez des alias si nécessaire
        "react-rrule-widget": path.resolve(__dirname, "src/lib"),
      },
    },
    base: "./",
    root: command === "serve" ? path.resolve(__dirname, "src/sample") : "./",
  };
});
