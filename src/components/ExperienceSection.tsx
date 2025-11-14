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
          <h2>Why founders hire me instead of an agency</h2>
          <p>Working with me feels like having a technical partner who understands the business stakes.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, Icon }) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_90px_-65px_rgba(15,23,42,0.55)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-theme-blue">
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
