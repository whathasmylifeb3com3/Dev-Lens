import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const browsers = {
  chrome: {
    manifest: 'manifest.chrome.json',
    background: 'chrome/background.js',
  },
  opera: {
    manifest: 'manifest.opera.json',
    background: 'opera/background.js',
  },
}

function extensionAssets(browser) {
  const publicDirectory = resolve(import.meta.dirname, 'public')
  const assets = [
    { source: browsers[browser].manifest, destination: 'manifest.json' },
    { source: browsers[browser].background, destination: browsers[browser].background },
    { source: 'content/content.js', destination: 'content/content.js' },
    { source: 'favicon.svg', destination: 'favicon.svg' },
    { source: 'icons.svg', destination: 'icons.svg' },
  ]

  return {
    name: `extension-assets-${browser}`,
    generateBundle() {
      for (const asset of assets) {
        this.emitFile({
          type: 'asset',
          fileName: asset.destination,
          source: readFileSync(resolve(publicDirectory, asset.source)),
        })
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const browser = mode in browsers ? mode : null

  if (!browser) {
    throw new Error(`Unsupported browser mode: ${mode}. Use "chrome" or "opera".`)
  }

  return {
    plugins: [react(), extensionAssets(browser)],
    publicDir: false,
    build: {
      outDir: `dist/${browser}`,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(import.meta.dirname, 'index.html'),
          sidepanel: resolve(import.meta.dirname, 'sidepanel.html'),
        },
      },
    },
  }
})