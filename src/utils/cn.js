// src/utils/cn.js
export const cn = (...classes) =>
    classes
      .flatMap((c) => (typeof c === 'string' ? c.split(' ') : c))
      .filter(Boolean)
      .join(' ');
  
  export default cn;