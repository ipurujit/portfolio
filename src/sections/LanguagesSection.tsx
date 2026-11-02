import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SectionHeader } from '../components/SectionHeader';
import { Globe } from 'lucide-react';

export const LanguagesSection: React.FC = () => {
  const { data, locale } = usePortfolio();

  return (
    <section
      id="languages"
      aria-label={data.navigation.languages}
      className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.navigation.languages}
        />

        <div className="flex flex-wrap gap-3">
          {data.languages.map((lang) => (
            <div
              key={lang.id}
              className="inline-flex min-w-48 flex-col gap-2 border border-zinc-300 bg-zinc-50 px-4 py-3 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zinc-500" aria-hidden="true" />
                  <h3 className="text-base font-bold text-zinc-950 dark:text-white">
                    {lang.language}
                  </h3>
                </div>
                <span className="shrink-0 bg-zinc-200 px-2 py-0.5 text-sm font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                  {lang.level}
                </span>
              </div>

              {lang.notes && (
                <span className="border-t border-zinc-200 pt-2 text-sm font-mono font-semibold text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                  {lang.notes}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
