import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import CTABanner from '../components/ui/CTABanner';
import services from '../data/services';

const Services = () => {
  return (
    <main className="pt-24 sm:pt-28 lg:pt-32">
      {/* Hero */}
      <section
        aria-labelledby="services-hero-heading"
        className="pb-12 sm:pb-16 lg:pb-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            id="services-hero-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-white"
          >
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-grey">
            Codery blends product thinking, UX design, and engineering depth to help
            teams launch and scale digital products with confidence.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-sm text-grey">
            Every engagement is tailored to your stage, stack, and internal capabilities.
            We can own delivery end‑to‑end or embed as an extension of your existing
            teams. Our focus is always the same: pragmatic, maintainable solutions that
            respect your constraints.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section
        aria-label="All Codery services"
        className="pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="End-to-End Delivery, Modular Engagements"
            subtitle="Choose one capability or combine several into a bespoke roadmap aligned to your goals."
            align="left"
            gradientWord="Delivery"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.shortDesc}
                link={`/services/${service.slug}`}
                index={idx}
              />
            ))}
          </div>
          <div className="mt-8 text-sm text-grey">
            Can&apos;t find what you need?{' '}
            <Link
              to="/contact"
              className="font-medium text-cyan hover:text-white focus-ring"
            >
              Let&apos;s talk about a custom engagement.
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 pt-4 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Design a Service Model That Fits You"
            subtext="Share your roadmap, constraints, and internal capabilities. We’ll suggest a blend of services and engagement models that fits."
            buttonLabel="Discuss Services"
            link="/contact"
          />
        </div>
      </section>
    </main>
  );
};

export default Services;