import React from "react";
import { ArrowRight } from "lucide-react";

const FAQSection = () => {
  return (
    <section id="cta" className="bg-[#F9FBFF]">
      <div className="container">
        <div className="rounded-[36px] border border-white/60 bg-white px-8 py-12 shadow-[0_45px_120px_-80px_rgba(15,23,42,0.65)] md:px-16 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-theme-blue">Next step</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Let&rsquo;s build something great together -- Book a free consultation.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Tell me about your product, timelines, and must-have workflows. I&rsquo;ll review everything and send over a plan, cost
            estimate, and build approach within one business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-theme-blue px-8 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(0,85,255,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(0,85,255,0.4)]"
            >
              Book a free consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=923152637573"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-8 py-4 text-base font-semibold text-slate-900 transition hover:border-theme-blue hover:text-theme-blue"
            >
              Message me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
