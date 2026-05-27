import React from 'react';
import { Link } from 'react-router-dom';
import services from '../../data/services';
import logo from "../../assets/codery_logo.png";


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-navy-mid bg-navy-light">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 dot-grid" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <img
                  src= {logo}
                  alt="Codery logo"
                  className="h-20 w-auto"
                />
                <span className="rounded-md bg-navy-mid px-2 py-0.5 text-xs uppercase tracking-[0.14em] text-grey">
                  Technology Studio
                </span>
              </div>
              <p className="text-base text-grey">
                Codery is a Sri Lanka-based technology partner helping global teams
                design, build, and scale modern digital products.
              </p>
              <a
                href="mailto:support@codery.co.uk"
                className="focus-ring inline-flex items-center text-base font-medium text-cobalt hover:text-slate-900"
              >
                support@codery.co.uk
              </a>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-grey-light">
                Quick Links
              </h3>
              <ul className="space-y-2 text-base text-grey">
                <li>
                  <Link to="/" className="hover:text-slate-900 focus-ring">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-slate-900 focus-ring">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-slate-900 focus-ring">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/hire-talent" className="hover:text-slate-900 focus-ring">
                    Hire Talent
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-slate-900 focus-ring">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-slate-900 focus-ring">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-grey-light">
                Services
              </h3>
              <ul className="space-y-2 text-base text-grey">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="hover:text-slate-900 focus-ring"
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
              <p className="text-base text-grey">
                Share your roadmap and goals. We&apos;ll suggest practical next steps.
              </p>
              <Link
                to="/contact"
                className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-cobalt to-cyan px-5 py-2 text-base font-semibold text-white shadow-glow-soft"
              >
                Get a Quote
              </Link>
              <a
                href="mailto:support@codery.co.uk"
                className="block text-sm text-grey hover:text-slate-900"
              >
                Prefer email? support@codery.co.uk
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-navy-mid pt-6 text-sm text-grey sm:flex-row">
            <p>© {year} Codery Pvt Ltd. All rights reserved.</p>
            <p>
            
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;