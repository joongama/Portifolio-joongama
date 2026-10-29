import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// `npm run build`        → site estático em dist/ (GitHub Pages, Vercel, Netlify)
// `npm run build:single` → um único HTML autocontido em dist-single/ (pré-visualização)
export default defineConfig(({ mode }) => ({
  // O site fica em https://joongama.github.io/Portifolio-joongama/
  // O valor precisa ser igual ao nome do repositório (maiúsculas e minúsculas contam).
  base: mode === "single" ? "/" : "/Portifolio-joongama/",
  plugins: mode === "single" ? [react(), viteSingleFile()] : [react()],
  build: {
    outDir: mode === "single" ? "dist-single" : "dist",
    assetsInlineLimit: mode === "single" ? 100_000_000 : 4096,
  },
}));
