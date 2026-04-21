import { useEffect } from 'react';
import gsap from 'gsap';

export const Cursor = () => {
  useEffect(() => {
    const cur = document.getElementById('cur');
    const ring = document.getElementById('cur-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      gsap.to(cur, { x: mx, y: my, duration: 0.08, ease: 'none' });
    });

    const raf = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(raf);
    };
    raf();

    const grow = () => {
      gsap.to(cur, { width: 58, height: 58, duration: 0.45, ease: 'power2.out' });
      gsap.to(ring, { opacity: 0, duration: 0.3 });
    };

    const shrink = () => {
      gsap.to(cur, { width: 9, height: 9, duration: 0.45, ease: 'power2.out' });
      gsap.to(ring, { opacity: 1, duration: 0.3 });
    };

    document.querySelectorAll('a,button,.proj-item,.gal-thumb').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });
  }, []);

  return null;
};
