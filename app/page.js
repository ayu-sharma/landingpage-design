"use client"

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Approach />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}