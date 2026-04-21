import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy = () => {
  const wrap = useRef();
  const [active, setActive] = useState(0);
  const phaseRefs = [useRef(), useRef(), useRef()];

  const phases = [
    {
      n: '01 — Discovery',
      t: <>Every great work<br />begins with<br /><em>listening</em></>,
      b: 'We immerse ourselves in context — land, culture, light, and the lives that will inhabit these spaces.'
    },
    {
      n: '02 — Vision',
      t: <>Architecture is<br /><em>frozen</em><br />music</>,
      b: 'We translate emotional resonance into structural form, composing space as a conductor composes sound.'
    },
    {
      n: '03 — Craft',
      t: <>Details are<br />not details —<br />they <em>are</em> the design</>,
      b: 'Each material chosen with obsessive care, each threshold considered as a moment of arrival.'
    }
  ];

  useEffect(() => {
    gsap.set(phaseRefs[0].current, { opacity: 1, y: 0 });

    ScrollTrigger.create({
      trigger: wrap.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: self => {
        const p = self.progress;
        const idx = p < 0.33 ? 0 : p < 0.66 ? 1 : 2;
        setActive(idx);

        phaseRefs.forEach((r, i) => {
          if (i === idx) {
            gsap.to(r.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
          } else {
            gsap.to(r.current, { opacity: 0, y: i < idx ? -28 : 28, duration: 0.7, ease: 'power3.in' });
          }
        });
      }
    });
  }, []);

  return (
    <div className="pin-wrap" ref={wrap}>
      <div className="pin-sticky">
        {phases.map((ph, i) => (
          <div className="pin-phase" ref={phaseRefs[i]} key={i}>
            <div className="pin-num">{ph.n}</div>
            <h3 className="pin-title">{ph.t}</h3>
            <p className="pin-body">{ph.b}</p>
          </div>
        ))}
        <div className="pin-dots">
          {phases.map((_, i) => (
            <div className={`pin-dot${active === i ? ' on' : ''}`} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
