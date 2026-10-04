import { useCallback, useId, useLayoutEffect, useRef, useState } from 'react';

const H = 120, PAD = 8;

// React 19: `ref` arrives as a plain prop, so the parent can reach the <svg> without forwardRef
export function Sparkline({ data, label, replay, onMeasure, ref }) {
  const gradId = useId();
  const pathRef = useRef(null);
  const [width, setWidth] = useState(480);

  // A ref callback can return a cleanup function, which React calls when the node goes away
  const observeSize = useCallback((node) => {
    const ro = new ResizeObserver(([entry]) => setWidth(Math.max(200, Math.round(entry.contentRect.width))));
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  const max = Math.max(...data), min = Math.min(...data);
  const x = (i) => PAD + (i * (width - 2 * PAD)) / (data.length - 1);
  const y = (v) => PAD + ((max - v) * (H - 2 * PAD)) / (max - min || 1);
  const line = data.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(data.length - 1).toFixed(1)} ${H} L${x(0).toFixed(1)} ${H} Z`;

  // Measure the real path in the DOM whenever it changes, including after a resize
  useLayoutEffect(() => {
    onMeasure?.(pathRef.current.getTotalLength());
  }, [line]); // eslint-disable-line react-hooks/exhaustive-deps

  // Draw it on new data or a replay; runs before the browser paints
  useLayoutEffect(() => {
    const path = pathRef.current;
    const len = path.getTotalLength();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    path.animate([{ strokeDasharray: `${len} ${len}`, strokeDashoffset: len }, { strokeDasharray: `${len} ${len}`, strokeDashoffset: 0 }],
      { duration: 900, easing: 'ease-out' });
  }, [data, replay]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={observeSize} className="spark-box">
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={width} height={H} viewBox={`0 0 ${width} ${H}`} role="img" aria-label={label}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#${gradId})`} />
        <path ref={pathRef} d={line} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
  );
}
