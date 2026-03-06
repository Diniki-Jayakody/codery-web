import React from 'react';
import { Link } from 'react-router-dom';
import services from '../../data/services';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-navy-mid bg-navy-light">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 dot-grid" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="font-display text-xl font-semibold text-cobalt">
                  Codery
                </span>
                <span className="rounded-md bg-navy-mid px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-grey">
                  Technology Studio
                </span>
              </div>
              <p className="text-sm text-grey">
                Codery Pvt Ltd is a Sri Lanka–based technology partner helping
                global teams ship modern software with confidence.
              </p>
              <a
                href="mailto:contact@codery.lk"
                className="focus-ring inline-flex items-center text-sm font-medium text-cyan hover:text-white"
              >
                contact@codery.lk
              </a>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-grey-light">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-grey">
                <li>
                  <Link to="/" className="hover:text-white focus-ring">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white focus-ring">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white focus-ring">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/hire-talent" className="hover:text-white focus-ring">
                    Hire Talent
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-white focus-ring">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white focus-ring">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-grey-light">
                Services
              </h3>
              <ul className="space-y-2 text-sm text-grey">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="hover:text-white focus-ring"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-grey-light">
                Let&apos;s Work Together
              </h3>
              <p className="text-sm text-grey">
                Share your roadmap, constraints, and ambitions. We&apos;ll help you
                design the right path forward.
              </p>
              <Link
                to="/contact"
                className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-cobalt to-cyan px-5 py-2 text-sm font-semibold text-navy shadow-glow-soft"
              >
                Get a Quote
              </Link>
              <a
                href="mailto:contact@codery.lk"
                className="block text-xs text-grey hover:text-white"
              >
                Prefer email? contact@codery.lk
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-navy-mid pt-6 text-xs text-grey sm:flex-row">
            <p>© {year} Codery Pvt Ltd. All rights reserved.</p>
            <p>
              Partnered Company 
              @i211 Solutions (Private) Limited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;