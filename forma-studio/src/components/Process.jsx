import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Process = () => {
  const sec = useRef();
  const tagRow = useRef();
  const pw = [useRef(), useRef()];
  const steps = [useRef(), useRef(), useRef()];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sec.current,
      start: 'top 70%',
      onEnter: () => {
        gsap.to(tagRow.current, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' });
        gsap.to(pw.map(r => r.current), { y: '0%', duration: 1.7, ease: 'power4.out', stagger: 0.2, delay: 0.2 });
        gsap.to(steps.map(r => r.current), { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out', stagger: 0.2, delay: 0.45 });
      }
    });
  }, []);

  const data = [
    ['01', 'Context & Discovery', 'Every project begins with deep listening — to the site, the climate, the cultural landscape, and the people who will inhabit the space.'],
    ['02', 'Concept & Vision', 'We develop a singular, powerful concept that guides every decision — from the building\'s silhouette to the texture of a door handle.'],
    ['03', 'Refinement & Craft', 'The final phase is obsessive refinement. We work with master craftspeople to realize the vision with absolute precision.']
  ];

  return (
    <section className="process" ref={sec}>
      <div className="proc-head">
        <div className="proc-tag-row" ref={tagRow}>
          <div className="proc-tag-line" />
          <div className="proc-tag">How We Work</div>
        </div>
        <h2 className="proc-h2">
          <span className="proc-line"><span className="proc-word" ref={pw[0]}>A methodical</span></span>
          <span className="proc-line"><span className="proc-word" ref={pw[1]} style={{ fontStyle: 'italic' }}>poetry</span></span>
        </h2>
      </div>
      <div className="proc-steps">
        {data.map(([n, t, b], i) => (
          <div className="step" ref={steps[i]} key={i}>
            <div className="step-n">{n}</div>
            <div className="step-t">{t}</div>
            <div className="step-b">{b}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
