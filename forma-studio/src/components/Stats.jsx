import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Stats = () => {
  const sec = useRef();
  const refs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sec.current,
      start: 'top 75%',
      onEnter: () => {
        gsap.to(refs.map(r => r.current), { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out', stagger: 0.16 });
      }
    });
  }, []);

  const data = [
    ['127', 'Projects Completed'],
    ['34', 'Countries Reached'],
    ['18', 'International Awards'],
    ['15+', 'Years of Practice']
  ];

  return (
    <section className="stats" ref={sec}>
      {data.map(([n, l], i) => (
        <div className="stat" ref={refs[i]} key={i}>
          <div className="stat-n">{n}</div>
          <div className="stat-l">
            {l.split(' ').slice(0, 1).join(' ')}<br />
            {l.split(' ').slice(1).join(' ')}
          </div>
        </div>
      ))}
    </section>
  );
};
