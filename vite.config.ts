import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    base: "/",
    build: {
      chunkSizeWarningLimit: 2500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
              return "vendor-react";
            }
            if (id.includes("node_modules/framer-motion/")) {
              return "vendor-motion";
            }
            if (id.includes("node_modules/@radix-ui/")) {
              return "vendor-radix";
            }
          },
        },
      },
    },
  },
  nitro: true,
});

