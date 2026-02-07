"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollingBar() {
  const blocks = ["A BLOCK", "B BLOCK", "C BLOCK", "D1 BLOCK", "D2 BLOCK", "E BLOCK"];

  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  // Measure exact width → required for true seamless animation
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const width = trackRef.current.scrollWidth / 2; // because duplicated once
      setDistance(width);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="w-full bg-emerald-400 py-1.5 overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-max items-center gap-10"
        style={{
          animation: distance
            ? `marquee ${distance < 500 ? 8 : 16}s linear infinite`
            : "none",
        }}
      >
        {[...blocks, ...blocks].map((block, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="text-black font-bold text-xs md:text-sm tracking-widest">
              {block}
            </span>
            {idx !== blocks.length * 2 - 1 && <span className="text-black/80">•</span>}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${distance}px);
          }
        }
      `}</style>
    </div>
  );
}
