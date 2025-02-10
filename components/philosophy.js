import { useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  // Smooth scroll to sections when clicking navbar links

  return (
    <div>
      <main>
        {/* The Philosophy Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-green-50 z-50">
          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl font-bold">The Philosophy</h1>
            <p className="mt-4 text-lg">We believe in a holistic approach to health, focusing on mind, body, and spirit.</p>
          </AnimatedSection>
        </section>

      </main>
    </div>
  );
}