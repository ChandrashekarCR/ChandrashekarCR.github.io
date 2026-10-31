import React from 'react';

const BASE_COLORS = ['var(--color-base-a)', 'var(--color-base-c)', 'var(--color-base-g)', 'var(--color-base-t)'];
const PERIOD = 120;
const AMPLITUDE = 22;
const RUNGS_PER_PERIOD = 8;

function strandPath(length, phase) {
  const points = [];
  for (let x = 0; x <= length; x += 4) {
    const y = AMPLITUDE * Math.sin((2 * Math.PI * x) / PERIOD + phase);
    points.push(`${x},${y.toFixed(2)}`);
  }
  return `M${points.join(' L')}`;
}

// Decorative, horizontally scrolling double helix with nucleotide-coloured base pairs.
function DnaHelix({ width = 720, className = '' }) {
  const length = width + PERIOD;
  const rungs = [];
  for (let i = 0; i * (PERIOD / RUNGS_PER_PERIOD) <= length; i += 1) {
    const x = i * (PERIOD / RUNGS_PER_PERIOD) + PERIOD / RUNGS_PER_PERIOD / 2;
    const y = AMPLITUDE * Math.sin((2 * Math.PI * x) / PERIOD);
    rungs.push({ x, y, color: BASE_COLORS[i % BASE_COLORS.length] });
  }

  return (
    <svg
      viewBox={`0 ${-AMPLITUDE - 6} ${width} ${2 * AMPLITUDE + 12}`}
      className={`w-full h-auto overflow-hidden ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g className="helix-track" style={{ '--helix-period': `-${PERIOD}px` }}>
        {rungs.map((rung) => (
          <line
            key={rung.x}
            x1={rung.x}
            x2={rung.x}
            y1={rung.y}
            y2={-rung.y}
            stroke={rung.color}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
        ))}
        <path d={strandPath(length, 0)} fill="none" stroke="var(--color-foreground)" strokeWidth="2.5" opacity="0.85" />
        <path d={strandPath(length, Math.PI)} fill="none" stroke="var(--color-primary)" strokeWidth="2.5" opacity="0.85" />
      </g>
    </svg>
  );
}

export default DnaHelix;
