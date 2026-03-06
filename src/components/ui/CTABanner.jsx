import React from 'react';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTABanner = ({ heading, subtext, buttonLabel, link }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cobalt/60 via-navy-mid to-cyan/40 p-8 sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -inset-32 opacity-40">
        <div className="hero-orb hero-orb--cobalt" />
        <div className="hero-orb hero-orb--cyan" />
      </div>
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white">
            {heading}
          </h2>
          {subtext && (
            <p className="mt-3 text-sm sm:text-base text-grey">
              {subtext}
            </p>
          )}
        </div>
        <div className="relative mt-4 flex items-center md:mt-0">
          {!prefersReducedMotion && (
            <span className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <span className="inline-flex h-24 w-24 rounded-full border border-cyan/40" />
              <span className="inline-flex h-24 w-24 animate-pingSoft rounded-full bg-cyan/40" />
            </span>
          )}
          <Link
            to={link}
            className="focus-ring inline-flex min-h-[44px] min-w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-cobalt to-cyan px-6 py-3 text-sm font-semibold text-navy shadow-glow-soft transition-transform hover:-translate-y-0.5"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

CTABanner.propTypes = {
  heading: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CTABanner;