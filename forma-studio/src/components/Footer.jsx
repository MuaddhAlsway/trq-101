export const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">Forma</div>
    <div className="footer-copy">© 2024 Forma Architecture Studio. All rights reserved.</div>
    <nav className="footer-nav">
      {['Instagram', 'LinkedIn', 'Careers', 'Privacy'].map(l => (
        <a href="#" key={l}>{l}</a>
      ))}
    </nav>
  </footer>
);
