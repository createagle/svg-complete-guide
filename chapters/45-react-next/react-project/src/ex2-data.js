// A wavy line across the chart: about 750 units long
const pts = Array.from({ length: 13 }, (_, i) => [20 + i * 43.3, 120 + Math.round(70 * Math.sin(i * 0.9))]);
export const D = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y}`).join(' ');
