"use client";

type ThemeProblemsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  theme: {
    number: number;
    heading: string;
    problems: { id: string; title: string }[];
  } | null;
};

export default function ThemeProblemsModal({
  isOpen,
  onClose,
  theme,
}: ThemeProblemsModalProps) {
  if (!isOpen || !theme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-neutral-900/95 border border-cyan-400/40 max-w-3xl w-full max-h-[85vh] overflow-y-auto backdrop-blur-sm">
        <div className="sticky top-0 bg-neutral-900/95 border-b border-cyan-400/20 px-6 md:px-8 py-6 flex items-start justify-between">
          <div className="flex-1">
            <div className="inline-block bg-emerald-400 text-black px-3 py-1 text-xs font-bold tracking-widest mb-3">
              THEME {theme.number}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wide">
              {theme.heading}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition p-2 flex-shrink-0"
          >
            <i className="fas fa-times text-2xl" />
          </button>
        </div>

        <div className="px-6 md:px-8 py-8">
          <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2">
            <i className="fas fa-list-check text-cyan-400" />
            Problem Statements
          </h3>
          <ul className="space-y-3">
            {theme.problems.map((problem) => (
              <li
                key={problem.id}
                className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
              >
                <span className="text-emerald-400 font-bold mt-1">•</span>
                <span>
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

        <div className="sticky bottom-0 bg-neutral-900/95 border-t border-cyan-400/20 px-6 md:px-8 py-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-2 font-bold uppercase text-sm tracking-widest transition cursor-pointer"
          >
            Close
          </button>
          <a
            href="/register"
            className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-2 font-bold uppercase text-sm tracking-widest transition cursor-pointer"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
