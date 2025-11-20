import type { LucideIcon } from "lucide-react";
import { Award, Cloud, Database, GraduationCap, ShieldCheck, Sparkles, Target } from "lucide-react";

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  highlights: string[];
  image: string;
};

export type CertificationMeaningCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SpotlightCert = {
  title: string;
  year: string;
  subtitle: string;
  description: string;
  bullets: string[];
  metrics: { label: string; value: string; detail: string }[];
  image: string;
};

export type ReadinessPillar = {
  title: string;
  detail: string;
};

export type JourneyStep = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export const bubbleVerificationUrl = "https://bubble.io/certificate/1717326861532x553683627463259500";

export const certificates: Certificate[] = [
  {
    title: "Certified Bubble Professional",
    issuer: "Bubble.io",
    year: "2024",
    highlights: ["Full-stack Bubble development", "Performance-first delivery"],
    image: "/certificaiton/01_bubble_certificaiton.jpeg",
  },
  {
    title: "Bubble Database Specialist",
    issuer: "NoCode Academy",
    year: "2023",
    highlights: ["Relational data design", "Future-proof scaling"],
    image: "/certificaiton/02_NCA - Professional Bubble Database - 1700721396433x595068971648024600.png",
  },
  {
    title: "Bubble Security Specialist",
    issuer: "NoCode Academy",
    year: "2024",
    highlights: ["Secure workflows", "Role-based access"],
    image: "/certificaiton/03_NCA - Professional Security_1702443927097x341926105597083650.png",
  },
  {
    title: "Bubble Workflow Specialist",
    issuer: "NoCode Academy",
    year: "2024",
    highlights: ["Complex automations", "Dependency mapping"],
    image: "/certificaiton/04_NCA - Professional workflow_1700046247770x454238762196271100.png",
  },
  {
    title: "Google IT Support Professional",
    issuer: "Google",
    year: "Apr 2023",
    highlights: ["Systems operations", "SLO-focused support"],
    image: "/certificaiton/05_google_it_support.png",
  },
  {
    title: "AirDev Bubble Bootcamp",
    issuer: "AirDev",
    year: "2022",
    highlights: ["Product strategy", "Ship-ready UX"],
    image: "/certificaiton/06_AirDev-bootcamp_certificate.jpg",
  },
  {
    title: "AWS Solutions Foundations",
    issuer: "AWS",
    year: "2021",
    highlights: ["Cloud primitives", "Security-by-default"],
    image: "/certificaiton/07_aws_certification.png",
  },
  {
    title: "CentOS / Linux Systems",
    issuer: "Linux Foundation",
    year: "2021",
    highlights: ["Server hardening", "Automation-ready setups"],
    image: "/certificaiton/08_centos_Linus_system.png",
  },
];

export const certificationMeaningCards: CertificationMeaningCard[] = [
  {
    title: "Standard of excellence",
    description:
      "Bubble&rsquo;s internal reviewers validated that my architecture, debugging, and release rituals meet their bar for production-grade excellence.",
    icon: Sparkles,
  },
  {
    title: "Expertise across the stack",
    description:
      "The exam spans frontend, backend, APIs, database modeling, and performance profiling&mdash;so passing it proves end-to-end mastery.",
    icon: ShieldCheck,
  },
  {
    title: "Confidence in hiring",
    description:
      "You get a certified partner pre-vetted for reliability, documentation, and communication, which shortens onboarding and builds trust faster.",
    icon: Award,
  },
];

export const spotlightCert: SpotlightCert = {
  title: "Certified Bubble Professional",
  year: "2024",
  subtitle: "Bubble's highest bar for architecture, resilience, and performance-first builds (earned June 2, 2024).",
  description:
    "The exam mirrors real founder engagements: a production-grade rebuild that verifies data modeling, custom logic, API governance, staging parity, and debugging rituals. Passing it proves that I can shepherd regulated workflows from audit to launch without plugins or shortcuts.",
  bullets: [
    "Modeled multi-tenant CRM and compliance dashboards with minimal technical debt.",
    "Documented release plans: feature flags, rollback scripts, and QA playbooks per sprint.",
    "Defended architecture decisions live with Bubble's assessors during performance reviews.",
  ],
  metrics: [
    { label: "Assessment hours", value: "24", detail: "Scenario lab + proctored review" },
    { label: "Use cases defended", value: "11 modules", detail: "Payments, AI, auth, comms" },
    { label: "Result", value: "Passed first attempt", detail: "Performance-first commendation" },
  ],
  image: "/certificaiton/01_bubble_certificaiton.jpeg",
};

export const readinessPillars: ReadinessPillar[] = [
  {
    title: "Security & Compliance",
    detail: "Role-based privacy rules, SOC2-ready logging, ID verification, and governance for sensitive workflows.",
  },
  {
    title: "Reliability Playbooks",
    detail: "Disaster recovery plans, backup and rollback patterns, and observability rituals baked into releases.",
  },
  {
    title: "AI & Workflow Fusion",
    detail: "Claude, GPT, and Gemini prompts embedded directly into Bubble actions and n8n / Make / Zapier ladders.",
  },
  {
    title: "Team Enablement",
    detail: "Structured documentation, async Loom walkthroughs, and ClickUp runbooks for internal teams.",
  },
];

export const journeyTimeline: JourneyStep[] = [
  {
    year: "2024",
    title: "Certified Bubble Professional",
    description: "Validated enterprise-ready Bubble builds with architecture, QA, and live defensive reviews.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Security & Workflow Specialist",
    description: "NoCode Academy labs on dependency mapping, incident drills, and least-privilege automation.",
    icon: ShieldCheck,
  },
  {
    year: "2023",
    title: "Bubble Database Specialist",
    description: "Relational modeling and future-proof scaling for CRMs, marketplaces, and analytics suites.",
    icon: Database,
  },
  {
    year: "2023",
    title: "Google IT Support Professional",
    description: "Ops rigor, SLO thinking, and root-cause analysis that now informs every Bubble build.",
    icon: GraduationCap,
  },
  {
    year: "2022",
    title: "AirDev Bubble Bootcamp",
    description: "Product strategy, UX heuristics, and scoping frameworks tuned for shipping founder MVPs.",
    icon: Target,
  },
  {
    year: "2021",
    title: "AWS & Linux Foundations",
    description: "Cloud primitives, CentOS administration, and automation-ready environments for Bubble backends.",
    icon: Cloud,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Payments & Billing",
    items: ["Stripe", "PayPal", "Paddle"],
  },
  {
    title: "Email, Messaging & Notifications",
    items: ["SendGrid", "Postmark", "Mailchimp", "Brevo", "Twilio"],
  },
  {
    title: "Authentication & Identity",
    items: ["Auth0", "Google OAuth", "Facebook Login", "Apple Sign-In", "Veriff", "CheckrTrust"],
  },
  {
    title: "AI & Intelligence",
    items: ["OpenAI", "Claude API", "Gemini API"],
  },
  {
    title: "Video & Communication",
    items: ["Google Meet API", "Daily.co"],
  },
  {
    title: "Design & UI",
    items: ["Figma", "Canva"],
  },
  {
    title: "Docs & Collaboration",
    items: ["Notion", "Google Docs", "Google Drive"],
  },
  {
    title: "Project Management",
    items: ["ClickUp", "Trello"],
  },
];

export const bubbleFocusedCerts = certificates.filter((cert) => cert.title.toLowerCase().includes("bubble"));
