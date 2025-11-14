import React from "react";
import { Gauge, Layers, PlugZap, Workflow, ShieldCheck } from "lucide-react";

const skills = [
  {
    title: "SaaS development with Bubble.io",
    description: "Multi-tenant platforms, dashboards, and client portals ready for launch.",
    Icon: Layers,
  },
  {
    title: "Backend logic & API integrations",
    description: "Structured data, advanced logic, and custom APIs that keep your tool flexible.",
    Icon: PlugZap,
  },
  {
    title: "Automation workflows",
    description: "Bubble workflows, Make, Zapier, and custom scripts to remove busywork.",
    Icon: Workflow,
  },
  {
    title: "Testing tools (temporary email/phone)",
    description: "Disposable inboxes and QA tooling so every flow ships verified.",
    Icon: ShieldCheck,
  },
  {
    title: "Performance & cleanup",
    description: "Audits, refactors, and database hygiene that keep Bubble apps fast.",
    Icon: Gauge,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#F9FBFF]">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-theme-blue">About Me</p>
            <h2 className="text-4xl font-bold text-slate-900">I Build Business-Ready Applications -- Independently.</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              I&rsquo;m Al Baloshi Nawaz (Baloshi69), a certified Bubble.io developer and Google IT Support Specialist. I work
              directly with founders and operators who want a dependable builder, not an agency layer. You talk to me, I scope the
              work, I build, integrate, test, and ship the final product.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              You get the clarity of a single point of contact and the output of a full product team. When you reach out, I respond
              quickly, keep communication transparent, and deliver launch-ready builds without dragging timelines.
            </p>
            <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-[0_35px_70px_-45px_rgba(15,23,42,0.35)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How I work</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Discovery call to understand your goals and constraints.</li>
                <li>• Roadmap, scope, and timeline delivered before any build starts.</li>
                <li>• Weekly updates, private Looms, and transparent backlog.</li>
                <li>• Deployment, handoff, and post-launch support if you want it.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-5">
            {skills.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_45px_-42px_rgba(15,23,42,0.6)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-theme-blue">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
