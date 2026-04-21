# FORMA — Architecture Studio

A modern React + GSAP website for an architecture studio featuring cinematic animations, scroll-triggered effects, and a premium design aesthetic.

## Project Structure

```
forma-studio/
├── src/
│   ├── components/
│   │   ├── Cursor.jsx          # Custom cursor with hover effects
│   │   ├── Loader.jsx          # Cinematic page loader
│   │   ├── Nav.jsx             # Navigation bar
│   │   ├── Hero.jsx            # Hero section with parallax
│   │   ├── Marquee.jsx         # Infinite scrolling marquee
│   │   ├── Vision.jsx          # Studio vision section
│   │   ├── Philosophy.jsx      # Pinned scroll philosophy section
│   │   ├── Projects.jsx        # Featured projects grid
│   │   ├── Stats.jsx           # Statistics section
│   │   ├── Process.jsx         # Design process steps
│   │   ├── Gallery.jsx         # Material studies gallery
│   │   ├── Contact.jsx         # Contact section
│   │   ├── Footer.jsx          # Footer
│   │   ├── SVGs.jsx            # Reusable SVG components
│   │   └── index.js            # Component exports
│   ├── styles/
│   │   └── global.css          # Global styles and animations
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd forma-studio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Deploy to Vercel

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick deploy:**
1. Push to GitHub
2. Connect repo to [vercel.com](https://vercel.com)
3. Auto-deploys on every push

Your site will be live at `https://forma-studio.vercel.app`

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **GSAP 3.12** - Animation library
- **ScrollTrigger** - Scroll-based animations
- **CSS3** - Styling and animations

## Key Features

- Cinematic loader animation
- Custom cursor with hover states
- Parallax scrolling effects
- Pinned scroll sections
- Smooth word reveal animations
- Responsive design
- Material studies gallery
- Magnetic button effects

## Animation Highlights

- **Hero Section**: Parallax background with staggered text reveals
- **Vision Section**: Curtain reveal with image scale animation
- **Philosophy**: Pinned scroll with phase transitions
- **Projects**: Grid layout with hover effects and cover reveals
- **Gallery**: Horizontal scroll with material studies
- **Contact**: Magnetic button with mouse tracking

## Customization

### Colors
Edit the CSS variables in `src/styles/global.css`:
```css
:root {
  --black: #080807;
  --white: #f7f4ef;
  --cream: #eae5db;
  --stone: #bfb9aa;
  --mid: #7a7468;
  --dark: #161410;
  --accent: #c8a96e;
}
```

### Content
Update component content directly in the component files. Each section is self-contained and easy to modify.

### Animations
GSAP animations are configured in each component's `useEffect` hook. Adjust timing, easing, and effects as needed.

## Performance Tips

- GSAP animations are GPU-accelerated
- ScrollTrigger uses efficient scroll listeners
- Images are optimized SVGs
- CSS animations use `will-change` for performance

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

© 2024 Forma Architecture Studio. All rights reserved.
