import React from 'react';
import PropTypes from 'prop-types';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const getIcon = (name) => {
  const IconComp = Icons[name] || Icons.Code2;
  return <IconComp className="h-5 w-5 text-cyan" aria-hidden="true" />;
};

const ServiceCard = ({ icon, title, description, link, index = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  const cardContent = (
    <div
      className={cn(
        'card-glow glass flex h-full flex-col rounded-xl p-6',
        'transition-transform duration-200 ease-out'
      )}
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cobalt to-cyan/70">
        {getIcon(icon)}
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="mb-4 text-sm text-grey">
        {description}
      </p>
      <div className="mt-auto">
        <span className="inline-flex items-center text-sm font-medium text-cobalt transition-colors hover:text-cyan focus-visible:text-cyan">
          Explore
          <Icons.ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  );

  const Wrapper = link ? Link : 'div';
  const wrapperProps = link
    ? {
        to: link,
        className: 'focus-ring block h-full',
      }
    : { className: 'focus-ring block h-full' };

  return (
    <motion.div
      ref={ref}
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, y: 30 }
      }
      animate={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: prefersReducedMotion ? 0 : index * 0.1,
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      <Wrapper {...wrapperProps}>{cardContent}</Wrapper>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  index: PropTypes.number,
};

export default ServiceCard;