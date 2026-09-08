import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Lock, ExternalLink, Cpu, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenConnect: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConnect }) => {
  const [activeDataPoint, setActiveDataPoint] = useState<number | null>(null);

  // SVG coordinate curve points
  const points = [
    { x: 50, y: 140, label: 'IN: GPIO_04', detail: 'Digital Sensor Input' },
    { x: 130, y: 85, label: 'f(x)dx', detail: 'Polynomial Regression Model' },
    { x: 210, y: 120, label: 'VECTOR v', detail: 'Embedding Layer' },
    { x: 290, y: 65, label: 'OUT: TENSOR [4, 16]', detail: 'Output Activation' },
  ];

  return (
    <section id="home" className="pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#e2e2e5]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column - Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f9f8] border border-[#bdc9c7]/60 text-[#006a64] text-[11px] font-editorial font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#006a64] animate-pulse" />
              {PERSONAL_INFO.badge}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#1a1c1e] leading-[1.12]">
              Hi, I'm <span className="text-[#006a64] underline decoration-[#006a64]/30 underline-offset-8">Akriti Raj</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-[20px] font-medium text-[#2c3034] leading-snug">
              {PERSONAL_INFO.subtitle}
            </p>

            {/* Paragraph Bio */}
            <p className="text-[15px] sm:text-[16px] text-[#5a5f66] leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#006a64] text-white text-[13px] font-editorial font-semibold tracking-wider uppercase hover:bg-[#00504b] transition-all shadow-sm active:scale-[0.98]"
              >
                VIEW MY PROJECTS <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenConnect}
                id="hero-connect-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#bdc9c7] text-[#1a1c1e] text-[13px] font-editorial font-semibold tracking-wider uppercase hover:bg-[#f3f3f6] hover:border-[#6e7978] transition-all shadow-2xs active:scale-[0.98] cursor-pointer"
              >
                LET'S CONNECT <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Metadata Links */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-[13px] text-[#5a5f66] border-t border-[#e2e2e5] w-full">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="inline-flex items-center gap-1.5 font-medium hover:text-[#006a64] transition-colors"
              >
                GitHub <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-[#bdc9c7]">|</span>

              <span className="inline-flex items-center gap-1.5 text-[#6e7978]">
                LinkedIn — Coming Soon <Lock className="w-3.5 h-3.5 text-[#8f4c31]" />
              </span>

              <span className="text-[#bdc9c7]">|</span>

              <span className="font-editorial text-[#5a5f66]">
                {PERSONAL_INFO.university} - {PERSONAL_INFO.graduationYear}
              </span>
            </div>
          </div>

          {/* Right Column - Architectural / Technical System Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] shadow-xs p-5 relative overflow-hidden group">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between border-b border-[#f1f1f4] pb-3 mb-4 text-[11px] font-editorial tracking-wider text-[#5a5f66]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#006a64] animate-ping opacity-75" />
                  <span className="font-semibold text-[#1a1c1e]">NODE: {PERSONAL_INFO.nodeId}</span>
                </div>
                <div className="font-mono text-[11px] text-[#6e7978]">
                  {PERSONAL_INFO.coordinates}
                </div>
              </div>

              {/* Graphical Canvas / Diagram */}
              <div className="relative w-full h-[240px] bg-[#f9f9fc] rounded-lg border border-[#e8e8ea] flex items-center justify-center p-4">
                {/* Background Blueprint Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 rounded-lg pointer-events-none" />

                <svg className="w-full h-full relative z-10" viewBox="0 0 340 180">
                  {/* Axes */}
                  <line x1="30" y1="150" x2="320" y2="150" stroke="#bdc9c7" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="30" y1="20" x2="30" y2="150" stroke="#bdc9c7" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Secondary dashed curve */}
                  <path
                    d="M 50 140 C 100 130, 160 50, 240 65 S 310 110, 310 110"
                    fill="none"
                    stroke="#bdc9c7"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Primary Teal active curve */}
                  <path
                    d="M 50 140 Q 110 50, 190 120 T 290 65"
                    fill="none"
                    stroke="#006a64"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Regression tangent line */}
                  <line x1="100" y1="105" x2="160" y2="65" stroke="#d58566" strokeWidth="1.5" />

                  {/* Vector Nodes */}
                  {points.map((pt, idx) => {
                    const isHovered = activeDataPoint === idx;
                    return (
                      <g
                        key={idx}
                        className="cursor-pointer transition-transform duration-150"
                        onMouseEnter={() => setActiveDataPoint(idx)}
                        onMouseLeave={() => setActiveDataPoint(null)}
                      >
                        {/* Outer ping */}
                        {isHovered && (
                          <circle cx={pt.x} cy={pt.y} r="10" fill="#006a64" opacity="0.15" />
                        )}
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isHovered ? "5" : "3.5"}
                          fill={idx === 1 ? "#d58566" : "#006a64"}
                          stroke="#ffffff"
                          strokeWidth="2"
                        />
                        {/* Label text */}
                        <text
                          x={pt.x}
                          y={pt.y > 100 ? pt.y + 16 : pt.y - 10}
                          textAnchor="middle"
                          fill="#3e4947"
                          fontSize="9"
                          fontFamily="Space Grotesk, sans-serif"
                          fontWeight="600"
                        >
                          {pt.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Telemetry info tooltip */}
                {activeDataPoint !== null && (
                  <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-xs border border-[#bdc9c7] text-[#1a1c1e] px-2.5 py-1 rounded text-[11px] font-mono shadow-xs">
                    <span className="text-[#006a64] font-semibold">{points[activeDataPoint].label}:</span> {points[activeDataPoint].detail}
                  </div>
                )}
              </div>

              {/* Card Footer Bar */}
              <div className="mt-4 pt-3 border-t border-[#f1f1f4] flex items-center justify-between text-[11px] font-editorial text-[#5a5f66]">
                <div className="flex items-center gap-1.5 text-[#006a64] font-medium">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>CORE STACK INITIALIZED</span>
                </div>
                <div className="font-mono text-[#2c3034] font-medium bg-[#f3f3f6] px-2 py-0.5 rounded">
                  Python • C • IoT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
