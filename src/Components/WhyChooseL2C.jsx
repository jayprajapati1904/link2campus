import Image from "next/image";

const WhyChooseL2C = () => {
  const features = [
    {
      title: "Global University Network",
      description: "300+ top-tier institutions across 25+ countries",
    },
    {
      title: "Compact Yet Comprehensive",
      description:
        "2-8 week modules with max academic, industry, and cultural ROI",
    },
    {
      title: "Zero-Stress Logistics",
      description:
        "End-to-end support: visa, housing, airport pickup, and more",
    },
    {
      title: "Skill-Building on Steroids",
      description:
        "Leadership. Design Thinking. Entrepreneurship. Sustainability. AI. You name it.",
    },
    {
      title: "Peer-to-Peer Globalization",
      description: "Collaborate with students from 50+ nationalities",
    },
    {
      title: "Experiential Learning",
      description:
        "Industry visits, startup tours, policy dialogues, UN & EU exposure",
    },
    {
      title: "Certification That Counts",
      description:
        "University-backed certificates. Resume-ready. LinkedIn-worthy.",
    },
  ];

  const programs = [
    {
      title: "Leadership in a Global World",
      location: "Paris, France",
      duration: "2 Weeks | EU Parliament Visit",
      description:
        "A crash course in European diplomacy, international business, and cross-cultural negotiation",
      image: "/tower.jpeg",
    },
    {
      title: "Tech & Innovation Gateway",
      location: "Seoul, South Korea",
      duration: "3 Weeks | AI & Robotics Lab Experience",
      description:
        "Future-focused, fast-tracked, and immersive — for coders, creators, and changemakers.",
      image: "/home.jpeg",
    },
    {
      title: "Green Futures Program",
      location: "Amsterdam, Netherlands",
      duration: "1 Month | Climate Bootcamp",
      description:
        "Sustainability meets policy and entrepreneurship in this hands-on eco-innovation program.",
      image: "/hill.jpeg",
    },
    {
      title: "Paris Luxury & Brand Strategy Studio",
      location: "Paris, France",
      duration: "2 Weeks | EU Parliament Visit",
      description:
        "Explore the DNA of global luxury brands and learn what makes Paris the epicenter of elegance and exclusivity.",
      image: "/tower.jpeg",
    },
    {
      title: "AI-Powered Business Strategy Lab",
      location: "Berlin, Germany",
      duration: "3 Weeks | Applied AI, Business Models & Innovation",
      description:
        "Explore the fusion of AI and enterprise decision-making, from automation to predictive analytics.",
      image: "/1.jpeg",
    },
    {
      title: "Digital Consumer & Brand Behavior Experience",
      location: "Barcelona, Spain",
      duration: "2 Weeks | Neuroscience, Data, UX",
      description:
        "Understand the psychology of the modern buyer and how digital ecosystems shape consumer journeys.",
      image: "/2.jpeg",
    },
    {
      title: "Culture-Smart Global Management Program",
      location: "Prague, Czech Republic",
      duration: "2 Weeks | Leadership Across Borders",
      description:
        "Develop soft skills and cultural fluency to lead, communicate, and work in efficient cross-cultural teams.",
      image: "/3.jpeg",
    },
    {
      title: "Responsible Enterprise & Green Innovation Sprint",
      location: "Copenhagen, Denmark",
      duration: "3 Weeks | ESG, Circular Economy, Sustainable Strategy",
      description:
        "Engage with sustainability through green innovation, ethics, and climate-aligned growth",
      image: "/4.jpeg",
    },
  ];

  return (
    <>
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Why Choose{" "}
              <span className="text-[#003092]">L2C Short Programs</span>?
            </h2>

            <div className="overflow-x-auto shadow-2xl rounded-xl border-2 border-gray-300">
              <div className="min-w-md">
                <div className="overflow-hidden  ">
                  <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-300">
                    <div className="p-4 text-[#003092] text-lg font-semibold w-[300px] ">
                      Features
                    </div>
                    <div className="p-4 text-[#003092] text-lg font-semibold border-l-2 border-gray-300 flex-1">
                      Description
                    </div>
                  </div>

                  <div className="divide-y divide-gray-300">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-2 hover:bg-gray-50/50 transition-colors border border-gray-300"
                      >
                        <div className="p-4 font-medium text-sm w-[300px] ">
                          {feature.title}
                        </div>
                        <div className="p-4 text-gray-600 text-sm border-l-2 border-gray-300 flex-1">
                          {feature.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-[#003092] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Flagship Programs
              </h2>
              <p className="text-gray-600 text-lg">
                Transformative experiences at world-leading institutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <div className="text-gray-600 text-sm mb-2">
                      {program.location}
                    </div>
                    <div className="text-[#003092] font-medium text-sm mb-3">
                      {program.duration}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-[#003092] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Book a Free Discovery Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseL2C;
