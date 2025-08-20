import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(), 
    react()
  ],
  build: {
    outDir: "dist", 
    emptyOutDir: true,
    // 기본 CSS 인라인화만
    cssCodeSplit: false,
    assetsInlineLimit: 20480 // 20KB로 증가
  }
});