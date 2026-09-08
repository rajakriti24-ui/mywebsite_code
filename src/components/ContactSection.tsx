import React, { useState } from 'react';
import { Mail, Phone, Code, Share2, ArrowRight, ArrowUpRight, Hourglass, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenConnect: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConnect }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-[#e2e2e5]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-editorial text-[12px] font-bold tracking-[0.15em] text-[#006a64] uppercase">
            08 // INQUIRIES
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-[#bdc9c7]" />
        </div>

        {/* Outer Banner Card Container */}
        <div className="bg-[#eeeef2]/60 rounded-2xl border border-[#e2e2e5] p-8 sm:p-12 lg:p-14 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1a1c1e] tracking-tight leading-[1.15]">
                Let's build something interesting.
              </h2>

              <p className="text-[16px] text-[#5a5f66] leading-relaxed max-w-md">
                I'm always interested in learning, collaborating and exploring new opportunities.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenConnect}
                  id="contact-get-in-touch-btn"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#006a64] text-white text-[13px] font-editorial font-semibold tracking-wider uppercase hover:bg-[#00504b] transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  GET IN TOUCH <span className="text-[11px]">▷</span>
                </button>
              </div>

              {copiedItem && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#006a64] text-white text-[12px] font-medium animate-fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied {copiedItem} to clipboard!</span>
                </div>
              )}
            </div>

            {/* Right Contact Cards List */}
            <div className="lg:col-span-6 space-y-3">
              {/* Card 1: Email */}
              <div
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'Email')}
                id="contact-email-card"
                className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] p-4 sm:p-5 shadow-2xs hover:border-[#006a64]/40 hover:shadow-xs transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f0f9f8] flex items-center justify-center text-[#006a64]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-editorial font-bold tracking-[0.14em] text-[#6e7978] uppercase">
                      EMAIL ADDRESS
                    </div>
                    <div className="text-[14px] sm:text-[15px] font-medium text-[#1a1c1e] group-hover:text-[#006a64] transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#6e7978] group-hover:text-[#006a64] transition-colors">
                  <span className="text-[11px] hidden sm:inline text-[#6e7978] group-hover:text-[#006a64]">Copy / Mail</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 2: Phone */}
              <div
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'Phone')}
                id="contact-phone-card"
                className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] p-4 sm:p-5 shadow-2xs hover:border-[#006a64]/40 hover:shadow-xs transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f0f9f8] flex items-center justify-center text-[#006a64]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-editorial font-bold tracking-[0.14em] text-[#6e7978] uppercase">
                      PHONE NUMBER
                    </div>
                    <div className="text-[14px] sm:text-[15px] font-medium text-[#1a1c1e] group-hover:text-[#006a64] transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#6e7978] group-hover:text-[#006a64] transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 3: Github */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="contact-github-card"
                className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] p-4 sm:p-5 shadow-2xs hover:border-[#006a64]/40 hover:shadow-xs transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f0f9f8] flex items-center justify-center text-[#006a64]">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-editorial font-bold tracking-[0.14em] text-[#6e7978] uppercase">
                      CODE REPOSITORIES
                    </div>
                    <div className="text-[14px] sm:text-[15px] font-medium text-[#1a1c1e] group-hover:text-[#006a64] transition-colors">
                      {PERSONAL_INFO.githubHandle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6e7978] group-hover:text-[#006a64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Card 4: LinkedIn */}
              <div
                id="contact-linkedin-card"
                className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] p-4 sm:p-5 shadow-2xs flex items-center justify-between opacity-85"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f3f3f6] flex items-center justify-center text-[#6e7978]">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-editorial font-bold tracking-[0.14em] text-[#6e7978] uppercase">
                      PROFESSIONAL NETWORK
                    </div>
                    <div className="text-[14px] sm:text-[15px] font-medium text-[#5a5f66]">
                      LinkedIn — Coming Soon
                    </div>
                  </div>
                </div>
                <Hourglass className="w-4 h-4 text-[#8f4c31]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
