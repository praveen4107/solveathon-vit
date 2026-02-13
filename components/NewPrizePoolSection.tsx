const prizes = [
  {
    icon: "fas fa-trophy",
    iconColor: "text-yellow-400",
    title: "1st Place",
    amount: "₹10,000",
    description: "For the winning team",
  },
  {
    icon: "fas fa-medal",
    iconColor: "text-gray-300",
    title: "2nd Place",
    amount: "₹7,000",
    description: "Runner-up recognition",
  },
  {
    icon: "fas fa-award",
    iconColor: "text-orange-400",
    title: "3rd Place",
    amount: "₹5,000",
    description: "Third place achievement",
  },
];

export default function NewPrizePoolSection({ glass = false }: { glass?: boolean }) {
  const baseClasses =
    "relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-neutral-900/70 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-300">Prize Pool</h2>
        {/*<p className="mt-1 text-gray-400 text-sm">
          ₹22,000 in total prizes to be won
        </p>*/}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prizes.map((prize, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/60 border border-cyan-400/30 p-5 sm:p-6 lg:p-8 hover:border-emerald-400/60 transition-all group"
            >
              <div className={`text-4xl sm:text-5xl mb-3 sm:mb-4 ${prize.iconColor}`}>
                <i className={prize.icon} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                {prize.title}
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2 sm:mb-3">
                {prize.amount}
              </p>
              {/*<p className="text-sm text-gray-400">
                {prize.description}
              </p>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
