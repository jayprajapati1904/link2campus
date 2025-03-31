import { BsPlayCircleFill } from "react-icons/bs";

const ProgramInfo = () => {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#003092]">
                Got curiosity, commitment, and a passport?
              </span>
              <span className="text-gray-600">
                We've got the perfect program for you.
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our programs are designed to provide immersive learning
              experiences that combine academic excellence with cultural
              exploration.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#003092] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>

         
          <div className="flex-1 w-full max-w-xl relative aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gray-200">
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="text-[#003092] hover:text-[#003092] transition-colors duration-300">
                  <BsPlayCircleFill className="w-16 h-16 sm:w-20 sm:h-20" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramInfo;
