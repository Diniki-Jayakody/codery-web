import React from 'react';
import { Users, Clock3, Layers, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import TalentRoleCard from '../components/ui/TalentRoleCard';
import CTABanner from '../components/ui/CTABanner';
import talent from '../data/talent';

const engagementModels = [
  {
    id: 'dedicated',
    icon: Users,
    title: 'Dedicated Talent',
    description:
      'Long‑term collaborators who join your stand‑ups, rituals, and codebase as core members of your team.',
    bullets: [
      'Ideal for product teams with an ongoing roadmap',
      'Exclusive focus on your organization',
      'Full participation in your rituals and tooling',
      'Best for complex, evolving systems',
    ],
  },
  {
    id: 'part-time',
    icon: Clock3,
    title: 'Part‑Time Support',
    description:
      'Fractional engineering and advisory capacity for focused initiatives where you need extra depth, not a full team.',
    bullets: [
      'Great for prototypes and spikes',
      'Architecture reviews and mentoring',
      'Flexible weekly time commitments',
      'Can evolve into dedicated engagements',
    ],
  },
  {
    id: 'teams',
    icon: Layers,
    title: 'Outsourced Teams',
    description:
      'Self‑managed product squads including engineering, design, and product leadership that own outcomes end‑to‑end.',
    bullets: [
      'Clear ownership and communication rhythms',
      'Cross‑functional squads tailored to your domain',
      'Outcome‑oriented engagement models',
      'Ideal for new initiatives and spin‑outs',
    ],
  },
];

const HireTalent = () => {
  const [activeModel, setActiveModel] = React.useState('dedicated');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const model = engagementModels.find((m) => m.id === activeModel) ?? engagementModels[0];

  return (
    <main className="pt-24 sm:pt-28 lg:pt-32">
      {/* Hero */}
      <section aria-labelledby="hire-hero-heading" className="pb-16 sm:pb-20 lg:pb-24">
        <div className="hero-orbs hidden md:block">
          <div className="hero-orb hero-orb--cobalt" />
          <div className="hero-orb hero-orb--cyan" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cobalt">
              Hire Sri Lankan Talent
            </p>
            <h1
              id="hire-hero-heading"
              className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl text-white"
            >
              Hire World‑Class Tech Talent from Sri Lanka
            </h1>
            <p className="mt-4 text-sm sm:text-base text-grey">
              Build long‑term capacity with engineers, designers, and product leaders who
              have shipped complex systems with global teams—without the overhead of
              building everything in‑house.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo('available-roles')}
                className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg"
              >
                Browse Talent
              </button>
              <button
                type="button"
                onClick={() => scrollTo('engagement-models')}
                className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-full border border-blue-500 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-500"
              >
                Build a Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Available roles */}
      <section
        id="available-roles"
        aria-labelledby="roles-heading"
        className="pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Available Roles"
            title="Roles We Commonly Staff"
            subtitle="We curate teams with the mix of experience, communication, and technical depth needed for your roadmap."
            align="left"
            gradientWord="Roles"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {talent.map((role) => (
              <TalentRoleCard
                key={role.role}
                role={role.role}
                skills={role.skills}
                available={role.available}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section
        id="engagement-models"
        aria-labelledby="engagement-heading"
        className="pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Engagement Models"
            title="Choose How You Work with Codery"
            subtitle="We’ll help you pick the right model based on your roadmap, internal team, and risk profile."
            align="left"
            gradientWord="Work"
          />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-3">
              <div className="inline-flex rounded-full bg-slate-900/80 p-1 text-xs text-grey">
                {engagementModels.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveModel(m.id)}
                    className={`focus-ring inline-flex flex-1 items-center justify-center gap-1 rounded-full px-3 py-1.5 font-medium transition-colors ${
                      activeModel === m.id ? 'bg-blue-600 text-slate-950' : ''
                    }`}
                    aria-pressed={activeModel === m.id}
                  >
                    <m.icon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{m.title.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-grey">
                Not sure which model fits? We often start small and evolve towards the
                right structure as we learn together.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-7">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                <model.icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-xl text-white">{model.title}</h2>
              <p className="mt-2 text-sm text-gray-300">{model.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {model.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple process */}
      <section aria-label="How hiring works" className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="How We Match and Onboard Talent"
            subtitle="Clear, structured steps that keep you in control while we do the heavy lifting on vetting and coordination."
            align="left"
            gradientWord="Match"
          />
          <div className="mt-10 grid grid-cols-[auto,1fr] gap-x-6 gap-y-8">
            {[
              { title: 'Brief Us', desc: 'Share your stack, ways of working, and what success looks like.' },
              {
                title: 'We Match',
                desc: 'We propose profiles that fit your needs—not just skills, but collaboration style.',
              },
              { title: 'Interview', desc: 'You meet candidates through lightweight interviews focused on fit.' },
              { title: 'Onboard', desc: 'We co‑create an onboarding plan and stay close for the first 90 days.' },
            ].map((step, idx) => (
              <React.Fragment key={step.title}>
                <div className="relative flex items-center">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-blue-500 bg-slate-900 text-sm font-semibold text-blue-400">
                    {idx + 1}
                  </div>
                  {idx < 3 && (
                    <div className="absolute left-1/2 top-9 h-16 w-px -translate-x-1/2 border-l border-dashed border-slate-700" />
                  )}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-grey">{step.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 pt-4 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Ready to Meet Your Future Team?"
            subtext="Share your roadmap and constraints, and we’ll propose a talent plan and sample profiles within a few business days."
            buttonLabel="Share Your Needs"
            link="/contact"
          />
        </div>
      </section>
    </main>
  );
};

export default HireTalent;

