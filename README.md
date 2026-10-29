# ajal333.github.io

My portfolio. Built with Astro, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

The page lives in `src/pages/index.astro`, the styles in `src/styles/global.css`, the head and SEO tags in `src/layouts/Base.astro`. `src/pages/og.astro` is the card that `public/og.png` was captured from.
