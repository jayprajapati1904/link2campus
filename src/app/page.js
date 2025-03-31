"use client";

import Hero from "@/Components/Hero";
import ProgramInfo from "@/Components/ProgramInfo";
import ChoosePath from "@/Components/ChoosePath";
import WhyShortTerm from "@/Components/WhyShortTerm";
import WhyChooseL2C from "@/Components/WhyChooseL2C";
import HowItWorks from "@/Components/HowItWorks";
import UniversitySection from "@/Components/UniversitySection";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import useAuthStore from "@/Store/useAuthStore.js";
import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";

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
