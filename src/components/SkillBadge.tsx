import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SKILLS_MAP } from '../data';

interface SkillBadgeProps {
  skillId: string;
  size?: 'sm' | 'md';
  showCount?: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  skillId,
  size = 'sm',
  showCount,
}) => {
  const { activeSkillFilter, setActiveSkillFilter } = usePortfolio();
  const skill = SKILLS_MAP.get(skillId);
  const name = skill ? skill.name : skillId;
  const isSelected = activeSkillFilter === skillId;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSkillFilter(skillId);
  };

  const sizeClasses =
    size === 'md'
      ? 'px-3 py-1.5 text-sm font-medium'
      : 'px-2.5 py-1 text-[12.5px] font-medium';

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isSelected}
      aria-label={`Filter by skill: ${name}${isSelected ? ' (active, click to clear)' : ''}`}
      className={`inline-flex items-center gap-1.5 border transition-all duration-150 cursor-pointer select-none whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 ${sizeClasses} ${
        isSelected
          ? 'bg-zinc-950 text-white border-zinc-950 dark:bg-white dark:text-zinc-950 dark:border-white shadow-sm font-semibold'
          : 'bg-zinc-100 text-zinc-800 border-zinc-300 hover:bg-zinc-200 hover:border-zinc-400 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:border-zinc-700'
      }`}
    >
      <span>{name}</span>
      {typeof showCount === 'number' && (
        <span
          className={`text-[10px] px-1 py-0.2 font-mono ${
            isSelected
              ? 'bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900'
              : 'bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400'
          }`}
          aria-hidden="true"
        >
          {showCount}
        </span>
      )}
    </button>
  );
};
