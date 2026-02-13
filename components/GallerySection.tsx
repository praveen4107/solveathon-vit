"use client";

import { useState } from "react";

export default function GallerySection({ glass = false }: { glass?: boolean }) {
  const [activeTab, setActiveTab] = useState<"24" | "23">("24");
  const [showAll, setShowAll] = useState(false);

  const galleries = {
    24: [
      "/solveathon24img/301.jpg",
      "/solveathon24img/302.jpg",
      "/solveathon24img/303.jpg",
      "/solveathon24img/304.jpg",
      "/solveathon24img/305.jpg",
      "/solveathon24img/306.jpg",
      "/solveathon24img/307.jpg",
    ],
    23: [
      "/solveathon23img/231.jpg",
      "/solveathon23img/234.jpg",
      "/solveathon23img/235.jpg",
      "/solveathon23img/236.jpg",
      "/solveathon23img/237.jpg",
      "/solveathon23img/_MG_6154.JPG",
      "/solveathon23img/_MG_6158.JPG",
    ],
  };

  const displayedImages = showAll
    ? galleries[activeTab]
    : galleries[activeTab].slice(0, 3);

  const baseClasses =
    "relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-neutral-900/70 border-t border-white/10";

  return (
    <section id="gallery" className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Gallery</h2>
        <p className="mt-1 text-gray-400 text-sm">
          Moments from previous editions
        </p>

        {/* Tabs */}
        <div className="mt-8 flex gap-4 border-b border-white/10">
          {[
            { year: "24", label: "24" },
            { year: "23", label: "23" },
          ].map((item) => (
            <button
              key={item.year}
              onClick={() => {
                setActiveTab(item.year as "24" | "23");
                setShowAll(false);
              }}
              className={`px-3 sm:px-6 py-2 sm:py-3 font-bold tracking-widest transition whitespace-nowrap sm:whitespace-normal text-xs sm:text-sm ${
                activeTab === item.year
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              SOLVE-A-THON &apos;{item.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative aspect-video overflow-hidden border border-cyan-400/40 hover:border-cyan-400 transition"
            >
              <img
                src={image}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && galleries[activeTab].length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-cyan-400 text-black px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-cyan-300 transition cursor-pointer"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
