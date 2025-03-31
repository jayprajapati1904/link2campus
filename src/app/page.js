"use client";

import Hero from "@/components/Hero.jsx";
import ProgramInfo from "@/components/ProgramInfo.jsx";
import ChoosePath from "@/components/ChoosePath.jsx";
import WhyShortTerm from "@/components/WhyShortTerm.jsx";
import WhyChooseL2C from "@/components/WhyChooseL2C.jsx";
import HowItWorks from "@/components/HowItWorks.jsx";
import UniversitySection from "@/Components/UniversitySection.jsx";
import ContactForm from "@/Components/ContactForm.jsx";
import Footer from "@/Components/Footer.jsx";
import useAuthStore from "@/Store/useAuthStore.js";
import Auth from "@/pages/Auth.jsx";
import Dashboard from "@/pages/Dashboard.jsx";

export default function Home() {
  const user = useAuthStore((state) => state.user);

  console.log(user?.role);

  return (
    <main>
      {user ? (
        <>
          {user?.role === "user" ? (
            <>
              <Hero />
              <ProgramInfo />
              <ChoosePath />
              <WhyShortTerm />
              <WhyChooseL2C />
              <HowItWorks />
              <UniversitySection />
              <ContactForm />
              <Footer />
            </>
          ) : (
            <Dashboard />
          )}
        </>
      ) : (
        <Auth />
      )}
    </main>
  );
}
