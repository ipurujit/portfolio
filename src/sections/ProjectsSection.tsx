import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SectionHeader } from '../components/SectionHeader';
import { SkillBadge } from '../components/SkillBadge';
import { ExternalLink, Terminal, Shield, Cpu, Lock, Network, Database } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { data, locale, activeSkillFilter, isItemHighlighted } = usePortfolio();

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'agentic-ai-iam':
        return <Shield className="w-5 h-5" />;
      case 'iot-intrusion-detection':
      case 'network-intrusion-attack-path':
        return <Network className="w-5 h-5" />;
      case 'zkp-auth':
        return <Lock className="w-5 h-5" />;
      case 'saml-idp':
        return <Cpu className="w-5 h-5" />;
      case 'crime-analysis-system':
        return <Terminal className="w-5 h-5" />;
      case 'mycloudstore':
        return <Database className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="projects"
      aria-label={data.navigation.projects}
      className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.navigation.projects}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project) => {
            const isMatch = isItemHighlighted(project.skills);
            const isDimmed = activeSkillFilter !== null && !isMatch;

            return (
              <article
                key={project.id}
                data-has-skill={project.skills.join(' ')}
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
                        {getProjectIcon(project.id)}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white leading-snug">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-5 text-sm sm:text-sm text-zinc-600 dark:text-zinc-400">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="text-zinc-400 dark:text-zinc-500 mt-0.5 select-none"
                          aria-hidden="true"
                        >
                          ›
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((skillId) => (
                      <SkillBadge key={skillId} skillId={skillId} size="sm" />
                    ))}
                  </div>

                  {project.link && (
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-950 dark:text-white hover:underline underline-offset-2"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
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
