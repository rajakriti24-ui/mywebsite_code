import React, { useState } from 'react';
import { CREDENTIALS } from '../data/portfolioData';
import { CheckCircle2, Award, ExternalLink } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  const [selectedCred, setSelectedCred] = useState<string | null>(null);

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-[#e2e2e5]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-editorial text-[12px] font-bold tracking-[0.15em] text-[#006a64] uppercase">
            04 // CREDENTIALS
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-[#bdc9c7]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
            Certifications & Learning
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              id={`credential-card-${cred.id}`}
              onClick={() => setSelectedCred(selectedCred === cred.id ? null : cred.id)}
              className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] p-6 shadow-2xs hover:shadow-xs hover:border-[#bdc9c7] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Top bar with Issuer and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-editorial text-[11px] font-bold tracking-[0.12em] text-[#006a64] uppercase">
                    {cred.issuer}
                  </span>
                  <div className="text-[#6e7978] group-hover:text-[#006a64] transition-colors">
                    {cred.issuer.includes('IBM') ? (
                      <CheckCircle2 className="w-4 h-4 text-[#006a64]" />
                    ) : (
                      <Award className="w-4 h-4 text-[#8f4c31]" />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-[#1a1c1e] mb-2 leading-snug">
                  {cred.title}
                </h3>
              </div>

              {/* Subtitle / Topic Description */}
              <div className="pt-4 border-t border-[#f1f1f4]">
                <p className="text-[13px] text-[#5a5f66]">
                  {cred.subtitle}
                </p>
                {selectedCred === cred.id && (
                  <div className="mt-2 text-[11px] font-editorial text-[#006a64] font-semibold flex items-center gap-1">
                    Verified Competency Document <ExternalLink className="w-3 h-3" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
