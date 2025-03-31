import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

const ChoosePath = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Choose Your Path
          </h2>
          <p className="text-gray-600">
            Programs tailored to your goals and aspirations
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-[#003092]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaGraduationCap className="text-[#003092] text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              For Students
            </h3>
            <p className="text-gray-600">
              Enhance your academic journey with global exposure and specialized
              courses
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border-2 border-gray-200 transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-[#003092]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaUserGraduate className="text-[#003092] text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              For Graduates
            </h3>
            <p className="text-gray-600">
              Accelerate your career with focused professional development
              programs
            </p>
          </div>

         
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border-2 border-gray-200 transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-[#003092]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <IoRocketSharp className="text-[#003092] text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              For Go-Getters
            </h3>
            <p className="text-gray-600">
              Transform your passion into expertise with specialized bootcamps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePath;
