import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { VisionSVG } from './SVGs';

gsap.registerPlugin(ScrollTrigger);

export const Vision = () => {
  const sec = useRef();
  const tag = useRef();
  const words = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const body = useRef();
  const lnk = useRef();
  const curtain = useRef();
  const imgWrap = useRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sec.current,
      start: 'top 68%',
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(tag.current, { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' })
          .to(words.map(r => r.current), { y: '0%', duration: 1.7, ease: 'power4.out', stagger: 0.13 }, '-=0.8')
          .to(body.current.children, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', stagger: 0.18 }, '-=0.9')
          .to(lnk.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6');

        gsap.to(curtain.current, { scaleX: 0, duration: 2, ease: 'power4.inOut', delay: 0.35 });
        gsap.to(imgWrap.current, { scale: 1, duration: 2.8, ease: 'power3.out', delay: 0.55 });
      }
    });

    gsap.to(imgWrap.current, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: { trigger: sec.current, start: 'top bottom', end: 'bottom top', scrub: 1.8 }
    });
  }, []);

  return (
    <section className="vision" ref={sec}>
      <div className="vision-left">
        <div className="vision-tag" ref={tag}>Studio Vision</div>
        <h2 className="vision-h2">
          <span className="vision-line">
            <span className="vision-word" ref={words[0]}>We</span>
            {' '}
            <span className="vision-word" ref={words[1]}>design</span>
          </span>
          <span className="vision-line">
            <span className="vision-word" ref={words[2]}>the</span>
            {' '}
            <span className="vision-word" ref={words[3]}>spaces</span>
          </span>
          <span className="vision-line">
            <span className="vision-word" ref={words[4]} style={{ fontStyle: 'italic' }}>between</span>
          </span>
        </h2>
        <div ref={body}>
          <p className="vision-p">We are a collective of architects and designers united by a singular conviction: that extraordinary spaces elevate the human condition.</p>
          <p className="vision-p">Our work is defined by restraint and precision. We remove until nothing can be taken away, leaving only what is essential.</p>
        </div>
        <a href="#" className="vision-link" ref={lnk}>
          <span className="vision-link-bar" />
          Discover Our Practice
        </a>
      </div>
      <div className="vision-right">
        <div className="vision-img-inner">
          <div className="vision-curtain" ref={curtain} />
          <div ref={imgWrap} style={{ width: '100%', height: '100%', transform: 'scale(1.15)' }}>
            <VisionSVG />
          </div>
        </div>
      </div>
    </section>
  );
};
