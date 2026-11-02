import React, { useState, useRef, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Sun,
  Moon,
  ChevronDown,
  Menu,
  X,
  Check,
  Globe,
  User,
  GraduationCap,
  Briefcase,
  Award,
  Layers,
  Code,
  FileText,
  FileCheck,
  HeartHandshake,
} from 'lucide-react';
import { Locale } from '../types/portfolio';

export const Navbar: React.FC = () => {
  const { locale, setLocale, theme, toggleTheme, data } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [othersDropdownOpen, setOthersDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const othersMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click or Escape
  useEffect(() => {
    const handleEvents = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent && e.key === 'Escape') {
        setOthersDropdownOpen(false);
        setLangDropdownOpen(false);
      }
      if (e instanceof MouseEvent) {
        if (
          othersMenuRef.current &&
          !othersMenuRef.current.contains(e.target as Node)
        ) {
          setOthersDropdownOpen(false);
        }
        if (
          langMenuRef.current &&
          !langMenuRef.current.contains(e.target as Node)
        ) {
          setLangDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleEvents);
    document.addEventListener('keydown', handleEvents);
    return () => {
      document.removeEventListener('mousedown', handleEvents);
      document.removeEventListener('keydown', handleEvents);
    };
  }, []);

  const primaryNavLinks = [
    { href: '#about', label: data.navigation.about, icon: <User className="w-4 h-4" aria-hidden="true" /> },
    { href: '#education', label: data.navigation.education, icon: <GraduationCap className="w-4 h-4" aria-hidden="true" /> },
    { href: '#experience', label: data.navigation.experience, icon: <Briefcase className="w-4 h-4" aria-hidden="true" /> },
    {
      href: '#publications',
      label: data.navigation.publications,
      icon: <FileText className="w-4 h-4" aria-hidden="true" />,
    },
  ];

  const othersNavLinks = [
    {
      href: '#projects',
      label: data.navigation.projects,
      icon: <Layers className="w-4 h-4" aria-hidden="true" />,
    },
    {
      href: '#skills',
      label: data.navigation.skills,
      icon: <Code className="w-4 h-4" aria-hidden="true" />,
    },
    { href: '#certifications', label: data.navigation.certifications, icon: <Award className="w-4 h-4" aria-hidden="true" /> },

    {
      href: '#languages',
      label: data.navigation.languages,
      icon: <Globe className="w-4 h-4" aria-hidden="true" />,
    },
    /*
    {
      href: '#work-auth',
      label: data.navigation.workAuth,
      icon: <FileCheck className="w-4 h-4" aria-hidden="true" />,
    },
    {
      href: '#volunteering',
      label: data.navigation.volunteering,
      icon: <HeartHandshake className="w-4 h-4" aria-hidden="true" />,
    },
    */
  ];

  const handleLanguageSelect = (newLocale: Locale) => {
    setLocale(newLocale);
    setLangDropdownOpen(false);
  };

  const closeAllMenus = () => {
    setOthersDropdownOpen(false);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const othersLabel = data.ui.othersLabel;

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/95 dark:bg-black/95 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Zone 1: Image Avatar Only (No Name Text) */}
          <a
            href="#about"
            className="group flex items-center justify-center p-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 shrink-0"
            aria-label={`${data.meta.name} - ${data.navigation.about}`}
          >
            <div className="w-10 h-10 overflow-hidden border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              {!avatarError ? (
                <img
                  src={data.meta.avatarPhotoUrl}
                  alt={data.meta.name}
                  onError={() => setAvatarError(true)}
                  className="w-full h-full object-cover contrast-110"
                />
              ) : (
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 select-none">
                  PS
                </span>
              )}
            </div>
          </a>

          {/* Zone 2: Navigation Links: About, Education, Experience, Certifications, Others (Dropdown) */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            {primaryNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-black dark:hover:text-white transition-colors hover:underline underline-offset-4 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}

            {/* Others Dropdown */}
            <div className="relative" ref={othersMenuRef}>
              <button
                type="button"
                onClick={() => setOthersDropdownOpen(!othersDropdownOpen)}
                aria-expanded={othersDropdownOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap focus-visible:ring-2 px-1 py-0.5"
              >
                <span>{othersLabel}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${othersDropdownOpen ? 'rotate-180' : ''
                    }`}
                  aria-hidden="true"
                />
              </button>

              {othersDropdownOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-56 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl py-2 z-50 fade-in"
                >
                  {othersNavLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setOthersDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm sm:text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <span className="text-zinc-500 dark:text-zinc-400">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Actions - Language Dropdown & Monochromatic Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-expanded={langDropdownOpen}
                aria-haspopup="true"
                aria-label={data.ui.languageMenuLabel}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors focus-visible:ring-2 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{locale === 'de' ? 'Deutsch' : 'English'}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''
                    }`}
                  aria-hidden="true"
                />
              </button>

              {langDropdownOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-44 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl py-1 z-50 fade-in"
                >
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleLanguageSelect('en')}
                    className={`flex items-center justify-between w-full px-3.5 py-2 text-sm font-medium text-left transition-colors ${locale === 'en'
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-bold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/60'
                      }`}
                  >
                    <span>{data.ui.languageEnglish}</span>
                    {locale === 'en' && <Check className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleLanguageSelect('de')}
                    className={`flex items-center justify-between w-full px-3.5 py-2 text-sm font-medium text-left transition-colors ${locale === 'de'
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-bold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/60'
                      }`}
                  >
                    <span>{data.ui.languageGerman}</span>
                    {locale === 'de' && <Check className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>

            {/* Monochromatic Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors focus-visible:ring-2 cursor-pointer"
              title={theme === 'dark' ? data.ui.themeToggleDark : data.ui.themeToggleLight}
              aria-label={theme === 'dark' ? data.ui.themeToggleDark : data.ui.themeToggleLight}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-zinc-100" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-900" aria-hidden="true" />
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus-visible:ring-2"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <nav
          role="navigation"
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 px-4 pt-3 pb-5 space-y-1 fade-in"
        >
          {primaryNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeAllMenus}
              className="block px-3 py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 mt-2 border-t border-zinc-200 dark:border-zinc-800">
            <span className="block px-3 text-[12.5px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
              {othersLabel}
            </span>
            {othersNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeAllMenus}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <span className="text-zinc-500">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
