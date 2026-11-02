import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  id,
}) => {
  return (
    <div className="mb-8" id={id}>
      <div className="flex items-baseline gap-3 mb-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className="w-12 h-px bg-zinc-300 dark:bg-zinc-700 mt-4"
        aria-hidden="true"
      />
    </div>
  );
};
