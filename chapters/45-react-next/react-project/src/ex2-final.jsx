import { useLayoutEffect, useRef } from 'react';
import { mount } from './mount.jsx';
import { D } from './ex2-data.js';
import './ex-common.css';

function DrawnLine({ d }) {
  const ref = useRef(null);
  // Measure the real length once the path is in the DOM, before the browser paints
  useLayoutEffect(() => {
    const path = ref.current;
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    path.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], { duration: 1200, easing: 'ease-out' });
  }, [d]);
  return <path ref={ref} className="line" d={d} />;
}

function App() {
  return (
    <svg className="chart" viewBox="0 0 560 240" role="img" aria-label="Line chart">
      <path className="axis" d="M20 220 H540" />
      <DrawnLine d={D} />
    </svg>
  );
}

mount(App);
