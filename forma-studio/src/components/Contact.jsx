import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sec = useRef();
  const tag = useRef();
  const words = [useRef(), useRef(), useRef(), useRef()];
  const email = useRef();
  const btn = useRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sec.current,
      start: 'top 68%',
      onEnter: () => {
        gsap.to(tag.current, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' });
        gsap.to(words.map(r => r.current), { y: '0%', duration: 1.8, ease: 'power4.out', stagger: 0.15, delay: 0.2 });
        gsap.to(email.current, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.7 });
        gsap.to(btn.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.95 });
      }
    });

    const b = btn.current;
    const onMove = e => {
      const r = b.getBoundingClientRect();
      gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.22, y: (e.clientY - r.top - r.height / 2) * 0.22, duration: 0.7, ease: 'power3.out' });
    };

    const onLeave = () => gsap.to(b, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1,.4)' });

    b.addEventListener('mousemove', onMove);
    b.addEventListener('mouseleave', onLeave);

    return () => {
      b.removeEventListener('mousemove', onMove);
      b.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="contact" ref={sec}>
      <div className="contact-inner">
        <div className="contact-tag" ref={tag}>Start a Conversation</div>
        <h2 className="contact-h2">
          <span className="contact-hline">
            <span className="contact-word" ref={words[0]}>Let's</span>
            {' '}
            <span className="contact-word" ref={words[1]}>build</span>
          </span>
          <span className="contact-hline">
            <span className="contact-word" ref={words[2]}>something</span>
          </span>
          <span className="contact-hline">
            <span className="contact-word" ref={words[3]} style={{ fontStyle: 'italic' }}>enduring</span>
          </span>
        </h2>
        <div className="contact-email" ref={email}>studio@forma.design</div>
        <a href="#" className="contact-btn" ref={btn}>
          Begin a Project <span className="contact-arrow">→</span>
        </a>
      </div>
    </section>
  );
};
