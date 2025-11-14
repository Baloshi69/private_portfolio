import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "EasyPeasyMail",
    role: "Solo Developer",
    description:
      "Lightweight email verification and warm-up platform built in Bubble with automation hooks for email teams.",
    highlights: ["Bubble front & backend", "AI-assisted deliverability scoring", "Loops & SendGrid integrations"],
  },
  {
    title: "TestDriveCheck",
    role: "Solo Developer",
    description: "Vehicle inspection SaaS that lets dealerships manage digital paperwork, scheduling, and audit logs.",
    highlights: ["Workflow automation", "Secure document handling", "Role-based dashboards"],
  },
  {
    title: "Euclides AI",
    role: "Solo Developer",
    description: "AI-driven coaching workspace that pairs Bubble UI with GPT copilots and automated billing.",
    highlights: ["Custom AI prompts", "Stripe customer portal", "Zapier + Bubble middleware"],
  },
  {
    title: "Coaching & Scheduling System",
    role: "Solo Developer",
    description: "Calendar, payments, and progress tracking for a coaching collective running global cohorts.",
    highlights: ["Calendly style booking", "Automations & notification layer", "Scalable database setup"],
  },
  {
    title: "Additional tools & internal systems",
    role: "Solo Developer",
    description: "Internal dashboards, compliance tooling, and utility apps for founders who need ongoing support.",
    highlights: ["Rapid-fire Bubble builds", "API-first thinking", "Flexible prototypes turned production"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#F9FBFF]">
      <div className="container">
        <div className="section-heading">
          <h2>Selected projects & builds</h2>
          <p>Every project below was designed, built, and shipped by me -- no handoffs, no agency layers, just focused delivery.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_45px_120px_-70px_rgba(15,23,42,0.55)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{project.role}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">{project.title}</h3>
                </div>
                <span className="inline-flex items-center rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-semibold text-theme-blue">
                  Bubble.io
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{project.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ArrowUpRight className="h-4 w-4 text-theme-blue" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Deep dive</p>
            <h3 className="text-lg font-semibold text-slate-900">Want more examples? I keep a detailed portfolio for reference.</h3>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-theme-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(0,85,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,85,255,0.35)]"
          >
            Browse full portfolio
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
