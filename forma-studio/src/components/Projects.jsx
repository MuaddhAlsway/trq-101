import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectSVG1 = () => (
  <svg viewBox="0 0 800 900" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="800" height="900" fill="#1a1814" />
    <rect x="100" y="100" width="600" height="700" fill="#1e1c18" />
    {[200, 350, 500, 650].map(y => <rect key={y} x="100" y={y} width="600" height="14" fill="#2a2824" />)}
    {[[130, 140, 80, 38], [280, 140, 80, 38], [430, 140, 80, 38], [580, 140, 80, 38], [130, 260, 80, 38], [430, 260, 80, 38], [130, 410, 80, 38], [280, 410, 80, 38], [580, 410, 80, 38]].map(([x, y, w, h], i) => (
      <rect key={i} x={x} y={y} width={w} height={h} fill="#8090a0" opacity="0.3" />
    ))}
    <rect x="0" y="855" width="800" height="45" fill="#3a3530" />
  </svg>
);

const ProjectSVG2 = () => (
  <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="800" height="450" fill="#d8d0c0" />
    <rect x="0" y="0" width="800" height="195" fill="#ccc6b8" />
    <rect x="50" y="195" width="700" height="210" fill="#ddd8cc" />
    <rect x="50" y="147" width="700" height="50" fill="#d0cabf" />
    <rect x="18" y="138" width="764" height="12" fill="#c0bab0" />
    <rect x="200" y="152" width="400" height="198" fill="#a0b2c4" opacity="0.42" />
    <line x1="400" y1="152" x2="400" y2="350" stroke="#90a0b2" strokeWidth="2.5" />
    <rect x="160" y="360" width="480" height="28" fill="#70909e" opacity="0.28" rx="2" />
    <rect x="280" y="350" width="10" height="50" fill="#b0aaa0" />
    <rect x="510" y="350" width="10" height="50" fill="#b0aaa0" />
    <rect x="672" y="130" width="3" height="65" fill="#8a8478" />
    <ellipse cx="673" cy="118" rx="17" ry="20" fill="#9a9490" opacity="0.55" />
  </svg>
);

const ProjectSVG3 = () => (
  <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="800" height="450" fill="#0a0f14" />
    <rect x="0" y="0" width="800" height="100" fill="#08090e" />
    <rect x="100" y="100" width="600" height="320" fill="#131820" />
    {[[130, 130, 120, 80, 0.38], [130, 240, 120, 80, 0.28], [340, 130, 120, 190, 0.33], [550, 130, 120, 80, 0.38], [550, 240, 120, 80, 0.24]].map(([x, y, w, h, o], i) => (
      <rect key={i} x={x} y={y} width={w} height={h} fill="#f0d870" opacity={o} />
    ))}
    {[[720, 38, 2, 0.5], [650, 22, 1.5, 0.4], [550, 58, 1, 0.32], [195, 28, 1.5, 0.4], [98, 52, 1, 0.3]].map(([cx, cy, r, o], i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="white" opacity={o} />
    ))}
    <rect x="0" y="418" width="800" height="32" fill="#161c24" opacity="0.85" />
  </svg>
);

export const Projects = () => {
  const sec = useRef();
  const tag = useRef();
  const pw = [useRef(), useRef()];
  const covers = [useRef(), useRef(), useRef()];
  const items = [useRef(), useRef(), useRef()];

  const projs = [
    { n: '01', t: 'The Monolith', l: 'Oslo, Norway — 2023', svg: <ProjectSVG1 /> },
    { n: '02', t: 'Villa Silencio', l: 'Mallorca, Spain — 2022', svg: <ProjectSVG2 /> },
    { n: '03', t: 'Museum of Light', l: 'Tokyo, Japan — 2022', svg: <ProjectSVG3 /> }
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sec.current,
      start: 'top 72%',
      onEnter: () => {
        gsap.to(tag.current, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' });
        gsap.to(pw.map(r => r.current), { y: '0%', duration: 1.7, ease: 'power4.out', stagger: 0.14, delay: 0.2 });
        covers.forEach((c, i) => gsap.to(c.current, { scaleX: 0, duration: 1.9, ease: 'power4.inOut', delay: 0.4 + i * 0.18 }));
        gsap.to(items.map(r => r.current), { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', stagger: 0.16, delay: 0.3 });
      }
    });
  }, []);

  return (
    <section className="projects" ref={sec}>
      <div className="proj-head">
        <div className="proj-tag" ref={tag}>Selected Work</div>
        <h2 className="proj-h2">
          <span className="proj-line"><span className="proj-word" ref={pw[0]}>Featured</span></span>
          <span className="proj-line"><span className="proj-word" ref={pw[1]}>Projects</span></span>
        </h2>
      </div>
      <div className="proj-grid">
        {projs.map((p, i) => (
          <div className="proj-item proj-reveal" ref={items[i]} key={i}>
            <div className="proj-img-wrap">
              <div ref={covers[i]} style={{ position: 'absolute', inset: 0, zIndex: 2, background: '#080807', transformOrigin: 'left' }} />
              <div className="proj-img">{p.svg}</div>
            </div>
            <div className="proj-veil" />
            <div className="proj-meta">
              <div className="proj-n">{p.n}</div>
              <div className="proj-title">{p.t}</div>
              <div className="proj-sub">{p.l}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
