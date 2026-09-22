# DevProject Extension

## Build the extensions

Build either browser target from the `devproject` directory:

```bash
npm run build:chrome
npm run build:opera
```

The unpacked extensions are written to `dist/chrome` and `dist/opera`.

## Load the side panel in Chrome

1. Build the Chrome extension:

   ```bash
   npm run build:chrome
   ```

2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the `devproject/dist/chrome` folder.
5. Pin **DevProject**, then click its toolbar icon. The side panel should open.

After changing the source, run `npm run build:chrome`, return to
`chrome://extensions`, click **Reload** on DevProject, and click the toolbar
icon again. Chrome loads the built extension from `dist/chrome`, not the project root.

## Checks

```bash
npm run lint
npm run build:chrome
npm run build:opera
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
