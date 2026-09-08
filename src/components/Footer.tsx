import React from 'react';
import { ExternalLink, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f9f9fc] border-t border-[#e2e2e5] pt-14 pb-12">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 space-y-10">
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Identity */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-editorial text-[13px] font-bold tracking-[0.16em] text-[#1a1c1e] uppercase">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#006a64]" />
            </div>
            <p className="text-[13px] text-[#5a5f66]">
              {PERSONAL_INFO.degree} | {PERSONAL_INFO.university}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-[#5a5f66]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#006a64] transition-colors"
            >
              GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <span className="inline-flex items-center gap-1 text-[#6e7978]">
              LinkedIn (Coming Soon) <Lock className="w-3 h-3 text-[#8f4c31]" />
            </span>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1 hover:text-[#006a64] transition-colors"
            >
              Email <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-6 border-t border-[#e2e2e5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] font-editorial text-[#6e7978]">
          <div>
            © {PERSONAL_INFO.graduationYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="tracking-wide">
            Crafted with Architectural Precision & Rigor
          </div>
        </div>
      </div>
    </footer>
  );
};
