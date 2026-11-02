import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SectionHeader } from '../components/SectionHeader';
import { SkillBadge } from '../components/SkillBadge';
import { SKILL_CATEGORIES, SKILLS_CATALOG } from '../data';
import { Code, Cloud, Shield, Layers, Wrench, RotateCcw } from 'lucide-react';
import { SkillCategoryId } from '../types/portfolio';

export const SkillsSection: React.FC = () => {
  const { data, locale, activeSkillFilter, clearActiveSkillFilter } = usePortfolio();

  // Helper to count how many portfolio items (experience, projects, education, publications) use a skill
  const getSkillUsageCount = (skillId: string): number => {
    let count = 0;
    count += data.experiences.filter((e) => e.skills.includes(skillId)).length;
    count += data.projects.filter((p) => p.skills.includes(skillId)).length;
    count += data.education.filter((ed) => ed.skills.includes(skillId)).length;
    count += data.publications.filter((pu) => pu.skills.includes(skillId)).length;
    return count;
  };

  const getCategoryIcon = (catId: SkillCategoryId) => {
    switch (catId) {
      case 'programming':
        return <Code className="w-4 h-4" aria-hidden="true" />;
      case 'cloud':
        return <Cloud className="w-4 h-4" aria-hidden="true" />;
      case 'security':
        return <Shield className="w-4 h-4" aria-hidden="true" />;
      case 'architecture':
        return <Layers className="w-4 h-4" aria-hidden="true" />;
      case 'tooling':
        return <Wrench className="w-4 h-4" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label={data.navigation.skills}
      className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <SectionHeader
            title={data.navigation.skills}
            subtitle={
              locale === 'de'
                ? 'Klicken Sie auf eine Kenntnis, um verwandte Berufserfahrungen, Projekte und Veröffentlichungen interaktiv hervorzuheben.'
                : 'Click any skill to highlight related experience, projects, and research across the portfolio.'
            }
          />

          {activeSkillFilter && (
            <button
              type="button"
              onClick={clearActiveSkillFilter}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{data.ui.clearFilter}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {SKILL_CATEGORIES.map((cat) => {
            const catSkills = SKILLS_CATALOG.filter(
              (s) => s.categoryId === cat.id
            );
            const localizedCat = data.categories[cat.id] || cat;

            return (
              <div
                key={cat.id}
                className="flex flex-col border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-5 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white">
                  <div className="p-1.5 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight">
                      {localizedCat.title}
                    </h3>
                    <span className="text-[12.5px] text-zinc-500 dark:text-zinc-400">
                      {catSkills.length} {data.ui.skillsUsedCount}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {catSkills.map((skill) => (
                    <SkillBadge
                      key={skill.id}
                      skillId={skill.id}
                      size="md"
                      showCount={getSkillUsageCount(skill.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
