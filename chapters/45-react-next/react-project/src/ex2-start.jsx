import { mount } from './mount.jsx';
import { D } from './ex2-data.js';
import './ex-common.css';

function DrawnLine({ d }) {
  // A guessed length: the dash pattern is shorter than the path, so it repeats and leaves a gap
  return <path className="line" d={d} style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: 'draw 1.2s ease-out forwards' }} />;
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
