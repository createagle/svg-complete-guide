import { mount } from './mount.jsx';
import './ex-common.css';

// Pasted from the design tool: the size and the color are fixed
function BellIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function App() {
  return (
    <div className="row">
      <button className="ibtn" type="button"><BellIcon /> Notify</button>
      <button className="ibtn danger" type="button"><BellIcon /> Mute all</button>
      <button className="ibtn large" type="button"><BellIcon /> Subscribe</button>
      <button className="ibtn round" type="button" aria-label="Notifications"><BellIcon /></button>
    </div>
  );
}

mount(App);
