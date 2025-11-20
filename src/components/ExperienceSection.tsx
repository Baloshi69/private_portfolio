import React from "react";
import { Clock3, MessagesSquare, Target, Briefcase, Wallet, Sparkles } from "lucide-react";

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

const deliveryStat = {
  label: "Average MVP launch",
  value: "6 weeks",
  detail: "Scope → production with QA",
};

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
              className="soft-card p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#ff8c4c] shadow-[0_12px_30px_rgba(249,140,76,0.25)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </article>
          ))}
        </div>
        <article className="mt-6 soft-card px-8 py-6 text-center">
          <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#ff8c4c] shadow-[0_12px_30px_rgba(249,140,76,0.25)]">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">{deliveryStat.label}</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{deliveryStat.value}</p>
          <p className="mt-1 text-sm text-slate-600">{deliveryStat.detail}</p>
        </article>
      </div>
    </section>
  );
};

export default ExperienceSection;
