# Quick Fix for GitHub Pages 404 Error

## The Problem
GitHub Pages is trying to serve `/src/main.jsx` (source files) instead of the built files. This happens when:
1. GitHub Pages is serving from a branch instead of the built `dist` folder
2. The base path doesn't match your repository name
3. GitHub Actions workflow hasn't run yet

## Solution Options

### Option 1: Use GitHub Actions (Recommended - Already Set Up)

1. **Go to your repository on GitHub**
2. **Settings → Pages**
3. **Under "Source"**, select **"GitHub Actions"** (NOT "Deploy from a branch")
4. **Save**

5. **Push the latest code:**
   ```bash
   git add .
   git commit -m "Update deployment config"
   git push origin main
   ```

6. **Check the Actions tab** - The workflow should run automatically and deploy

### Option 2: Manual Deployment with gh-pages

If GitHub Actions isn't working, use this method:

1. **Update the base path in `vite.config.js`** - Change `'portfolio'` to your actual repo name (line 6)

2. **Build and deploy:**
   ```bash
   npm run deploy
   ```

3. **Go to Settings → Pages** and set source to the `gh-pages` branch

### Option 3: Find Your Repository Name

To find your exact repository name:
1. Go to your GitHub repository
2. Look at the URL: `https://github.com/blue201229/REPO_NAME`
3. Update line 6 in `vite.config.js` with that name

**If your repo is named exactly `portfolio`:**
- The current config should work
- Just make sure GitHub Pages uses "GitHub Actions" as the source

**If your repo has a different name:**
- Update `vite.config.js` line 6: `const repoName = 'your-actual-repo-name'`
- Rebuild and redeploy

## Current Configuration

The base path is set to `/portfolio/` - if your repo has a different name, you MUST update it!

## After Fixing

1. The site should be accessible at: `https://blue201229.github.io/portfolio/` (or your repo name)
2. All assets will load correctly
3. No more 404 errors for `/src/main.jsx`
