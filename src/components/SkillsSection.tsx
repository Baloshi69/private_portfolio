import React from "react";
import { Code2, BadgeCheck, Workflow, Cpu } from "lucide-react";

const pillars = [
  {
    title: "Bubble SaaS & MVP builds",
    description: "Complete product builds with responsive UI, reusable components, and clean databases.",
    Icon: Code2,
    highlights: ["Dashboards & portals", "Payments & subscriptions", "Role-based access"],
  },
  {
    title: "Backend logic & API orchestration",
    description: "Trusted APIs, secure data flows, and admin tooling that keep your product stable.",
    Icon: Cpu,
    highlights: ["Custom REST/GraphQL", "Stripe, PayPal, Zoho, Xano", "Webhook orchestration"],
  },
  {
    title: "Automation workflows",
    description: "I connect Bubble, Make, Zapier, and custom scripts to remove repetitive work.",
    Icon: Workflow,
    highlights: ["Onboarding flows", "Operations dashboards", "AI + LLM helpers"],
  },
  {
    title: "Quality, testing & reliability",
    description: "Temporary email/phone setups, regression checklists, and performance sweeps before launch.",
    Icon: BadgeCheck,
    highlights: ["Temporary inboxes", "Load monitoring", "Cleanup & refactor audits"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-white">
      <div className="container">
        <div className="section-heading">
          <h2>What I bring to every build</h2>
          <p>These are the pillars I lean on when I&rsquo;m building Bubble apps for founders who need production-ready software.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map(({ title, description, Icon, highlights }) => (
            <article
              key={title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_32px_80px_-55px_rgba(15,23,42,0.45)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-theme-blue">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-700">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-theme-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
