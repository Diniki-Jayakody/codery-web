import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Code2,
  Globe2,
  CloudCog,
  Users2,
  LineChart,
  PenTool,
} from 'lucide-react';
import services from '../../data/services';

const navLinkClass =
  'relative inline-flex items-center px-3 py-2 text-sm font-medium text-grey hover:text-white focus-ring';

const activeUnderline =
  'absolute inset-x-2 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-cobalt to-cyan';

const DesktopServicesMega = ({ open }) => {
  const prefersReducedMotion = useReducedMotion();
  if (!open) return null;

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, y: -8 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full z-40 mt-4 w-[560px] -translate-x-1/2"
    >
      <div className="glass card-glow grid grid-cols-2 gap-4 rounded-2xl p-5">
        {services.map((service) => {
          const IconComp =
            {
              Code2,
              Globe2,
              CloudCog,
              Users2,
              LineChart,
              PenTool,
            }[service.icon] || Code2;

          return (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group flex min-h-[90px] flex-col justify-between rounded-xl p-3 hover:bg-navy-mid/60 focus-ring"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-mid">
                  <IconComp className="h-4 w-4 text-cyan" aria-hidden="true" />
                </span>
                <p className="font-display text-sm font-semibold text-white">
                  {service.title}
                </p>
              </div>
              <p className="line-clamp-2 text-[12px] text-grey">
                {service.shortDesc}
              </p>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 50);
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = height > 0 ? Math.min(1, y / height) : 0;
      setScrollProgress(p);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
      <motion.nav
        initial={false}
        animate={
          scrolled
            ? {
                backgroundColor: 'rgba(10, 22, 40, 0.92)',
                backdropFilter: 'blur(18px)',
                borderBottomColor: 'rgba(26, 107, 255, 0.18)',
              }
            : {
                backgroundColor: 'rgba(10, 22, 40, 0)',
                backdropFilter: 'blur(0px)',
                borderBottomColor: 'rgba(26, 107, 255, 0)',
              }
        }
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 focus-ring"
            aria-label="Codery home"
          >
            <span className="relative inline-flex items-center font-display text-xl font-semibold text-cobalt">
              Codery
              <svg
                aria-hidden="true"
                className="ml-1 h-4 w-4 text-cyan"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M1.5 2.5H4V1H0V5H1.5V2.5Z"
                  fill="currentColor"
                  opacity="0.8"
                />
                <path
                  d="M11 7V3H9.5V5.5H7V7H11Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-1">
              <NavLink to="/" className={navLinkClass}>
                {({ isActive }) => (
                  <span className="relative inline-flex items-center">
                    Home
                    {isActive && <span className={activeUnderline} />}
                  </span>
                )}
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                {({ isActive }) => (
                  <span className="relative inline-flex items-center">
                    About
                    {isActive && <span className={activeUnderline} />}
                  </span>
                )}
              </NavLink>
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`${navLinkClass} gap-1`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  <span className="relative inline-flex items-center">
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                    {location.pathname.startsWith('/services') && (
                      <span className={activeUnderline} />
                    )}
                  </span>
                </button>
                <DesktopServicesMega open={servicesOpen} />
              </div>
              <NavLink to="/hire-talent" className={navLinkClass}>
                {({ isActive }) => (
                  <span className="relative inline-flex items-center">
                    Hire Talent
                    {isActive && <span className={activeUnderline} />}
                  </span>
                )}
              </NavLink>
              <NavLink to="/portfolio" className={navLinkClass}>
                {({ isActive }) => (
                  <span className="relative inline-flex items-center">
                    Portfolio
                    {isActive && <span className={activeUnderline} />}
                  </span>
                )}
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                {({ isActive }) => (
                  <span className="relative inline-flex items-center">
                    Contact
                    {isActive && <span className={activeUnderline} />}
                  </span>
                )}
              </NavLink>
            </div>
            <Link
              to="/contact"
              className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-lg bg-gradient-to-r from-cobalt to-cyan px-4 py-2 text-sm font-semibold text-navy shadow-glow-soft transition-transform hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-mid text-grey hover:text-white md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile overlay */}
        {mobileOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 z-40 bg-navy/95" />
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-x-0 top-[56px] z-50 overflow-y-auto pb-10"
            >
              <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pt-6 sm:px-6 lg:px-8">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.to}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      delay: prefersReducedMotion ? 0 : 0.05 * idx,
                    }}
                  >
                    <NavLink
                      to={item.to}
                      className="block rounded-lg px-2 py-3 text-lg font-medium text-grey hover:bg-navy-mid hover:text-white focus-ring"
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Services accordion */}
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: prefersReducedMotion ? 0 : 0.15,
                  }}
                  className="rounded-xl border border-navy-mid bg-navy-light/60"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-lg font-medium text-grey focus-ring"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="border-t border-navy-mid">
                      {services.map((service, idx) => (
                        <motion.div
                          key={service.slug}
                          initial={
                            prefersReducedMotion ? false : { opacity: 0, x: -8 }
                          }
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: prefersReducedMotion ? 0 : 0.05 * idx,
                          }}
                        >
                          <NavLink
                            to={`/services/${service.slug}`}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-grey hover:bg-navy-mid hover:text-white focus-ring"
                          >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-navy-mid/80">
                              <Code2 className="h-4 w-4 text-cyan" />
                            </span>
                            <span>{service.title}</span>
                          </NavLink>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>

                {[
                  { to: '/hire-talent', label: 'Hire Talent' },
                  { to: '/portfolio', label: 'Portfolio' },
                  { to: '/contact', label: 'Contact' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.to}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      delay: prefersReducedMotion ? 0 : 0.25 + 0.05 * idx,
                    }}
                  >
                    <NavLink
                      to={item.to}
                      className="block rounded-lg px-2 py-3 text-lg font-medium text-grey hover:bg-navy-mid hover:text-white focus-ring"
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: prefersReducedMotion ? 0 : 0.45,
                  }}
                  className="pt-2"
                >
                  <Link
                    to="/contact"
                    className="focus-ring inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-cobalt to-cyan px-4 py-3 text-sm font-semibold text-navy shadow-glow-soft"
                  >
                    Get a Quote
                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;