import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { CuriositiesSection } from './components/CuriositiesSection';
import { PerspectiveSection } from './components/PerspectiveSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const handleOpenConnect = () => {
    setIsConnectModalOpen(true);
  };

  const handleCloseConnect = () => {
    setIsConnectModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f9f9fc] text-[#1a1c1e] font-sans antialiased selection:bg-[#4fa7a0]/20 selection:text-[#00504b]">
      {/* Navigation Bar */}
      <Navbar onOpenConnect={handleOpenConnect} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenConnect={handleOpenConnect} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CredentialsSection />
        <LeadershipSection />
        <CuriositiesSection />
        <PerspectiveSection />
        <ContactSection onOpenConnect={handleOpenConnect} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isConnectModalOpen}
        onClose={handleCloseConnect}
      />
    </div>
  );
}

