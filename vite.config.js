import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // 여기에 변수 파일을 등록하면 모든 vue 파일에서 import 없이 변수 사용 가능!
        additionalData: `@import "/src/assets/scss/variables.scss";`,
      },
    },
  },
});
