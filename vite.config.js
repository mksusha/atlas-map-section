import { defineConfig } from "vite";

export default defineConfig({
    root: "./",
    build: {
        outDir: "dist",
        rollupOptions: {
            input: [
                "index.html",
                "contacts.html",

                "support.html",
                "services.html",
                "solutions.html",
            ],
        },
    },
    css: {
        devSourcemap: true,
    },
});
