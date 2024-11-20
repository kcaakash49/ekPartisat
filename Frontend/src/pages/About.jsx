

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Building dreams, one property at a time.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At <strong>Ek Pratisat Real Estate</strong>, we are dedicated to helping
              individuals and families find their perfect home or investment
              property. With years of experience in the real estate industry,
              we combine expertise, trust, and innovation to deliver the best
              solutions tailored to your needs.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Whether you're buying, selling, or investing, our team of
              professional agents is here to guide you through every step of
              the process. We pride ourselves on our commitment to transparency
              and delivering exceptional customer service.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://www.mckissock.com/wp-content/uploads/2016/11/GettyImages-1151832961.jpg"
              alt="Real estate"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of honesty and professionalism
                in everything we do.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority, and we work tirelessly to
                meet and exceed your expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace modern solutions and technologies to make real
                estate transactions seamless and efficient.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Ready to find your dream property?
          </h2>
          <p className="text-gray-600 mt-2">
            Contact us today to get started on your journey.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
