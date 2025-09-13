"use client";
import { useState, useRef } from "react";
import { Gallery } from "./components/gallery";
import { HeroSection } from "./components/hero-section";
import { Nav } from "./components/nav";
import { OurStory } from "./components/our-story";
import { RSVP } from "./components/rsvp";
import { WeddingWishes } from "./components/wedding-wishes";
import { Footer } from "./components/footer";
import { GiftRegistery } from "./components/gift-registery";
import { WeddingEvent } from "./components/wedding-event";
import useCelebrationEffects from "./hooks/useCelebrationEffect";

export default function Home() {
  const celebrationContainerRef = useRef<HTMLDivElement | null>(null);
  const { createGoldenCascadeExplosion } = useCelebrationEffects(
    celebrationContainerRef
  );
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      {/* Celebration Animations Container  */}
      <div
        ref={celebrationContainerRef}
        className="celebration-container"
      ></div>

      <div className="min-h-screen transition-all duration-500 bg-white dark:bg-gray-900">
        <Nav />
        <HeroSection />
        <Gallery />
        <OurStory  />
        <WeddingEvent />
        <RSVP  />
        <GiftRegistery  />
        <WeddingWishes  />
        <Footer />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
