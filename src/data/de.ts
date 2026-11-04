import { PortfolioData } from '../types/portfolio';
import { PERSONAL_INFO_PUBLIC, KEY_TO_SKILLS_MAP } from './basic';

export const DE_DATA: PortfolioData = {
  meta: {
    name: PERSONAL_INFO_PUBLIC.name,
    title: 'Cyber Security | Full-Stack Entwickler | Cloud-, Software-, KI-Sicherheit',
    email: PERSONAL_INFO_PUBLIC.email,
    phone: PERSONAL_INFO_PUBLIC.phone,
    phoneDigitsOnly: PERSONAL_INFO_PUBLIC.phoneDigitsOnly,
    location: 'Deutschland',
    nationality: 'Inder',
    bio:
      `- Microsoft Azure Zertifizierter Cloud- und KI-Security Engineer
- Absolvent des Erasmus-Mundus-Doppelmasterabschlusses in angewandter Cybersicherheit
- 2+ Jahren Vollzeiterfahrung als Software Engineer im Enterprise-Umfeld

Ich bringe Große Leidenschaft für Themen wie Identity & Access Management (IAM), Multi-Cloud-Sicherheit (AWS/GCP/Azure), Zero-Trust-Architektur, DevSecOps sowie Anwendungssecurity mit.

Weiterhin C1-Deutschkenntnisse (TestDaF TDN 5) und C2-Englisch.
Wenn Sie einen hochmotivierten, qualifizierten und erfahrenen Softwareentwickler mit tiefe praktische Sicherheitskenntnisse suchen, der sofort in Deutschland verfügbar ist, freue ich mich auf Ihre Kontaktaufnahme.`,
    openToWorkCTA: 'Offen für Vollzeitstellen in Cloud/Application-Security\nAutorisiert zur sofortigen Teilzeitbeschäftigung (20 Stunden/Woche) in Deutschland',
    avatarAlt: PERSONAL_INFO_PUBLIC.name + ' professionelles Porträt',
    avatarPhotoUrl: PERSONAL_INFO_PUBLIC.url.avatar,
    fallbackTitle: '',
    fallbackLocation: '',
  },
  navigation: {
    about: 'Über mich',
    workAuth: 'Arbeitserlaubnis',
    skills: 'Kenntnisse',
    experience: 'Berufserfahrung',
    projects: 'Projekte',
    education: 'Bildung',
    certifications: 'Zertifizierungen',
    publications: 'Publikationen',
    languages: 'Sprachen',
    volunteering: 'Engagement',
    contact: 'Kontakt',
  },
  ui: {
    skillsFilterActive: 'Aktiver Kenntnis-Filter:',
    clearFilter: 'Filter zurücksetzen',
    skillsUsedCount: 'angewandte Kenntnisse',
    relatedItemsFound: 'passende Einträge hervorgehoben',
    jumpToFirst: 'Zum ersten Treffer springen',
    viewCredential: 'Zertifikat ansehen',
    readPublication: 'Publikation lesen',
    viewCode: 'Quellcode / Details ansehen',
    skipToContent: 'Zum Hauptinhalt springen',
    themeToggleDark: 'Zu hellem Design wechseln',
    themeToggleLight: 'Zu dunklem Design wechseln',
    langToggle: 'Sprache auf Englisch (English) umschalten',
    backToTop: 'Nach oben',
    allRightsReserved: 'Alle Rechte vorbehalten. Barrierefrei gestaltet mit hohem Kontrast.',
    othersLabel: 'Weitere',
    languageMenuLabel: 'Sprache auswählen',
    languageEnglish: 'English (en)',
    languageGerman: 'Deutsch (de)',
    profilesLinksLabel: 'Profile & Links',
  },
  categories: {
    programming: {
      title: 'Programmiersprachen & Skripte',
      description: 'Kernsprachen für Systementwicklung, APIs, Datenverarbeitung und Automatisierung',
    },
    cloud: {
      title: 'Cloud & Infrastruktur',
      description: 'Multi-Cloud-Architekturen, IaC, Containerisierung und Orchestrierungsplattformen',
    },
    security: {
      title: 'Sicherheit, IAM & DevSecOps',
      description: 'Identitätsföderation, Zero Trust, Schwachstellenanalyse und Sicherheitsstandards',
    },
    architecture: {
      title: 'Architektur & Frameworks',
      description: 'Enterprise-Backend, modernes Frontend, Event-Broker und skalierbare Datenbanken',
    },
    tooling: {
      title: 'Qualität, Tooling & Systeme',
      description: 'Test-Frameworks, CI/CD-Pipelines, Linux-Systemadministration und agile Zusammenarbeit',
    },
  },
  experiences: [
    {
      id: 'madpat-cybersec',
      role: 'Cyber Security Praktikant',
      company: 'madpat GmbH',
      companyUrl: 'https://www.empplan.com/',
      location: 'Remseck am Neckar, Deutschland',
      period: '07.2025 - 09.2025',
      type: 'Praktikum vor Ort',
      description: [
        'Automatisierung von dynamischen API-Sicherheitstests mit Sicherheitswarnungen.',
        'Automatisierung statischer Code-Scans in CI/CD-Pipelines zur frühen Erkennung von Softwareschwachstellen.',
        'Analyse, Dokumentation und Anpassung von Schwachstellen- und Vorfallsmanagementprozessen nach ISO/IEC 27001 und BSI IT-Grundschutz.',
        'Durchführung von detaillierten Risiko- und Bedrohungsanalysen für Unternehmen und Zuordnung von Bedrohungskategorien zu Asset-Gruppen.',
      ],
      skills: KEY_TO_SKILLS_MAP.work_exp_madpat_cysec,
    },
    {
      id: 'sapient-asde',
      role: 'Associate Software Development Engineer',
      company: 'Publicis Sapient',
      companyUrl: 'https://www.publicissapient.com/',
      location: 'Mumbai, Indien',
      period: '06.2022 - 08.2024',
      type: 'Vollzeit',
      description: [
        'Aufgestiegen von ASDE 1 zu ASDE 2; erweiterte Verantwortung bei Design und Umsetzung von Cloud-Native-Enterprise-Projekten in den Bereichen Finanzen, Reisen und Telekom.',
        'Implementierung von resilienten Backend-Microservices mit Spring Boot (WebFlux & MVC REST APIs), Unit-Tests mit JUnit und Mockito, Datenbanken (PostgreSQL, MongoDB) sowie Apache Kafka Event-Brokern.',
        'Entwicklung von Frontend-Webanwendungen mit React.js und Next.js; Erstellung von Python-Skripten zur Datenanalyse und Workflow-Automatisierung.',
        'Sicheres Architektur- und Systemdesign im Multi-Cloud-Umfeld (AWS/GCP/Azure); Verwaltung von Identity & Access Management (IAM) und föderierten Identitäten (OIDC, OAuth, SAML, LDAP).',
        'Umsetzung von DevSecOps-Pipelines mit Jenkins und SonarQube-Qualitäts-Gates, Docker-Containerisierung und Terraform für Infrastruktur als Code (IaC).',
      ],
      skills: KEY_TO_SKILLS_MAP.work_exp_sapient_asde,
    },
    {
      id: 'madpat-js',
      role: 'JavaScript Entwickler (freiberuflich)',
      company: 'madpat GmbH',
      companyUrl: 'https://www.empplan.com/',
      location: 'Remote (Indien)',
      period: '10.2021 - 05.2022',
      type: 'Teilzeit freiberuflich neben dem Bachelorstudium',
      description: [
        'Full-Stack-Feature-Entwicklung mit MEAN/MERN und TypeScript für EMPPLAN, eine Sales- und Promotionmanagement-Plattform.',
        'Erweiterung der Testabdeckung mit Mocha Unittesting und Einbindung automatisierter Testphasen in die CI/CD-Pipeline.',
        'Reduzierung von Abfrage- und Antwortzeiten für zentrale Funktionen, insbesondere Dashboards für Kundenanalysen.',
        'Teilnahme an regelmäßigen agilen Sprint-Calls mit dem Kunden, Klärung technischer Anforderungen sowie Pflege und Erweiterung der Dokumentation.',
      ],
      skills: KEY_TO_SKILLS_MAP.work_exp_madpat_js,
    },
    {
      id: 'booksapp-backend',
      role: 'Backend Entwickler (freiberuflich)',
      company: 'BooksApp',
      location: 'Remote (Indien)',
      period: '01.2021 - 05.2021',
      type: 'Freiberufliches Projekt neben dem Bachelorstudium',
      description: [
        'Ende-zu-Ende-Backend-Entwicklung eines Node.js- & Express.js-REST-API-Servers für eine von Grund auf neu entwickelte Plattform zur Digitalisierung des notariellen Beurkundungsprozesses.',
        'Implementierung einer rollenbasierten Zugriffskontrolle (RBAC), strukturierte Fehlerbehandlung mit async/await und Dokumentation getesteter API-Endpunkte mit Postman.',
        'Entwicklung skalierbarer MongoDB-Datenbankschemata mit Mongoose ODM und Integration von Intuit QuickBooks zur automatisierten Rechnungsstellung.',
        'Eigenständige Konfiguration von AWS IAM-Rollen, Richtlinien und S3-Bucket-Berechtigungen sowie Verwaltung der Entwicklungs-Cloud-Infrastruktur.',
      ],
      skills: KEY_TO_SKILLS_MAP.work_exp_booksapp_backend,
    },
  ],
  projects: [
    {
      id: 'agentic-ai-iam',
      title: 'Agentische KI-Identitäts- und Zugriffsverwaltung für Multi-Cloud-Zugriff',
      description:
        'Eine Zero-Trust-Identitäts- und Zugriffsverwaltungslösung, die Authentifizierung, Autorisierung und Accounting für KI-Agenten für sicheren Zugriff auf Multi-Cloud Workloads',
      highlights: [
        'Zero-Trust-Architektur auf Basis von dezentralen Identifikatoren (DIDs) und verifizierbaren Credentials (VCs).',
        'Kryptografisch verifizierbare Delegationskettenverfolgung (ähnlich wie PKI) und OIDC-Workload-Federation.',
        'Integration von Google Cloud Workload Identity Federation und Microsoft Azure Entra Workload ID mit Terraform-Automatisierung.',
      ],
      skills: KEY_TO_SKILLS_MAP.project_agentic_ai_iam,
      link: PERSONAL_INFO_PUBLIC.url.ciitPaper,
    },
    {
      id: 'network-intrusion-attack-path',
      title: 'Graph-basiertes Machine Learning für Network Intrusion Pfad Klassifizierung und Angriffsquellenverfolgung',
      description:
        'Binäre Klassifizierung von Netzwerkverkehr mittels RandomForest, Support Vector Machine und Multi-Layer-Perceptron-Modellen mit Genauigkeiten von jeweils 95,66%, 88,71% und 93,86%; Rückverfolgung von Angriffspfaden zur Ursprung.',
      highlights: [
      ],
      skills: KEY_TO_SKILLS_MAP.project_network_intrusion_attack_path,
    },
    {
      id: 'zkp-auth',
      title: 'Zero Knowledge Proof (ZKP) Nutzerportal & Passwortlose Authentifizierung',
      description:
        'Implementierung des Schnorr-Zero-Knowledge-Proof-Algorithmus in Java für sichere Registrierungs- und Anmeldeabläufe, ohne dass Passwörter jemals an den Server übertragen werden.',
      highlights: [
      ],
      skills: KEY_TO_SKILLS_MAP.project_zkp_auth,
    },
    {
      id: 'saml-idp',
      title: 'Spring Boot SAML 2.0 Identitätsanbieter (IdP)',
      description:
        'Ein SAML-2.0-Identitätsanbieter mit Spring Security 6, der Assertion-Verschlüsselung und Single Sign-On (SSO) unterstützt.',
      highlights: [
      ],
      skills: KEY_TO_SKILLS_MAP.project_saml_idp,
    },
    {
      id: 'crime-analysis-system',
      title: 'Geo-Intelligentes Verbrechenanalysensystem',
      description:
        'Mobile App für Menschen zur Einsicht von Kriminalitätshotspots auf Karten, sowie Web-Portal für Behörden mit Kriminalitätstypvorhersage.',
      highlights: [
        '92,55% Genauigkeit bei der Vorhersage von Kriminalitätstypen.',
        'Veröffentlicht und präsentiert auf der internationalen IEEE TENSYMP-Konferenz 2022.',
      ],
      skills: KEY_TO_SKILLS_MAP.project_crime_analysis_system,
      link: 'https://ieeexplore.ieee.org/document/9864342',
    },
    {
      id: 'mycloudstore',
      title: 'MyCloudStore: Storage-as-a-Service Plattform',
      description:
        'Eine Storage-as-a-Service-Lösung auf AWS EC2 unter Verwendung von Docker-Container-Orchestrierung, Nginx Reverse-Proxy und dem MERN-Stack.',
      highlights: [
      ],
      skills: KEY_TO_SKILLS_MAP.project_mycloudstore,
    },
  ],
  education: [
    {
      id: 'cybermacs-master',
      degree: 'Erasmus Mundus CyberMACS (Joint Master in Applied Cybersecurity)',
      institution: 'Kadir Has Universität (KHAS) & St. Kyrill und Methodius Universität (UKIM)',
      location: 'Istanbul, Türkei & Skopje, Nordmazedonien',
      period: '09.2024 - 09.2026',
      grade: '3,92 / 4,00 GPA',
      details: [
        'Empfänger des renommierten Exzellenzstipendiums der Europäischen Union (Erasmus Mundus).',
        'Schwerpunkte: Digitale Identität, Penetration Testing, Web-, KI- und Netzwerksicherheit, Kryptographie, Privatsphäre in ML, Informationssicherheitsmanagement.',
      ],
      thesis: {
        title: 'Masterarbeit',
        topic: 'Identity and Access Management for Securing Multi-Cloud Access for Agentic AI Workloads',
      },
      skills: KEY_TO_SKILLS_MAP.edu_cybermacs,
    },
    {
      id: 'mumbai-bachelor',
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Universität Mumbai',
      location: 'Mumbai, Indien',
      period: '07.2018 - 06.2022',
      grade: '9,36 / 10,00 CGPA',
      details: [
        'Schwerpunkte: Software Engineering, Betriebssysteme, Computernetzwerke, Systemsicherheit, Kryptographie, NLP, Maschinelles Lernen und Datenbanken.',
        'Abschlussprojekt: Geo-Intelligente Kriminalitätsvorhersage und Hotspot-Kartierung (veröffentlichtes IEEE-Paper).',
      ],
      skills: KEY_TO_SKILLS_MAP.edu_bachelor,
    },
  ],
  certifications: [
    {
      id: 'sc-500',
      title: 'Microsoft Certified: Cloud and AI Security Engineer Associate (SC-500)',
      issuer: 'Microsoft Azure',
      date: '10.2026',
      skills: ['azure', 'iam', 'zerotrust', 'security'],
    },
    {
      id: 'ccna',
      title: 'CCNA - Cisco Certified Network Associate',
      issuer: 'Cisco Systems',
      date: '07.2025',
      skills: ['linux', 'security', 'c'],
    },
    {
      id: 'testdaf',
      title: 'TestDaF (Test Deutsch als Fremdsprache) [Note: 64/80 (TDN 5)]',
      issuer: 'g.a.s.t. e.V.',
      date: '05.2024',
      skills: [],
    },
    {
      id: 'az-900',
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft Azure',
      date: '05.2023',
      skills: ['azure', 'cloud'],
    },
    {
      id: 'gcp-cdl',
      title: 'Google Cloud Certified Cloud Digital Leader',
      issuer: 'Google Cloud',
      date: '10.2022',
      skills: ['gcp', 'cloud'],
    },
    {
      id: 'aws-ccp',
      title: 'AWS Certified Cloud Practitioner (CLF-01)',
      issuer: 'Amazon Web Services',
      date: '09.2022',
      skills: KEY_TO_SKILLS_MAP.cert_aws_ccp,
    },
    {
      id: 'tcs-ml',
      title: 'TCS iON IHC Machine Learning Spezialist',
      issuer: 'TCS iON',
      date: '11.2021',
      skills: KEY_TO_SKILLS_MAP.cert_tcs_ml,
    },
    {
      id: 'cisco-cyberops',
      title: 'Cisco CyberOps Associate Kurs',
      issuer: 'Cisco Networking Academy',
      date: '09.2021',
      skills: KEY_TO_SKILLS_MAP.cert_cisco_cyberops,
    },
  ],
  publications: [
    {
      id: 'baeldung-10-articles',
      type: 'article',
      title: 'Autor von 10 technischen Fachartikeln auf Baeldung Linux',
      venue: 'Baeldung Linux',
      date: '2023 - 2024',
      location: 'Online',
      description:
        'Tutorials zu Linux-Systemadministration, Netzwerksicherheit, SSH-Härtung, TLS-Zertifikatsprüfung, Firewall-Konfiguration (iptables/nftables), Dateisystemen und Bash-Skripting.',
      url: PERSONAL_INFO_PUBLIC.url.baeldung,
      urlText: 'Baeldung Autorenprofil besuchen',
      skills: KEY_TO_SKILLS_MAP.publication_baeldung,
    },
    {
      id: 'iacyc-2026',
      type: 'conference',
      title:
        'A Cloud-Agnostic IAM Framework for Agentic AI in Multi-Cloud Environments Using Decentralized Identifiers and Verifiable Credentials',
      venue: 'IACyC 2026 Konferenz (International Applied Cybersecurity Conference)',
      date: '09.2026',
      location: 'Istanbul, Türkei',
      description:
        'Publikation des Masterarbeit-basierte IAM Framework mit theoretischer Evaluierung',
      skills: KEY_TO_SKILLS_MAP.publication_iacyc_2026,
    },
    {
      id: 'ciit-2026',
      type: 'conference',
      title: 'Identity and Access Management for Securing Multi-Cloud Access for Agentic AI Workloads',
      venue: 'CIIT 2026 Konferenz (Conference on Informatics and Information Technologies)',
      date: '04.2026',
      location: 'Struga, Nordmazedonien',
      description:
        'Studentischer Forschungsbeitrag zu einem IAM Framework für Multi-Cloud KI-Workloads.',
      url: PERSONAL_INFO_PUBLIC.url.ciitPaper,
      urlText: 'CIIT 2026 Proceedings ansehen (S. 309-320)',
      skills: KEY_TO_SKILLS_MAP.publication_ciit_2026,
    },
    {
      id: 'ieee-tensymp-2022',
      type: 'research',
      title: 'Fuzzy Based Geo-Spatial Crime Category Prediction for Crime Mapping and Safe Route Travel',
      venue: 'IEEE TENSYMP 2022 Internationale Konferenz',
      date: '07.2022',
      location: 'Mumbai, Indien',
      description:
        'Publikation der Bachelorarbeit',
      url: PERSONAL_INFO_PUBLIC.url.bachelorPaper,
      urlText: 'IEEE Xplore DOI: 10.1109/TENSYMP54529.2022.9864342',
      skills: KEY_TO_SKILLS_MAP.publication_ieee_2022,
    },
  ],
  languages: [
    {
      id: 'de',
      language: 'Deutsch',
      level: 'C1',
      notes: 'TestDaF Note: 64/80 (TDN 5)',
    },
    {
      id: 'en',
      language: 'Englisch',
      level: 'C2',
    },
    {
      id: 'ta',
      language: 'Tamil',
      level: 'Muttersprache',
    },
    {
      id: 'hi',
      language: 'Hindi',
      level: 'C1',
    },
    {
      id: 'tr',
      language: 'Türkisch',
      level: 'A2',
    },
  ],
  volunteering: [
    {
      id: 'nss-sowrait',
      role: 'National Service Scheme (NSS) Ehrenamtlicher',
      organization: '',
      period: '09.2019 - 05.2021',
      description: [
        'Organisiert und engagiert in Gemeinschaftsdienstveranstaltungen für die Verbesserung der Gesellschaft, wie z.B. Frauenförderung, Bildung benachteiligter Kinder und Verbreitung von Gesundheitssicherheitsbewusstsein während der Pandemie.',
        'Teilnahme an einem 7-tägigen Camp in einem ländlichen Gebiet zur Arbeit an der ländlichen Entwicklung.',
        'Gewann Preise bei universitätsweiten literarischen Wettbewerben, die für soziale Zwecke durchgeführt wurden: Rap-Gesang (über Frauenförderung, COVID-Bewusstsein), Gedichteschreiben (über AIDS-Bewusstsein)',
      ],
      skills: [],
    },
    {
      id: 'orph-leader',
      role: 'Waisenhaus Koordinator',
      organization: '',
      period: '08.2019 - 05.2020',
      description: [
        'Verwaltung eines Teams von über 70 studentischen Freiwilligen, um Kinder in Waisenhäusern zu besuchen und zu unterrichten.',
        'Während meiner Amtszeit haben wir über 250 Freiwilligenbesuche abgeschlossen.',
      ],
      skills: [],
    },
  ],
};
