"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function EventCountdown({ glass = true }: { glass?: boolean }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      // Event date: March 27, 2026 at 00:00:00
      const eventDate = new Date("2026-03-27T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const baseClasses =
    "relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-neutral-900/90 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-widest mb-2">
            EVENT COUNTDOWN
          </h2>
          <p className="text-gray-400 text-xs md:text-sm tracking-wider">
            The ultimate hackathon awaits. Are you ready?
          </p>
        </div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20  blur opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="relative bg-neutral-900/80 border-2 border-cyan-400/40 
               p-6 max-sm:p-4 text-center backdrop-blur-sm hover:border-cyan-400 transition-all duration-300">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-300 font-mono mb-2">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] sm:text-xs tracking-widest text-gray-400 uppercase font-bold">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm tracking-wider">
            <span className="text-cyan-400 font-semibold">27TH - 28TH MARCH 2026</span>
          </p>
        </div>
      </div>
    </section>
  );
}
