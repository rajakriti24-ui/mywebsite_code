import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Layout, Database, GitBranch, Cpu, Compass } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-4 h-4 text-[#006a64]" />;
      case 'layout':
        return <Layout className="w-4 h-4 text-[#006a64]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#006a64]" />;
      case 'git-branch':
        return <GitBranch className="w-4 h-4 text-[#006a64]" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-[#006a64]" />;
      case 'compass':
      default:
        return <Compass className="w-4 h-4 text-[#006a64]" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-[#e2e2e5]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-editorial text-[12px] font-bold tracking-[0.15em] text-[#006a64] uppercase">
            02 // EXPERTISE
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-[#bdc9c7]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
            Skills & Technologies
          </h2>
        </div>

        {/* 6 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              id={`skill-card-${cat.id}`}
              className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] p-6 shadow-2xs hover:shadow-xs hover:border-[#bdc9c7] transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Header with Category Tag and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-editorial text-[11px] font-semibold tracking-[0.14em] text-[#6e7978] uppercase">
                    {cat.categoryTag}
                  </span>
                  <div className="p-1.5 rounded-md bg-[#f0f9f8] group-hover:scale-110 transition-transform">
                    {getIcon(cat.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1a1c1e] mb-6">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-[#f3f3f6] border border-[#e8e8ea] text-[13px] font-medium text-[#2c3034] hover:bg-[#e2e2e5] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
