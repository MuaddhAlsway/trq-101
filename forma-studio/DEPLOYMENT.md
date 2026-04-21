# Vercel Deployment Guide

## Quick Deploy

### Option 1: Deploy with Git (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/forma-studio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select your `forma-studio` repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!** Your site is live at `https://forma-studio.vercel.app`

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** and confirm deployment

## Environment Variables

If you need environment variables (API keys, etc.):

1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add your variables
4. Redeploy

Example `.env.local` (for local development):
```
VITE_API_URL=https://api.example.com
```

Use in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## Custom Domain

1. Go to Vercel project → Settings → Domains
2. Add your custom domain
3. Update DNS records at your domain provider
4. Vercel provides DNS instructions

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` → automatic deployment
- Pull requests → preview deployments
- Rollback to previous versions anytime

## Build & Performance

Vercel automatically:
- Optimizes images
- Minifies code
- Caches assets
- Serves from global CDN
- Provides analytics

## Troubleshooting

**Build fails?**
- Check `npm run build` works locally
- Verify all dependencies in `package.json`
- Check Node version (Vercel uses Node 18+)

**Site shows old version?**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Check deployment status in Vercel dashboard

**Need to rebuild?**
- Vercel dashboard → Deployments → Redeploy

## Monitoring

Vercel provides:
- Real-time logs
- Performance metrics
- Error tracking
- Analytics dashboard

Access via: Project → Analytics

## Cost

- **Hobby plan**: Free (perfect for this project)
- **Pro plan**: $20/month (for teams/advanced features)

## Next Steps

1. Deploy to Vercel
2. Share your live URL
3. Monitor performance in Vercel dashboard
4. Update content as needed (auto-deploys on push)

## Useful Links

- [Vercel Docs](https://vercel.com/docs)
- [Vite on Vercel](https://vercel.com/guides/nextjs-now-supports-vite)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
