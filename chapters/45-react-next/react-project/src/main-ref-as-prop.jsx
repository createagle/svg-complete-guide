import { useRef, useState } from 'react';
import { mount } from './mount.jsx';
import { Sparkline } from './Sparkline.jsx';

const randomData = () => Array.from({ length: 24 }, (_, i) => Math.round(50 + 30 * Math.sin(i / 3) + Math.random() * 25));

function App() {
  const svgRef = useRef(null);
  const [data, setData] = useState(randomData);
  const [replay, setReplay] = useState(0);
  const [length, setLength] = useState(0);

  // The parent holds a ref to the child's <svg>, so it can serialize exactly what is on screen
  function download() {
    const markup = new XMLSerializer().serializeToString(svgRef.current);
    const url = URL.createObjectURL(new Blob([markup], { type: 'image/svg+xml' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: 'sparkline.svg' });
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="controls">
        <button className="btn" type="button" onClick={() => setData(randomData())}>New data</button>
        <button className="btn" type="button" onClick={() => setReplay((n) => n + 1)}>Replay</button>
        <button className="btn" type="button" onClick={download}>Download SVG</button>
      </div>
      <Sparkline ref={svgRef} data={data} replay={replay} onMeasure={setLength} label="Daily visitors, last 24 days" />
      <p className="readout">path length: {length.toFixed(1)}</p>
    </>
  );
}

mount(App);
