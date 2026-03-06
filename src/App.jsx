import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './index.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
// const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
// const HireTalent = lazy(() => import('./pages/HireTalent'));
// const Portfolio = lazy(() => import('./pages/Portfolio'));
// const Contact = lazy(() => import('./pages/Contact'));

const SkeletonPage = () => (
  <main className="pt-24 sm:pt-28 lg:pt-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="skeleton h-7 w-40" />
      <div className="mt-4 space-y-3">
        <div className="skeleton h-4 w-64" />
        <div className="skeleton h-4 w-72" />
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="skeleton h-40 w-full rounded-2xl" />
        ))}
      </div>
    </div>
  </main>
);

function App() {
  return (
    <BrowserRouter>
      {/* Accessibility: skip link */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div className="flex min-h-screen flex-col bg-navy text-white">
        <Navbar />
        <div id="main-content" className="flex-1">
          <Suspense fallback={<SkeletonPage />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              {/* <Route path="/services/:slug" element={<ServiceDetail />} /> */}
              {/* <Route path="/hire-talent" element={<HireTalent />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;