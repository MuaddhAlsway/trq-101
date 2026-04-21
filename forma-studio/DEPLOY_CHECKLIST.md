# Pre-Deployment Checklist

## Before Deploying to Vercel

### Code Quality
- [ ] Run `npm run build` locally - no errors
- [ ] Test site locally with `npm run dev`
- [ ] Check all links work
- [ ] Test animations in different browsers
- [ ] Mobile responsive check

### Content
- [ ] Update company info (if needed)
- [ ] Verify all project descriptions
- [ ] Check contact email is correct
- [ ] Update social media links
- [ ] Review all text for typos

### Performance
- [ ] Images optimized (SVGs are good)
- [ ] No console errors
- [ ] Animations smooth on slower devices
- [ ] Page loads quickly

### SEO & Meta
- [ ] Title tag updated: `FORMA — Architecture Studio`
- [ ] Meta description added (optional)
- [ ] Favicon set (optional)
- [ ] Open Graph tags (optional)

### Git Setup
- [ ] Initialize git: `git init`
- [ ] Create `.gitignore` ✓ (already done)
- [ ] Commit all files: `git add . && git commit -m "Initial commit"`
- [ ] Create GitHub repository
- [ ] Push to GitHub: `git push -u origin main`

### Vercel Setup
- [ ] Create Vercel account at [vercel.com](https://vercel.com)
- [ ] Connect GitHub account
- [ ] Import `forma-studio` repository
- [ ] Verify build settings (should auto-detect)
- [ ] Click "Deploy"

### Post-Deployment
- [ ] Visit live URL and test
- [ ] Check all animations work
- [ ] Test on mobile
- [ ] Share with team/client
- [ ] Monitor Vercel analytics

## Deployment Steps (Quick Reference)

```bash
# 1. Build locally to verify
npm run build

# 2. Initialize git
git init
git add .
git commit -m "Initial commit"

# 3. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/forma-studio.git
git push -u origin main

# 4. Deploy on Vercel
# - Go to vercel.com
# - Click "New Project"
# - Select your GitHub repo
# - Click "Deploy"
```

## After Deployment

### Monitor
- Check Vercel dashboard for errors
- Monitor performance metrics
- Review analytics

### Updates
- Make changes locally
- Commit and push to GitHub
- Vercel auto-deploys

### Custom Domain (Optional)
- Add domain in Vercel settings
- Update DNS records
- Wait for propagation (24-48 hours)

## Troubleshooting

**Build fails on Vercel?**
- Check Node version compatibility
- Verify all dependencies installed
- Review build logs in Vercel dashboard

**Site looks different on Vercel?**
- Clear browser cache
- Check environment variables
- Compare with local build

**Need to rollback?**
- Vercel dashboard → Deployments
- Click previous deployment
- Click "Redeploy"

## Support

- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
