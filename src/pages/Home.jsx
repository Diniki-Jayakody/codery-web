import React from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Code2,
  Users2,
  Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import services from '../data/services';
import portfolio from '../data/portfolio';
import talent from '../data/talent';
import ServiceCard from '../components/ui/ServiceCard';
import StatBlock from '../components/ui/StatBlock';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import PortfolioTile from '../components/ui/PortfolioTile';
import TalentRoleCard from '../components/ui/TalentRoleCard';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const words = ['Build', 'Scalable', 'Digital', 'Solutions', 'with', 'Codery'];

  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      <div className="hero-orbs hidden md:block">
        <div className="hero-orb hero-orb--cobalt" />
        <div className="hero-orb hero-orb--cyan" />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="relative w-full max-w-xl lg:w-3/5 lg:max-w-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-cobalt/40 bg-navy-mid/60 px-3 py-1 text-xs text-grey">
            <span className="text-lg">🌐</span>
            <span className="font-medium text-grey-light">
              Global Technology Partner
            </span>
          </div>
          <h1
            id="home-hero-heading"
            className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white"
          >
            {words.map((word, idx) => {
              const isGradient = word === 'Digital' || word === 'Solutions';
              const span = (
                <span
                  key={`${word}-${idx}`}
                  className={
                    isGradient
                      ? 'bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent'
                      : ''
                  }
                >
                  {word}{' '}
                </span>
              );

              if (prefersReducedMotion) return span;

              return (
                <motion.span
                  key={`${word}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.12 + idx * 0.08,
                  }}
                  className={span.props.className}
                >
                  {word}{' '}
                </motion.span>
              );
            })}
          </h1>
          <p className="mt-4 max-w-md text-sm sm:text-base text-grey">
            Software development, digital solutions, and global talent services for
            businesses worldwide. Built from Colombo, trusted across continents.
          </p>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: prefersReducedMotion ? 0 : 0.7,
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              to="/services"
              className="focus-ring inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-gradient-to-r from-cobalt to-cyan px-6 py-3 text-sm font-semibold text-navy shadow-glow-soft sm:flex-none sm:px-7"
            >
              Explore Our Services
              <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/hire-talent"
              className="focus-ring inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-cobalt/50 bg-navy-mid/40 px-6 py-3 text-sm font-semibold text-white hover:border-cyan sm:flex-none sm:px-7"
            >
              Hire Global Talent
            </Link>
          </motion.div>
        </div>

        <div className="relative mt-10 w-full lg:mt-0 lg:w-2/5">
          <motion.div
            className="mx-auto flex h-72 w-72 max-w-full items-center justify-center rounded-full border border-cyan/40 bg-gradient-to-br from-navy-mid via-navy to-navy-mid shadow-glow-soft"
            animate={prefersReducedMotion ? undefined : { y: [0, -12, 0] }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-navy-light">
              <span className="absolute h-40 w-40 rounded-full border border-cobalt/40" />
              <span className="absolute h-40 w-40 animate-pingSoft rounded-full bg-cobalt/40" />
              <span className="absolute h-32 w-32 rounded-full border border-cyan/40" />
              <span className="absolute h-32 w-32 animate-pingSoft rounded-full bg-cyan/30" />
              <Code2 className="relative h-12 w-12 text-cyan" aria-hidden="true" />
            </div>
          </motion.div>
          <div className="pointer-events-none absolute inset-x-10 -bottom-8 flex items-center justify-between text-xs text-grey">
            <span className="inline-flex items-center gap-1 rounded-full bg-navy-mid/80 px-3 py-1">
              <Globe2 className="h-3.5 w-3.5 text-cyan" />
              5+ Countries Served
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-navy-mid/80 px-3 py-1">
              <Users2 className="h-3.5 w-3.5 text-cyan" />
              Dedicated Teams
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <ArrowDown className="h-5 w-5 animate-bounce text-grey" aria-hidden="true" />
        <span className="sr-only">Scroll to explore more</span>
      </div>
    </section>
  );
};

const Home = () => {
  const marqueeRef = React.useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, { margin: '-80px', once: true });

  const marqueeItems = [
    'Software Development',
    'Web & Mobile Apps',
    'Cloud & DevOps',
    'Data & Analytics',
    'Product & UX Design',
    'Dedicated Teams',
    'Technology Partnerships',
  ];

  return (
    <main>
      <Hero />

      {/* Marquee */}
      <section
        aria-label="Core services marquee"
        className="border-y border-cobalt/20 bg-navy-light/60 py-3"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-hidden px-4 sm:px-6 lg:px-8">
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-grey sm:inline">
            Capabilities
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div
              ref={marqueeRef}
              className={`marquee flex items-center gap-6 text-[13px] font-medium text-grey ${
                prefersReducedMotion ? 'animate-none' : ''
              }`}
            >
              {[...Array(2)].map((_, loopIdx) =>
                marqueeItems.map((item, idx) => (
                  <span key={`${item}-${loopIdx}-${idx}`} className="inline-flex items-center gap-3">
                    <span>{item}</span>
                    <span className="text-cobalt">◆</span>
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section
        aria-labelledby="solutions-heading"
        className="py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Solutions"
            title="Everything Your Business Needs"
            subtitle="From greenfield builds to long-term product partnerships, Codery brings the engineering depth and design care your roadmap deserves."
            align="center"
            gradientWord="Business"
          />
          <motion.div
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {services.map((service, idx) => (
              <motion.div key={service.slug} variants={fadeInUp}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDesc}
                  link={`/services/${service.slug}`}
                  index={idx}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why choose Codery */}
      <section
        aria-labelledby="why-codery-heading"
        className="py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="flex-1">
            <SectionHeading
              eyebrow="Why Choose Codery"
              title="Technology Partner, Not Just a Vendor"
              subtitle="We embed with your teams, challenge assumptions, and care about long‑term outcomes as much as short‑term launches."
              align="left"
              gradientWord="Partner"
            />
            <div className="mt-8 space-y-4">
              {[
                {
                  title: 'Senior-first engineering teams',
                  desc: 'Hands-on senior engineers who design systems and mentor the rest of the team.',
                },
                {
                  title: 'Design and engineering under one roof',
                  desc: 'Product thinking, UX, and implementation tightly integrated from day one.',
                },
                {
                  title: 'Operational rigor',
                  desc: 'Clear communication, predictable cadence, and transparent project health.',
                },
                {
                  title: 'Global mindset, Sri Lankan focus',
                  desc: 'Deep local talent with experience working with international clients.',
                },
                {
                  title: 'Long-term partnerships',
                  desc: 'We stay around to operate, iterate, and scale what we build with you.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan" />
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="text-sm text-grey">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="glass card-glow relative overflow-hidden rounded-2xl p-6">
              <div className="pointer-events-none absolute inset-0 bg-radial-orb-cobalt bg-blend-screen opacity-70" />
              <div className="relative flex flex-col gap-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cobalt to-cyan/80">
                  <Code2 className="h-5 w-5 text-navy" />
                </div>
                <p className="max-w-sm text-sm text-grey">
                  We combine engineering depth, thoughtful UX, and a product mindset to
                  help you ship systems that stand the test of time.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="glass rounded-xl p-4 text-sm">
                    <p className="text-xs text-grey">Projects</p>
                    <p className="mt-1 font-display text-xl text-white">
                      50+
                    </p>
                    <p className="mt-1 text-xs text-grey-light">Delivered across industries</p>
                  </div>
                  <div className="glass rounded-xl p-4 text-sm">
                    <p className="text-xs text-grey">Countries</p>
                    <p className="mt-1 font-display text-xl text-white">
                      5+
                    </p>
                    <p className="mt-1 text-xs text-grey-light">Clients across the globe</p>
                  </div>
                  <div className="glass rounded-xl p-4 text-sm">
                    <p className="text-xs text-grey">Support</p>
                    <p className="mt-1 font-display text-xl text-white">
                      24/7
                    </p>
                    <p className="mt-1 text-xs text-grey-light">Production support options</p>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-grey">
                  <span className="inline-flex items-center gap-1 rounded-full bg-navy-mid px-2 py-1">
                    <Globe2 className="h-3.5 w-3.5 text-cyan" />
                    Remote‑native collaboration
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-navy-mid px-2 py-1">
                    <Clock className="h-3.5 w-3.5 text-cyan" />
                    Time‑zone aligned teams
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        ref={statsRef}
        aria-label="Key Codery statistics"
        className="border-y border-navy-mid bg-navy-light/80 py-10"
      >
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: 50, label: 'Projects Delivered' },
              { number: 5, label: 'Countries Served' },
              { number: 30, label: 'Team Members' },
              { number: 3, label: 'Years Experience' },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 ${
                  idx < 3
                    ? 'border-b border-navy-mid pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4'
                    : ''
                }`}
              >
                <StatBlock
                  number={stat.number}
                  suffix={idx === 2 || idx === 3 ? '+' : '+'}
                  label={stat.label}
                  index={idx}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured portfolio */}
      <section
        aria-labelledby="featured-portfolio-heading"
        className="py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="Projects We're Proud Of"
            subtitle="A sample of the platforms, products, and experiences we have partnered on with teams around the world."
            align="center"
            gradientWord="Proud"
          />
          <motion.div
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {portfolio.slice(0, 3).map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <PortfolioTile
                  title={project.title}
                  type={project.type}
                  imageUrl={project.imageUrl}
                  liveUrl={project.url}
                  tech={project.tech}
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/portfolio"
              className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-full border border-cobalt/60 px-5 py-2 text-sm font-semibold text-cobalt hover:border-cyan hover:text-cyan"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Hire talent teaser */}
      <section
        aria-labelledby="hire-talent-teaser-heading"
        className="bg-gradient-to-b from-navy via-navy-light to-navy py-16 md:py-24 lg:py-32"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="flex-1">
            <SectionHeading
              eyebrow="Sri Lankan Talent"
              title="Access World-Class Sri Lankan Tech Talent"
              subtitle="Build long‑term capacity with engineers, designers, and product leaders who have shipped complex systems for global teams."
              align="left"
              gradientWord="World"
            />
            <p className="mt-5 text-sm text-grey">
              Whether you need a single engineer or a fully cross‑functional team, we
              match you with people who fit your stack, culture, and time zone.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-grey">
              <span className="inline-flex items-center gap-1 rounded-full bg-navy-mid px-3 py-1">
                Proven communication with international stakeholders
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-navy-mid px-3 py-1">
                Embedded in your ceremonies and tools
              </span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/hire-talent"
                className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-cobalt to-cyan px-6 py-3 text-sm font-semibold text-navy shadow-glow-soft"
              >
                Explore Engagement Models
              </Link>
              <Link
                to="/contact"
                className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-full border border-cobalt/50 px-6 py-3 text-sm font-semibold text-white hover:border-cyan"
              >
                Talk to us
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative h-72 overflow-hidden rounded-2xl border border-navy-mid bg-navy-light/80">
              <div className="absolute inset-0 bg-radial-orb-cyan opacity-60" />
              <div className="relative flex h-full flex-col gap-4 overflow-hidden py-4">
                <motion.div
                  className="flex flex-col gap-4"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: ['0%', '-50%'],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 20,
                          ease: 'linear',
                          repeat: Infinity,
                        }
                  }
                >
                  {[...talent, ...talent].map((role, idx) => (
                    <div key={`${role.role}-${idx}`} className="px-4">
                      <TalentRoleCard
                        role={role.role}
                        skills={role.skills}
                        available={role.available}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Ready to Build Something Great?"
            subtext="Let’s discuss your roadmap, constraints, and the outcomes you’re aiming for. We’ll bring options, not just estimates."
            buttonLabel="Start a Conversation"
            link="/contact"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;