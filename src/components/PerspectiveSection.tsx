import React from 'react';
import { PERSPECTIVE } from '../data/portfolioData';
import { Palette } from 'lucide-react';

export const PerspectiveSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-b border-[#e2e2e5]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-editorial text-[12px] font-bold tracking-[0.15em] text-[#006a64] uppercase">
            07 // PERSPECTIVE
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-[#bdc9c7]" />
          <span className="text-[14px] text-[#5a5f66] font-medium">
            Creative Discipline
          </span>
        </div>

        {/* Perspective Showcase Card */}
        <div className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] p-6 sm:p-10 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-[11px] font-editorial font-bold tracking-[0.12em] text-[#6e7978] uppercase">
                <Palette className="w-3.5 h-3.5 text-[#006a64]" />
                CREATIVE EXPRESSION
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
                {PERSPECTIVE.title}
              </h3>

              <p className="text-[16px] text-[#2c3034] leading-relaxed max-w-xl">
                {PERSPECTIVE.subtitle}
              </p>

              <div className="pt-2 text-[12px] text-[#6e7978] font-editorial tracking-wide">
                {PERSPECTIVE.motto}
              </div>
            </div>

            {/* Right Artistic Wireframe / Sketch Graphic */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="w-full max-w-[240px] h-[140px] bg-[#f9f9fc] rounded-lg border border-[#e8e8ea] flex items-center justify-center p-3 relative overflow-hidden group">
                <svg className="w-full h-full" viewBox="0 0 160 90" fill="none">
                  {/* Subtle architectural hatching */}
                  <line x1="20" y1="20" x2="25" y2="70" stroke="#bdc9c7" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="40" y1="15" x2="45" y2="75" stroke="#bdc9c7" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="60" y1="25" x2="65" y2="65" stroke="#bdc9c7" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="80" y1="10" x2="85" y2="80" stroke="#bdc9c7" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="100" y1="20" x2="105" y2="70" stroke="#bdc9c7" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="120" y1="15" x2="125" y2="75" stroke="#bdc9c7" strokeWidth="0.5" strokeDasharray="2 2" />

                  {/* Flowing hand-sketch curve 1 */}
                  <path
                    d="M 15 65 C 35 45, 55 70, 85 45 C 110 25, 130 55, 145 35"
                    stroke="#006a64"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    className="transition-all duration-300 group-hover:stroke-[#00504b]"
                  />

                  {/* Flowing curve 2 */}
                  <path
                    d="M 20 50 C 45 75, 75 35, 105 60 C 125 75, 135 45, 148 50"
                    stroke="#d58566"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="2 2"
                  />

                  {/* Accent curve 3 */}
                  <path
                    d="M 30 70 C 60 65, 80 50, 115 45 C 135 40, 140 30, 150 25"
                    stroke="#6e7978"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />

                  {/* Observational focus points */}
                  <circle cx="85" cy="45" r="2.5" fill="#006a64" />
                  <circle cx="105" cy="60" r="2" fill="#d58566" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
