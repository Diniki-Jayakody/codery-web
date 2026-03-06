import React from 'react';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TechPill from './TechPill';

const PortfolioTile = ({ title, type, imageUrl, liveUrl, tech = [] }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className="group card-glow glass flex h-full flex-col overflow-hidden rounded-xl"
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      <div className="relative overflow-hidden">
        <div className="relative aspect-[4/3] w-full bg-navy-mid">
          <div className="pointer-events-none absolute inset-x-4 top-3 z-10 flex items-center justify-between rounded-t-lg border border-navy-mid/80 bg-navy/80 px-3 py-1 text-[10px] text-grey">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <span className="truncate">{liveUrl || 'internal.codery.lk'}</span>
            <span className="rounded-full border border-navy-mid px-2 py-0.5 text-[9px] uppercase tracking-wide">
              {type}
            </span>
          </div>
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            width="800"
            height="600"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-4 px-5 pb-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan">
              Featured Case Study
            </p>
            <h3 className="font-display text-lg text-white">{title}</h3>
            <div className="mt-3 flex items-center justify-between text-xs text-grey-light">
              <span>{type}</span>
              {liveUrl ? (
                <span className="inline-flex items-center gap-1">
                  View live
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              ) : (
                <span className="rounded-full border border-mint/60 px-2 py-0.5 text-[10px] text-mint">
                  Internal Project
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 3).map((t) => (
            <TechPill key={t} label={t} />
          ))}
          {tech.length > 3 && (
            <TechPill label={`+${tech.length - 3} more`} />
          )}
        </div>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-auto inline-flex min-h-[44px] items-center justify-center rounded-full border border-cyan/40 px-4 py-2 text-xs font-medium text-cyan transition-colors hover:border-cyan hover:text-white"
          >
            Visit Live Site
          </a>
        )}
      </div>
    </motion.article>
  );
};

PortfolioTile.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
};

export default PortfolioTile;