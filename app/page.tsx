"use client";

import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import EventCountdown from "../components/EventCountdown";
import EventDetailsSection from "../components/EventDetailsSection";
import ThemesSection from "../components/ThemesSection";
import OrganizersSection from "../components/OrganizersSection";
import StudentCoordinatorsSection from "../components/StudentCoordinatorsSection";
import NewPrizePoolSection from "../components/NewPrizePoolSection";
import SponsorsSection from "../components/SponsorsSection";
import GallerySection from "../components/GallerySection";
import AboutPreviousEditionSection from "../components/AboutPreviousEditionSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import DecryptedText from "../components/DecryptedText";
import ScrollingBar from "../components/ScrollingBar";

export default function Home() {
  return (
    <>
      <main className="relative z-10 text-white w-full">
        {/* NAVBAR */}
        <Navbar />

      {/* HERO */}
      <section className="text-center px-4 md:px-5 pt-28 md:pt-32 pb-28 md:pb-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest text-cyan-400 font-bold">
          <DecryptedText 
            text="SOLVE-A-THON'26" 
            animateOn="view"
            speed={60}
            className="text-cyan-400"
            parentClassName="whitespace-nowrap"
          />
        </h1>

        <p className="mt-3 text-xs md:text-sm tracking-widest text-white">
          Code - Compete - Conquer
        </p>

        <p className="mt-4 text-xs md:text-sm text-gray-400">
          VIT Chennai Inter-Hostel Hackathon
        </p>

        <p className="mt-2 text-xs md:text-sm text-gray-400">
          27TH – 28TH MARCH 2026
        </p>

        <div className="mt-8 md:mt-10 flex justify-center gap-3 md:gap-4 flex-wrap">
          <a
            href="/register"
            className="bg-emerald-300 text-black px-5 md:px-7 py-2 md:py-3 font-bold text-sm hover:bg-emerald-200 transition cursor-pointer"
          >
            REGISTER
          </a>
          <a
            href="/problems"
            className="bg-cyan-400 text-black px-5 md:px-7 py-2 md:py-3 font-bold text-sm hover:bg-cyan-300 transition cursor-pointer"
          >
            PROBLEMS
          </a>
        </div>
      </section>

      {/* SCROLLING BAR */}
      <ScrollingBar />

      {/* COUNTDOWN */}
      <EventCountdown />

      {/* EVENT DETAILS */}
      <EventDetailsSection />

      {/* THEMES & PROBLEM STATEMENTS */}
      <ThemesSection />

      {/* ORGANIZERS */}
      <OrganizersSection />

      {/* STUDENT COORDINATORS */}
      <StudentCoordinatorsSection />

      {/* PRIZE POOL */}
      <NewPrizePoolSection />

      {/* SPONSORS */}
      <SponsorsSection />

      {/* GALLERY */}
      <GallerySection />

      {/* ABOUT PREVIOUS EDITION */}
      <AboutPreviousEditionSection />

      {/* FAQ */}
      <FAQSection />

      {/* FOOTER */}
      <Footer />
      </main>
    </>
  );
}
