"use client";

const eventDetails = [
  {
    icon: "fas fa-calendar-days",
    iconColor: "text-yellow-400",
    title: "Event Dates",
    info: "27-28 March 2026",
    description: "Two days of intense hackathon",
  },
  {
    icon: "fas fa-location-dot",
    iconColor: "text-emerald-400",
    title: "Venue",
    info: "Kasturiba Hall",
    description: "VIT Chennai Campus",
  },
  {
    icon: "fas fa-clock",
    iconColor: "text-cyan-400",
    title: "Duration",
    info: "48 Hours",
    description: "Non-stop hackathon",
  },
];

export default function EventDetailsSection() {
  return (
    <section className="relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden">
      {/* Interactive background */}
      <div className="absolute inset-0 opacity-30">
        
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400">Event Details</h2>
        <p className="mt-1 text-sm text-gray-400">
          Everything you need to know about Solve-A-Thon&apos;26
        </p>

        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventDetails.map((detail, idx) => (
            <div
              key={idx}
              className="relative min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] p-5 sm:p-6 lg:p-8 border-2 bg-neutral-900/90 border-cyan-400/40 hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-150 ease-in-out cursor-pointer group"
            >
              <div className={`text-3xl sm:text-4xl mb-4 sm:mb-5 ${detail.iconColor} group-hover:text-black transition-colors duration-150`}>
                <i className={detail.icon} />
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-white group-hover:text-black transition-colors duration-150">
                {detail.title}
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-2 group-hover:text-black transition-colors duration-150">
                {detail.info}
              </p>
              <p className="text-sm text-gray-400 group-hover:text-black transition-colors duration-150">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
