// data.ts - Complete portfolio data for YouRuei Wu
// All content for the Senior PM Portfolio

export const personalInfo = {
  name: "YouRuei Wu",
  title: "Senior Product Manager",
  tagline: "10+ years driving product innovation and AI-powered solutions across enterprise and consumer platforms",
  location: "Taipei, Taiwan",
  phone: "+886-939-128257",
  email: "ymow784533@gmail.com",
  languages: {
    mandarin: "Native",
    english: "Professional Working Proficiency"
  }
};

export const heroMetrics = [
  { label: "Years Experience", value: "10+" },
  { label: "Fortune 500 Clients", value: "5" },
  { label: "Revenue Impact", value: "$500K+" },
  { label: "Conversion Increase", value: "2.6%" }
];

export const careerTimeline = [
  {
    id: "ai-pass-line",
    role: "Project Manager",
    company: "AI Pass Line",
    period: "Aug 2024 - Apr 2025",
    location: "Taipei, Taiwan",
    description: "Led AI product strategy and deployment for Taiwan's premier enterprises",
    achievements: [
      "Led AI initiatives for TSMC, Taiwan FDA, NHIA, Carrefour, and Continental Engineering",
      "Designed TSMC's speech-to-text AI system for semiconductor manufacturing with custom technical terminology database and on-premises deployment",
      "Conducted customer immersion across semiconductor, healthcare, retail, and engineering sectors",
      "Managed cross-sector technical requirements while balancing AI capabilities with regulatory compliance"
    ],
    metrics: {
      clients: 5,
      clientType: "Fortune 500 & Government",
      domain: "Enterprise AI"
    },
    skills: ["AI/ML Product Development", "Enterprise B2B", "Technical Requirements", "Stakeholder Management", "On-Premises Deployment"],
    color: "#00F5FF"
  },
  {
    id: "brubecker",
    role: "Product Manager & Web Developer",
    company: "Brubecker",
    period: "May 2018 - Jan 2025",
    location: "Taipei, Taiwan",
    description: "Led end-to-end product development for multiple e-commerce platforms",
    achievements: [
      "Achieved 2.6% conversion rate improvement on Grassphere checkout through SQL data analysis and systematic A/B testing",
      "Spearheaded Landtop e-commerce platform integrating OMS and CMS systems for Taiwan market",
      "Conceived and launched Pi Coin loyalty program through user research and cohort analysis, significantly improving customer lifetime value",
      "Led Waitable Android application development (2015-2017) managing 10-12 member cross-functional teams",
      "Architected YourClinic healthcare management platform with Rails 7, OAuth2 integration, and multi-language support"
    ],
    metrics: {
      conversionIncrease: "2.6%",
      platforms: 4,
      domain: "E-commerce & Healthcare"
    },
    skills: ["Conversion Funnel Optimization", "A/B Testing", "SQL", "Ruby on Rails", "Full-Stack Development", "UX Design"],
    color: "#FF00E5"
  },
  {
    id: "torchbird",
    role: "Product Manager",
    company: "Torchbird",
    period: "Sep 2021 - Jan 2022",
    location: "Taipei, Taiwan",
    description: "Designed social platform for collaborative YouTube content sharing",
    achievements: [
      "Designed social platform for collaborative YouTube screenshot sharing with comprehensive product requirements",
      "Built SaaS platform architecture integrating YouTube API with machine learning request mapping system",
      "Conducted user research to define product requirements based on target audience behavior patterns"
    ],
    metrics: {
      domain: "Social/SaaS"
    },
    skills: ["Product Strategy", "API Integration", "Machine Learning", "User Research"],
    color: "#39FF14"
  },
  {
    id: "mayohr",
    role: "Product Manager",
    company: "Mayohr",
    period: "May 2017 - Apr 2018",
    location: "Taipei, Taiwan",
    description: "Developed B2B and B2B2C products bridging online and offline experiences",
    achievements: [
      "Designed O2O coupon system for group purchases with seamless online-to-offline integration",
      "Created B2B2C gift redemption platform enhancing partner relations and customer satisfaction",
      "Established welfare committee platform analyzing employee engagement data to drive cultural initiatives"
    ],
    metrics: {
      platforms: 3,
      domain: "HR Tech"
    },
    skills: ["O2O Product Design", "B2B2C", "Data Analysis", "Stakeholder Management"],
    color: "#FFD700"
  }
];

export const projects = [
  {
    id: "tsmc-ai",
    title: "TSMC Speech-to-Text AI System",
    client: "TSMC (Taiwan Semiconductor)",
    clientLogo: "tsmc",
    role: "Project Manager",
    period: "2024-2025",
    featured: true,
    tags: ["Enterprise AI", "Manufacturing", "NLP", "On-Premises Deployment", "Fortune 500"],

    overview: "Designed and proposed custom speech-to-text AI system for semiconductor manufacturing environment with technical terminology recognition, on-premises deployment architecture, and factory-specific use cases for Taiwan's premier semiconductor manufacturer.",

    challenge: "TSMC needed an AI system that could understand highly specialized semiconductor manufacturing terminology, operate in secure on-premises environments with strict data governance, and integrate seamlessly with existing factory floor operations—all while maintaining the technical precision critical to semiconductor production.",

    approach: [
      "Conducted extensive customer immersion sessions in TSMC manufacturing facilities to understand operational workflows and pain points",
      "Built custom technical terminology database specific to semiconductor manufacturing processes and equipment",
      "Designed on-premises deployment architecture ensuring data security and regulatory compliance with Taiwan's data protection frameworks",
      "Collaborated with engineering teams to balance cutting-edge AI capabilities with real-world deployment constraints"
    ],

    impact: {
      client: "World's Largest Semiconductor Foundry",
      deployment: "Secure on-premises environment",
      scope: "Factory-wide implementation",
      compliance: "Full regulatory compliance (Taiwan FDA, data protection)"
    },

    skills: ["AI/ML Product Development", "Enterprise B2B", "Technical Requirements Translation", "Stakeholder Management", "On-Premises AI Deployment", "Semiconductor Industry Knowledge"],

    color: "#00F5FF",
    visualizationType: "systemArchitecture",
    caseStudyUrl: null
  },

  {
    id: "grassphere-conversion",
    title: "Grassphere Checkout Optimization",
    client: "Brubecker E-commerce",
    clientLogo: "brubecker",
    role: "Product Manager",
    period: "2018-2025",
    featured: true,
    tags: ["E-commerce", "Conversion Optimization", "A/B Testing", "Data Analytics", "UX"],

    overview: "Led data-driven checkout optimization initiative for Taiwan's premium kitchenware e-commerce platform, achieving 2.6% conversion rate improvement through systematic user behavior analysis and A/B testing program.",

    challenge: "High cart abandonment rate during checkout process was limiting revenue growth. Needed data-driven approach to identify specific friction points in the conversion funnel and validate improvement hypotheses through rigorous testing.",

    approach: [
      "Analyzed user behavior data using SQL queries and analytics tools to map the complete checkout journey",
      "Identified key friction points through funnel analysis showing where users dropped off",
      "Designed systematic A/B testing framework to validate UX optimization hypotheses",
      "Implemented data-driven improvements iteratively based on statistical significance of test results"
    ],

    impact: {
      conversionIncrease: "+2.6%",
      revenueImpact: "Significant revenue growth for premium kitchenware brand",
      methodology: "Data-driven A/B testing with statistical validation",
      sustainableGain: "Maintained improvement over 6+ months"
    },

    skills: ["Conversion Funnel Optimization", "A/B Testing & Experimentation", "SQL & Data Analysis", "UX Design", "User Behavior Analysis"],

    color: "#FF00E5",
    visualizationType: "conversionFunnel",
    caseStudyUrl: null
  },

  {
    id: "picoin-loyalty",
    title: "Pi Coin Loyalty Program",
    client: "Brubecker E-commerce",
    clientLogo: "brubecker",
    role: "Product Manager & Technical Architect",
    period: "2018-2025",
    featured: true,
    tags: ["Product Innovation", "Loyalty Systems", "User Retention", "Full-Stack Development", "Data Analytics"],

    overview: "Conceived and launched innovative blockchain-inspired loyalty program from zero to production, driving measurable improvements in customer lifetime value and repeat purchase behavior through user research and data-driven iteration.",

    challenge: "Competitive Taiwan e-commerce market required differentiated loyalty strategy to increase customer retention and repeat purchases while maintaining operational simplicity and clear value proposition for users.",

    approach: [
      "Conducted extensive user research and competitive analysis to identify loyalty program gaps in market",
      "Designed flexible points engine with transaction tracking, redemption rules, and tier system",
      "Built full-stack implementation with Ruby on Rails backend, PostgreSQL database, and custom analytics dashboards",
      "Tracked cohort behavior and engagement metrics to drive iterative product improvements"
    ],

    impact: {
      retention: "Measurable improvement in customer lifetime value (CLV)",
      repeatPurchase: "Increased repeat purchase behavior across cohorts",
      engagement: "High program adoption and active participation",
      technical: "Scalable architecture supporting multi-tenant deployment"
    },

    skills: ["Product Innovation", "User Research", "Ruby on Rails", "PostgreSQL", "Analytics & KPI Tracking", "System Architecture"],

    color: "#39FF14",
    visualizationType: "cohortRetention",
    caseStudyUrl: null
  },

  {
    id: "frogforge",
    title: "FrogForge Video Processing Platform",
    client: "Personal Project / Technical Portfolio",
    clientLogo: null,
    role: "Founder & Product Lead",
    period: "Aug 2025 - Sep 2025",
    featured: true,
    tags: ["Video Processing", "Microservices", "API Design", "System Architecture", "Performance Optimization"],

    overview: "Architected and developed full-stack video processing platform with Rails API and Python microservices for automated video editing workflows, achieving 98.7% extraction success rate while maintaining technical depth alongside product management expertise.",

    challenge: "Content creators need automated video editing workflows with high reliability, intelligent proxy routing for API cost optimization, and professional codec optimization—requiring sophisticated technical architecture and product thinking.",

    approach: [
      "Designed Rails 7 REST API with Python microservices for YouTube extraction and video analysis",
      "Implemented multi-provider proxy routing system with intelligent fallback achieving 98.7% success rate (ZenRows, Steel.dev, Bright Data)",
      "Built FFmpeg-based video codec workflow with H.264 CRF optimization reducing file sizes 98% while preserving quality",
      "Created Sidekiq + Gush workflow orchestration for complex background job processing pipelines"
    ],

    impact: {
      successRate: "98.7% video extraction success rate",
      fileReduction: "98% file size reduction with quality preservation",
      architecture: "Scalable microservices with intelligent routing",
      performance: "Sub-second API response times"
    },

    skills: ["System Architecture", "RESTful API Design", "Python", "Ruby on Rails", "FFmpeg", "Microservices", "Background Job Processing"],

    color: "#FFD700",
    visualizationType: "dataFlow",
    githubUrl: "https://github.com/yourusername/frogforge",
    caseStudyUrl: null
  }
];

export const keyMetrics = [
  {
    id: "experience",
    label: "Years of Experience",
    value: 10,
    suffix: "+",
    icon: "calendar",
    visualization: "counter",
    color: "#00F5FF",
    context: "Leading product innovation across enterprise and consumer platforms"
  },
  {
    id: "enterprise-clients",
    label: "Fortune 500 Clients",
    value: 5,
    icon: "building",
    subtext: "TSMC, Taiwan FDA, NHIA, Carrefour, Continental Engineering",
    visualization: "counter",
    color: "#FF00E5",
    context: "Enterprise AI solutions and digital transformation"
  },
  {
    id: "conversion-impact",
    label: "Conversion Rate Improvement",
    value: 2.6,
    suffix: "%",
    icon: "trending-up",
    subtext: "Grassphere checkout optimization",
    visualization: "progressBar",
    color: "#39FF14",
    context: "Through systematic A/B testing and data analysis"
  },
  {
    id: "platforms-launched",
    label: "Platforms Launched",
    value: 8,
    suffix: "+",
    icon: "rocket",
    subtext: "E-commerce, SaaS, Healthcare, Mobile apps",
    visualization: "counter",
    color: "#FFD700",
    context: "Full product lifecycle from concept to production"
  },
  {
    id: "revenue-impact",
    label: "Revenue Impact",
    value: 500,
    prefix: "$",
    suffix: "K+",
    icon: "dollar-sign",
    subtext: "Documented across multiple initiatives",
    visualization: "counter",
    color: "#FF6B35",
    context: "Through product optimization and new feature launches"
  },
  {
    id: "extraction-success",
    label: "Video Extraction Success",
    value: 98.7,
    suffix: "%",
    icon: "check-circle",
    subtext: "FrogForge platform",
    visualization: "gauge",
    color: "#B19CD9",
    context: "Intelligent proxy routing with automatic fallback"
  }
];

export const skills = {
  // Product Management Core
  productManagement: [
    { name: "Product Strategy & Roadmapping", proficiency: 95, yearsExperience: 10 },
    { name: "Data-Driven Decision Making", proficiency: 95, yearsExperience: 10 },
    { name: "Cross-Functional Leadership", proficiency: 93, yearsExperience: 10 },
    { name: "User Research & Testing", proficiency: 90, yearsExperience: 9 },
    { name: "A/B Testing & Experimentation", proficiency: 92, yearsExperience: 7 },
    { name: "Go-to-Market Planning", proficiency: 88, yearsExperience: 8 },
    { name: "Stakeholder Management", proficiency: 92, yearsExperience: 10 },
    { name: "Agile/Scrum Methodologies", proficiency: 90, yearsExperience: 8 }
  ],

  // Technical Skills
  technical: [
    { name: "SQL & Data Analysis", proficiency: 85, yearsExperience: 7 },
    { name: "Ruby on Rails", proficiency: 83, yearsExperience: 7 },
    { name: "Python / FastAPI", proficiency: 80, yearsExperience: 3 },
    { name: "JavaScript / React", proficiency: 75, yearsExperience: 5 },
    { name: "RESTful API Design", proficiency: 82, yearsExperience: 7 },
    { name: "System Architecture", proficiency: 78, yearsExperience: 5 },
    { name: "PostgreSQL / Database Design", proficiency: 80, yearsExperience: 7 }
  ],

  // AI/ML
  aiMl: [
    { name: "AI/ML Product Development", proficiency: 85, yearsExperience: 2 },
    { name: "NLP Applications", proficiency: 78, yearsExperience: 2 },
    { name: "On-Premises AI Deployment", proficiency: 75, yearsExperience: 1 },
    { name: "AI Product Strategy", proficiency: 82, yearsExperience: 2 }
  ],

  // Analytics
  analytics: [
    { name: "Conversion Funnel Optimization", proficiency: 92, yearsExperience: 7 },
    { name: "Cohort Analysis", proficiency: 88, yearsExperience: 6 },
    { name: "KPI Definition & Tracking", proficiency: 90, yearsExperience: 8 },
    { name: "User Behavior Analysis", proficiency: 87, yearsExperience: 7 }
  ],

  // Tools & Platforms
  tools: [
    { name: "Figma / Design Tools", proficiency: 85, yearsExperience: 6 },
    { name: "JIRA / Agile Tools", proficiency: 90, yearsExperience: 8 },
    { name: "Amplitude / Mixpanel", proficiency: 88, yearsExperience: 5 },
    { name: "Axure RP", proficiency: 82, yearsExperience: 7 },
    { name: "Git / GitHub", proficiency: 85, yearsExperience: 10 }
  ],

  // Domain Expertise
  domains: [
    { name: "E-commerce Platforms", proficiency: 90, yearsExperience: 7 },
    { name: "Enterprise B2B Solutions", proficiency: 85, yearsExperience: 3 },
    { name: "SaaS Product Management", proficiency: 80, yearsExperience: 5 },
    { name: "Semiconductor Industry", proficiency: 70, yearsExperience: 1 },
    { name: "Healthcare Technology", proficiency: 75, yearsExperience: 2 }
  ]
};

// Flatten skills for D3.js network visualization
export const skillsNetwork = {
  nodes: [
    // Core PM (central, largest)
    { id: "product-strategy", label: "Product Strategy", category: "pm-core", size: 40, proficiency: 95 },
    { id: "data-driven", label: "Data-Driven Decisions", category: "pm-core", size: 40, proficiency: 95 },
    { id: "cross-functional", label: "Cross-Functional Leadership", category: "pm-core", size: 38, proficiency: 93 },
    { id: "user-research", label: "User Research", category: "pm-core", size: 35, proficiency: 90 },
    { id: "roadmapping", label: "Roadmapping", category: "pm-core", size: 35, proficiency: 95 },
    { id: "ab-testing", label: "A/B Testing", category: "pm-core", size: 35, proficiency: 92 },

    // Technical
    { id: "sql", label: "SQL", category: "technical", size: 30, proficiency: 85 },
    { id: "ruby-rails", label: "Ruby on Rails", category: "technical", size: 30, proficiency: 83 },
    { id: "python", label: "Python", category: "technical", size: 28, proficiency: 80 },
    { id: "react", label: "React", category: "technical", size: 25, proficiency: 75 },
    { id: "api-design", label: "API Design", category: "technical", size: 28, proficiency: 82 },
    { id: "system-arch", label: "System Architecture", category: "technical", size: 26, proficiency: 78 },

    // AI/ML
    { id: "ai-product", label: "AI/ML Product", category: "ai", size: 35, proficiency: 85 },
    { id: "nlp", label: "NLP", category: "ai", size: 28, proficiency: 78 },
    { id: "ai-deployment", label: "On-Prem AI", category: "ai", size: 25, proficiency: 75 },

    // Analytics
    { id: "funnel-opt", label: "Funnel Optimization", category: "analytics", size: 32, proficiency: 92 },
    { id: "cohort", label: "Cohort Analysis", category: "analytics", size: 28, proficiency: 88 },
    { id: "kpi-tracking", label: "KPI Tracking", category: "analytics", size: 30, proficiency: 90 },

    // Domain
    { id: "ecommerce", label: "E-commerce", category: "domain", size: 32, proficiency: 90 },
    { id: "enterprise-b2b", label: "Enterprise B2B", category: "domain", size: 30, proficiency: 85 },
    { id: "saas", label: "SaaS", category: "domain", size: 28, proficiency: 80 },

    // Tools
    { id: "figma", label: "Figma", category: "tools", size: 25, proficiency: 85 },
    { id: "jira", label: "JIRA", category: "tools", size: 26, proficiency: 90 },
    { id: "amplitude", label: "Amplitude", category: "tools", size: 24, proficiency: 88 }
  ],
  links: [
    // Core PM connections
    { source: "product-strategy", target: "data-driven", strength: 1 },
    { source: "product-strategy", target: "cross-functional", strength: 1 },
    { source: "product-strategy", target: "roadmapping", strength: 0.9 },
    { source: "data-driven", target: "ab-testing", strength: 0.9 },
    { source: "data-driven", target: "sql", strength: 0.8 },
    { source: "data-driven", target: "funnel-opt", strength: 0.9 },
    { source: "cross-functional", target: "user-research", strength: 0.7 },

    // Technical connections
    { source: "sql", target: "funnel-opt", strength: 0.7 },
    { source: "ruby-rails", target: "api-design", strength: 0.8 },
    { source: "python", target: "ai-product", strength: 0.9 },
    { source: "api-design", target: "system-arch", strength: 0.7 },

    // AI connections
    { source: "ai-product", target: "nlp", strength: 0.9 },
    { source: "ai-product", target: "python", strength: 0.8 },
    { source: "ai-product", target: "ai-deployment", strength: 0.7 },

    // Analytics connections
    { source: "funnel-opt", target: "cohort", strength: 0.8 },
    { source: "ab-testing", target: "funnel-opt", strength: 0.8 },
    { source: "kpi-tracking", target: "amplitude", strength: 0.7 },

    // Domain connections
    { source: "ecommerce", target: "funnel-opt", strength: 0.8 },
    { source: "enterprise-b2b", target: "ai-product", strength: 0.7 },
    { source: "saas", target: "api-design", strength: 0.6 },

    // Tools connections
    { source: "figma", target: "user-research", strength: 0.6 },
    { source: "jira", target: "roadmapping", strength: 0.7 },
    { source: "amplitude", target: "ab-testing", strength: 0.8 }
  ],
  categoryColors: {
    "pm-core": "#00F5FF",
    "technical": "#FF00E5",
    "ai": "#39FF14",
    "analytics": "#FFD700",
    "domain": "#FF6B35",
    "tools": "#B19CD9"
  }
};

export const education = [
  {
    degree: "Master of Science",
    field: "Optoelectronics and Communication Engineering",
    institution: "National Kaohsiung Normal University",
    specialization: "RF and Microwave Engineering Laboratory",
    period: "2007 - 2009",
    location: "Taiwan"
  },
  {
    degree: "Bachelor of Science",
    field: "Electronic Engineering",
    institution: "HUAFAN University",
    period: "2003 - 2007",
    location: "Taiwan"
  }
];

export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com/in/youruei-wu",
    color: "#0077B5"
  },
  {
    id: "github",
    label: "GitHub",
    icon: "github",
    url: "https://github.com/yourusername",
    color: "#FFFFFF"
  },
  {
    id: "email",
    label: "Email",
    icon: "mail",
    url: "mailto:ymow784533@gmail.com",
    color: "#00F5FF"
  }
];

export const cvDownloadUrl = "/cv/YouRuei_Wu_Senior_PM_CV.pdf";
