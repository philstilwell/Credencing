/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { memo, useMemo } from 'react';
import { motion } from 'motion/react';
import { EpistemicData } from '../types';

interface EpistemicChartProps {
  data: EpistemicData;
}

const EpistemicChart = memo(function EpistemicChart({ data }: EpistemicChartProps) {
  const R = 180; // Outer radius
  const cx = 200; // Center X
  const cy = 200; // Center Y

  // Map probability [0, 1] to angle [PI, 0]
  const getAngle = (p: number) => Math.PI * (1 - p);

  const getPos = (p: number, r: number) => {
    const angle = getAngle(p);
    return {
      x: cx + r * Math.cos(angle),
      y: cy - r * Math.sin(angle),
    };
  };

  const eoPos = useMemo(() => getPos(data.objectiveEvidence, R), [data.objectiveEvidence]);
  const epPos = useMemo(() => getPos(data.perceivedEvidence, R), [data.perceivedEvidence]);
  const caPos = useMemo(() => getPos(data.assignedCredence, R), [data.assignedCredence]);
  const skillRadius = R * data.deepRationality;
  const skillPos = useMemo(() => getPos(data.perceivedEvidence, skillRadius), [data.perceivedEvidence, skillRadius]);
  const depthMarkers = [0.2, 0.4, 0.6, 0.8, 1];

  // Warranted uncertainty spread (omega)
  const omega = (1 - data.deepRationality) * (Math.PI / 4);

  // Better arc path for the warranted uncertainty (green area)
  const uncertaintyPath = useMemo(() => {
    const angle = getAngle(data.perceivedEvidence);
    const a1 = angle + omega;
    const a2 = angle - omega;

    // Ensure we don't go out of bounds [0, PI]
    const clampedA1 = Math.min(Math.PI, a1);
    const clampedA2 = Math.max(0, a2);

    const bx1 = cx + R * Math.cos(clampedA1);
    const by1 = cy - R * Math.sin(clampedA1);
    const bx2 = cx + R * Math.cos(clampedA2);
    const by2 = cy - R * Math.sin(clampedA2);

    return `M ${skillPos.x} ${skillPos.y} L ${bx1} ${by1} A ${R} ${R} 0 0 1 ${bx2} ${by2} Z`;
  }, [data.perceivedEvidence, omega, skillPos]);

  // Core Irrationality Path (Red Delta)
  const irrationalityPath = useMemo(() => {
    const aStart = getAngle(data.perceivedEvidence);
    const aEnd = getAngle(data.assignedCredence);

    const x1 = cx + R * Math.cos(aStart);
    const y1 = cy - R * Math.sin(aStart);
    const x2 = cx + R * Math.cos(aEnd);
    const y2 = cy - R * Math.sin(aEnd);

    const largeArc = Math.abs(aStart - aEnd) > Math.PI ? 1 : 0;
    const sweep = aStart > aEnd ? 1 : 0;

    return `M ${cx} ${cy} L ${x1} ${y1} A ${R} ${R} 0 ${largeArc} ${sweep} ${x2} ${y2} Z`;
  }, [data.perceivedEvidence, data.assignedCredence]);

  return (
    <div className="relative w-full aspect-[400/240] max-w-[500px] mx-auto glass-panel border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <svg viewBox="0 0 400 240" className="w-full h-full relative z-10 font-sans">
        {/* Background Grids */}
        <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(250, 204, 150, 0.10)" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={R * 0.8} fill="none" stroke="rgba(250, 204, 150, 0.06)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx={cx} cy={cy} r={R * 0.6} fill="none" stroke="rgba(250, 204, 150, 0.06)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx={cx} cy={cy} r={R * 0.4} fill="none" stroke="rgba(250, 204, 150, 0.05)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx={cx} cy={cy} r={R * 0.2} fill="none" stroke="rgba(250, 204, 150, 0.05)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Radial Axis Grid */}
        <line x1={cx - R} y1={cy} x2={cx + R} y2={cy} stroke="rgba(250, 204, 150, 0.13)" strokeWidth="1" />
        <line x1={cx} y1={cy} x2={cx} y2={cy - R} stroke="rgba(250, 204, 150, 0.08)" strokeWidth="1" />

        {/* Labels */}
        <text x={cx - R} y={cy + 15} className="fill-stone-500 text-[10px] font-mono" textAnchor="middle">0%</text>
        <text x={cx + R} y={cy + 15} className="fill-stone-500 text-[10px] font-mono" textAnchor="middle">100%</text>
        <text x={cx} y={cy - 10} className="fill-amber-100/80 text-[8px] font-mono uppercase tracking-widest" textAnchor="middle">
          Epistemic gradient: assigned credence
        </text>
        <text x={cx} y={cy + 28} className="fill-stone-500 text-[7px] font-mono uppercase tracking-[0.18em]" textAnchor="middle">
          left to right shows the confidence scale used by the agent
        </text>
        <text x={cx + 12} y={cy - R - 6} className="fill-amber-300 text-[8px] font-mono uppercase tracking-widest" textAnchor="start">SD depth</text>
        {depthMarkers.map((marker) => (
          <g key={marker}>
            <line
              x1={cx - 3}
              y1={cy - R * marker}
              x2={cx + 3}
              y2={cy - R * marker}
              stroke="rgba(250, 204, 150, 0.32)"
              strokeWidth="1"
            />
            <text
              x={cx + 10}
              y={cy - R * marker + 3}
              className="fill-amber-200 text-[8px] font-mono"
              textAnchor="start"
            >
              {Math.round(marker * 100)}%
            </text>
          </g>
        ))}

        {/* Warranted Uncertainty (Green Arc) */}
        <path
           d={uncertaintyPath}
           fill="rgba(116, 129, 72, 0.28)"
        />

        {/* Core Irrationality (Red Void) */}
        {Math.abs(data.assignedCredence - data.perceivedEvidence) > 0.01 && (
          <path
            d={irrationalityPath}
            fill="rgba(179, 71, 38, 0.38)"
            style={{ filter: 'drop-shadow(0 0 10px rgba(179, 71, 38, 0.42))' }}
          />
        )}

        {/* Assigned Credence Line */}
        <line
          x1={cx} y1={cy}
          x2={caPos.x} y2={caPos.y}
          stroke="#f6b44b"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 2px rgba(246, 180, 75, 0.45))' }}
        />

        {/* Perceived Evidence Notch */}
        <circle
          cx={epPos.x} cy={epPos.y} r="4"
          fill="white"
          style={{ filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))' }}
        />

        {/* Bayesian Shadow (Ideal Position) */}
        <circle
          cx={getPos(data.objectiveEvidence, R).x}
          cy={getPos(data.objectiveEvidence, R).y}
          r="8"
          fill="none"
          stroke="rgba(255, 244, 214, 0.22)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />

        {/* Objective Truth Chevron */}
        <path
          d="M -6 -10 L 6 -10 L 0 0 Z"
          fill="#d97706"
          transform={`translate(${eoPos.x}, ${eoPos.y}) rotate(${90 - (getAngle(data.objectiveEvidence) * 180 / Math.PI)})`}
          style={{ filter: 'drop-shadow(0 0 8px rgba(217, 119, 6, 0.8))' }}
        />

        {/* Skill Depth Dot */}
        <circle
          cx={skillPos.x} cy={skillPos.y} r="5"
          fill="#eab308"
          style={{ filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.55))' }}
        />
      </svg>

      {/* Legend inside chart area - simplified */}
      <div className="absolute bottom-4 left-0 right-0 flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 text-[8px] uppercase tracking-[0.2em] text-stone-500 font-bold z-20">
        <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_5px_rgba(246,180,75,1)]"></div> Objective Evidence (E0)</div>
        <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-white rounded-full"></div> Perceived Evidence (EP)</div>
        <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-[0_0_5px_rgba(234,179,8,1)]"></div> Deep Rationality (SD)</div>
      </div>
    </div>
  );
});

export default EpistemicChart;
