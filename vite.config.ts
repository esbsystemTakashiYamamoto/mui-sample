import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3002,
    host: true,
  },
  base: "/mui-sample/", // 👈 リポジトリ名
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
