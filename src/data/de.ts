import { PortfolioData } from '../types/portfolio';
import { PERSONAL_INFO_PUBLIC, KEY_TO_SKILLS_MAP } from './basic';

export const DE_DATA: PortfolioData = {
  meta: {
    name: PERSONAL_INFO_PUBLIC.name,
    title: 'Cyber Security (MSc.) | Full-Stack Entwickler | Digitale Infrastruktur, Software und KI-Sicherheit',
    email: PERSONAL_INFO_PUBLIC.email,
    phone: PERSONAL_INFO_PUBLIC.phone,
    phoneDigitsOnly: PERSONAL_INFO_PUBLIC.phoneDigitsOnly,
    location: 'Deutschland',
    nationality: 'Inder',
    bio:
      `Ich ermögliche sichere Architektur, Entwicklung, Bereitstellung und Verwaltung von Software und Infrastruktur:
- Erfahrener Software- und Cloud-Engineer (3+ Jahre)
- Microsoft Certified Cloud and AI Security Engineer Associate (SC-500), CCNA
- M.Sc. in angewandter Cybersicherheit (Erasmus Mundus CyberMACS, 3,92/4 Note)
- C1-Deutsch (beweisbar mit TestDaF TDN 5 Ergebnis) und C2-Englisch

Was ich mitbringe:
- Software Engineering: Java/Spring Boot, Node.js/TypeScript, React/Next.js, PostgreSQL, MongoDB, Kafka, Python
- Cloud und IAM: Multi-Cloud (AWS/GCP/Azure), IAM-Rollen und -Policies, föderierte Identitäten (OIDC, OAuth 2.0, SAML), Workload Identity Federation, Keycloak
- AppSec und DevSecOps: SAST (SonarQube) und DAST (ZAP) in CI/CD-Pipelines, Terraform, Kubernetes, Docker
- GRC: Schwachstellen- und Incident-Management nach ISO/IEC 27001 und BSI IT-Grundschutz, Risikoanalyse und -Bewertung

Ich suche Stellen wie die Folgenden:
- Cyber Security Engineer/Consultant
- Cloud Engineer/Consultant/Architekt
- System Administrator/DevOps Engineer/Fachinformatiker für Systemintegration
- Software Engineer
- Forward Deployed Engineer

Verfügbarkeit: ab sofort

mein Wohnort: NRW, Deutschland

Empfehlungen, Tipps oder auch nur Vernetzen-Anfragen sind willkommen!`,
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
    experienceSubTitle: '3+ Jahre Erfahrung insgesamt in Software sowie Cloud-Infrastruktur und Pflichtpraktikum in Cybersicherheit.',
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
    authorsLabel: 'Autor:innen:',
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
      role: 'Praktikant Cybersicherheit',
      company: 'madpat GmbH',
      companyUrl: 'https://www.empplan.com/',
      location: 'Remseck am Neckar, Deutschland',
      period: '07.2025 - 09.2025',
      type: 'Praktikum vor Ort',
      description: [
        'Dynamischen API-Sicherheitstests mit Sicherheitswarnungen automatisiert.',
        'Statischer Code-Scans in CI/CD-Pipelines zur frühen Erkennung von Softwareschwachstellen automatisiert.',
        'Schwachstellen- und Vorfallsmanagementprozessen anhand von ISO/IEC 27001 und BSI IT-Grundschutz analysiert, angepasst und dokumentiert.',
        'Risiko- und Bedrohungsanalysen für Unternehmen durchgeführt und Bedrohungskategorien zugeordnet, um die Sicherheitslage zu verbessern.',
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
        'Java/Node.js Full-Stack-Entwicklung im Enterprise-Umfeld in den Bereichen Finanzen, Reisen und Telekom im gesamten Softwarelebenszyklus in einer agilen Umgebung.',
        'Kundenanforderungen analysiert und Funktionen nach vereinbarten Entwicklungs- und Sicherheitsstandards für digitale Transformation der Kunden entwickelt, getestet und bereitgestellt.',
        'Backend-Funktionen mit Spring Boot (WebFlux/MVC REST API Microservices) entwickelt; Unit-Tests mit JUnit, Mockito durchgeführt; Datenbanken (PostgreSQL, MongoDB) sowie Event-Broker (Kafka) konfiguriert und bereitgestellt; Frontend mit React.js/Next.js mit TypeScript entwickelt; Python-Skripte zur Datenanalyse, -Bearbeitung und Automatisierung entwickelt.',
        'Sicheres Architekturdesign und Systemdesign: Infrastruktur im Multi-Cloud-Umfeld (AWS/GCP/Azure) mit Cloud-Ressourcen geplant, konfiguriert und bereitgestellt; deren Zugriff durch Identity \& Access Management (IAM) und Überwachung verwaltet; föderierte Identitäten (z.B. mit OIDC und OAuth, SAML) umgesetzt.',
        'DevOps mit GitLab/Jenkins CI/CD und Code-Scans mit SonarQube zur Codequalitätsprüfung aktualisiert; Kubernetes- und Docker-Container verwaltet; Terraform als Infrastructure-as-Code (IaC) eingesetzt.',
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
        'Feature-Wünsche in Full-Stack (MEAN/MERN+TypeScript) für EMPPLAN, eine Sales- und Promotionmanagement-Plattform, umgesetzt, einschließlich Unit-Tests.',
        'Bestehende CI/CD-Pipeline um automatisiertes Testen erweitert; Testabdeckung mit Unittesting erhöht.',
        'Zentrale Funktionen, wie Dashboards für Kundenanalysen, optimiert und deren Abfrage- und Antwortzeiten reduziert.',
        'An Sprint-Calls mit dem Kundenteam zu Featurewünschen teilgenommen und Umsetzung koordiniert; EMPPLAN-Dokumentation aktualisiert und verbessert.',
      ],
      skills: KEY_TO_SKILLS_MAP.work_exp_madpat_js,
    },
    {
      id: 'booksapp-backend',
      role: 'Lead (Haupt) Backend Entwickler (freiberuflich)',
      company: 'BooksApp',
      location: 'Remote (Indien)',
      period: '01.2021 - 05.2021',
      type: 'Freiberufliches Projekt neben dem Bachelorstudium',
      description: [
        'Die Verantwortung der Ende-zu-Ende-Backend-Entwicklung eines REST-API-Servers mit Node.js für eine von Grund auf neu entwickelte Plattform aufgenommen und umgesetzt; die Plattform dient zur Terminbuchung und Verwaltung notarieller Beurkundungsabläufe.',
        'Implementierung einer rollenbasierten Zugriffskontrolle (RBAC), strukturierte Fehlerbehandlung mit async/await und Dokumentation mit Postman getesteter API.',
        'MongoDB-Datenmodellen mit Mongoose ODM zur Steuerung von Buchungs- und Workflow-Status entwickelt.',
        'Intuit QuickBooks zur automatisierten Rechnungserstellung und -berechnung integriert.',
        'Cloud-Infrastruktur verwaltet: Ressourcen bereitstellen, IAM-Rollen und -Policies sowie S3-Bucket-Zugriff konfigurieren; MongoDB, Heroku, Firebase von Grund auf neu eingerichtet und verwaltet.',
      ],
      skills: KEY_TO_SKILLS_MAP.work_exp_booksapp_backend,
    },
  ],
  projects: [
    {
      id: 'agentic-ai-iam',
      title: 'Identitäts- und Zugriffsverwaltung für agentische KI für sicheren Zugriff auf Multi-Cloud-Dienste',
      description:
        'Eine Zero-Trust-Identitäts- und Zugriffsverwaltungslösung, die Authentifizierung, Autorisierung und Accounting für KI-Agenten für sicheren Zugriff auf Multi-Cloud Workloads',
      highlights: [
        'Zero-Trust-Architektur auf Basis von dezentralen Identifikatoren (DIDs) und verifizierbaren Credentials (VCs).',
        'Kryptografisch verifizierbare Delegationsketten (ähnlich wie PKI) und OIDC-Workload-Federation.',
        'Integration von Google Cloud Workload Identity Federation und Microsoft Azure Entra Workload ID mit Terraform-Automatisierung.',
      ],
      skills: KEY_TO_SKILLS_MAP.project_agentic_ai_iam,
      link: PERSONAL_INFO_PUBLIC.url.ciitPaper,
    },
    {
      id: 'network-intrusion-attack-path',
      title: 'Graph-basiertes Machine Learning zur Klassifizierung von Netzeindringpfaden und zur Rückverfolgung von Angriffsquellen',
      description:
        'Binäre Klassifizierung von Netzwerkverkehr mittels RandomForest, Support Vector Machine und Multi-Layer-Perceptron-Modellen mit Genauigkeiten von jeweils 95,66%, 88,71% und 93,86%; Rückverfolgung von Angriffspfaden.',
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
        'Mobile App für Menschen zur Einsicht von Kriminalitätshotspots auf Karten sowie ein Webportal für Behörden mit Kriminalitätstypvorhersage.',
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
      institution: 'Kadir Has Universität (KHAS) & Fakultät der Informatik und Computertechnik (FINKI) an der Ss. Kyrill und Methodius Universität (UKIM)',
      location: 'Istanbul, Türkei & Skopje, Nordmazedonien',
      period: '09.2024 - 09.2026',
      grade: '3,92 / 4,00 GPA',
      details: [
        'Empfänger des renommierten Exzellenzstipendiums der Europäischen Union (Erasmus Mundus).',
        'Schwerpunkte: Digitale Identität, Penetration Testing, Web-, KI- und Netzwerksicherheit, Kryptographie, Privatsphäre in ML, Informationssicherheitsmanagement.',
        'Erworbene Abschlüsse: Master of Science (M.Sc.) in Cyber Security von KHAS und Master of Science (M.Sc.) in Security, Cryptography and Coding von FINKI UKIM.',
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
      authors: PERSONAL_INFO_PUBLIC.name + ' und das Baeldung Redaktionsteam',
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
      authors: PERSONAL_INFO_PUBLIC.name + ', ' + PERSONAL_INFO_PUBLIC.coauthors.mkg + ', ' + PERSONAL_INFO_PUBLIC.coauthors.oc,
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
      authors: PERSONAL_INFO_PUBLIC.name + ', ' + PERSONAL_INFO_PUBLIC.coauthors.mkg,
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
      authors: PERSONAL_INFO_PUBLIC.coauthors.ss + ', ' + PERSONAL_INFO_PUBLIC.coauthors.au + ', ' + PERSONAL_INFO_PUBLIC.name + ', ' + PERSONAL_INFO_PUBLIC.coauthors.sd,
      authorHint: 'Die ersten drei Autoren haben gleiche Beiträge geleistet.',
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
        'Preise bei universitätsweiten literarischen Wettbewerben, die für soziale Zwecke durchgeführt wurden: Rap-Gesang (über Frauenförderung, COVID-Bewusstsein), Gedichteschreiben (über AIDS-Bewusstsein)',
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
