"use client";

import { Suspense } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import ErrorBoundary from '../components/ErrorBoundary';
import { useTheme } from '../context/ThemeContext';

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <ErrorBoundary>
      <Navigation />
      <main className="min-h-screen">
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}
