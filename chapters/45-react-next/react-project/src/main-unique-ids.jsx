import { useState } from 'react';
import { mount } from './mount.jsx';
import { ProgressRing } from './ProgressRing.jsx';

const RINGS = [
  { label: 'Storage', value: 72, from: '#2563eb', to: '#06b6d4' },
  { label: 'Memory', value: 45, from: '#7c3aed', to: '#ec4899' },
  { label: 'CPU', value: 88, from: '#ea580c', to: '#dc2626' },
];

function App() {
  const [unique, setUnique] = useState(false);
  const [hideFirst, setHideFirst] = useState(false);
  return (
    <>
      <div className="controls">
        <label className="control"><input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} /> Unique ids (useId)</label>
        <label className="control"><input type="checkbox" checked={hideFirst} onChange={(e) => setHideFirst(e.target.checked)} /> Hide first card</label>
      </div>
      <div className="stage">
        {RINGS.map((r, i) => (
          <div key={r.label} hidden={i === 0 && hideFirst}><ProgressRing {...r} uniqueIds={unique} /></div>
        ))}
      </div>
    </>
  );
}

mount(App);
