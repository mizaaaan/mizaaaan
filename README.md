# Mizan — Portfolio Website

A premium, dark-themed portfolio site built with React (Vite), Tailwind CSS v4, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

- **Netlify**: drag the `dist/` folder into Netlify, or connect the GitHub repo (build command `npm run build`, publish directory `dist`).
- **GitHub Pages**: push this repo to GitHub, then use a GitHub Action or `gh-pages` package to publish `dist/`.
- **Vercel**: import the repo, framework preset "Vite", it will auto-detect the build command.

## Notes

- Replace the placeholder portrait in `src/components/Hero.jsx` and the project images in `src/components/RecentWorks.jsx` with your own.
- Update the email address in `src/components/Footer.jsx`.
- Colors and fonts live in `src/index.css` under the `@theme` block and the CSS variables — change the accent `#00df8f` there if you want a different accent color.
