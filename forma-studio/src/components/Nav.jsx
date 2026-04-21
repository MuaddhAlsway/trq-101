import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Nav = ({ visible }) => {
  const ref = useRef();

  useEffect(() => {
    if (visible) {
      gsap.to(ref.current, { opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 });
    }
  }, [visible]);

  return (
    <nav className="nav" ref={ref}>
      <a href="#" className="nav-logo">Forma</a>
      <ul className="nav-links">
        {['Work', 'Studio', 'Process', 'Contact'].map(l => (
          <li key={l}><a href="#">{l}</a></li>
        ))}
      </ul>
      <button className="nav-cta">Enquire ↗</button>
    </nav>
  );
};
