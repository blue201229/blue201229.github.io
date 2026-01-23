# Deployment Instructions for GitHub Pages

## The Problem
GitHub Pages was trying to serve raw source files (`src/main.jsx`) instead of the built production files. Vite needs to build the project first.

## Solution Applied

1. **Updated `vite.config.js`** - Added base path configuration for GitHub Pages
2. **Created GitHub Actions workflow** - Automatic deployment on push to main branch
3. **Fixed favicon reference** - Removed vite.svg dependency

## Steps to Deploy

### Option 1: Automatic Deployment (Recommended)
The GitHub Actions workflow will automatically deploy when you push to the `main` branch.

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - Save

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Wait for deployment:**
   - Go to the "Actions" tab in your repository
   - Watch the workflow run
   - Once complete, your site will be available at:
     - `https://blue201229.github.io/portfolio/` (if repo name is "portfolio")
     - Or `https://blue201229.github.io/` (if repo name is "username.github.io")

### Option 2: Manual Deployment

If you prefer manual deployment:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```
   
   Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
   
   Then run:
   ```bash
   npm run deploy
   ```

## Important Notes

- If your repository name is NOT `username.github.io`, you need to update the base path in `vite.config.js`
- The base path should match your repository name: `base: '/your-repo-name/'`
- After deployment, wait a few minutes for GitHub Pages to update

## Troubleshooting

If you still see 404 errors:
1. Check that GitHub Pages is enabled in repository settings
2. Verify the base path in `vite.config.js` matches your repo name
3. Clear browser cache and try again
4. Check the Actions tab for any build errors
