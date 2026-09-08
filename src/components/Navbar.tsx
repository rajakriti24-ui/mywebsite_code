import React, { useState } from 'react';
import { User, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f9f9fc]/92 backdrop-blur-md border-b border-[#e2e2e5]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          id="nav-logo"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
        >
          <span className="font-editorial text-[13px] font-bold tracking-[0.16em] text-[#1a1c1e] uppercase">
            AKRITI RAJ
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#006a64] group-hover:scale-125 transition-transform" />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-[#5a5f66] hover:text-[#1a1c1e] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#006a64] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenConnect}
            id="nav-connect-btn"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#006a64] text-white text-[13px] font-semibold tracking-wide hover:bg-[#00504b] transition-all shadow-sm active:scale-[0.98] cursor-pointer"
          >
            LET'S CONNECT
          </button>
          
          <button
            onClick={onOpenConnect}
            id="nav-user-btn"
            title="Open quick connect card"
            className="w-10 h-10 rounded-full border border-[#bdc9c7] flex items-center justify-center text-[#006a64] hover:bg-[#006a64]/10 transition-colors cursor-pointer"
          >
            <User className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenConnect}
            className="px-3 py-1.5 rounded-full bg-[#006a64] text-white text-[12px] font-medium"
          >
            Connect
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2 rounded-lg border border-[#e2e2e5] text-[#1a1c1e]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#e2e2e5] bg-[#f9f9fc] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[15px] font-medium text-[#2c3034] hover:text-[#006a64] py-1.5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#e2e2e5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConnect();
              }}
              className="w-full py-2.5 rounded-full bg-[#006a64] text-white text-[13px] font-semibold flex items-center justify-center gap-2"
            >
              LET'S CONNECT <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
