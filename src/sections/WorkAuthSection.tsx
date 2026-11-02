import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SectionHeader } from '../components/SectionHeader';
import { FileCheck, ExternalLink, Check, Clock } from 'lucide-react';

export const WorkAuthSection: React.FC = () => {
  const { data } = usePortfolio();

  if (!data.workAuth) {
    return null;
  }

  return (
    <section
      id="work-auth"
      aria-label={data.navigation.workAuth}
      className="py-12 border-b border-zinc-200 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.workAuth.statusTitle}
          subtitle={data.workAuth.availability}
        />

        <div className="border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                <FileCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <span className="text-sm font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {data.workAuth.statusLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
                  {data.workAuth.statusBadge}
                </h3>
              </div>
            </div>

            <a
              href={data.workAuth.lawUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-zinc-900 dark:text-zinc-100 whitespace-nowrap self-start md:self-auto"
            >
              <span>{data.workAuth.lawLinkText}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-5 space-y-3">
            {[
              data.workAuth.rightsBullet1,
              data.workAuth.rightsBullet2,
              data.workAuth.rightsBullet3,
            ].map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-sm text-zinc-800 dark:text-zinc-200"
              >
                <div className="mt-0.5 p-0.5 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shrink-0">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
