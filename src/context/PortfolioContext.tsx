import React, { createContext, useContext, useEffect, useState } from 'react';
import { Locale, PortfolioData, Theme } from '../types/portfolio';
import { getPortfolioData, SKILLS_MAP } from '../data';

interface PortfolioContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  data: PortfolioData;
  activeSkillFilter: string | null;
  setActiveSkillFilter: (skillId: string | null) => void;
  clearActiveSkillFilter: () => void;
  isItemHighlighted: (itemSkillIds: string[]) => boolean;
  activeSkillName: string | null;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ps_portfolio_locale');
      if (saved === 'en' || saved === 'de') return saved;
      if (navigator.language.startsWith('de')) return 'de';
    }
    return 'en';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ps_portfolio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'dark'; // User specified: default as dark theme
  });

  const [activeSkillFilter, setActiveSkillFilterState] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body?.classList.add('dark');
      document.body?.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      document.body?.classList.add('light');
      document.body?.classList.remove('dark');
    }
    localStorage.setItem('ps_portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem('ps_portfolio_locale', locale);
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === 'en' ? 'de' : 'en'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setActiveSkillFilter = (skillId: string | null) => {
    if (skillId && skillId === activeSkillFilter) {
      setActiveSkillFilterState(null);
    } else {
      setActiveSkillFilterState(skillId);
      if (skillId && typeof document !== 'undefined') {
        setTimeout(() => {
          const firstMatch = document.querySelector(`[data-has-skill~="${skillId}"]`);
          if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  };

  const clearActiveSkillFilter = () => {
    setActiveSkillFilterState(null);
  };

  const isItemHighlighted = (itemSkillIds: string[]): boolean => {
    if (!activeSkillFilter) return false;
    return itemSkillIds.includes(activeSkillFilter);
  };

  const activeSkillName = activeSkillFilter
    ? SKILLS_MAP.get(activeSkillFilter)?.name || activeSkillFilter
    : null;

  const data = getPortfolioData(locale);

  return (
    <PortfolioContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        theme,
        setTheme,
        toggleTheme,
        data,
        activeSkillFilter,
        setActiveSkillFilter,
        clearActiveSkillFilter,
        isItemHighlighted,
        activeSkillName,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
