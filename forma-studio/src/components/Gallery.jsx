import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MaterialThumb = ({ material }) => {
  const { l, c1, c2, type } = material;

  return (
    <div className="gal-thumb">
      <svg viewBox="0 0 370 490" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <rect width="370" height="490" fill={c1} />
        {type === 'marble' && (
          <>
            <rect x="0" y="0" width="185" height="490" fill={c2} />
            <path d="M 30 50 Q 120 150 180 300 Q 200 380 250 480" stroke="#c8c2b4" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M 80 0 Q 150 100 200 250 Q 230 350 280 490" stroke="#bfb9b0" strokeWidth="1" fill="none" opacity="0.4" />
          </>
        )}
        {type === 'wood' && [50, 80, 110, 140, 170, 200, 240, 280, 320, 360, 400, 440, 470].map(y => (
          <path key={y} d={`M 0 ${y} Q 185 ${y - 3} 370 ${y + 2}`} stroke="#5a4a38" strokeWidth={y % 100 === 80 ? 2 : 1} fill="none" />
        ))}
        {type === 'grid' && (
          <>
            {[0, 93, 185, 277].map(x => <line key={x} x1={x} y1="0" x2={x} y2="490" stroke="#3a3530" strokeWidth="0.8" opacity="0.5" />)}
            {[0, 98, 196, 294, 392, 490].map(y => <line key={y} x1="0" y1={y} x2="370" y2={y} stroke="#3a3530" strokeWidth="0.8" opacity="0.5" />)}
          </>
        )}
        {type === 'glass' && (
          <>
            <rect x="0" y="0" width="185" height="490" fill="white" opacity="0.05" />
            <line x1="123" y1="0" x2="123" y2="490" stroke="white" strokeWidth="0.8" opacity="0.28" />
            <line x1="246" y1="0" x2="246" y2="490" stroke="white" strokeWidth="0.8" opacity="0.28" />
            <line x1="0" y1="163" x2="370" y2="163" stroke="white" strokeWidth="0.8" opacity="0.28" />
            <line x1="0" y1="326" x2="370" y2="326" stroke="white" strokeWidth="0.8" opacity="0.28" />
            <rect x="18" y="18" width="55" height="190" fill="white" opacity="0.07" rx="2" />
          </>
        )}
        {type === 'brick' && [0, 50, 100, 150, 200, 250, 300, 350, 400, 450].map((y, j) => (
          <rect key={y} x={j % 2 === 0 ? 0 : 22} y={y} width={j % 2 === 0 ? 370 : 326} height="48" fill={j % 2 === 0 ? c2 : c1} opacity="0.9" />
        ))}
        {type === 'steel' && (
          <>
            {[0, 74, 148, 222, 296, 370].map(x => <line key={x} x1={x} y1="0" x2={x} y2="490" stroke="#6a6a70" strokeWidth="1.5" opacity="0.5" />)}
            {[0, 82, 164, 245, 327, 409, 490].map(y => <line key={y} x1="0" y1={y} x2="370" y2={y} stroke="#6a6a70" strokeWidth="1" opacity="0.4" />)}
            <rect x="0" y="0" width="370" height="490" fill="white" opacity="0.04" />
          </>
        )}
      </svg>
      <div className="gal-lbl">{l}</div>
    </div>
  );
};

export const Gallery = () => {
  const sec = useRef();
  const tag = useRef();
  const track = useRef();

  const materials = [
    { l: 'Concrete Texture', c1: '#2a2520', c2: '#1e1c18', type: 'grid' },
    { l: 'Calacatta Marble', c1: '#ede9e0', c2: '#e0d8c8', type: 'marble' },
    { l: 'Aged Teak', c1: '#4a3a2a', c2: '#5a4a38', type: 'wood' },
    { l: 'Structural Glass', c1: '#6a7a8a', c2: '#7a8a9a', type: 'glass' },
    { l: 'Handmade Brick', c1: '#b89060', c2: '#c0a070', type: 'brick' },
    { l: 'Raw Steel', c1: '#4a4a50', c2: '#5a5a60', type: 'steel' }
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sec.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(tag.current, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' });
      }
    });

    gsap.to(track.current, {
      x: '-38%',
      ease: 'none',
      scrollTrigger: { trigger: sec.current, start: 'top bottom', end: 'bottom top', scrub: 1.8 }
    });
  }, []);

  return (
    <section className="gallery" ref={sec}>
      <div className="gal-tag" ref={tag}>Material Studies</div>
      <div className="gal-track" ref={track}>
        {materials.map((m, i) => (
          <MaterialThumb key={i} material={m} />
        ))}
      </div>
    </section>
  );
};
