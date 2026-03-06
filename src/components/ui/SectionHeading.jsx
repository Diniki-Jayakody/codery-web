import React from 'react';
import PropTypes from 'prop-types';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', gradientWord }) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : align === 'right'
      ? 'items-end text-right'
      : 'items-center text-center';

  const baseTitle = title.split(' ');
  const renderedTitle = baseTitle.map((word, idx) => {
    const plain = word.replace(/[^a-zA-Z]/g, '');
    const isGradient = gradientWord && plain === gradientWord;
    return (
      <span
        key={`${word}-${idx}`}
        className={
          isGradient
            ? 'bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent'
            : ''
        }
      >
        {word}{' '}
      </span>
    );
  });

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex w-full flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cobalt">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white">
        {renderedTitle}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-sm sm:text-base text-grey">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  gradientWord: PropTypes.string,
};

export default SectionHeading;