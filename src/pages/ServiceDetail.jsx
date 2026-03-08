import React from 'react';
import { useParams, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import services from '../data/services';
import SectionHeading from '../components/ui/SectionHeading';
import TechPill from '../components/ui/TechPill';
import ServiceCard from '../components/ui/ServiceCard';
import CTABanner from '../components/ui/CTABanner';

const iconMap = {
  Code2: Icons.Code2,
  Globe2: Icons.Globe2,
  CloudCog: Icons.CloudCog,
  Users2: Icons.Users2,
  LineChart: Icons.LineChart,
  PenTool: Icons.PenTool,
  Boxes: Icons.Boxes,
  GitBranch: Icons.GitBranch,
  ServerCog: Icons.ServerCog,
  MousePointer2: Icons.MousePointer2,
  MonitorSmartphone: Icons.MonitorSmartphone,
  Sparkles: Icons.Sparkles,
  Cloud: Icons.Cloud,
  Cogs: Icons.Cogs,
  Activity: Icons.Activity,
  Database: Icons.Database,
  BarChart3: Icons.BarChart3,
  Brain: Icons.Brain,
  Compass: Icons.Compass,
  LayoutPanelTop: Icons.LayoutPanelTop,
  UserCheck: Icons.UserCheck,
  Users: Icons.Users,
  Clock: Icons.Clock,
  Handshake: Icons.Handshake,
  Building2: Icons.Building2,
  Briefcase: Icons.Briefcase,
  Workflow: Icons.Workflow,
  ShoppingBag: Icons.ShoppingBag,
  Route: Icons.Route,
  Rocket: Icons.Rocket,
  Gauge: Icons.Gauge,
  ShieldCheck: Icons.ShieldCheck,
  ChartSpline: Icons.ChartSpline,
  PackageSearch: Icons.PackageSearch,
  PieChart: Icons.PieChart,
  Lightbulb: Icons.Lightbulb,
  Pointer: Icons.Pointer,
  Layers: Icons.Layers,
  Repeat: Icons.Repeat,
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="pt-24 sm:pt-28 lg:pt-32">
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-3xl text-white">Service not found</h1>
            <p className="mt-3 text-sm text-gray-400">
              We couldn&apos;t find the service you were looking for. Explore all our
              capabilities or reach out to discuss a custom engagement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-400 hover:border-blue-400 hover:text-blue-300"
              >
                View all services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-slate-900"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const ServiceIcon = iconMap[service.icon] || Icons.Code2;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="pt-24 sm:pt-28 lg:pt-32">
      {/* Hero */}
      <section aria-labelledby="service-detail-heading" className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                Service
              </p>
              <div className="mt-3 inline-flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                  <ServiceIcon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </span>
                <h1
                  id="service-detail-heading"
                  className="font-display text-3xl sm:text-4xl md:text-5xl text-white"
                >
                  {service.title}
                </h1>
              </div>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-300">
                {service.fullDesc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="font-display text-base font-semibold text-white">
                When this service is a good fit
              </h2>
              <p className="mt-2 text-sm text-gray-300">
                Use {service.title.toLowerCase()} when you&apos;re looking to unlock
                meaningful business value, not just check a technical box.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>• You have clear goals but need help shaping the path.</li>
                <li>• You care about maintainability and handover as much as launch.</li>
                <li>• You want a partner who will challenge assumptions when needed.</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-slate-900 sm:flex-none"
                >
                  Talk about this service
                </Link>
                <Link
                  to="/services"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-400 hover:border-blue-400 hover:text-blue-300 sm:flex-none"
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section aria-label="Capabilities" className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="What This Service Includes"
            subtitle="A curated set of practices, patterns, and deliverables tailored to your team’s stage and context."
            align="left"
            gradientWord="Includes"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.features.map((feature) => {
              const Icon = iconMap[feature.icon] || Icons.Sparkles;
              return (
                <article
                  key={feature.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900">
                    <Icon className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">{feature.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section aria-label="Use cases" className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Use Cases"
            title="How Teams Use This Service"
            subtitle="A few of the ways our partners apply this service in real‑world contexts."
            align="left"
            gradientWord="Teams"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.useCases.map((useCase) => {
              const Icon = iconMap[useCase.icon] || Icons.Briefcase;
              return (
                <article
                  key={useCase.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900">
                    <Icon className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">
                    {useCase.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">{useCase.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section aria-label="Related services" className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Related Services"
            title="Often Paired Together"
            subtitle="Combine adjacent capabilities for a smoother journey from idea to reliable operations."
            align="left"
            gradientWord="Paired"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((rel, idx) => (
              <ServiceCard
                key={rel.slug}
                icon={rel.icon}
                title={rel.title}
                description={rel.shortDesc}
                link={`/services/${rel.slug}`}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 pt-4 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Exploring Whether This Service Fits?"
            subtext="Tell us about your current architecture, constraints, and goals. We’ll help you understand if this service—and how we’d apply it—makes sense."
            buttonLabel="Discuss Your Context"
            link="/contact"
          />
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;

