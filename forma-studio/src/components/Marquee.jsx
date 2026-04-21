import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Marquee = () => {
  const trackRef = useRef();

  useEffect(() => {
    const el = trackRef.current;
    const w = el.scrollWidth / 2;
    gsap.to(el, {
      x: -w,
      duration: 38,
      ease: 'none',
      repeat: -1,
      modifiers: { x: x => parseFloat(x) % w + 'px' }
    });
  }, []);

  const items = ['Architecture', 'Interior Design', 'Urban Planning', 'Landscape Design', 'Spatial Curation', 'Material Studies'];

  return (
    <div className="marquee">
      <div className="marquee-inner" ref={trackRef}>
        {[...items, ...items, ...items].map((it, i) => (
          <span className="marquee-item" key={i}>
            {it}
            <span className="marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  );
};
