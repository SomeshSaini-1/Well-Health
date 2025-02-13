import AnimatedSection from '../components/AnimatedSection';

export default function FamilyWC() {
  // Smooth scroll to sections when clicking navbar links

  return (
    <div>
      {/* Family Wellness Center Section */}
      <section id="family-wc" className="w-full min-h-screen flex flex-col items-center bg-yellow-50 mx-10 my-20  pt-20"  style={{
          backgroundImage:'url("./flower.png")',
          backgroundPosition:"left",
          backgroundRepeat:"no-repeat"
        }}>
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl text-center">
            <h5 className="font-bold text-4xl text-blue-800 mb-6">
              Introducing Your Family's Superhero
            </h5>
            <h6 className="mb-8 text-3xl font-semibold text-gray-800">
              The Wellhealth Family Wellness Coach
            </h6>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Think of a Family Wellness Coach as your personal superhero for preventive health! They're more than just another
              source of information online - they're trained professionals by your side, guiding your family towards a healthier,
              happier life.
            </p>
          </div>
        </AnimatedSection>

        <h6 className="mt-16 mb-8 text-2xl font-semibold text-gray-700">
          Here's why a Family Wellness Coach is different:
        </h6>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl px-4">
          <AnimatedSection delay={0.5}>
            <div className="bg-white hover:p-10 min-h-64 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h6 className="mb-6 text-2xl font-semibold text-blue-800">Unlike doctors</h6>
              <p className="text-gray-600 leading-relaxed">
                Who primarily focus on treating existing conditions, a Family Wellness Coach is proactive. They help you prevent
                health issues before they arise.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <div className="bg-white hover:p-10 min-h-64 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h6 className="mb-6 text-2xl font-semibold text-blue-800">Accessibility is key</h6>
              <p className="text-gray-600 leading-relaxed">
                Your coach is just a message or call away, ready to answer your questions and offer daily support. You don't need
                appointments or wait times.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.9}>
            <div className="bg-white hover:p-10 minn-h-64 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <h6 className="mb-6 text-2xl font-semibold text-blue-800">A personalized approach</h6>
              <p className="text-gray-600 leading-relaxed">
                Family Wellness Coaches understand that every family is unique. They consider your family's dynamics, preferences,
                and goals to create a customized plan for optimal health.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}