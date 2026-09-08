import React, { useState } from 'react';
import { ABOUT_TEXTS, PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, ChevronUp, Sparkles, GraduationCap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // "Grow" active by default like in screenshot

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#e2e2e5]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span className="font-editorial text-[12px] font-bold tracking-[0.15em] text-[#006a64] uppercase">
            01 // ABOUT
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-[#bdc9c7]" />
          <span className="text-[14px] text-[#5a5f66] font-medium">
            A little about me
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Typographic Focus & Academic Box */}
          <div className="lg:col-span-5 space-y-10">
            {/* Display Words */}
            <div className="space-y-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1a1c1e] leading-[1.1]">
              <div>
                Learning<span className="text-[#006a64]">.</span>
              </div>
              <div>
                Building<span className="text-[#006a64]">.</span>
              </div>
              <div>
                Solving<span className="text-[#006a64]">.</span>
              </div>
              <div>
                Growing<span className="text-[#006a64]">.</span>
              </div>
            </div>

            {/* Academic Focus Box */}
            <div className="bg-[#ffffff] border border-[#e2e2e5] rounded-xl p-6 shadow-2xs">
              <div className="flex items-center gap-2 text-[11px] font-editorial font-bold tracking-[0.14em] text-[#6e7978] uppercase mb-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#006a64]" />
                ACADEMIC FOCUS
              </div>
              <h3 className="text-xl font-bold text-[#1a1c1e] mb-1">
                {PERSONAL_INFO.university}
              </h3>
              <p className="text-[14px] text-[#5a5f66] leading-relaxed">
                {PERSONAL_INFO.degree}
              </p>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Process Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-[16px] text-[#2c3034] leading-relaxed">
              <p>{ABOUT_TEXTS.p1}</p>
              <p>{ABOUT_TEXTS.p2}</p>
            </div>

            {/* Process Philosophy */}
            <div className="pt-6 border-t border-[#e2e2e5]/80">
              <div className="text-[11px] font-editorial font-bold tracking-[0.14em] text-[#6e7978] uppercase mb-4">
                PROCESS PHILOSOPHY
              </div>

              {/* Connected Steps */}
              <div className="flex flex-wrap items-center gap-3">
                {ABOUT_TEXTS.processPhilosophy.map((step, idx) => {
                  const isGrow = idx === 3;
                  const isSelected = activeStep === idx;

                  return (
                    <button
                      key={step.label}
                      onClick={() => setActiveStep(idx)}
                      id={`philosophy-step-${idx}`}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-editorial font-semibold tracking-wide transition-all cursor-pointer ${
                        isSelected || isGrow
                          ? 'bg-[#006a64] text-white shadow-xs'
                          : 'bg-white border border-[#e2e2e5] text-[#2c3034] hover:bg-[#f3f3f6] hover:border-[#bdc9c7]'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                      <span>{step.label}</span>
                      {idx < 3 ? (
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                      ) : (
                        <ChevronUp className="w-3.5 h-3.5 ml-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Step Description */}
              <div className="mt-4 p-3.5 bg-[#ffffff] rounded-lg border border-[#e2e2e5] text-[13px] text-[#5a5f66] flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#006a64] shrink-0" />
                <span>
                  <strong className="text-[#1a1c1e] font-semibold">{ABOUT_TEXTS.processPhilosophy[activeStep].label}:</strong>{' '}
                  {ABOUT_TEXTS.processPhilosophy[activeStep].note}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
