import React, { useState } from 'react';
import { X, Mail, Phone, Code, Send, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      <div 
        className="bg-[#ffffff] rounded-2xl border border-[#e2e2e5] max-w-lg w-full p-6 sm:p-8 shadow-xl relative"
        id="connect-modal"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6e7978] hover:bg-[#f3f3f6] hover:text-[#1a1c1e] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f9f8] text-[#006a64] text-[11px] font-editorial font-bold tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006a64]" />
            DIRECT INQUIRY
          </div>
          <h3 className="text-2xl font-bold text-[#1a1c1e]">
            Let's Connect
          </h3>
          <p className="text-[14px] text-[#5a5f66] mt-1">
            Reach out directly or send a message regarding internship opportunities and collaboration.
          </p>
        </div>

        {/* Fast Action Details */}
        <div className="mb-6 p-4 rounded-xl bg-[#f9f9fc] border border-[#e8e8ea] space-y-2.5">
          <div className="flex items-center justify-between text-[13px]">
            <span className="text-[#6e7978] flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#006a64]" /> {PERSONAL_INFO.email}
            </span>
            <button
              onClick={handleCopyEmail}
              className="text-[11px] font-editorial font-semibold text-[#006a64] hover:underline flex items-center gap-1 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy
                </>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between text-[13px] pt-1.5 border-t border-[#f1f1f4]">
            <span className="text-[#6e7978] flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#006a64]" /> {PERSONAL_INFO.phone}
            </span>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-[11px] font-editorial font-semibold text-[#006a64] hover:underline"
            >
              Call
            </a>
          </div>
        </div>

        {/* Message Form */}
        {submitted ? (
          <div className="p-6 rounded-xl bg-[#f0f9f8] border border-[#006a64]/30 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#006a64] text-white flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#1a1c1e]">Message Sent!</h4>
            <p className="text-[13px] text-[#5a5f66]">
              Thank you for reaching out. I'll get back to you promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-editorial font-bold uppercase tracking-wider text-[#6e7978] mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ada Lovelace"
                className="w-full px-3.5 py-2 rounded-lg bg-[#faf8f3] border border-[#e2e2e5] text-[14px] text-[#1a1c1e] focus:bg-white focus:border-[#006a64] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-editorial font-bold uppercase tracking-wider text-[#6e7978] mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ada@example.com"
                className="w-full px-3.5 py-2 rounded-lg bg-[#faf8f3] border border-[#e2e2e5] text-[14px] text-[#1a1c1e] focus:bg-white focus:border-[#006a64] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-editorial font-bold uppercase tracking-wider text-[#6e7978] mb-1">
                Message or Opportunity
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Akriti, I saw your portfolio and would like to discuss..."
                className="w-full px-3.5 py-2 rounded-lg bg-[#faf8f3] border border-[#e2e2e5] text-[14px] text-[#1a1c1e] focus:bg-white focus:border-[#006a64] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#006a64] text-white text-[13px] font-editorial font-semibold tracking-wider uppercase hover:bg-[#00504b] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              SEND MESSAGE <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
