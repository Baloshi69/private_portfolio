import React from "react";
import { Helmet } from "react-helmet-async";
import { Award, BadgeCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const certificates = [
  {
    title: "Certified Bubble Professional",
    issuer: "Bubble.io",
    year: "2025",
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

const skillCategories = [
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

const CertificationsPage = () => {
  const pageTitle = "Certifications & Skills | AlBaloshiTech";
  const pageDescription =
    "Verified certifications, badges, and product delivery skills that back every Bubble, AI, and automation project.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <div className="min-h-screen bg-[#F9FBFF] text-slate-900">
        <Navbar />
        <main className="pt-28 pb-24 space-y-20">
          <section className="container">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d85a1a]">Proof to ship faster</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] bg-clip-text">
                Certifications & operating stack
              </h1>
              <p className="text-lg text-slate-600">
                Every badge below backs a real client system. Scroll through the gallery, then skim the tool stack that covers payments, AI, auth, comms, and delivery.
              </p>
            </div>
          </section>

          <section className="container space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6572ff]">Credibility gallery</p>
                <h2 className="text-2xl font-semibold text-slate-900">Certificates, plaques, and badges</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)]">
                <Award className="h-4 w-4 text-[#f96f4a]" />
                8 verified programs
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {certificates.map((cert) => (
                <article
                  key={cert.title}
                  className="group relative flex flex-col rounded-[32px] border border-white/80 bg-white/80 p-4 shadow-[0_35px_80px_-60px_rgba(15,23,42,0.4)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-[0_45px_100px_-65px_rgba(15,23,42,0.5)]"
                >
                  <div className="overflow-hidden rounded-[24px] border border-slate-100 bg-slate-50">
                    <img src={cert.image} alt={cert.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">{cert.issuer}</p>
                      <span className="rounded-full bg-[#fdf4ee] px-3 py-1 text-xs font-semibold text-[#d85a1a]">{cert.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{cert.title}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                      {cert.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <BadgeCheck className="h-4 w-4 text-[#f96f4a]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="container space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d85a1a]">Tool stack</p>
                <h2 className="text-2xl font-semibold text-slate-900">Platforms I use daily</h2>
                <p className="mt-2 max-w-2xl text-base text-slate-600">
                  Pairing the right tool to the right workflow keeps founders out of the vendor maze. These are the services wired into recent Bubble, AI, and automation engagements.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ffdfcc] bg-[#fff8f4] px-4 py-2 text-sm font-medium text-[#d85a1a] shadow-[0_18px_45px_-35px_rgba(249,140,76,0.45)]">
                <Sparkles className="h-4 w-4" />
                Always testing new releases
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillCategories.map((category) => (
                <article key={category.title} className="rounded-[28px] border border-white/70 bg-gradient-to-br from-white via-[#fff8f4] to-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_40px_90px_-65px_rgba(15,23,42,0.45)]">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">{category.items.length} tools</span>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <li key={skill} className="rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.45)]">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="container">
            <div className="rounded-[32px] border border-white/70 bg-white/90 p-10 text-center shadow-[0_45px_120px_-80px_rgba(15,23,42,0.55)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d85a1a]">Ready when you are</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Need a certified partner for your build?</h2>
              <p className="mt-4 text-lg text-slate-600">
                Let&rsquo;s connect on a quick call and map the exact workflows, compliance, and automations your launch deserves.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-8 py-3 text-base font-semibold text-white shadow-[0_20px_45px_rgba(249,111,74,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_55px_rgba(249,111,74,0.45)]"
                >
                  Book a discovery call
                </a>
                <a
                  href="/#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ffb48a] px-8 py-3 text-base font-semibold text-[#d85a1a] transition hover:border-[#ff8c4c] hover:text-[#ff8c4c]"
                >
                  Review signature builds
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CertificationsPage;
