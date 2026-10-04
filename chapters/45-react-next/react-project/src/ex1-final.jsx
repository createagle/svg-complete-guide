import { mount } from './mount.jsx';
import './ex-common.css';

// Size and stroke are props, the color comes from the text, and any other SVG attribute passes through
function BellIcon({ size = 24, strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
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
      <button className="ibtn large" type="button"><BellIcon size={30} strokeWidth={1.5} /> Subscribe</button>
      <button className="ibtn round" type="button" aria-label="Notifications"><BellIcon /></button>
    </div>
  );
}

mount(App);
