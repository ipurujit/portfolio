import { Locale, PortfolioData } from '../types/portfolio';
import { EN_DATA } from './en';
import { DE_DATA } from './de';
import { SOCIAL_LINKS, SKILL_CATEGORIES, SKILLS_CATALOG, SKILLS_MAP } from './common';

export function getPortfolioData(locale: Locale): PortfolioData {
  return locale === 'de' ? DE_DATA : EN_DATA;
}

export { EN_DATA, DE_DATA, SOCIAL_LINKS, SKILL_CATEGORIES, SKILLS_CATALOG, SKILLS_MAP };
