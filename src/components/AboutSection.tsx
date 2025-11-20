import React from "react";
import { useIsNasirDomain } from "@/hooks/useContactVisibility";

const howIWorkSteps = [
  {
    icon: "👂",
    bg: "bg-[#fff4ec]",
    text: "Listen first, not sell – short call to understand your idea or current Bubble app pain.",
  },
  {
    icon: "🧭",
    bg: "bg-[#eef4ff]",
    text: "Recommend the best path – clear options with realistic timelines and costs.",
  },
  {
    icon: "🛠️",
    bg: "bg-[#f3f5ff]",
    text: "Fix, build, and improve together – hands-on work in your Bubble app with live visibility.",
  },
  {
    icon: "📚",
    bg: "bg-[#ecfdf5]",
    text: "Explain as I go – clean naming, notes, and Loom walkthroughs so everything makes sense.",
  },
  {
    icon: "🤝",
    bg: "bg-[#fff1f2]",
    text: "Stay in your corner – available for tweaks, new features, or emergency fixes whenever needed.",
  },
];

const AboutSection = () => {
  const isNasirDomain = useIsNasirDomain();
  const displayName = isNasirDomain ? "Nasir Nawaz" : "Al Baloshi Nawaz";

  return (
    <section id="about" className="bg-[#F9FBFF]">
      <div className="container space-y-12">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff8c4c]">About Me</p>
            <h2 className="text-4xl font-bold text-slate-900">I help founders build and optimise Bubble apps with clean logic, automation, and AI-ready structure.</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              I'm {displayName} (Baloshi69), a certified Bubble.io developer and Google IT Support Specialist. I work directly with founders, operators, and small teams who need fast,
              reliable development without the delays or miscommunication that come with agency layers.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              When you work with me, you speak directly to the person designing, building, integrating, and deploying your app. I handle everything end-to-end: front-end UI, database
              structure, workflows, API connections, automation systems, AI features, testing, optimisation, and launch.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              My priority is always the same: clean logic, scalable architecture, transparent communication, and shipping builds that are stable for real users and fast enough to grow.
            </p>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-[0_35px_70px_-45px_rgba(15,23,42,0.35)] lg:self-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How I work</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              {howIWorkSteps.map(({ icon, bg, text }) => (
                <li key={text} className="flex gap-3">
                  <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg ${bg}`}>{icon}</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
