type ProblemCardProps = {
  id: string;
  title: string;
  description: string;
  onClick: () => void;
};

export default function ProblemCard({
  id,
  title,
  description,
  onClick,
}: ProblemCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer h-full"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition duration-300" />

      <div className="relative bg-neutral-900/80 border border-cyan-400/40 p-6 md:p-8 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 h-full flex flex-col">
        {/* Problem ID Badge */}
        <div className="inline-block w-fit bg-emerald-400 text-black px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest mb-4">
          {id}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-cyan-400 tracking-wide mb-4 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed flex-grow line-clamp-3">
          {description}
        </p>

        {/* Learn More indicator */}
        <div className="mt-6 flex items-center gap-2 text-emerald-300 text-sm font-semibold group-hover:gap-3 transition-all">
          <span>Learn More</span>
          <i className="fas fa-arrow-right text-xs" />
        </div>
      </div>
    </div>
  );
}
