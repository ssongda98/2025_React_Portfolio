import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: "public_html", // ⬅️ Hostinger에 바로 업로드 가능한 경로
    emptyOutDir: true       // ⬅️ 기존 내용 비우고 새로 생성
  }
});
