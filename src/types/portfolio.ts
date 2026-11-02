export type Locale = 'en' | 'de';
export type Theme = 'dark' | 'light';

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  ariaLabel: string;
}

export type SkillCategoryId =
  | 'programming'
  | 'cloud'
  | 'security'
  | 'architecture'
  | 'tooling';

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  description: string;
}

export interface SkillItem {
  id: string;
  name: string;
  categoryId: SkillCategoryId;
}

export interface WorkAuthInfo {
  statusTitle: string;
  statusBadge: string;
  rightsBullet1: string;
  rightsBullet2: string;
  rightsBullet3: string;
  lawLinkText: string;
  lawUrl: string;
  availability: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[]; // skill IDs
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  skills: string[]; // skill IDs
  link?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details: string[];
  thesis?: {
    title: string;
    topic: string;
  };
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  skills: string[];
}

export interface PublicationItem {
  id: string;
  type: 'article' | 'conference' | 'research';
  title: string;
  venue: string;
  date: string;
  location?: string;
  description?: string;
  url?: string;
  urlText?: string;
  skills: string[];
}

export interface LanguageItem {
  id: string;
  language: string;
  level: string;
  notes?: string;
}

export interface VolunteeringItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface PortfolioData {
  meta: {
    name: string;
    title: string;
    email: string;
    phone?: string;
    phoneDigitsOnly?: string;
    location: string;
    nationality: string;
    bio: string;
    openToWorkCTA: string;
    avatarAlt: string;
    avatarPhotoUrl: string;
    fallbackTitle: string;
    fallbackLocation: string;
    resumePdfUrl?: string;
  };
  workAuth?: WorkAuthInfo & {
    statusLabel: string;
  };
  navigation: {
    about: string;
    workAuth: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    certifications: string;
    publications: string;
    languages: string;
    volunteering: string;
    contact: string;
  };
  ui: {
    skillsFilterActive: string;
    clearFilter: string;
    skillsUsedCount: string;
    relatedItemsFound: string;
    jumpToFirst: string;
    viewCredential: string;
    readPublication: string;
    viewCode: string;
    skipToContent: string;
    themeToggleDark: string;
    themeToggleLight: string;
    langToggle: string;
    backToTop: string;
    allRightsReserved: string;
    othersLabel: string;
    languageMenuLabel: string;
    languageEnglish: string;
    languageGerman: string;
    profilesLinksLabel: string;
  };
  categories: Record<SkillCategoryId, { title: string; description: string }>;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  publications: PublicationItem[];
  languages: LanguageItem[];
  volunteering: VolunteeringItem[];
}
