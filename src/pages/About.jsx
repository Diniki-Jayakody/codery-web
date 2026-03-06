import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Eye,
  Target,
  ShieldCheck,
  Sparkles,
  Handshake,
  Activity,
  Lightbulb,
  Users,
  TrendingUp,
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import StatBlock from '../components/ui/StatBlock';
import CTABanner from '../components/ui/CTABanner';

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="pt-24 sm:pt-28 lg:pt-32">
      {/* Hero */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative overflow-hidden pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="hero-orbs hidden md:block">
          <div className="hero-orb hero-orb--cobalt" />
          <div className="hero-orb hero-orb--cyan" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1
              id="about-hero-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl text-white"
            >
              About Codery
            </h1>
            <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-cobalt to-cyan" />
            <p className="mt-4 text-sm sm:text-base text-grey">
              Codery is a Sri Lanka–based technology company partnering with global teams to
              design, build, and scale modern digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        aria-label="Vision and mission"
        className="pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.article
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass card-glow rounded-2xl border-t-2 border-t-cobalt/60 p-6 sm:p-7"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-mid">
                <Eye className="h-5 w-5 text-cyan" />
              </div>
              <h2 className="mt-4 font-display text-xl text-white">Our Vision</h2>
              <p className="mt-2 text-sm text-grey">
                To be the trusted engineering backbone for ambitious companies around the
                world, helping them ship software that feels as good to operate as it does
                to use.
              </p>
            </motion.article>

            <motion.article
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="glass card-glow rounded-2xl border-t-2 border-t-cyan/60 p-6 sm:p-7"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-mid">
                <Target className="h-5 w-5 text-cyan" />
              </div>
              <h2 className="mt-4 font-display text-xl text-white">Our Mission</h2>
              <p className="mt-2 text-sm text-grey">
                To pair world‑class Sri Lankan talent with thoughtful processes and
                product thinking so our partners can focus on outcomes, not just outputs.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Company story */}
      <section
        aria-label="Company story"
        className="pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="flex items-start">
              <figure className="glass relative rounded-2xl p-6">
                <div className="absolute inset-0 bg-radial-orb-cobalt opacity-60" />
                <blockquote className="relative text-lg font-medium text-white">
                  “Technology Partner, Not Just a Vendor”
                </blockquote>
                <figcaption className="relative mt-3 text-xs text-grey">
                  The principle that guides how we hire, collaborate, and ship.
                </figcaption>
              </figure>
            </div>
            <div className="space-y-4 text-sm text-grey">
              <p>
                Codery was founded with a simple belief: great software outcomes come from
                long‑term, trust‑based partnerships between product and engineering teams.
                Sri Lanka has a deep pool of engineering talent, but much of it has been
                under‑represented in global product builds.
              </p>
              <p>
                We set out to change that by building a studio that combines senior hands‑on
                engineers, thoughtful UX designers, and product‑minded leaders. Teams that
                understand how to work with distributed stakeholders, align on goals, and
                operate in production—not just ship the first version.
              </p>
              <p>
                Today, we work with clients across multiple continents, embedding into their
                rituals, tools, and culture. We care about the systems we leave behind: clear
                architecture, excellent documentation, and teams who know how to keep
                evolving what we&apos;ve built together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        aria-labelledby="values-heading"
        className="pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="Principles That Shape Our Work"
            subtitle="How we show up for our partners, our craft, and each other—on every project, every day."
            align="left"
            gradientWord="Shape"
          />
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: 'Quality',
                desc: 'We sweat the details in architecture, UI, and operations.',
              },
              {
                icon: Sparkles,
                title: 'Innovation',
                desc: 'We bring new ideas while staying grounded in constraints.',
              },
              {
                icon: Activity,
                title: 'Reliability',
                desc: 'We communicate clearly and deliver when we say we will.',
              },
              {
                icon: Lightbulb,
                title: 'Transparency',
                desc: 'Clear trade‑offs, honest risks, and open communication.',
              },
              {
                icon: Handshake,
                title: 'Collaboration',
                desc: 'We work as one team with your product and leadership.',
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                desc: 'We invest in our people so your teams get stronger over time.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="glass card-glow flex flex-col gap-3 rounded-xl p-5"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-mid">
                  <Icon className="h-4 w-4 text-cyan" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {title}
                </h3>
                <p className="text-sm text-grey">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats reuse */}
      <section
        aria-label="Codery by the numbers"
        className="border-y border-navy-mid bg-navy-light/70 py-10"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatBlock number={50} label="Projects Delivered" />
            <StatBlock number={5} label="Countries Served" />
            <StatBlock number={30} label="Team Members" />
            <StatBlock number={3} label="Years in Operation" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 pt-12 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Let’s Explore What We Could Build Together"
            subtext="Share where you are today and where you’re trying to go. We’ll respond with pragmatic options, not a generic sales deck."
            buttonLabel="Talk to the Team"
            link="/contact"
          />
        </div>
      </section>
    </main>
  );
};

export default About;