import React from "react";
import { Cpu, Database, Gauge, Layers, PlugZap, Workflow } from "lucide-react";

const skills = [
  {
    title: "SaaS development with Bubble.io",
    subtitle: "Reliable and scalable applications tailored for real business needs.",
    description:
      "I build secure SaaS platforms, client portals, and dashboards with clean structure and long-term maintainability. Your product can grow without needing expensive rebuilds.",
    Icon: Layers,
    accent: "from-[#fff2e7] via-white to-white",
  },
  {
    title: "Backend logic & API integrations",
    subtitle: "Strong foundations that keep your operations running smoothly.",
    description:
      "I design efficient databases, build advanced workflows, and connect your app to the right APIs. The result is a system that stays stable, flexible, and ready for future expansion.",
    Icon: PlugZap,
    accent: "from-[#fff4ec] via-white to-white",
  },
  {
    title: "Automation workflows (n8n, Make, Zapier)",
    subtitle: "Less manual work and more consistency across your business.",
    description:
      "I create automation systems with n8n as the primary tool, supported by Make and Zapier where needed. These workflows remove repetitive tasks and keep your processes dependable.",
    Icon: Workflow,
    accent: "from-[#fff0e2] via-white to-white",
  },
  {
    title: "Custom JavaScript enhancements",
    subtitle: "Practical improvements that make your Bubble app more capable.",
    description:
      "When Bubble reaches its limits, I add custom JavaScript to improve the experience, unlock new behaviours, and provide the functionality your users expect.",
    Icon: Cpu,
    accent: "from-[#ffeef8] via-white to-white",
  },
  {
    title: "AI features and integrations",
    subtitle: "Useful AI that strengthens your product in real ways.",
    description:
      "I integrate AI assistants, content tools, data extraction, smart workflows and more. The goal is to add features that create value for your customers, not gimmicks.",
    Icon: Database,
    accent: "from-[#fff6ec] via-white to-white",
  },
  {
    title: "Performance and cleanup",
    subtitle: "A faster and more stable Bubble app your users can trust.",
    description:
      "I identify issues, clean workflows, remove bottlenecks and optimize your database. Your app becomes quicker, smoother, and ready for real traffic.",
    Icon: Gauge,
    accent: "from-[#fff4e0] via-white to-white",
  },
];

const WhatIBringSection = () => {
  return (
    <section className="bg-[#F9FBFF]">
      <div className="container space-y-5">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] bg-clip-text">What I bring to every build</h3>
          <p className="mt-2 text-base text-slate-600">
            These are the pillars I lean on when I&rsquo;m building Bubble apps for founders who need production-ready software.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map(({ title, subtitle, description, Icon, accent }) => (
            <article
              key={title}
              className="soft-card p-6"
            >
              <div className="flex gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-[#ff8c4c] shadow-[0_15px_35px_rgba(249,140,76,0.25)]`}>
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
    </section>
  );
};

export default WhatIBringSection;
