import React from "react";
import { Clock3, MessagesSquare, Target, Briefcase, Wallet } from "lucide-react";

const reasons = [
  {
    title: "Direct communication",
    description: "You speak with me every time -- strategy, builds, tweaks, and launches.",
    Icon: MessagesSquare,
  },
  {
    title: "Fast delivery",
    description: "Lean sprints, daily check-ins, and weekly releases keep momentum high.",
    Icon: Clock3,
  },
  {
    title: "Deep focus",
    description: "I run few engagements at once so your project gets meaningful attention.",
    Icon: Target,
  },
  {
    title: "Business understanding",
    description: "I align the build to your profit model, compliance needs, and growth plans.",
    Icon: Briefcase,
  },
  {
    title: "Flexible freelancer pricing",
    description: "Clarity on scope, no retainers unless you ask for dedicated support.",
    Icon: Wallet,
  },
];

const ExperienceSection = () => {
  return (
    <section id="why-me" className="bg-white">
      <div className="container">
        <div className="section-heading">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d85a1a]">Founder advantages</p>
          <h2 className="text-transparent bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] bg-clip-text">
            Why founders hire me instead of an agency
          </h2>
          <p className="text-slate-600">Working with me feels like having a technical partner who understands the business stakes.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-[32px] border border-white/70 bg-gradient-to-br from-white via-[#fff8f1] to-white p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_-55px_rgba(15,23,42,0.45)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff2e7] text-[#ff8c4c] shadow-[0_12px_30px_rgba(249,140,76,0.25)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
