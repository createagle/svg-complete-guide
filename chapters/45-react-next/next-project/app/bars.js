// Shared geometry for both charts: plain functions, usable on the server and in the browser
export const W = 320, H = 200, PAD = 24;

export function layoutBars(rows) {
  const max = Math.max(...rows.map((r) => r.visits));
  const step = (W - 2 * PAD) / rows.length;
  return rows.map((r, i) => {
    const h = ((H - 2 * PAD) * r.visits) / max;
    return { ...r, x: PAD + i * step + step * 0.15, y: H - PAD - h, w: step * 0.7, h };
  });
}
