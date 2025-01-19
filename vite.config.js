import { defineConfig } from "vite";
import clean from "vite-plugin-clean";

export default defineConfig({
    base: "./",
    build: {
        minify: false,
        sourcemap: true,
    },
    plugins: [
        clean({
        targets: ["../dist"],
        }),
    ],
    css: {
        minify: false,
        devSourcemap: true,
    },
});