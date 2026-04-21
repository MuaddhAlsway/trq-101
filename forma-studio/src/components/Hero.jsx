import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroBG } from './SVGs';

export const Hero = ({ active }) => {
  const bgRef = useRef();
  const contentRef = useRef();
  const eyeRef = useRef();
  const w1 = useRef(), w2 = useRef(), w3 = useRef();
  const subRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    if (!active) return;

    const tl = gsap.timeline({ delay: 0.25 });
    tl.to(eyeRef.current, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' })
      .to([w1.current, w2.current, w3.current], { y: '0%', opacity: 1, duration: 1.8, ease: 'power4.out', stagger: 0.14 }, '-=0.9')
      .to(subRef.current, { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' }, '-=0.9')
      .to(scrollRef.current, { opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.5');

    gsap.to(bgRef.current, {
      yPercent: -18,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 }
    });

    gsap.to(contentRef.current, {
      yPercent: 22,
      opacity: 0,
      scale: 0.94,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: '25% top', end: 'bottom top', scrub: 1.4 }
    });
  }, [active]);

  return (
    <section className="hero">
      <div className="hero-bg" ref={bgRef}>
        <HeroBG />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content" ref={contentRef}>
        <div className="hero-eyebrow" ref={eyeRef}>Architecture & Interior Design — Est. 2008</div>
        <h1 className="hero-h1">
          <span className="hero-line"><span className="hero-word" ref={w1}>Space</span></span>
          <span className="hero-line">
            <span className="hero-word" ref={w2} style={{ marginLeft: '1.8em', fontStyle: 'italic' }}>as</span>
            {' '}
            <span className="hero-word" ref={w3}>Language</span>
          </span>
        </h1>
        <p className="hero-sub" ref={subRef}>Crafting environments that transcend the ordinary</p>
      </div>
      <div className="hero-scroll" ref={scrollRef}>
        <div className="scroll-bar" />
        <span className="scroll-txt">Scroll</span>
      </div>
    </section>
  );
};
