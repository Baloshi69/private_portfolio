import React from "react";
import { Cpu, Database, Gauge, Layers, PlugZap, Workflow } from "lucide-react";

const skills = [
  {
    title: "SaaS development with Bubble.io",
    subtitle: "Reliable and scalable applications tailored for real business needs.",
    description:
      "I build secure SaaS platforms, client portals, and dashboards with clean structure and long-term maintainability. Your product can grow without needing expensive rebuilds.",
    Icon: Layers,
    accent: "from-[#eef4ff] to-white",
  },
  {
    title: "Backend logic & API integrations",
    subtitle: "Strong foundations that keep your operations running smoothly.",
    description:
      "I design efficient databases, build advanced workflows, and connect your app to the right APIs. The result is a system that stays stable, flexible, and ready for future expansion.",
    Icon: PlugZap,
    accent: "from-[#f0f9ff] to-white",
  },
  {
    title: "Automation workflows (n8n, Make, Zapier)",
    subtitle: "Less manual work and more consistency across your business.",
    description:
      "I create automation systems with n8n as the primary tool, supported by Make and Zapier where needed. These workflows remove repetitive tasks and keep your processes dependable.",
    Icon: Workflow,
    accent: "from-[#fff5f0] to-white",
  },
  {
    title: "Custom JavaScript enhancements",
    subtitle: "Practical improvements that make your Bubble app more capable.",
    description:
      "When Bubble reaches its limits, I add custom JavaScript to improve the experience, unlock new behaviours, and provide the functionality your users expect.",
    Icon: Cpu,
    accent: "from-[#f8f5ff] to-white",
  },
  {
    title: "AI features and integrations",
    subtitle: "Useful AI that strengthens your product in real ways.",
    description:
      "I integrate AI assistants, content tools, data extraction, smart workflows and more. The goal is to add features that create value for your customers, not gimmicks.",
    Icon: Database,
    accent: "from-[#f3fbff] to-white",
  },
  {
    title: "Performance and cleanup",
    subtitle: "A faster and more stable Bubble app your users can trust.",
    description:
      "I identify issues, clean workflows, remove bottlenecks and optimize your database. Your app becomes quicker, smoother, and ready for real traffic.",
    Icon: Gauge,
    accent: "from-[#fff7ed] to-white",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#F9FBFF]">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-theme-blue">About Me</p>
            <h2 className="text-4xl font-bold text-slate-900">I help founders build and optimise Bubble apps with clean logic, automation, and AI-ready structure.</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              I'm Al Baloshi Nawaz (Baloshi69), a certified Bubble.io developer and Google IT Support Specialist. I work directly
              with founders, operators, and small teams who need fast, reliable development without the delays or miscommunication
              that come with agency layers.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              When you work with me, you speak directly to the person designing, building, integrating, and deploying your app. I
              handle everything end-to-end: front-end UI, database structure, workflows, API connections, automation systems, AI features,
              testing, optimisation, and launch.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              My priority is always the same: clean logic, scalable architecture, transparent communication, and shipping builds
              that are stable for real users and fast enough to grow.
            </p>
            <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-[0_35px_70px_-45px_rgba(15,23,42,0.35)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How I work</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#fff4ec] text-lg">👂</span>
                  <span className="leading-relaxed">Listen first, not sell – short call to understand your idea or current Bubble app pain.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-lg">🧭</span>
                  <span className="leading-relaxed">Recommend the best path – clear options with realistic timelines and costs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#f3f5ff] text-lg">🛠️</span>
                  <span className="leading-relaxed">Fix, build, and improve together – hands-on work in your Bubble app with live visibility.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#ecfdf5] text-lg">📚</span>
                  <span className="leading-relaxed">Explain as I go – clean naming, notes, and Loom walkthroughs so everything makes sense.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#fff1f2] text-lg">🤝</span>
                  <span className="leading-relaxed">Stay in your corner – available for tweaks, new features, or emergency fixes whenever needed.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-5">
            {skills.map(({ title, subtitle, description, Icon, accent }) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.45)] transition-shadow hover:-translate-y-0.5 hover:shadow-[0_35px_75px_-45px_rgba(15,23,42,0.55)]"
              >
                <div className="flex gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b ${accent} text-theme-blue`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{subtitle}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
