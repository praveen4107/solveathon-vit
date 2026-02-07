"use client";

const prizes = [
  {
    icon: "fas fa-crown",
    iconColor: "text-yellow-400",
    title: "1st Prize",
    amount: "₹75,000",
    description: "Champion's reward for the best solution",
  },
  {
    icon: "fas fa-medal",
    iconColor: "text-gray-400",
    title: "2nd Prize",
    amount: "₹50,000",
    description: "Runner-up recognition and rewards",
  },
  {
    icon: "fas fa-award",
    iconColor: "text-orange-400",
    title: "3rd Prize",
    amount: "₹25,000",
    description: "Commendable effort and achievement",
  },
];

export default function PrizePoolSection() {
  return (
    <section className="relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden">
      {/* Interactive background */}
      <div className="absolute inset-0 opacity-30">
        
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400">Prize Pool</h2>
        <p className="mt-1 text-sm text-gray-400">
          Prizes will be awarded on Hostel Day 2026
        </p>

        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prizes.map((prize, idx) => (
            <div
              key={idx}
              className="relative min-h-[240px] p-8 border-2 bg-neutral-900/90 border-cyan-400/40 hover:bg-cyan-400 hover:border-cyan-400 transition-all duration-150 ease-in-out cursor-pointer group"
            >
              <div className={`text-4xl mb-5 ${prize.iconColor} group-hover:text-black transition-colors duration-150`}>
                <i className={prize.icon} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-black transition-colors duration-150">
                {prize.title}
              </h3>
              <p className="text-3xl font-bold text-emerald-300 mb-2 group-hover:text-black transition-colors duration-150">
                {prize.amount}
              </p>
              <p className="text-sm text-gray-400 group-hover:text-black transition-colors duration-150">
                {prize.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
