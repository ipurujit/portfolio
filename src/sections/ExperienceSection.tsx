import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SectionHeader } from '../components/SectionHeader';
import { SkillBadge } from '../components/SkillBadge';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { data, locale, activeSkillFilter, isItemHighlighted } = usePortfolio();

  return (
    <section
      id="experience"
      aria-label={data.navigation.experience}
      className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.navigation.experience}
          subtitle={
            locale === 'de'
              ? '2+ Jahre Vollzeiterfahrung im Enterprise-Software-Engineering sowie Praxiserfahrung in Cyber Security und Cloud-Infrastruktur.'
              : '2+ years of full-time enterprise software development alongside dedicated cybersecurity and cloud security engineering.'
          }
        />

        <div className="space-y-6">
          {data.experiences.map((exp) => {
            const isMatch = isItemHighlighted(exp.skills);
            const isDimmed = activeSkillFilter !== null && !isMatch;

            return (
              <article
                key={exp.id}
                data-has-skill={exp.skills.join(' ')}
                className={`border p-6 md:p-8 transition-all duration-200 ${
                  isMatch
                    ? 'border-zinc-950 dark:border-white bg-zinc-100/90 dark:bg-zinc-900 shadow-xl ring-2 ring-zinc-900/20 dark:ring-white/20'
                    : 'border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700'
                } ${isDimmed ? 'opacity-50' : 'opacity-100'}`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-mono px-2 py-0.5 bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-zinc-950 dark:text-white hover:underline underline-offset-2"
                        >
                          <span className="font-semibold">{exp.company}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                        </a>
                      ) : (
                        <span className="font-semibold text-zinc-950 dark:text-white">
                          {exp.company}
                        </span>
                      )}

                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      <span className="mt-2 inline-flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-mono text-zinc-600 dark:text-zinc-400 self-start md:self-auto bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 border border-zinc-200 dark:border-zinc-700">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        className="text-zinc-400 dark:text-zinc-500 mt-1 select-none"
                        aria-hidden="true"
                      >
                        ▪
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="block text-[12.5px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                    {data.ui.skillsUsedCount}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skillId) => (
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
