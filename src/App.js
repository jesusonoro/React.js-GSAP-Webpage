import React from "react";
import Header from "./components/Header/Header";
import HeadlineSection from "./components/HeadlineSection/HeadlineSection";
import AboutUsAndMissionSection from "./components/AboutUsAndMissionSection/AboutUsAndMissionSection";
import JourneySection from "./components/JourneySection/JourneySection";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import PressSection from "./components/PressSection/PressSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HeadlineSection />
        <AboutUsAndMissionSection />
        <JourneySection />
        <PartnersSection />
        <PressSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
