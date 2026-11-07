import { PortfolioData } from '../types/portfolio';
import { PERSONAL_INFO_PUBLIC, KEY_TO_SKILLS_MAP } from './basic';

export const EN_DATA: PortfolioData = {
  meta: {
    name: PERSONAL_INFO_PUBLIC.name,
    title: 'Cyber Security | Full-Stack Developer | Cloud, Software, AI Security',
    email: PERSONAL_INFO_PUBLIC.email,
    phone: PERSONAL_INFO_PUBLIC.phone,
    phoneDigitsOnly: PERSONAL_INFO_PUBLIC.phoneDigitsOnly,
    location: 'Germany',
    nationality: 'Indian',
    bio:
      `- Microsoft Azure Certified Cloud and AI Security Engineer
- Erasmus Mundus CyberMACS (Joint Master's in Applied Cybersecurity) Graduate
- 2+ years of full-time experience as a Software Engineer in Enterprise environments

I bring strong passion for Identity & Access Management (IAM), Multi-Cloud Security (AWS/GCP/Azure), Zero Trust Architecture, DevSecOps, and Application Security.

Also possess C1 German language proficiency (TestDaF TDN 5) and C2 English proficiency.
If you are looking for a highly motivated, qualified, and experienced software engineer with deep practical security expertise who is immediately available in Germany, I would be delighted to hear from you.`,
    openToWorkCTA: 'Open to full-time opportunities in Cloud/Application Security.\nAuthorized for immediate part-time employment (20 hours/week) in Germany',
    avatarAlt: PERSONAL_INFO_PUBLIC.name + ' professional portrait',
    avatarPhotoUrl: PERSONAL_INFO_PUBLIC.url.avatar,
    fallbackTitle: '',
    fallbackLocation: '',
  },
  navigation: {
    about: 'About',
    workAuth: 'Authorization',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    certifications: 'Certifications',
    publications: 'Publications',
    languages: 'Languages',
    volunteering: 'Volunteering',
    contact: 'Contact',
  },
  ui: {
    skillsFilterActive: 'Active skill filter:',
    clearFilter: 'Clear filter',
    skillsUsedCount: 'skills applied',
    relatedItemsFound: 'matching sections highlighted',
    jumpToFirst: 'Scroll to first match',
    viewCredential: 'View Credential',
    readPublication: 'Read Publication',
    authorsLabel: 'Authors:',
    viewCode: 'View Code / Details',
    skipToContent: 'Skip to main content',
    themeToggleDark: 'Switch to light theme',
    themeToggleLight: 'Switch to dark theme',
    langToggle: 'Switch language to German (Deutsch)',
    backToTop: 'Back to top',
    allRightsReserved: 'All rights reserved. Built with high-contrast accessibility.',
    othersLabel: 'Others',
    languageMenuLabel: 'Select Language',
    languageEnglish: 'English (en)',
    languageGerman: 'Deutsch (de)',
    profilesLinksLabel: 'Profiles & Links',
  },
  categories: {
    programming: {
      title: 'Programming & Scripting',
      description: 'Core languages for system development, APIs, data processing, and automation',
    },
    cloud: {
      title: 'Cloud & Infrastructure',
      description: 'Multi-cloud architectures, IaC, containers, and orchestration platforms',
    },
    security: {
      title: 'Security, IAM & DevSecOps',
      description: 'Identity federation, Zero Trust, vulnerability assessment, and compliance',
    },
    architecture: {
      title: 'Architecture & Frameworks',
      description: 'Enterprise backend, modern frontend, event brokers, and scalable databases',
    },
    tooling: {
      title: 'Quality, Tooling & Systems',
      description: 'Testing frameworks, CI/CD pipelines, system administration, and agile collaboration',
    },
  },
  experiences: [
    {
      id: 'madpat-cybersec',
      role: 'Cyber Security Intern',
      company: 'madpat GmbH',
      companyUrl: 'https://www.empplan.com/',
      location: 'Remseck am Neckar, Germany',
      period: 'Jul 2025 - Sep 2025',
      type: 'On-site / Internship',
      description: [
        'Automated dynamic API security testing and alerting.',
        'Automated Static Application Security Testing into CI/CD pipelines for early vulnerability detection.',
        'Analyzed, documented, and enhanced vulnerability and incident management processes according to ISO/IEC 27001 and BSI IT-Grundschutz standards.',
        'Conducted enterprise risk and threat assessments, mapping critical corporate asset groups to threat categories.',
      ],
      skills: KEY_TO_SKILLS_MAP.work_exp_madpat_cysec,
    },
    {
      id: 'sapient-asde',
      role: 'Associate Software Development Engineer',
      company: 'Publicis Sapient',
      companyUrl: 'https://www.publicissapient.com/',
      location: 'Mumbai, India',
      period: 'Jun 2022 - Aug 2024',
      type: 'Full-time',
      description: [
        'Promoted from ASDE 1 to ASDE 2; assumed advanced responsibilities in designing and delivering cloud-native full-stack enterprise solutions in Finance, Travel, and Telecom sectors.',
        'Engineered enterprise backend microservices with Spring Boot (WebFlux & MVC REST APIs), JUnit, Mockito, PostgreSQL, MongoDB, and Apache Kafka event brokers.',
        'Built performant frontend web applications with React.js and Next.js, and authored Python automation scripts for data pipeline processing.',
        'Architected secure multi-cloud environments across AWS, GCP, and Azure; managed Identity & Access Management (IAM) and federated authentication (OIDC, OAuth, SAML, LDAP).',
        'Implemented DevSecOps pipelines with Jenkins and SonarQube quality gates, Docker containerization, and Terraform Infrastructure as Code (IaC).',
      ],
      skills: KEY_TO_SKILLS_MAP.work_exp_sapient_asde,
    },
    {
      id: 'madpat-js',
      role: 'JavaScript Developer (Freelance)',
      company: 'madpat GmbH',
      companyUrl: 'https://www.empplan.com/',
      location: 'Remote (India)',
      period: 'Oct 2021 - May 2022',
      type: 'Part-time freelance during Bachelor studies',
      description: [
        'Engineered full-stack features using MEAN/MERN and TypeScript for EMPPLAN, a sales and promotion management platform.',
        'Scaled automated test coverage with Mocha and configured automated test stages within the Dockerized CI/CD pipeline.',
        'Optimized core database query routines, reducing response times for high-volume customer analytics dashboards.',
        'Collaborated closely with enterprise client teams in agile sprints to translate feature requests into technical delivery and documentation.',
      ],
      skills: KEY_TO_SKILLS_MAP.work_exp_madpat_js,
    },
    {
      id: 'booksapp-backend',
      role: 'Backend Developer (Freelance)',
      company: 'BooksApp',
      location: 'Remote (India)',
      period: 'Jan 2021 - May 2021',
      type: 'Freelance project during Bachelor studies',
      description: [
        'Built an end-to-end Node.js & Express.js REST API server from scratch for digitization of the notarization workflows.',
        'Designed RBAC-driven authorization, comprehensive error handling, and API documentation verified through Postman.',
        'Modeled scalable database schemas using Mongoose ODM for MongoDB and integrated Intuit QuickBooks for automated invoicing.',
        'Configured AWS IAM roles, policies, S3 bucket security policies and managed the cloud infrastructure.',
      ],
      skills: KEY_TO_SKILLS_MAP.work_exp_booksapp_backend,
    },
  ],
  projects: [
    {
      id: 'agentic-ai-iam',
      title: 'Agentic AI Identity and Access Management for Multi-Cloud',
      description:
        'A zero-trust identity and access management architecture handling authentication, authorization, and accounting for AI agents for securing access to multi-cloud workloads',
      highlights: [
        'Implements Zero Trust Architecture using Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs).',
        'Provides cryptographically verifiable delegation chains (similar to PKI) and OIDC workload federation.',
        'Integrates Google Cloud Workload Identity Federation and Azure Entra Workload ID with Terraform automation.',
      ],
      skills: KEY_TO_SKILLS_MAP.project_agentic_ai_iam,
      link: PERSONAL_INFO_PUBLIC.url.ciitPaper,
    },
    {
      id: 'network-intrusion-attack-path',
      title: 'Graph-Based Machine Learning for Network Intrusion Edge Classification and Attack Source Tracking',
      description:
        'Binary traffic classification using Random Forest, Support Vector Machine, and Multi-Layer Perceptron models with accuracies of 95.66%, 88.71%, and 93.86% respectively; includes attack path tracking back to the source',
      highlights: [
      ],
      skills: KEY_TO_SKILLS_MAP.project_network_intrusion_attack_path,
    },
    {
      id: 'zkp-auth',
      title: 'Zero Knowledge Proof (ZKP) Passwordless Authentication System',
      description:
        'Implementation of the Schnorr Zero-Knowledge Proof protocol in Java, enabling secure user authentication and registration without transmitting passwords to the server.',
      highlights: [
      ],
      skills: KEY_TO_SKILLS_MAP.project_zkp_auth,
    },
    {
      id: 'saml-idp',
      title: 'Spring Boot SAML 2.0 Identity Provider (IdP)',
      description:
        'A SAML 2.0 Identity Provider implemented with Spring Security 6, supporting assertion encryption, and single sign-on (SSO).',
      highlights: [
      ],
      skills: KEY_TO_SKILLS_MAP.project_saml_idp,
    },
    {
      id: 'crime-analysis-system',
      title: 'Geo-Intelligent Crime Category Prediction',
      description:
        'A mobile app for people to view crime hotspots on a map and a web portal for law enforcement with crime category forecasting.',
      highlights: [
        '92.55% crime category prediction accuracy.',
        'Published and presented at the IEEE TENSYMP International Conference 2022.',
      ],
      skills: KEY_TO_SKILLS_MAP.project_crime_analysis_system,
      link: 'https://ieeexplore.ieee.org/document/9864342',
    },
    {
      id: 'mycloudstore',
      title: 'MyCloudStore: Storage-as-a-Service Platform',
      description:
        'A Storage-as-a-Service solution deployed on AWS EC2 utilizing Docker container orchestration, Nginx reverse proxying, and the MERN stack.',
      highlights: [
      ],
      skills: KEY_TO_SKILLS_MAP.project_mycloudstore,
    },
  ],
  education: [
    {
      id: 'cybermacs-master',
      degree: "Erasmus Mundus CyberMACS (Joint Master's in Applied Cybersecurity)",
      institution: 'Kadir Has University (KHAS) & Faculty of Computer Science and Engineering (FINKI) at Ss. Cyril and Methodius University (UKIM)',
      location: 'Istanbul, Türkiye & Skopje, North Macedonia',
      period: 'Sep 2024 - Sep 2026',
      grade: '3.92 / 4.00 GPA',
      details: [
        'Prestigious EU Erasmus Mundus Scholarship recipient.',
        'Core curriculum: Digital Identity, Penetration Testing, Web & AI Security, Network Security, Applied Cryptography, Privacy in Machine Learning, and Information Security Management.',
        'Received degrees: Master of Science (M.Sc.) in Cyber Security from KHAS and Master of Science (M.Sc.) in Security, Cryptography and Coding from FINKI UKIM.'
      ],
      thesis: {
        title: 'Master Thesis',
        topic: 'Identity and Access Management for Securing Multi-Cloud Access for Agentic AI Workloads',
      },
      skills: KEY_TO_SKILLS_MAP.edu_cybermacs,
    },
    {
      id: 'mumbai-bachelor',
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'University of Mumbai',
      location: 'Mumbai, India',
      period: 'Jul 2018 - Jun 2022',
      grade: '9.36 / 10.00 CGPA',
      details: [
        'Curriculum: Software Engineering, Operating Systems, Computer Networks, System Security, Cryptography, Natural Language Processing, Machine Learning, and Databases.',
        'Capstone: Geo-Intelligent Crime Prediction & Hotspot Mapping (published IEEE paper).',
      ],
      skills: KEY_TO_SKILLS_MAP.edu_bachelor,
    },
  ],
  certifications: [
    {
      id: 'sc-500',
      title: 'Microsoft Certified: Cloud and AI Security Engineer Associate (SC-500)',
      issuer: 'Microsoft Azure',
      date: 'Oct 2026',
      skills: ['azure', 'iam', 'zerotrust', 'security'],
    },
    {
      id: 'ccna',
      title: 'CCNA - Cisco Certified Network Associate',
      issuer: 'Cisco Systems',
      date: 'Jul 2025',
      skills: ['linux', 'security', 'c'],
    },
    {
      id: 'testdaf',
      title: 'TestDaF (Test Deutsch als Fremdsprache) [Score: 64/80 (TDN 5)]',
      issuer: 'g.a.s.t. e.V.',
      date: 'May 2024',
      skills: [],
    },
    {
      id: 'az-900',
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft Azure',
      date: 'May 2023',
      skills: ['azure', 'cloud'],
    },
    {
      id: 'gcp-cdl',
      title: 'Google Cloud Certified Cloud Digital Leader',
      issuer: 'Google Cloud',
      date: 'Oct 2022',
      skills: ['gcp', 'cloud'],
    },
    {
      id: 'aws-ccp',
      title: 'AWS Certified Cloud Practitioner (CLF-01)',
      issuer: 'Amazon Web Services',
      date: 'Sep 2022',
      skills: KEY_TO_SKILLS_MAP.cert_aws_ccp,
    },
    {
      id: 'tcs-ml',
      title: 'TCS iON IHC Machine Learning Specialist',
      issuer: 'TCS iON',
      date: 'Nov 2021',
      skills: KEY_TO_SKILLS_MAP.cert_tcs_ml,
    },
    {
      id: 'cisco-cyberops',
      title: 'Cisco CyberOps Associate Course',
      issuer: 'Cisco Networking Academy',
      date: 'Sep 2021',
      skills: KEY_TO_SKILLS_MAP.cert_cisco_cyberops,
    },
  ],
  publications: [
    {
      id: 'baeldung-10-articles',
      type: 'article',
      authors: PERSONAL_INFO_PUBLIC.name + ' and Baeldung Editorial Team',
      title: 'Author of 10 Technical Articles on Baeldung Linux',
      venue: 'Baeldung Linux',
      date: '2023 - 2024',
      location: 'Online',
      description:
        'Tutorials on Linux system administration, network security, SSH hardening, TLS certificate verification, firewall rules (iptables/nftables), file systems, and Bash scripting.',
      url: PERSONAL_INFO_PUBLIC.url.baeldung,
      urlText: 'Visit Baeldung Author Profile',
      skills: KEY_TO_SKILLS_MAP.publication_baeldung,
    },
    {
      id: 'iacyc-2026',
      type: 'conference',
      authors: PERSONAL_INFO_PUBLIC.name + ', ' + PERSONAL_INFO_PUBLIC.coauthors.mkg + ', ' + PERSONAL_INFO_PUBLIC.coauthors.oc,
      title:
        'A Cloud-Agnostic IAM Framework for Agentic AI in Multi-Cloud Environments Using Decentralized Identifiers and Verifiable Credentials',
      venue: 'IACyC 2026 Conference (International Applied Cybersecurity Conference)',
      date: 'Sep 2026',
      location: 'Istanbul, Türkiye',
      description:
        'Published IAM framework based on Master thesis with theoretical evaluation',
      skills: KEY_TO_SKILLS_MAP.publication_iacyc_2026,
    },
    {
      id: 'ciit-2026',
      type: 'conference',
      authors: PERSONAL_INFO_PUBLIC.name + ', ' + PERSONAL_INFO_PUBLIC.coauthors.mkg,
      title: 'Identity and Access Management for Securing Multi-Cloud Access for Agentic AI Workloads',
      venue: 'CIIT 2026 Conference (Conference on Informatics and Information Technologies)',
      date: 'Apr 2026',
      location: 'Struga, North Macedonia',
      description:
        'Student research paper for an IAM framework for Multi-Cloud AI Workloads',
      url: PERSONAL_INFO_PUBLIC.url.ciitPaper,
      urlText: 'View CIIT 2026 Proceedings (pp. 309-320)',
      skills: KEY_TO_SKILLS_MAP.publication_ciit_2026,
    },
    {
      id: 'ieee-tensymp-2022',
      type: 'research',
      authors: PERSONAL_INFO_PUBLIC.coauthors.ss + ', ' + PERSONAL_INFO_PUBLIC.coauthors.au + ', ' + PERSONAL_INFO_PUBLIC.name + ', ' + PERSONAL_INFO_PUBLIC.coauthors.sd,
      authorHint: 'The first three authors contributed equally.',
      title: 'Fuzzy Based Geo-Spatial Crime Category Prediction for Crime Mapping and Safe Route Travel',
      venue: 'IEEE TENSYMP 2022 International Conference',
      date: 'Jul 2022',
      location: 'Mumbai, India',
      description:
        'Published Bachelor capstone research presenting spatial fuzzy categorization algorithms for proactive law enforcement and citizen safe routing.',
      url: PERSONAL_INFO_PUBLIC.url.bachelorPaper,
      urlText: 'IEEE Xplore DOI: 10.1109/TENSYMP54529.2022.9864342',
      skills: KEY_TO_SKILLS_MAP.publication_ieee_2022,
    },
  ],
  languages: [
    {
      id: 'de',
      language: 'German',
      level: 'C1',
      notes: 'TestDaF Score: 64/80 (TDN 5)',
    },
    {
      id: 'en',
      language: 'English',
      level: 'C2',
    },
    {
      id: 'ta',
      language: 'Tamil',
      level: 'Mothertongue',
    },
    {
      id: 'hi',
      language: 'Hindi',
      level: 'C1',
    },
    {
      id: 'tr',
      language: 'Turkish',
      level: 'A2',
    },
  ],
  volunteering: [
    {
      id: 'nss-sowrait',
      role: 'National Service Scheme (NSS) Volunteer',
      organization: '',
      period: 'Sep 2019 - May 2021',
      description: [
        'Organized and engaged in community service events for the betterment of society, such as for women empowerment, education of underprivileged children, spreading health safety awareness during the pandemic.',
        'Attended a 7-day camp in a rural area working on rural development.',
        'Won prizes at university-level literary competitions conducted for social cause: Rap singing (on women empowerment, COVID awareness), poem writing (on AIDS awareness)'
      ],
      skills: [],
    },
    {
      id: 'orph-leader',
      role: 'Orphanage Co-ordinator',
      organization: '',
      period: 'Aug 2019 - May 2020',
      description: [
        'Managed a team of over 70 student volunteers to visit and teach children at orphanages.',
        'The team completed over 250 volunteer visits during my tenure.',
      ],
      skills: [],
    },
  ],
};
