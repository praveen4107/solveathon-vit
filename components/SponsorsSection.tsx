export default function SponsorsSection() {
  const sponsors = [
    {
      name: "ETH India",
      logo: "/sponsors/ETHIndia_idaNAlCG75_0.png",
      tier: "Devfolio",
    },
    {
      name: "Sponsors",
      logo: "/sponsors/ETHIndia@2x.png",
      tier: "ETHIndia",
    },
  ];

  return (
    <section id="sponsors" className="relative px-4 md:px-8 lg:px-20 py-12 md:py-16 bg-neutral-900/70 border-t border-white/10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400">Our Sponsors</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Powering innovation and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-neutral-900/60 border border-cyan-400/30 p-8 md:p-10 hover:border-cyan-400/60 transition-all group"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 text-xs font-bold tracking-widest text-emerald-300 uppercase">
                  {sponsor.tier}
                </div>
                <div className="w-full h-32 md:h-40 flex items-center justify-center bg-white p-4 rounded-lg transition-all">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
