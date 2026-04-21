# Pre-Deployment Checklist

## Before Deploying

### Code Quality
- [ ] Run `npm run build` locally - no errors
- [ ] Run `npm run preview` - site works correctly
- [ ] Test all animations and interactions
- [ ] Check console for errors (F12)
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)

### Content
- [ ] Update company name/branding
- [ ] Update contact email
- [ ] Update social media links
- [ ] Update project descriptions
- [ ] Update team/stats information
- [ ] Verify all links work

### Performance
- [ ] Check Lighthouse score (should be 90+)
- [ ] Test on slow 3G connection
- [ ] Verify images are optimized
- [ ] Check bundle size: `npm run build` output

### SEO
- [ ] Update `<title>` in index.html
- [ ] Add meta description
- [ ] Add Open Graph tags (optional)
- [ ] Create sitemap.xml (optional)
- [ ] Add robots.txt (optional)

### Security
- [ ] No API keys in code
- [ ] No sensitive data in components
- [ ] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] No console.log statements in production

### Configuration
- [ ] `vercel.json` is in root directory
- [ ] `package.json` has correct build script
- [ ] All dependencies are in `package.json`
- [ ] `.gitignore` excludes `node_modules` and `dist`

### Git
- [ ] All changes committed
- [ ] Branch is up to date with main
- [ ] No merge conflicts
- [ ] Meaningful commit messages

## Deployment Steps

1. **Local Testing**
   ```bash
   npm run build
   npm run preview
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

3. **Deploy to Vercel**
   - Connect GitHub repo
   - Select `forma-studio` folder
   - Click Deploy

4. **Post-Deployment**
   - [ ] Visit deployed URL
   - [ ] Test all pages and interactions
   - [ ] Check mobile responsiveness
   - [ ] Verify animations work
   - [ ] Test contact form (if applicable)
   - [ ] Check console for errors
   - [ ] Test on different browsers

## After Deployment

### Monitoring
- [ ] Set up analytics (Google Analytics, Vercel Analytics)
- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Set up uptime monitoring (optional)

### Maintenance
- [ ] Plan regular content updates
- [ ] Monitor for broken links
- [ ] Keep dependencies updated
- [ ] Regular backups (if self-hosted)

### Optimization
- [ ] Collect user feedback
- [ ] A/B test if applicable
- [ ] Optimize based on analytics
- [ ] Update content regularly

## Rollback Plan

If something goes wrong:
1. Go to Vercel Deployments
2. Find previous working deployment
3. Click "Redeploy"
4. Site will be restored to previous version

## Common Issues

### 404 Errors
- Check `vercel.json` rewrites configuration
- Ensure `index.html` is in root directory
- Verify build output includes all files

### Styles Not Loading
- Check CSS import in `main.jsx`
- Verify CSS file path is correct
- Check browser console for 404 errors

### Animations Not Working
- Verify GSAP is installed: `npm list gsap`
- Check browser console for JavaScript errors
- Test locally with `npm run preview`

### Build Fails
- Check `npm run build` output locally
- Verify all imports are correct
- Check for missing dependencies
- Review Vercel build logs

## Support

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev
- GSAP Docs: https://gsap.com/docs
