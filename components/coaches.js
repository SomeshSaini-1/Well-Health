import AnimatedSection from './AnimatedSection';

const Data = [
  {
    id: "1",
    img: "./c1.png",
    name: "Mr. Budda Sreekanth Reddy", // Fixed typo: `namme` -> `name`
  },
  {
    id: 2,
    img: "./c2.jpg",
    name: "Mr. Somesh Saini"
  },
  {
    id: 3,
    img: "./c3.jpeg",
    name: "Mr. Nagendra"
  },
  {
    id: 4,
    img: "./c4.jpeg", // Added file extension
    name: "Mr. Yuktaahara"
  },
  // {
  //   id: 5,
  //   img: "./c5.jpg",
  //   name: "Dr. Shambhu Reddy"
  // }
];

export default function Coaches() {
  return (
    <div>
      {/* Coaches Section */}
      <section id="coaches" className="min-h-screen flex flex-col items-center bg-red-50">
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl text-center">
            <h1 className="font-bold text-4xl text-blue-800 mb-6">Meet Our Coaches</h1>
            <h6 className="mb-8 text-3xl font-semibold text-gray-800">
              Our certified coaches are here to guide you on your health journey.
            </h6>
            <p className="mt-4 text-lg">
              Our team consists of highly trained and experienced wellness coaches who are passionate about helping you reach your full potential. They'll provide you with personalized guidance, encouragement, and expert knowledge to create a wellness plan that fits your unique needs and lifestyle.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex items-center justify-center p-10 flex-wrap gap-8"> {/* Added flex-wrap and gap */}
          {Data.map((ele) => (
            <AnimatedSection 
            key={ele.id} delay={0.6}> 
              <div className="rounded-lg p-6 bg-white shadow-lg text-center " style={{"width":"20rem"}}>
                <img src={ele.img} alt={ele.name} className="h-40 w-40 rounded-full mb-4 mx-auto text-center" /> {/* Improved image styling */}
                <h5 className="text-2xl font-bold text-blue-500">{ele.name}</h5>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}