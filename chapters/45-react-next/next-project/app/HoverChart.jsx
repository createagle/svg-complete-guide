'use client';
import { useState } from 'react';
import { H, PAD, W, layoutBars } from './bars.js';

// A Client Component: its code ships to the browser so it can respond to the pointer
export default function HoverChart({ rows }) {
  const [active, setActive] = useState(null);
  const bars = layoutBars(rows);
  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Visits per day, Monday to Sunday" onPointerLeave={() => setActive(null)}>
      <line className="grid" x1={PAD} x2={W - PAD} y1={H - PAD} y2={H - PAD} />
      {bars.map((b) => (
        <g key={b.day} onPointerEnter={() => setActive(b.day)}>
          <rect className={active && active !== b.day ? 'bar dim' : 'bar'} x={b.x} y={b.y} width={b.w} height={b.h} rx="3" />
          <text x={b.x + b.w / 2} y={H - 8} textAnchor="middle">{b.day}</text>
          {active === b.day && <text className="value" x={b.x + b.w / 2} y={b.y - 6} textAnchor="middle">{b.visits}</text>}
        </g>
      ))}
    </svg>
  );
}
