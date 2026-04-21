# Project Structure & Architecture

## Overview

FORMA is a modern React + GSAP website built with Vite. It's organized into modular, reusable components with centralized styling.

## Directory Layout

```
forma-studio/
├── src/
│   ├── components/              # React components
│   │   ├── Cursor.jsx          # Custom cursor logic
│   │   ├── Loader.jsx          # Page loader animation
│   │   ├── Nav.jsx             # Navigation
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Marquee.jsx         # Scrolling marquee
│   │   ├── Vision.jsx          # Vision section
│   │   ├── Philosophy.jsx      # Pinned scroll section
│   │   ├── Projects.jsx        # Projects grid
│   │   ├── Stats.jsx           # Statistics
│   │   ├── Process.jsx         # Process steps
│   │   ├── Gallery.jsx         # Material gallery
│   │   ├── Contact.jsx         # Contact section
│   │   ├── Footer.jsx          # Footer
│   │   ├── SVGs.jsx            # SVG components
│   │   └── index.js            # Barrel export
│   ├── styles/
│   │   └── global.css          # All CSS & animations
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   ├── App.css                 # (unused, can delete)
│   └── index.css               # (unused, can delete)
├── index.html                  # HTML template
├── vite.config.js              # Vite config
├── package.json                # Dependencies
├── README.md                   # Full documentation
├── QUICKSTART.md               # Quick start guide
└── PROJECT_STRUCTURE.md        # This file
```

## Component Architecture

### State Management
- Uses React hooks (`useState`, `useRef`, `useEffect`)
- No external state management needed
- Each component manages its own animations

### Animation Pattern
Each component follows this pattern:
```jsx
const Component = () => {
  const ref = useRef();
  
  useEffect(() => {
    // GSAP animations here
    gsap.to(ref.current, { /* animation */ });
  }, []);
  
  return <section ref={ref}>...</section>;
};
```

### Styling Approach
- Single `global.css` file with all styles
- CSS variables for theming
- BEM-like naming convention
- Animations use GSAP for complex effects, CSS for simple ones

## Key Technologies

| Technology | Purpose | Version |
|-----------|---------|---------|
| React | UI framework | 18 |
| Vite | Build tool | Latest |
| GSAP | Animations | 3.12+ |
| ScrollTrigger | Scroll animations | Plugin |
| CSS3 | Styling | Native |

## Component Breakdown

### Utility Components
- **Cursor** - Tracks mouse, grows on hover
- **Loader** - Animated page load screen

### Layout Components
- **Nav** - Fixed navigation bar
- **Hero** - Full-screen hero with parallax
- **Marquee** - Infinite scrolling text
- **Footer** - Footer with links

### Content Sections
- **Vision** - Studio vision with image reveal
- **Philosophy** - Pinned scroll with 3 phases
- **Projects** - 3-project grid with hover effects
- **Stats** - 4 statistics with counters
- **Process** - 3-step process breakdown
- **Gallery** - 6 material studies carousel
- **Contact** - CTA section with magnetic button

## Data Flow

```
App.jsx
├── Cursor (global)
├── Loader (conditional)
├── Nav (receives: visible)
├── Hero (receives: active)
├── Marquee
├── Vision
├── Philosophy
├── Projects
├── Stats
├── Process
├── Gallery
├── Contact
└── Footer
```

## Styling System

### CSS Variables (Theme)
```css
--black: #080807
--white: #f7f4ef
--cream: #eae5db
--stone: #bfb9aa
--mid: #7a7468
--dark: #161410
--accent: #c8a96e
--serif: 'Cormorant Garamond'
--sans: 'Helvetica Neue'
```

### Class Naming
- `.section-name` - Main sections
- `.section-element` - Child elements
- `.section-element-state` - State variants (e.g., `.pin-dot.on`)

## Animation Patterns

### Scroll Triggers
```jsx
ScrollTrigger.create({
  trigger: element,
  start: 'top 70%',
  onEnter: () => { /* animate */ }
});
```

### Staggered Animations
```jsx
gsap.to(elements, {
  opacity: 1,
  stagger: 0.15,
  duration: 1.3
});
```

### Parallax Effects
```jsx
gsap.to(element, {
  yPercent: -18,
  scrollTrigger: {
    trigger: '.hero',
    scrub: 2
  }
});
```

## Performance Considerations

1. **GPU Acceleration** - GSAP uses `transform` and `opacity`
2. **Will-change** - Applied to animated elements
3. **Lazy Loading** - ScrollTrigger only activates on view
4. **SVG Graphics** - Lightweight vector graphics
5. **CSS Animations** - Used for simple, repeating effects

## Customization Guide

### Add New Section
1. Create component in `src/components/NewSection.jsx`
2. Add to `src/components/index.js`
3. Import and add to `App.jsx`
4. Add styles to `src/styles/global.css`

### Modify Animations
- Edit `useEffect` in component
- Adjust GSAP timeline or ScrollTrigger settings
- Test in dev server with hot reload

### Change Theme
- Update CSS variables in `global.css`
- All colors will update automatically

## Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview  # Test build locally
```

### Deploy
- Build output: `dist/` directory
- Compatible with: Vercel, Netlify, GitHub Pages, etc.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Future Enhancements

- [ ] Add image optimization
- [ ] Implement lazy loading for images
- [ ] Add form validation for contact
- [ ] Mobile menu animation
- [ ] Dark mode toggle
- [ ] Accessibility improvements (ARIA labels)
- [ ] Performance monitoring
