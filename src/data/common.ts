import { SkillCategory, SkillItem, SocialLink } from '../types/portfolio';
import { PERSONAL_INFO_PUBLIC } from './basic';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: PERSONAL_INFO_PUBLIC.url.linkedin,
    ariaLabel: PERSONAL_INFO_PUBLIC.name +'on LinkedIn',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: PERSONAL_INFO_PUBLIC.url.github,
    ariaLabel: PERSONAL_INFO_PUBLIC.name +'on GitHub',
  },
  {
    id: 'scholar',
    label: 'Google Scholar',
    url: PERSONAL_INFO_PUBLIC.url.scholar,
    ariaLabel: PERSONAL_INFO_PUBLIC.name +'on Google Scholar',
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:' + PERSONAL_INFO_PUBLIC.email,
    ariaLabel: 'Send email to ' + PERSONAL_INFO_PUBLIC.email,
  },
  {
    id: 'baeldung',
    label: 'Baeldung Linux',
    url: PERSONAL_INFO_PUBLIC.url.baeldung,
    ariaLabel: PERSONAL_INFO_PUBLIC.name +'author profile on Baeldung Linux',
  },
  /*
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    url: 'https://wa.me/' + PERSONAL_INFO_PUBLIC.phoneDigitsOnly + '?text=Namaste',
    ariaLabel: 'Contact' + PERSONAL_INFO_PUBLIC.name + ' on WhatsApp',
  },
  */
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'security',
    title: 'Security, IAM & DevSecOps',
    description: 'Identity federation, Zero Trust, vulnerability assessment, and compliance',
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Multi-cloud architectures, IaC, containers, and orchestration platforms',
  },
  {
    id: 'architecture',
    title: 'Architecture & Frameworks',
    description: 'Enterprise backend, modern frontend, event brokers, and scalable databases',
  },
  {
    id: 'programming',
    title: 'Programming & Scripting',
    description: 'Core languages for system development, APIs, data processing, and automation',
  },
  {
    id: 'tooling',
    title: 'Quality, Tooling & Systems',
    description: 'Testing frameworks, CI/CD pipelines, system administration, and agile collaboration',
  },
];

export const SKILLS_CATALOG: SkillItem[] = [
  // Programming & Scripting
  { id: 'java', name: 'Java', categoryId: 'programming' },
  { id: 'typescript', name: 'TypeScript', categoryId: 'programming' },
  { id: 'javascript', name: 'JavaScript', categoryId: 'programming' },
  { id: 'python', name: 'Python', categoryId: 'programming' },
  { id: 'bash', name: 'Bash Scripting', categoryId: 'programming' },
  { id: 'c', name: 'C', categoryId: 'programming' },
  { id: 'cpp', name: 'C++', categoryId: 'programming' },
  { id: 'sql', name: 'SQL', categoryId: 'programming' },

  // Cloud & Infrastructure
  { id: 'aws', name: 'AWS', categoryId: 'cloud' },
  { id: 'gcp', name: 'Google Cloud Platform (GCP)', categoryId: 'cloud' },
  { id: 'azure', name: 'Microsoft Azure', categoryId: 'cloud' },
  { id: 'terraform', name: 'Terraform (IaC)', categoryId: 'cloud' },
  { id: 'docker', name: 'Docker', categoryId: 'cloud' },
  { id: 'kubernetes', name: 'Kubernetes', categoryId: 'cloud' },
  { id: 'nginx', name: 'Nginx', categoryId: 'cloud' },
  { id: 'firebase', name: 'Firebase', categoryId: 'cloud' },

  // Security, IAM & DevSecOps
  { id: 'iam', name: 'Identity & Access Management (IAM)', categoryId: 'security' },
  { id: 'oidc-oauth', name: 'OpenID Connect & OAuth 2.0', categoryId: 'security' },
  { id: 'saml', name: 'SAML 2.0', categoryId: 'security' },
  { id: 'ldap', name: 'LDAP', categoryId: 'security' },
  { id: 'sso', name: 'Single Sign-On (SSO)', categoryId: 'security' },
  { id: 'zerotrust', name: 'Zero Trust Architecture', categoryId: 'security' },
  { id: 'dids-vcs', name: 'DIDs & Verifiable Credentials', categoryId: 'security' },
  { id: 'vault', name: 'HashiCorp Vault', categoryId: 'security' },
  { id: 'rbac-abac', name: 'RBAC / ABAC', categoryId: 'security' },
  { id: 'pki', name: 'PKI', categoryId: 'security' },
  { id: 'cryptography', name: 'Cryptography', categoryId: 'security' },
  { id: 'owasp', name: 'OWASP Top 10', categoryId: 'security' },
  { id: 'zap', name: 'OWASP ZAP (DAST)', categoryId: 'security' },
  { id: 'sonarqube', name: 'SonarQube (SAST)', categoryId: 'security' },
  { id: 'iso27001', name: 'ISO/IEC 27001', categoryId: 'security' },
  { id: 'bsiit', name: 'BSI IT-Grundschutz', categoryId: 'security' },
  { id: 'zkp', name: 'Zero Knowledge Proofs (Schnorr ZKP)', categoryId: 'security' },
  { id: 'vuln-management', name: 'Vulnerability Management', categoryId: 'security' },
  { id: 'incident-management', name: 'Incident Management and Response', categoryId: 'security' },

  // Architecture & Frameworks
  { id: 'springboot', name: 'Spring Boot (WebFlux & MVC)', categoryId: 'architecture' },
  { id: 'springsecurity', name: 'Spring Security', categoryId: 'architecture' },
  { id: 'react', name: 'React.js', categoryId: 'architecture' },
  { id: 'nextjs', name: 'Next.js', categoryId: 'architecture' },
  { id: 'nodejs', name: 'Node.js', categoryId: 'architecture' },
  { id: 'express', name: 'Express.js', categoryId: 'architecture' },
  { id: 'messagequeue', name: 'Message Queues', categoryId: 'architecture' },
  { id: 'rabbitmq', name: 'RabbitMQ', categoryId: 'architecture' },
  { id: 'kafka', name: 'Apache Kafka', categoryId: 'architecture' },
  { id: 'postgresql', name: 'PostgreSQL', categoryId: 'architecture' },
  { id: 'mongodb', name: 'MongoDB & Mongoose', categoryId: 'architecture' },
  { id: 'rest', name: 'REST APIs & Microservices', categoryId: 'architecture' },

  // Quality, Tooling & Systems
  { id: 'linux', name: 'Linux System Administration', categoryId: 'tooling' },
  { id: 'jenkins', name: 'Jenkins CI/CD', categoryId: 'tooling' },
  { id: 'git', name: 'Git', categoryId: 'tooling' },
  { id: 'junit-mockito', name: 'JUnit & Mockito', categoryId: 'tooling' },
  { id: 'mocha', name: 'Mocha.js', categoryId: 'tooling' },
  { id: 'postman', name: 'Postman', categoryId: 'tooling' },
  { id: 'jira-confluence', name: 'Jira & Confluence', categoryId: 'tooling' },
  { id: 'camunda', name: 'Camunda BPM', categoryId: 'tooling' },
];

export const SKILLS_MAP = new Map<string, SkillItem>(
  SKILLS_CATALOG.map((s) => [s.id, s])
);
