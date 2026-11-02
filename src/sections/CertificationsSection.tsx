import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SectionHeader } from '../components/SectionHeader';
import { SkillBadge } from '../components/SkillBadge';

export const CertificationsSection: React.FC = () => {
  const { data, locale, activeSkillFilter, isItemHighlighted } = usePortfolio();

  return (
    <section
      id="certifications"
      aria-label={data.navigation.certifications}
      className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.navigation.certifications}
        />

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2 text-left">
            {/* <thead>
              <tr className="text-sm font-semibold uppercase text-zinc-500 dark:text-zinc-400">
                <th scope="col" className="px-4 pb-1">
                  {locale === 'de' ? 'Zertifizierung' : 'Certification'}
                </th>
                <th scope="col" className="px-4 pb-1">
                  {locale === 'de' ? 'Anbieter' : 'Issuer'}
                </th>
                <th scope="col" className="px-4 pb-1">
                  {locale === 'de' ? 'Datum' : 'Date'}
                </th>
              </tr>
            </thead> */}
            <tbody>
              {data.certifications.map((cert) => {
                const isMatch = isItemHighlighted(cert.skills);
                const isDimmed = activeSkillFilter !== null && cert.skills.length > 0 && !isMatch;
                const rowStyle = isMatch
                  ? 'bg-zinc-100/90 dark:bg-zinc-900 ring-1 ring-zinc-900/20 dark:ring-white/20'
                  : 'bg-zinc-50 dark:bg-zinc-900/40';

                return (
                  <tr
                    key={cert.id}
                    data-has-skill={cert.skills.join(' ')}
                    className={`${rowStyle} ${isDimmed ? 'opacity-50' : 'opacity-100'}`}
                  >
                    <td className="rounded-l-lg px-4 py-3 text-sm font-bold text-zinc-950 dark:text-white">
                      <div>{cert.title}</div>
                      {cert.skills.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {cert.skills.map((skillId) => (
                            <SkillBadge key={skillId} skillId={skillId} size="sm" />
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">
                      {cert.issuer}
                    </td>
                    <td className="rounded-r-lg px-4 py-3 text-sm font-mono text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                      {cert.date}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
