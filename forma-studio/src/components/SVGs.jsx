export const HeroBG = () => (
  <svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '120%', display: 'block', position: 'absolute', top: 0, left: 0 }}>
    <defs>
      <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c4beb0" />
        <stop offset="100%" stopColor="#e8e0d0" />
      </linearGradient>
      <linearGradient id="bldG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#323028" />
        <stop offset="100%" stopColor="#1a1814" />
      </linearGradient>
      <linearGradient id="glsG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7a8a9a" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#4a5a6a" stopOpacity="0.25" />
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#skyG)" />
    <rect x="0" y="200" width="1600" height="700" fill="#e4dcd0" />
    <rect x="0" y="755" width="1600" height="145" fill="#cec8bc" />
    <rect x="460" y="170" width="680" height="585" fill="url(#bldG)" />
    <rect x="470" y="180" width="660" height="565" fill="url(#glsG)" />
    {[240, 292, 344, 396, 448, 500, 552, 604, 656, 708].map(y => (
      <line key={y} x1="470" y1={y} x2="1130" y2={y} stroke="#8a9aaa" strokeWidth="0.5" opacity="0.38" />
    ))}
    {[538, 608, 678, 748, 818, 888, 958, 1028, 1098].map(x => (
      <line key={x} x1={x} y1="180" x2={x} y2="755" stroke="#8a9aaa" strokeWidth="0.5" opacity="0.38" />
    ))}
    <rect x="140" y="300" width="320" height="455" fill="#252220" />
    <rect x="150" y="310" width="300" height="435" fill="#8090a0" opacity="0.18" />
    <rect x="1140" y="360" width="260" height="395" fill="#252220" />
    <rect x="1150" y="370" width="240" height="375" fill="#8090a0" opacity="0.14" />
    <rect x="0" y="755" width="1600" height="8" fill="#b8b2a8" />
  </svg>
);

export const VisionSVG = () => (
  <svg viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="intG2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e8e0d0" />
        <stop offset="100%" stopColor="#d8d0c4" />
      </linearGradient>
    </defs>
    <rect width="800" height="1000" fill="url(#intG2)" />
    <rect x="100" y="60" width="600" height="560" fill="#ddd6c8" />
    <rect x="250" y="110" width="300" height="400" fill="#a0b2c4" opacity="0.4" />
    <line x1="400" y1="110" x2="400" y2="510" stroke="#90a0b2" strokeWidth="2" />
    <line x1="250" y1="295" x2="550" y2="295" stroke="#90a0b2" strokeWidth="2" />
    <rect x="20" y="145" width="760" height="14" fill="#c4beb2" />
    <rect x="500" y="460" width="100" height="10" fill="#3a3530" rx="1" />
    <rect x="505" y="355" width="9" height="115" fill="#3a3530" />
    <rect x="586" y="355" width="9" height="115" fill="#3a3530" />
    <rect x="505" y="355" width="90" height="62" fill="#5a5550" opacity="0.8" />
    <rect x="148" y="500" width="85" height="7" fill="#3a3530" rx="1" />
    <rect x="168" y="507" width="7" height="110" fill="#3a3530" />
    <rect x="219" y="507" width="7" height="110" fill="#3a3530" />
    <ellipse cx="191" cy="500" rx="16" ry="5" fill="#6a6458" />
    <rect x="184" y="438" width="14" height="62" fill="#6a6458" rx="7" />
    <rect x="0" y="620" width="800" height="380" fill="#c4beb2" />
  </svg>
);
