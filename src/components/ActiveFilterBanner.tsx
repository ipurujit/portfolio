import React, { useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Filter, X, ArrowDown } from 'lucide-react';

export const ActiveFilterBanner: React.FC = () => {
  const { activeSkillFilter, activeSkillName, clearActiveSkillFilter, data } =
    usePortfolio();

  // Keyboard shortcut: ESC to clear active filter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeSkillFilter) {
        clearActiveSkillFilter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSkillFilter, clearActiveSkillFilter]);

  if (!activeSkillFilter) return null;

  // Calculate matching items
  const matchExpCount = data.experiences.filter((exp) =>
    exp.skills.includes(activeSkillFilter)
  ).length;
  const matchProjCount = data.projects.filter((p) =>
    p.skills.includes(activeSkillFilter)
  ).length;
  const matchEduCount = data.education.filter((edu) =>
    edu.skills.includes(activeSkillFilter)
  ).length;
  const matchPubCount = data.publications.filter((pub) =>
    pub.skills.includes(activeSkillFilter)
  ).length;

  const totalMatches = matchExpCount + matchProjCount + matchEduCount + matchPubCount;

  const handleScrollToFirst = () => {
    const firstMatch = document.querySelector(
      `[data-has-skill~="${activeSkillFilter}"]`
    );
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <aside
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-lg w-[calc(100%-2rem)] bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 border border-zinc-700 dark:border-zinc-300 shadow-2xl px-4 py-3 fade-in"
    >
      <div className="flex items-center justify-between gap-3 text-sm sm:text-sm">
        <div className="flex items-center gap-2 truncate">
          <Filter className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="text-zinc-300 dark:text-zinc-600 truncate">
            {data.ui.skillsFilterActive}
          </span>
          <span className="font-bold underline decoration-zinc-500 underline-offset-2 truncate">
            {activeSkillName}
          </span>
          <span className="font-mono text-[12.5px] px-1.5 py-0.5 bg-zinc-800 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800 shrink-0">
            {totalMatches} {data.ui.relatedItemsFound}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleScrollToFirst}
            className="p-1.5 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
            title={data.ui.jumpToFirst}
            aria-label={data.ui.jumpToFirst}
          >
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={clearActiveSkillFilter}
            className="flex items-center gap-1 px-2 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 dark:bg-zinc-200 dark:hover:bg-zinc-300 dark:text-zinc-900 font-medium transition-colors cursor-pointer"
            aria-label={data.ui.clearFilter}
          >
            <X className="w-3.5 h-3.5" />
            <span className="text-sm">{data.ui.clearFilter}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
