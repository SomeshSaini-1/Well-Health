import AnimatedSection from './AnimatedSection';
import Map from './map'; // Ensure the correct import path for the Map component

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center bg-indigo-50 py-20">
        <AnimatedSection delay={0.4}>
          <div className="bg-white p-10 rounded-lg shadow-2xl max-w-6xl w-full
           mx-4 flex flex-col lg:flex-row justify-between items-center gap-10">
            {/* Contact Form */}
            <div className=" lg:w-1/2">
              <h1 className="text-4xl font-bold text-blue-800 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 mb-8">
                Reach out to us for any inquiries or support. We're here to help!
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="w-full lg:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg">
              <Map />
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}