import React from "react";
import "./App.css";

import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";

import PopularRidesSection from "./components/sections/PopularRidesSection";
import OffersSection from "./components/sections/OffersSection";

import WhatsNewSection from "./components/sections/WhatsNewSection";
import UpcomingEventsSection from "./components/sections/UpcomingEventsSection";

import MustSeeAttractionsSection from "./components/sections/MustSeeAttractionsSection";
import MagicPassBanner from "./components/sections/MagicPassBanner";
import StaycationSection from "./components/sections/StaycationSection";

import SafetyPrioritySection from "./components/sections/SafetyPrioritySection";
import PlanVisitSection from "./components/sections/PlanVisitSection";

import GroupOutingSection from "./components/sections/GroupOutingSection";
import DiningExperiencesSection from "./components/sections/DiningExperiencesSection";

import HappyGuestsSection from "./components/sections/HappyGuestsSection";
import MerchandiseSection from "./components/sections/MerchandiseSection";

import PeopleImagicaaSection from "./components/sections/PeopleImagicaaSection";
import FAQSection from "./components/sections/FAQSection";

import FooterSection from "./components/ui/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden text-black">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <PopularRidesSection />
      <OffersSection />
      <WhatsNewSection />
      <UpcomingEventsSection />
      <MustSeeAttractionsSection />
      <MagicPassBanner />
      <StaycationSection />
      <SafetyPrioritySection />
      <PlanVisitSection />
      <GroupOutingSection />
      <DiningExperiencesSection />
      <HappyGuestsSection />
      <MerchandiseSection />
      <PeopleImagicaaSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default App;