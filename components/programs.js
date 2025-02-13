import AnimatedSection from './AnimatedSection';

const mindfulnessImage = './mindfulness.jpg';
const nutritionImage = './nutrition.jpg';
const fitnessImage = './fitness.jpg';
const yogaImage = './yoga.jpg';
const mentalHealthImage = './mental-health.jpg';
const wight = './wight loss.jpg';

export default function Programs() {
  return (
    <div>
        <section id="programs" className="min-h-screen flex flex-col justify-center items-center bg-purple-50 mx-10 my-20 pt-20">
          <AnimatedSection delay={0.6}>
            <h5 className="font-bold text-4xl text-blue-800 mb-6 mt-10">
              Explore our range of health and wellness programs.
            </h5>
            <h6 className="text-xl text-gray-500">
              Our programs combine the power of science-backed nutrition, holistic wellness practices, and personalized coaching to help you achieve your health goals and improve your overall well-being.
            </h6>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.8}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={mindfulnessImage} alt="Mindfulness & Meditation" className="w-full h-48 object-cover rounded-t-lg" />
                <h2 className="text-2xl font-semibold mt-4">Mindfulness & Meditation</h2>
                <p className="mt-2 text-gray-600">Join our mindfulness and meditation program to reduce stress and enhance emotional well-being.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1.0}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={nutritionImage} alt="Nutrition & Healthy Eating" className="w-full h-48 object-cover rounded-t-lg" />
                <h2 className="text-2xl font-semibold mt-4">Nutrition & Healthy Eating</h2>
                <p className="mt-2 text-gray-600">Learn how to fuel your body with the right nutrients through our nutrition program.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={fitnessImage} alt="Fitness & Personal Training" className="w-full h-48 object-cover rounded-t-lg" />
                <h2 className="text-2xl font-semibold mt-4">Fitness & Personal Training</h2>
                <p className="mt-2 text-gray-600">Achieve your fitness goals with our personalized training programs.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1.4}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={yogaImage} alt="Yoga & Flexibility" className="w-full h-48 object-cover rounded-t-lg" />
                <h2 className="text-2xl font-semibold mt-4">Yoga & Flexibility</h2>
                <p className="mt-2 text-gray-600">Enhance your flexibility, balance, and strength with our yoga program.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1.6}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={mentalHealthImage} alt="Mental Health & Counseling" className="w-full h-48 object-cover rounded-t-lg" />
                <h2 className="text-2xl font-semibold mt-4">Mental Health & Counseling</h2>
                <p className="mt-2 text-gray-600">Our mental health program offers counseling and support to help you navigate life's challenges.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1.8}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={wight} alt="90 Day's Weight Loss" className="w-full h-48 object-cover rounded-t-lg" />
                <h2 className="text-2xl font-semibold mt-4">90 Day's Weight Loss</h2>
                <p className="mt-2 text-gray-600">Help maintain a healthy body fat percentage and stable weight.</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-10 min-h-3/4 lg:min-h-screen w-full" style={{
            backgroundSize: "3rem 3rem",
            backgroundImage: `radial-gradient(
              circle,
              rgba(0, 0, 0, 0.2) 3px,
              transparent 0
            )`
          }}>
            <h5 className="font-bold text-5xl text-center m-8">
              What People Are Saying
            </h5>

            <div className="flex flex-col">
              <AnimatedSection delay={0.8}>
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 mb-8">
                  <p className="text-2xl p-6 rounded-full shadow-lg w-fit text-center">S</p>
                  <h2 className="text-2xl font-semibold mt-4">Somesh Saini</h2>
                  <p className="mt-2 text-gray-600">
                    I appreciate you being a good influence. Your outstanding attention to detail elevated my health to a new level.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.8}>
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 mb-8 ml-auto">
                  <p className="text-2xl p-6 rounded-full shadow-lg w-fit text-center">H</p>
                  <h2 className="text-2xl font-semibold mt-4">Harshit Saini</h2>
                  <p className="mt-2 text-gray-600">
                    I love an amazing yoga quote! They are profound in a comforting and inspiring way. Each one feels poetic and they have the ability to turn any day around.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.8}>
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 mb-8">
                  <p className="text-2xl p-6 rounded-full shadow-lg w-fit text-center">S</p>
                  <h2 className="text-2xl font-semibold mt-4">Swati</h2>
                  <p className="mt-2 text-gray-600">
                    I appreciate you being a good influence. Your outstanding attention to detail elevated my health to a new level.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
    </div>
  );
}