# GitHub Acceleration Frontend Test

Minimal Vite React project for validating GitHub source retrieval and Alibaba Cloud ESA Pages builds.

## Local CLI

```bash
nvm use
npm install
npm run dev
```

## Production build

```bash
npm run typecheck
npm run build
```

The build output is written to `dist`. ESA Pages reads `esa.jsonc` for install, build and static asset settings.
