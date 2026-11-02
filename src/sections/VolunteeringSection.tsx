import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SectionHeader } from '../components/SectionHeader';
import { SkillBadge } from '../components/SkillBadge';
import { HeartHandshake, Calendar } from 'lucide-react';

export const VolunteeringSection: React.FC = () => {
  const { data, locale, activeSkillFilter, isItemHighlighted } = usePortfolio();

  return (
    <section
      id="volunteering"
      aria-label={data.navigation.volunteering}
      className="py-12 sm:py-16 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.navigation.volunteering}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.volunteering.map((item) => {
            const isMatch = isItemHighlighted(item.skills);
            const isDimmed = activeSkillFilter !== null && !isMatch;

            return (
              <article
                key={item.id}
                data-has-skill={item.skills.join(' ')}
                className={`flex flex-col justify-between border p-6 transition-all duration-200 ${
                  isMatch
                    ? 'border-zinc-950 dark:border-white bg-zinc-100/90 dark:bg-zinc-900 shadow-xl ring-2 ring-zinc-900/20 dark:ring-white/20'
                    : 'border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700'
                } ${isDimmed ? 'opacity-50' : 'opacity-100'}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shrink-0">
                        <HeartHandshake className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-zinc-950 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="text-zinc-400 dark:text-zinc-500 mt-1 select-none"
                          aria-hidden="true"
                        >
                          ▪
                        </span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-1.5">
                  {item.skills.map((skillId) => (
                    <SkillBadge key={skillId} skillId={skillId} size="sm" />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
