import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SectionHeader } from '../components/SectionHeader';
import { SkillBadge } from '../components/SkillBadge';
import { BookOpen, ExternalLink, Calendar, MapPin, FileText } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const { data, locale, activeSkillFilter, isItemHighlighted } = usePortfolio();

  return (
    <section
      id="publications"
      aria-label={data.navigation.publications}
      className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.navigation.publications}
        />

        <div className="space-y-5">
          {data.publications.map((pub) => {
            const isMatch = isItemHighlighted(pub.skills);
            const isDimmed = activeSkillFilter !== null && !isMatch;

            return (
              <article
                key={pub.id}
                data-has-skill={pub.skills.join(' ')}
                className={`border p-6 transition-all duration-200 ${
                  isMatch
                    ? 'border-zinc-950 dark:border-white bg-zinc-100/90 dark:bg-zinc-900 shadow-xl ring-2 ring-zinc-900/20 dark:ring-white/20'
                    : 'border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700'
                } ${isDimmed ? 'opacity-50' : 'opacity-100'}`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shrink-0 mt-0.5">
                      {pub.type === 'article' ? (
                        <FileText className="w-5 h-5" />
                      ) : (
                        <BookOpen className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <div className="mb-1">
                        <span className="text-[12.5px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                          {pub.venue}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white leading-snug">
                        {pub.title}
                      </h3>
                      {pub.location && (
                        <span className="mt-2 flex w-fit items-center gap-1.5 text-sm font-mono text-zinc-500 dark:text-zinc-400">
                          <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
                          {pub.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-mono text-zinc-600 dark:text-zinc-400 self-start md:self-auto bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 border border-zinc-200 dark:border-zinc-700 shrink-0">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{pub.date}</span>
                  </div>
                </div>

                {pub.description && (
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-4 leading-relaxed">
                    {pub.description}
                  </p>
                )}

                <div className="mt-5 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.skills.map((skillId) => (
                      <SkillBadge key={skillId} skillId={skillId} size="sm" />
                    ))}
                  </div>

                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-950 dark:text-white hover:underline underline-offset-2 self-start sm:self-auto shrink-0"
                    >
                      <span>{pub.urlText || data.ui.readPublication}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
