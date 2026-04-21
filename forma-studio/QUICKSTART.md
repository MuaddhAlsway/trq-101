# Quick Start Guide

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

## Project Overview

This is a fully modular React project with the following structure:

### Components (`src/components/`)
Each component is self-contained and handles its own animations:

- **Cursor** - Custom cursor with hover effects
- **Loader** - Cinematic page load animation
- **Nav** - Navigation bar
- **Hero** - Hero section with parallax
- **Marquee** - Infinite scrolling text
- **Vision** - Studio vision with image reveal
- **Philosophy** - Pinned scroll section
- **Projects** - Project grid with hover effects
- **Stats** - Statistics display
- **Process** - 3-step process section
- **Gallery** - Material studies carousel
- **Contact** - Contact section with magnetic button
- **Footer** - Footer navigation

### Styles (`src/styles/`)
- **global.css** - All styling and animations

### Main Files
- **App.jsx** - Orchestrates all components
- **main.jsx** - React entry point

## Making Changes

### Edit Content
Open any component file and update the text/data directly. For example, to change project names, edit `src/components/Projects.jsx`.

### Modify Animations
GSAP animations are in each component's `useEffect` hook. Adjust timing, easing, or effects as needed.

### Change Colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --black: #080807;
  --white: #f7f4ef;
  --cream: #eae5db;
  /* ... etc */
}
```

## Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Need to clear cache?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. Customize the content in each component
2. Update colors and branding
3. Add your own project images/SVGs
4. Deploy to your hosting platform

Enjoy building!
