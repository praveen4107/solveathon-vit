type ThemeCardProps = {
  number: number;
  heading: string;
};

export default function ThemeCard({ number, heading }: ThemeCardProps) {
  return (
    <div className="group relative overflow-hidden h-full">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

      <div className="relative bg-neutral-900/80 border border-emerald-400/40 p-4 md:p-6 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300 h-full">
        {/* Theme Number and Heading */}
        <div className="mb-3 md:mb-4">
          <div className="inline-block bg-emerald-400 text-black px-2 py-0.5 text-[9px] md:text-[10px] font-bold tracking-widest mb-3 md:mb-4">
            THEME {number}
          </div>
          <h3 className="text-base md:text-lg font-bold text-cyan-400 tracking-wider">
            {heading}
          </h3>
        </div>

      </div>
    </div>
  );
}
