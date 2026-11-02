import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SocialLinks } from './SocialLinks';
import { ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const { data } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 mt-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-base font-bold text-zinc-950 dark:text-white tracking-tight">
            {data.meta.name}
          </span>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {data.meta.title} · {data.meta.location}
          </p>
        </div>

        {/* Social link icons */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <SocialLinks showLabels={false} iconSize={18} />
          <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
            <span>
              © {new Date().getFullYear()} {data.meta.name}. {data.ui.allRightsReserved}
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer focus-visible:ring-2 p-1"
              aria-label={data.ui.backToTop}
            >
              <span>{data.ui.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
