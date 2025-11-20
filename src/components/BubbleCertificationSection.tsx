import React from "react";
import { BadgeCheck, ExternalLink, Sparkles } from "lucide-react";
import { bubbleFocusedCerts, bubbleVerificationUrl, spotlightCert } from "@/data/certifications";

const BubbleCertificationSection = () => {
  const supportingCerts = bubbleFocusedCerts.filter((cert) => cert.title !== spotlightCert.title);

  return (
    <section id="bubble-certifications" className="bg-[#F9FBFF]">
      <div className="container space-y-10">
        <div className="relative mx-auto max-w-5xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffd3bf]/70 bg-white/80 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d85a1a] shadow-[0_16px_40px_-26px_rgba(15,23,42,0.45)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#f96f4a] shadow-[0_0_0_6px_rgba(249,111,74,0.18)]" aria-hidden="true" />
            Bubble.io proof
          </div>
          <h2 className="text-4xl font-bold leading-tight text-transparent bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] bg-clip-text md:text-5xl">
            Certified Bubble Professional + security, workflow, and database specializations
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#ffd3bf] via-[#ffaf80] to-[#ffd3bf] opacity-70" aria-hidden="true" />
          <p className="text-slate-600 md:mx-auto md:max-w-3xl md:text-lg">
            {spotlightCert.subtitle} The same proctored exam and reviews that power the certifications page are distilled here so new visitors can verify credentials fast.
          </p>
        </div>

        <article className="relative overflow-hidden rounded-[36px] border border-[#ffe0cf]/80 bg-gradient-to-br from-[#fff7f0] via-white to-[#eef2ff] p-8 shadow-[0_50px_130px_-90px_rgba(15,23,42,0.55)] space-y-10">
          <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-[#ffd3bf]/50 blur-[120px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-[#dbe4ff]/60 blur-[140px]" aria-hidden="true" />
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff3e6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#d85a1a] shadow-[0_14px_32px_-24px_rgba(249,111,74,0.4)]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Bubble verified
            </div>
            <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold leading-tight text-slate-900">{spotlightCert.title}</h3>
                <p className="max-w-3xl text-base leading-relaxed text-slate-600">{spotlightCert.description}</p>
              </div>
              <div className="justify-self-end">
                <div className="relative w-full max-w-sm overflow-hidden rounded-[22px] border border-white/80 bg-gradient-to-br from-white via-[#fff7f0] to-[#eef2ff] p-2 shadow-[0_26px_80px_-55px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 hover:scale-[1.01]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,211,191,0.5),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(219,228,255,0.45),transparent_55%)]" aria-hidden="true" />
                  <img
                    src={spotlightCert.image}
                    alt={spotlightCert.title}
                    className="relative h-auto w-full max-h-[210px] rounded-[16px] object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {spotlightCert.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 soft-card p-4 text-sm leading-relaxed text-slate-700">
                <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#f96f4a] shadow-[0_12px_28px_-20px_rgba(249,111,74,0.5)]">
                  <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="grid gap-4 sm:grid-cols-3">
            {spotlightCert.metrics.map((metric) => (
              <div
                key={metric.label}
                className="soft-card p-4 text-center bg-white/85"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#94a3b8]">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{metric.value}</p>
                <p className="text-xs text-slate-500">{metric.detail}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">More Bubble credentials</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {supportingCerts.map((cert) => (
                <div key={cert.title} className="soft-card p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d85a1a]">{cert.issuer}</p>
                    <span className="rounded-full bg-[#fff3e6] px-3 py-1 text-[11px] font-semibold text-[#d85a1a]">{cert.year}</span>
                  </div>
                  <h4 className="mt-2 text-lg font-semibold text-slate-900">{cert.title}</h4>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                    {cert.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-[#f96f4a]" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <a
              href="/certifications"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-7 py-3 text-sm font-semibold text-white shadow-[0_20px_55px_rgba(249,111,74,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(249,111,74,0.45)]"
            >
              View the certifications page
            </a>
            <a
              href={bubbleVerificationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ffd3bf] bg-white px-6 py-3 text-sm font-semibold text-[#d85a1a] transition hover:-translate-y-0.5 hover:bg-[#fff2ea]"
            >
              Verify on Bubble
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="flex items-start justify-center sm:justify-center mt-0.5">
            <p className="inline-flex items-start gap-1 text-[11px] font-medium text-slate-600 sm:text-right">
              <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ffd3bf] text-[#c2410c]">!</span>
              <span>Verified by Bubble; full badge gallery on the certifications page.</span>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BubbleCertificationSection;
