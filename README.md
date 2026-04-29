<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Credencing: Visualizing & Minimizing Irrationality

This is a Vite/React app exported from Google AI Studio. It contains the interactive Credencing model and can be deployed to GitHub Pages with the included GitHub Actions workflow.

View your app in AI Studio: https://ai.studio/apps/5712911b-102e-4d58-9a53-08242bb341f3

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

The Vite base path is relative so the build can work during the transition from the GitHub Pages project URL to `https://credencing.com/`.

1. Publish this folder to GitHub as `philstilwell/Credencing`.
2. In the repository settings, go to **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`.

The included workflow builds `dist/` and deploys it to GitHub Pages.

## Public Assets

- Social preview image: `public/images/credencing-og.png`
- Search index: `public/search-index.json`
- Printable PDFs: `public/downloads/*.pdf`
- Custom domain checklist: `public/custom-domain-setup.md`

The custom domain should not be considered fully active until `credencing.com` DNS points at GitHub Pages and GitHub Pages reports HTTPS as available.
