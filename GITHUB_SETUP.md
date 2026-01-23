# GitHub Setup Instructions

## After creating your GitHub repository:

1. **Add the remote repository** (replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repository name):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   ```

2. **Rename branch to main** (if needed):
   ```bash
   git branch -M main
   ```

3. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

## Example:
If your GitHub username is `blue201229` and you name the repo `portfolio`:
```bash
git remote add origin https://github.com/blue201229/portfolio.git
git branch -M main
git push -u origin main
```

## For future updates:
```bash
git add .
git commit -m "Your commit message"
git push
```
