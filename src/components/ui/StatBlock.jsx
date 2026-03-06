import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'framer-motion';

const StatBlock = ({ number, suffix = '+', label, index = 0 }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 1000;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.floor(progress * number));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, number]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-1"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="font-display text-3xl sm:text-4xl font-extrabold text-cobalt">
        {value}
        {suffix}
      </div>
      <p className="text-sm text-grey">
        {label}
      </p>
    </div>
  );
};

StatBlock.propTypes = {
  number: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  label: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default StatBlock;