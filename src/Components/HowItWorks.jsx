import {
  FaSearch,
  FaBriefcase,
  FaComments,
  FaPlane,
  FaMedal,
} from "react-icons/fa";

const ProcessCard = ({ icon: Icon, title, description, isTop }) => (
  <div
    className={`flex flex-col items-center text-center relative w-full md:w-[calc(33.33%-1rem)] lg:w-[calc(20%-1rem)] ${
      isTop ? "lg:-mt-20" : "lg:mt-20"
    }`}
  >
    <div className="w-16 h-16 bg-blue-100 border-2 border-[#003092] rounded-full flex items-center justify-center mb-4 relative z-10">
      <Icon className="text-[#003092] text-2xl" />
    </div>

    <div className="bg-white border-2 border-[#003092] p-6 rounded-[32px] shadow-lg hover:shadow-xl transition-all w-full min-h-[160px] flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: FaSearch,
      title: "Browse & Apply",
      description:
        "Choose from 100+ programs worldwide. Upload your CV to get started.",
      isTop: true,
    },
    {
      icon: FaComments,
      title: "Counsel & Confirm",
      description: "Get expert guidance and appear for a short interview.",
      isTop: false,
    },
    {
      icon: FaBriefcase,
      title: "Pack & Prepare",
      description: "Visa, tickets, housing — all sorted by L2C.",
      isTop: true,
    },
    {
      icon: FaPlane,
      title: "Travel & Transform",
      description: "Dive deep into global learning experiences.",
      isTop: false,
    },
    {
      icon: FaMedal,
      title: "Come Back Certified",
      description: "Add weight to your resume, confidence to your pitch.",
      isTop: true,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#003092] text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-24 lg:mb-48">
            How It Works
          </h2>

          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-8 lg:gap-6 justify-center">
            {steps.map((step, index) => (
              <ProcessCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isTop={step.isTop}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
