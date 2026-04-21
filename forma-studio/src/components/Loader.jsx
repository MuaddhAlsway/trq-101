import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Loader = ({ onDone }) => {
  const logoRef = useRef();
  const barRef = useRef();
  const numRef = useRef();
  const wrapRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onDone });
    tl.to(logoRef.current, { opacity: 1, duration: 1.3, ease: 'power2.out' })
      .to(barRef.current, { width: '100%', duration: 2.2, ease: 'power2.inOut' }, '-=0.4')
      .to(numRef.current, { innerHTML: 100, snap: { innerHTML: 1 }, duration: 2.2, ease: 'power2.inOut' }, '-=2.2')
      .to(logoRef.current, { opacity: 0, y: -20, duration: 0.7, ease: 'power2.in' }, '-=0.2')
      .to(wrapRef.current, { yPercent: -100, duration: 1.5, ease: 'power4.inOut' });
  }, [onDone]);

  return (
    <div className="loader" ref={wrapRef}>
      <div className="loader-logo" ref={logoRef}>Forma</div>
      <div className="loader-track">
        <div className="loader-fill" ref={barRef} />
      </div>
      <div className="loader-num" ref={numRef}>0</div>
    </div>
  );
};
