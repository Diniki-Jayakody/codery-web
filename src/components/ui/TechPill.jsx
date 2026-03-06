import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';

const TechPill = ({ label, className }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-cobalt/30 bg-navy-mid px-3 py-1 text-[12px] font-mono text-mint',
        'focus-ring',
        className
      )}
    >
      {label}
    </span>
  );
};

TechPill.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TechPill;