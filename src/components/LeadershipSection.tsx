import React, { useState } from 'react';
import { LEADERSHIP_ITEM } from '../data/portfolioData';
import { Megaphone, Users, Award, Check } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const [activeCompetency, setActiveCompetency] = useState<string>('Leadership');

  return (
    <section className="py-16 sm:py-24 border-b border-[#e2e2e5]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-editorial text-[12px] font-bold tracking-[0.15em] text-[#006a64] uppercase">
            05 // LEADERSHIP
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-[#bdc9c7]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
            Beyond the classroom
          </h2>
        </div>

        {/* Wide Leadership Card */}
        <div className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] p-6 sm:p-8 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f9f8] border border-[#006a64]/20 text-[#006a64] text-[11px] font-editorial font-bold tracking-wider uppercase">
                <Megaphone className="w-3.5 h-3.5" />
                {LEADERSHIP_ITEM.tag}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
                {LEADERSHIP_ITEM.title}
              </h3>

              <p className="text-[14px] text-[#5a5f66] font-medium font-editorial">
                {LEADERSHIP_ITEM.program}
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-5 lg:pl-6 lg:border-l lg:border-[#f1f1f4]">
              <p className="text-[15px] text-[#2c3034] leading-relaxed">
                {LEADERSHIP_ITEM.description}
              </p>

              <div>
                <div className="text-[10px] font-editorial font-bold tracking-[0.14em] text-[#6e7978] uppercase mb-3">
                  DEMONSTRATED COMPETENCIES:
                </div>

                <div className="flex flex-wrap gap-2">
                  {LEADERSHIP_ITEM.competencies.map((comp) => {
                    const isSelected = activeCompetency === comp;
                    return (
                      <button
                        key={comp}
                        onClick={() => setActiveCompetency(comp)}
                        className={`px-3.5 py-1.5 rounded-full text-[12px] font-editorial font-semibold tracking-wide transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#006a64] text-white shadow-xs'
                            : 'bg-[#f3f3f6] text-[#2c3034] hover:bg-[#e8e8ea]'
                        }`}
                      >
                        {comp}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
