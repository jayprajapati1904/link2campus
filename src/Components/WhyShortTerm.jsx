import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const WhyShortTerm = () => {
  const benefits = [
    { text: "No GRE/GMAT required" },
    { text: "Quick, hassle-free visas" },
    { text: "Global learning without long stays" },
    { text: "No GRE/GMAT required" },
    { text: "Skill-focused, real-world content" },
    { text: "Cultural immersion & global peers" },
    { text: "Adds value to resumes & profiles" },
    { text: "More affordable than full-time study" },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 max-w-7xl mx-auto">
          <div className="flex-1 lg:pt-8 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#003092]">Why Short-Term</span>{" "}
              <br className="hidden md:block" />
              <span className="text-gray-600">Programs Matter?</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10">
              Short programs offer a smart, efficient way to gain global
              exposure. Here's why they work:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#003092] text-xl flex-shrink-0" />
                  <span className="text-gray-700 text-base">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[45%] lg:flex-shrink-0">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3] relative">
              <Image
                src="/family.jpeg"
                alt="Students studying together"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                className="object-cover object-center grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShortTerm;
