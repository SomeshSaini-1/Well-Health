import React, { useEffect, useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import FamilyWC from '@/components/family-wc';
import Programs from '@/components/programs';
import Coaches from '@/components/coaches';
import Contact from '@/components/contact';
import Philosophy from '@/components/philosophy';

const images = [
  'public/03.png',
  './04.jpg', // Update these paths to your image paths
  './05.jpg',
  './02.png'
  // Add more image paths as needed
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const [read, setRead] = useState("");
  const [timer, setTimer] = useState();

  useEffect(() => {
    setTimer(true);

    setTimeout(() => {
      setTimer(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Head>
        <title>Health & Wellness</title>
      </Head>

      {timer ? <Philosophy /> :

        <Suspense fallback={<h2>Loading...</h2>}>

          <Navbar />
          <main id="philosophy" className='min-h-screen grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 items-center justify-center mx-10 my-20 pt-20'>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // Set once: false to replay animation
            >
              <h5 className='font-bold text-3xl text-blue-800 mb-10'>Wellhealth Community</h5>
              <h6 className='mb-10 text-3xl font-semibold'>
                Your Partner in Reversing Lifestyle Diseases and Reaching Optimal Weight
              </h6>
              <p className='text-lg mb-10 text-gray-500'>
                At Wellhealth Community, we understand that optimal health goes far beyond just hitting the gym and eating your greens.
                It's a personal journey that requires a deep dive into your body's unique needs and a commitment to fostering a healthy weight.
                While exercise and healthy eating are crucial, achieving optimal health, especially when managing lifestyle diseases,
                requires a more nuanced approach. The internet offers a wealth of information on health and weight loss,
                but navigating it all can be overwhelming. What works for one person might not work for another. That's where Wellhealth Community comes in.
                Our team of professionals can help you sort through the noise and create a personalized plan for optimal health.
              </p>
            </motion.div>

            <div className='flex items-center justify-center'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
                  className="slideshow"
                >
                  <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide" />
                  <style jsx>{`
                    .slide {
                      max-width: 30rem;
                      width: auto;
                      height: 20rem;
                      object-fit: cover;
                      border-radius: 10px;
                      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                  `}</style>
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatedSection delay={0.2} className="p-20 bg-gradient-to-r from-blue-50 to-blue-100 shadow-2xl rounded-lg pb-10">
              <h4 className='text-xl text-blue-800 font-bold'>Our Vision</h4>
              <p className={`text-lg text-gray-700 mb-4 ${read !== 'tb1' ? 'read_less' : ""}`} id='tb1'>
                Building a healthier world where individuals thrive physically, mentally, and emotionally. We envision a future where lifestyle diseases are a thing of the past, and everyone has access to the tools and knowledge needed to live their best life.
              </p>
              <button className='text-green-500 hover:text-green-600' onClick={() => { setRead((prev) => { return prev === "tb1" ? "" : "tb1" }) }}>{read !== "tb1" ? "Read More" : "Read Less"}</button>
            </AnimatedSection>
            <AnimatedSection delay={0.4} className="p-20 bg-gradient-to-r from-green-50 to-green-100 shadow-2xl rounded-lg pb-10">
              <h4 className='text-xl text-green-800 font-bold'>Our Mission</h4>
              <p className={`text-lg text-gray-700 mb-4 ${read !== 'tb2' ? 'read_less' : ""}`} id='tb2'>
                Empowering 1 million people globally to achieve optimal weight and reverse lifestyle diseases by 2030. Through personalized coaching, evidence-based programs, and a supportive community, we aim to transform lives and inspire lasting change.
              </p>
              <button className='text-green-500 hover:text-green-600' onClick={() => { setRead((prev) => { return prev === "tb2" ? "" : "tb2" }) }}>{read !== "tb2" ? "Read More" : "Read Less"}</button>
            </AnimatedSection>

          </main>

          <FamilyWC />
          <Programs />
          <Coaches />
          <Contact />
          <Footer />
        </Suspense>
      }
    </div>
  );
}

// import React, { useEffect, useState, Suspense } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Head from 'next/head';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import AnimatedSection from '../components/AnimatedSection';
// import FamilyWC from '@/components/family-wc';
// import Programs from '@/components/programs';
// import Coaches from '@/components/coaches';
// import Contact from '@/components/contact';
// // import PageLoader from 'next/dist/client/page-loader';
// import Philosophy from '@/components/philosophy'


// const images = [
//   '/03.png',
//   '/04.jpg', // Update these paths to your image paths
//   '/05.jpg',
//   '/02.png'
//   // Add more image paths as neededU
// ];

// export default function Home() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const [read, setread] = useState("");
//   const [timer, settimer] = useState();

//   useEffect(() => {
//     settimer(true);

//     setTimeout(() => {
//       settimer(false);
//     }, 2000)
//   }, []);

//   return (
//     <div>
//       <Head>
//         <title>Health & Wellness</title>
//       </Head>

//       {timer ? <Philosophy /> :

//         <Suspense fallback={<h2>Loading...</h2>}>

//           <Navbar />
//           <main id="philosophy" className='min-h-screen grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 items-center justify-center mx-10 my-20 pt-20'>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }} // Set once: false to replay animation
//             >
//               <h5 className='font-bold text-3xl text-blue-800 mb-10'>Wellhealth Community</h5>
//               <h6 className='mb-10 text-3xl font-semibold'>
//                 Your Partner in Reversing Lifestyle Diseases and Reaching Optimal Weight
//               </h6>
//               <p className='text-lg mb-10 text-gray-500'>
//                 At Wellhealth Community, we understand that optimal health goes far beyond just hitting the gym and eating your greens.
//                 It's a personal journey that requires a deep dive into your body's unique needs and a commitment to fostering a healthy weight.
//                 While exercise and healthy eating are crucial, achieving optimal health, especially when managing lifestyle diseases,
//                 requires a more nuanced approach. The internet offers a wealth of information on health and weight loss,
//                 but navigating it all can be overwhelming. What works for one person might not work for another. That's where Wellhealth Community comes in.
//                 Our team of professionals can help you sort through the noise and create a personalized plan for optimal health.
//               </p>


//             </motion.div>

//             <div className='flex items-center justify-center'>
//               <AnimatePresence mode='wait'>
//                 <motion.div
//                   key={currentIndex}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.8 }}
//                   className="slideshow"
//                 >
//                   <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide" />
//                   <style jsx>{`
//                 .slide {
//                   max-width: 30rem;
//                   width: auto;
//                   height: 20rem;
//                   object-fit: cover;
//                   border-radius: 10px;
//                   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//                 }
//               `}</style>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             <AnimatedSection delay={0.2} className="p-20 bg-gradient-to-r from-blue-50 to-blue-100 shadow-2xl rounded-lg pb-10">
//               <h4 className='text-xl text-blue-800  font-bold'>Our Vision</h4>
//               <p className={`text-lg text-gray-700 mb-4 ${read !== 'tb1' ? 'read_less' : ""}`} id='tb1'>
//                 Building a healthier world where individuals thrive physically, mentally, and emotionally. We envision a future where lifestyle diseases are a thing of the past, and everyone has access to the tools and knowledge needed to live their best life.
//               </p>
//               <button className='text-green-500 hover:text-green-600' onClick={() => { setread((prev) => { return prev === "tb1" ? "" : "tb1" }) }}>{read !== "tb1" ? "Read More" : "Read Less"}</button>
//             </AnimatedSection>
//             <AnimatedSection delay={0.4} className="p-20 bg-gradient-to-r from-green-50 to-green-100 shadow-2xl rounded-lg pb-10">
//               <h4 className='text-xl text-green-800 font-bold'>Our Mission</h4>
//               <p className={`text-lg text-gray-700 mb-4 ${read !== 'tb2' ? 'read_less' : ""}`} id='tb2'>
//                 Empowering 1 million people globally to achieve optimal weight and reverse lifestyle diseases by 2030. Through personalized coaching, evidence-based programs, and a supportive community, we aim to transform lives and inspire lasting change.
//               </p>
//               <button className='text-green-500 hover:text-green-600' onClick={() => { setread((prev) => { return prev === "tb2" ? "" : "tb2" }) }}>{read !== "tb2" ? "Read More" : "Read Less"}</button>
//             </AnimatedSection>

//           </main>

//           <FamilyWC />
//           <Programs />
//           <Coaches />
//           <Contact />
//           <Footer />
//         </Suspense>
//       }

//     </div>
//   );
// } 
