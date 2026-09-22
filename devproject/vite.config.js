import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { copyFileSync, mkdirSync } from "node:fs";

export default defineConfig(({ mode }) => {
  const isOpera = mode === "opera";

  const outDir = isOpera ? "dist-opera" : "dist-chrome";

  return {
    plugins: [
      react(),
      {
        name: "copy-extension-files",

        closeBundle() {
          const browser = isOpera ? "opera" : "chrome";

          mkdirSync(`${outDir}/${browser}`, {
            recursive: true
          });

          copyFileSync(
            `public/${browser}/background.js`,
            `${outDir}/${browser}/background.js`
          );

          copyFileSync(
            `public/content.js`,
            `${outDir}/content.js`
          );

          copyFileSync(
            `public/manifest.${browser}.json`,
            `${outDir}/manifest.json`
          );
        }
      }
    ],

    build: {
      outDir,

      rollupOptions: {
        input: {
          main: resolve(
            import.meta.dirname,
            "index.html"
          ),

          sidepanel: resolve(
            import.meta.dirname,
            "sidepanel.html"
          )
        }
      }
    }
  };
});