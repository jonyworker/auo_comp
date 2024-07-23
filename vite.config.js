import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    // 新增defineModel
    plugins: [
        vue({
            script: {
                defineModel: true,
            },
        }),
    ],
});
