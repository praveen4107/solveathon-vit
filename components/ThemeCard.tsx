import Link from "next/link";

type ThemeCardProps = {
  href: string;
  number: number;
  title: string;
  problems: { id: string; title: string }[];
};

export default function ThemeCard({
  href,
  number,
  title,
  problems,
}: ThemeCardProps) {
  return (
    <Link href={href} className="group relative block h-full overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

      <div className="relative h-full bg-neutral-900/80 border border-emerald-400/40 p-4 md:p-6 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300">
        {/* Theme Number and Heading */}
        <div className="mb-3 md:mb-4">
          <div className="inline-block bg-emerald-400 text-black px-2 py-0.5 text-[9px] md:text-[10px] font-bold tracking-widest mb-3 md:mb-4">
            THEME {number}
          </div>
          <h3 className="text-base md:text-lg font-bold text-cyan-400 tracking-wider">
            {title}
          </h3>
        </div>

        <ul className="space-y-2 text-sm text-gray-300">
          {problems.map((problem) => (
            <li key={problem.id} className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span className="leading-relaxed">
                <span className="text-emerald-200 font-semibold">
                  {problem.id}
                </span>
                <span className="text-gray-400"> — </span>
                <span>{problem.title}</span>
              </span>
            </li>
          ))}
        </ul>

      </div>
    </Link>
  );
}
