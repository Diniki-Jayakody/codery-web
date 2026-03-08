import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import PortfolioTile from '../components/ui/PortfolioTile';
import CTABanner from '../components/ui/CTABanner';
import portfolio from '../data/portfolio';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'Web', label: 'Web' },
  { id: 'Mobile', label: 'Mobile' },
  { id: 'Enterprise', label: 'Enterprise' },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');

  const filtered =
    activeFilter === 'all'
      ? portfolio
      : portfolio.filter((p) => p.category === activeFilter);

  return (
    <main className="pt-24 sm:pt-28 lg:pt-32">
      {/* Hero */}
      <section
        aria-labelledby="portfolio-hero-heading"
        className="pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            id="portfolio-hero-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl text-white"
          >
            Our Work Speaks for Itself
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-grey">
            A sample of the platforms, products, and experiences we&apos;ve partnered
            on with teams in the UK, Europe, and beyond.
          </p>
        </div>
      </section>

      {/* Filters & grid */}
      <section
        aria-label="Portfolio projects"
        className="pb-16 sm:pb-20 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected Projects"
              subtitle="We often work under NDAs, but these examples give a sense of the kinds of systems we design, build, and operate."
              align="left"
              gradientWord="Selected"
            />
            <div className="inline-flex rounded-full bg-slate-900/80 p-1 text-xs text-grey">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`focus-ring relative inline-flex items-center justify-center rounded-full px-3 py-1.5 font-medium transition-colors ${
                    activeFilter === filter.id ? 'bg-blue-600 text-slate-950' : ''
                  }`}
                >
                  <span className="relative z-10">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <PortfolioTile
                key={project.id}
                title={project.title}
                type={project.type}
                imageUrl={project.imageUrl}
                liveUrl={project.url}
                tech={project.tech}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 pt-4 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Want to See Something Closer to Your Domain?"
            subtext="We can share anonymized stories and deeper walkthroughs under NDA that match your industry and stage more closely."
            buttonLabel="Request Case Studies"
            link="/contact"
          />
        </div>
      </section>
    </main>
  );
};

export default Portfolio;

