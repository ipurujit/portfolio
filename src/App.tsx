/**
 * @license
 * SPDX-License-Identifier: GNU-GPL-3.0-or-later
 */

import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ActiveFilterBanner } from './components/ActiveFilterBanner';
import { AboutSection } from './sections/AboutSection';
import { WorkAuthSection } from './sections/WorkAuthSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { PublicationsSection } from './sections/PublicationsSection';
import { LanguagesSection } from './sections/LanguagesSection';
import { VolunteeringSection } from './sections/VolunteeringSection';

const PortfolioContent: React.FC = () => {
  const { data } = usePortfolio();

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black text-zinc-950 dark:text-zinc-50 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:border-2 focus:border-black focus:font-bold focus:shadow-xl"
      >
        {data.ui.skipToContent}
      </a>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Single-Page Portfolio Content */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <AboutSection />
        {/* <WorkAuthSection /> */}
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <PublicationsSection />
        <CertificationsSection />
        <LanguagesSection />
        {/* <VolunteeringSection /> */}
      </main>

      {/* Interactive skill filter notification bar */}
      <ActiveFilterBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
