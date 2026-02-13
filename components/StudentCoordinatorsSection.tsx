import OrganizerCard from "./OrganizerCard";

const coordinators = [
  {
    name: "StudentCoordinator1",
    email: "student1@vitstudent.ac.in",
    role: "Student Coordinator",
  },
  {
    name: "StudentCoordinator2",
    email: "student2@vitstudent.ac.in",
    role: "Student Coordinator",
  },
];

export default function StudentCoordinatorsSection({
  glass = true,
}: {
  glass?: boolean;
}) {
  const baseClasses =
    "relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-neutral-900/70 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Student Coordinators</h2>
        <p className="mt-1 text-gray-400 text-sm">
          Your point of contact for all queries
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {coordinators.map((coordinator) => (
            <OrganizerCard
              key={coordinator.email}
              name={coordinator.name}
              email={coordinator.email}
              role={coordinator.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
