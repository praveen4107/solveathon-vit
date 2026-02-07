"use client";

type ProblemModalProps = {
  isOpen: boolean;
  onClose: () => void;
  problem: {
    id: string;
    title: string;
    description: string;
    descriptionTitle?: string;
    keyRequirementsTitle?: string;
    keyRequirements: string[];
    expectedSolutionTitle?: string;
    expectedSolutionIntro?: string;
    expectedSolution: string[];
  } | null;
};

export default function ProblemModal({
  isOpen,
  onClose,
  problem,
}: ProblemModalProps) {
  if (!isOpen || !problem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-neutral-900/95 border border-cyan-400/40 max-w-3xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-sm">
        {/* Header */}
        <div className="sticky top-0 bg-neutral-900/95 border-b border-cyan-400/20 px-6 md:px-8 py-6 flex items-start justify-between">
          <div className="flex-1">
            <div className="inline-block bg-emerald-400 text-black px-3 py-1 text-xs font-bold tracking-widest mb-3">
              {problem.id}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wide">
              {problem.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition p-2 flex-shrink-0"
          >
            <i className="fas fa-times text-2xl" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 py-8 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <i className="fas fa-file-lines text-cyan-400" />
              {problem.descriptionTitle ?? "Problem Statement"}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {problem.description}
            </p>
          </div>

          {/* Key Requirements */}
          <div>
            <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <i className="fas fa-list-check text-cyan-400" />
              {problem.keyRequirementsTitle ?? "Key Requirements"}
            </h3>
            <ul className="space-y-3">
              {problem.keyRequirements.map((req, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                >
                  <span className="text-emerald-400 font-bold mt-1">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expected Solution */}
          <div>
            <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <i className="fas fa-lightbulb text-cyan-400" />
              {problem.expectedSolutionTitle ?? "Expected Solution Components"}
            </h3>
            {problem.expectedSolutionIntro ? (
              <p className="text-gray-300 text-sm md:text-base mb-4">
                {problem.expectedSolutionIntro}
              </p>
            ) : null}
            <ol className="space-y-3">
              {problem.expectedSolution.map((solution, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                >
                  <span className="text-emerald-400 font-bold min-w-fit">
                    {idx + 1}.
                  </span>
                  <span>{solution}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer */}
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
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
