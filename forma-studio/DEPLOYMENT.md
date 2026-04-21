# Deployment Guide

## Vercel Deployment

### Prerequisites
- GitHub account with the repository pushed
- Vercel account (free tier works)

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `forma-studio` folder as root directory

3. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Framework: Vite (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

### Troubleshooting

**404 Error on Page Refresh**
- Vercel should auto-detect Vite and handle SPA routing
- If not, the `vercel.json` file handles rewrites
- Ensure `vercel.json` is in the root directory

**Build Fails**
- Check that `package.json` has all dependencies
- Verify `npm run build` works locally: `npm run build && npm run preview`
- Check build logs in Vercel dashboard

**Styles Not Loading**
- Ensure `src/styles/global.css` is imported in `src/main.jsx`
- Check that CSS file path is correct

## Other Platforms

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### GitHub Pages
1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/forma-studio"
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run: `npm run deploy`

### Self-Hosted (Node.js)
1. Build: `npm run build`
2. Upload `dist` folder to server
3. Serve with any static file server:
   ```bash
   npx serve dist
   ```

## Environment Variables

If you need environment variables:

1. Create `.env.local` (not committed):
   ```
   VITE_API_URL=https://api.example.com
   ```

2. Use in code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. In Vercel dashboard:
   - Go to Settings → Environment Variables
   - Add your variables
   - Redeploy

## Performance Tips

- Build is optimized by default with Vite
- GSAP animations are GPU-accelerated
- SVGs are lightweight
- Consider adding image optimization for real photos

## Custom Domain

### Vercel
1. Go to project Settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel provides instructions)

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

## SSL/HTTPS

- Vercel: Automatic (free)
- Netlify: Automatic (free)
- Self-hosted: Use Let's Encrypt (free)

## Monitoring

- Vercel Analytics: Built-in
- Netlify Analytics: Built-in
- Custom: Use Google Analytics, Sentry, etc.

## Rollback

### Vercel
- Go to Deployments
- Click on previous deployment
- Click "Redeploy"

### Netlify
- Go to Deploys
- Click on previous deploy
- Click "Publish deploy"
