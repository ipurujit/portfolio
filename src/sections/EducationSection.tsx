import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SectionHeader } from '../components/SectionHeader';
import { SkillBadge } from '../components/SkillBadge';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { data, locale, activeSkillFilter, isItemHighlighted } = usePortfolio();

  return (
    <section
      id="education"
      aria-label={data.navigation.education}
      className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.navigation.education}
        />

        <div className="space-y-6">
          {data.education.map((edu) => {
            const isMatch = isItemHighlighted(edu.skills);
            const isDimmed = activeSkillFilter !== null && !isMatch;

            return (
              <article
                key={edu.id}
                data-has-skill={edu.skills.join(' ')}
                className={`border p-6 md:p-8 transition-all duration-200 ${
                  isMatch
                    ? 'border-zinc-950 dark:border-white bg-zinc-100/90 dark:bg-zinc-900 shadow-xl ring-2 ring-zinc-900/20 dark:ring-white/20'
                    : 'border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700'
                } ${isDimmed ? 'opacity-50' : 'opacity-100'}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 mt-1 shrink-0">
                        <GraduationCap className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white leading-snug">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-block text-sm font-mono font-bold px-2 py-0.5 bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                        {edu.grade}
                      </span>
                      <span className="block text-[12.5px] font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="text-zinc-400 dark:text-zinc-500 mt-1 select-none"
                          aria-hidden="true"
                        >
                          ▪
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {edu.thesis && (
                    <div className="mt-4 p-3 border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70">
                      <span className="text-[12.5px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-0.5">
                        {edu.thesis.title}
                      </span>
                      <p className="text-sm sm:text-sm font-medium italic text-zinc-800 dark:text-zinc-200">
                        "{edu.thesis.topic}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="block text-[12.5px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                    {data.ui.skillsUsedCount}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.skills.map((skillId) => (
                      <SkillBadge key={skillId} skillId={skillId} size="sm" />
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
