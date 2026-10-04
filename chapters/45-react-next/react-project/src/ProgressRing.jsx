import { useId } from 'react';

const R = 40;
const C = 2 * Math.PI * R;

export function ProgressRing({ value, from, to, label, uniqueIds }) {
  const autoId = useId();
  // Without useId every ring writes id="ring-fill", and url(#ring-fill) always finds the first one in the page
  const id = uniqueIds ? autoId : 'ring-fill';
  return (
    <figure className="ring">
      <svg viewBox="0 0 100 100" width="140" height="140" role="img" aria-label={`${label}: ${value}%`}>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
        </defs>
        <circle className="track" cx="50" cy="50" r={R} fill="none" strokeWidth="10" />
        <circle cx="50" cy="50" r={R} fill="none" stroke={`url(#${id})`} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={C} strokeDashoffset={C * (1 - value / 100)} transform="rotate(-90 50 50)" />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="700" fill="currentColor">{value}%</text>
      </svg>
      <figcaption>{label}<br /><code>id="{id}"</code></figcaption>
    </figure>
  );
}
