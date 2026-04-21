import { useState } from 'react';
import {
  Cursor,
  Loader,
  Nav,
  Hero,
  Marquee,
  Vision,
  Philosophy,
  Projects,
  Stats,
  Process,
  Gallery,
  Contact,
  Footer
} from './components';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div id="cur" />
      <div id="cur-ring" />
      <Cursor />
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Nav visible={loaded} />
      <Hero active={loaded} />
      <Marquee />
      <Vision />
      <Philosophy />
      <Projects />
      <Stats />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
