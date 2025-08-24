import { defineConfig } from "vite";
export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      external: (id) => {
        const externals = [
          "fsevents",
          "module",
          "fs",
          "path",
          "os",
          "assert",
          "util",
          "url",
          "process",
          "v8",
          "tty",
          "events",
          "stream",
          "zlib",
          "child_process",
          "readline",
          "http",
          "https",
          "http2",
          "dns",
          "buffer",
          "crypto",
          "perf_hooks",
          "vm",
          "net",
          "querystring",
        ];
        return externals.some(
          (mod) =>
            id === mod ||
            id === `node:${mod}` ||
            id.startsWith(`${mod}/`) ||
            id.startsWith(`node:${mod}/`)
        );
      },
    },
  },
});
