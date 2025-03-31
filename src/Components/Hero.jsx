import Image from "next/image";
import { MdExplore } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    
      <div className="mb-8 md:mb-12 w-[200px] sm:w-[250px]">
        <Image
          src="/logo.png"
          alt="Link2Campus Logo"
          width={250}
          height={50}
          className="w-full h-auto"
          priority
        />
      </div>

    
      <div className="mb-6 md:mb-8">
        <h1 className="text-[#003092] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3">
          Redefining Summer.
        </h1>
        <h2 className="text-gray-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Reimagining Learning
        </h2>
      </div>

     
      <p className="max-w-sm sm:max-w-xl md:max-w-2xl text-gray-600 mb-8 md:mb-10 text-base sm:text-lg md:text-xl">
        Join elite short-term academic & cultural immersion programs at
        globally-ranked universities. Curated for ambitious students, young
        professionals, and lifelong learners.
      </p>


      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-lg">
        <button className="flex items-center justify-center gap-2 bg-[#003092] text-white px-6 sm: py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 w-full">
          <MdExplore className="size-10" />
          <span className="text-md">Explore Programs</span>
        </button>
        <button className="flex items-center justify-center gap-2 border-2 border-[#003092] text-[#003092] px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition duration-300 w-full">
          <BsSendFill className="size-6" />
          <span>Apply Now</span>
        </button>
      </div>

      <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mt-10 md:mt-12 lg:mt-18">
        <Image
          src="/landmarks.png"
          alt="Global Landmarks"
          width={1000}
          height={400}
          className="w-full h-auto object-contain grayscale"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
