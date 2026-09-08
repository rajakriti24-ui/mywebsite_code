import React from 'react';
import { CURIOSITIES } from '../data/portfolioData';
import { Code, Brain, Network, BarChart3, Globe, Radio } from 'lucide-react';

export const CuriositiesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'code':
        return <Code className="w-5 h-5 text-[#006a64]" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-[#006a64]" />;
      case 'network':
        return <Network className="w-5 h-5 text-[#006a64]" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-[#006a64]" />;
      case 'layout':
        return <Globe className="w-5 h-5 text-[#006a64]" />;
      case 'wifi':
      default:
        return <Radio className="w-5 h-5 text-[#006a64]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 border-b border-[#e2e2e5]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-editorial text-[12px] font-bold tracking-[0.15em] text-[#006a64] uppercase">
            06 // CURIOSITIES
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-[#bdc9c7]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
            What I'm curious about
          </h2>
        </div>

        {/* 6 Cards Grid (6 columns on lg, 3 on md, 2 on sm) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CURIOSITIES.map((curiosity) => (
            <div
              key={curiosity.id}
              id={`curiosity-card-${curiosity.id}`}
              className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] p-5 shadow-2xs hover:border-[#006a64]/40 hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-[#f0f9f8] group-hover:scale-110 transition-transform">
                {getIcon(curiosity.iconName)}
              </div>
              <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1c1e] leading-snug">
                {curiosity.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
