import React from 'react';
import { CheckCircle2, Globe2, Mail, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import services from '../data/services';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;
  
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const nextErrors = {};
  
    if (!data.fullName) nextErrors.fullName = 'Required';
    if (!data.email) nextErrors.email = 'Required';
    if (!data.service) nextErrors.service = 'Required';
    if (!data.description) nextErrors.description = 'Required';
  
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
  
    setSubmitting(true);
  
    emailjs
      .send(
        "service_m9rpxaq",   
        "template_fijwrtp",
        {
          fullName: data.fullName,
          company: data.company,
          email: data.email,
          budget: data.budget,
          service: data.service,
          description: data.description,
        },
        "RVmL9YVoic4s7ubhf" 
      )
      .then(
        () => {
          setSubmitting(false);
          setSubmitted(true);
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setSubmitting(false);
        }
      );
  };

  return (
    <main className="pt-24 sm:pt-28 lg:pt-32">
      {/* Hero */}
      <section
        aria-labelledby="contact-hero-heading"
        className="pb-12 sm:pb-16 lg:pb-20"
      >
        <div className="hero-orbs hidden md:block">
          <div className="hero-orb hero-orb--cobalt" />
          <div className="hero-orb hero-orb--cyan" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            id="contact-hero-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-slate-900"
          >
            Let&apos;s Build Something Together
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-grey">
            Share a bit about your project, constraints, and goals. We&apos;ll reply
            with next steps—usually within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section
        aria-label="Contact form"
        className="pb-16 sm:pb-20 lg:pb-24"
      >
        <div
          id="contact-form-top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Form */}
            <div className="glass card-glow rounded-2xl p-6 sm:p-7">
              <SectionHeading
                eyebrow="Project Brief"
                title="Tell Us About Your Project"
                subtitle="Share the essentials and we&apos;ll suggest the right team, approach, and timeline."
                align="left"
                gradientWord="Project"
              />

              <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-grey"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className={`mt-1 w-full rounded-xl border px-3 py-2.5 text-base text-slate-900 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-cobalt ${
                        errors.fullName
                          ? 'border-red-400 bg-white'
                          : 'border-navy-mid bg-white focus-visible:border-cobalt'
                      }`}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-grey"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="mt-1 w-full rounded-xl border border-navy-mid bg-white px-3 py-2.5 text-base text-slate-900 shadow-sm outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-grey"
                    >
                      Work Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`mt-1 w-full rounded-xl border px-3 py-2.5 text-base text-slate-900 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-cobalt ${
                        errors.email
                          ? 'border-red-400 bg-white'
                          : 'border-navy-mid bg-white focus-visible:border-cobalt'
                      }`}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-grey"
                    >
                      Budget Range (optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="mt-1 w-full rounded-xl border border-navy-mid bg-white px-3 py-2.5 text-base text-slate-900 shadow-sm outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt"
                    >
                      <option value="">Select a range</option>
                      <option value="under-25k">Under $25k</option>
                      <option value="25-75k">$25k – $75k</option>
                      <option value="75-150k">$75k – $150k</option>
                      <option value="150k-plus">$150k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-grey"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={`mt-1 w-full rounded-xl border px-3 py-2.5 text-base text-slate-900 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-cobalt ${
                      errors.service
                        ? 'border-red-400 bg-white'
                        : 'border-navy-mid bg-white focus-visible:border-cobalt'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-grey"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    className={`mt-1 w-full rounded-xl border px-3 py-2.5 text-base text-slate-900 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-cobalt ${
                      errors.description
                        ? 'border-red-400 bg-white'
                        : 'border-navy-mid bg-white focus-visible:border-cobalt'
                    }`}
                    placeholder="Share a bit about your product, timelines, and what success looks like..."
                  />
                </div>

                <div className="flex items-center justify-between text-sm text-grey">
                  <p>We&apos;ll respond within one business day.</p>
                  <p className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                    NDA available on request.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="focus-ring inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-cobalt to-cyan px-6 py-3 text-base font-semibold text-white shadow-glow-soft disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? 'Sending...' : 'Submit Project Brief'}
                  </button>
                </div>

                {submitted && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-400/60 bg-emerald-500/10 px-3 py-3 text-sm text-emerald-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" aria-hidden="true" />
                    <div>
                      <p className="font-medium">
                        Thank you! We&apos;ll be in touch within 24 hours.
                      </p>
                      <p className="text-xs text-emerald-200/80">
                        If you don&apos;t see an email from us, please check your spam
                        folder or reach out directly at contact@codery.lk.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Info panel */}
            <aside className="space-y-5">
              <div className="glass card-glow rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900">
                    <Globe2 className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-slate-900">
                      Codery Pvt Ltd
                    </p>
                    <p className="text-sm text-grey">
                      HQ - United Kingdom. Colombo, Sri Lanka, and remote-native.
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-base text-grey">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                    <a
                      href="mailto:support@codery.co.uk"
                      className="text-cobalt hover:text-slate-900"
                    >
                        support@codery.co.uk
                    </a>
                  </p>
                  <p>We&apos;re typically online across GMT+5:30 with overlapping EU/UK hours.</p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Usually within 24 hours
                </div>
              </div>

              <div className="space-y-3 text-base text-grey">
                <div className="glass rounded-2xl p-4">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                    <span>Free initial consultation</span>
                  </p>
                  <p className="mt-1 text-sm text-grey-light">
                    A no‑pressure conversation about your roadmap and constraints.
                  </p>
                </div>
                <div className="glass rounded-2xl p-4">
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                    <span>NDA available on request</span>
                  </p>
                  <p className="mt-1 text-sm text-grey-light">
                    We&apos;re happy to sign your mutual NDA before diving deeper.
                  </p>
                </div>
                <div className="glass rounded-2xl p-4">
                  <p className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                    <span>Flexible engagement models</span>
                  </p>
                  <p className="mt-1 text-sm text-grey-light">
                    From short‑term audits to long‑term dedicated teams.
                  </p>
                </div>
              </div>

              <div className="glass flex items-center justify-center rounded-2xl p-6">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 rounded-full border border-blue-500/50" />
                  <div className="absolute inset-3 rounded-full border border-cyan-400/40" />
                  <div className="absolute inset-6 rounded-full border border-slate-800" />
                  <Globe2 className="absolute inset-0 m-auto h-7 w-7 text-cyan-400" aria-hidden="true" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 pt-4 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Prefer to Start with a Short Intro Call?"
            subtext="We&apos;re happy to begin with a 30-minute conversation to understand your context."
            buttonLabel="Schedule a Call"
            link="/contact"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;

