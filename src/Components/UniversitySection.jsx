import React from "react";

const universities = [
  {
    name: "University of Lyon, France",
    logo: "/uni1.png",
  },
  {
    name: "University of British Columbia, Canada",
    logo: "/uni2.png",
  },
  {
    name: "Waseda University, Japan",
    logo: "/uni3.png",
  },
  {
    name: "RWTH Aachen, Germany",
    logo: "/uni4.png",
  },
  {
    name: "Universidad de Salamanca, Spain",
    logo: "/uni5.png",
  },
  {
      name: "University of Cape Town, South Africa",
      logo: "/uni6.png",
  },
];

const UniversitySection = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-2">
        Our University Ecosystem
      </h2>
      <p className="text-gray-600 mb-8">
        We work with globally-ranked institutions including
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 md:px-12">
        {universities.map((uni, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={uni.logo}
              alt={uni.name}
              className="w-20 h-20 object-contain mb-2"
            />
            <p className="text-sm text-gray-800">{uni.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniversitySection;
