import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { H, PAD, W, layoutBars } from './bars.js';

// A Server Component: it reads the data file at build time and sends only the finished SVG to the browser
export default async function ServerChart() {
  const rows = JSON.parse(await readFile(join(process.cwd(), 'data/visits.json'), 'utf8'));
  const bars = layoutBars(rows);
  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Visits per day, Monday to Sunday">
      <line className="grid" x1={PAD} x2={W - PAD} y1={H - PAD} y2={H - PAD} />
      {bars.map((b) => (
        <g key={b.day}>
          <rect className="bar" x={b.x} y={b.y} width={b.w} height={b.h} rx="3" />
          <text x={b.x + b.w / 2} y={H - 8} textAnchor="middle">{b.day}</text>
        </g>
      ))}
    </svg>
  );
}
