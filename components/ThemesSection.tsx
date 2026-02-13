import ThemeCard from "./ThemeCard";

const themes = [
  {
    number: 1,
    heading: "Smart Water Management & Conservation Systems",
  },
  {
    number: 2,
    heading: "Food Management, Nutrition & Wastage Reduction",
  },
  {
    number: 3,
    heading: "Campus Safety, Intrusion & Movement Monitoring",
  },
  {
    number: 4,
    heading: "Student Mental Health, Well-being & Counselling",
  },
  {
    number: 5,
    heading: "Cleanliness, Hygiene & Waste Management",
  },
  {
    number: 6,
    heading: "Discipline, Conduct & Compliance Monitoring",
  },
  {
    number: 7,
    heading: "Health Services & Emergency Management",
  },
  {
    number: 8,
    heading: "Hostel Operations & Facility Automation",
  },
];

export default function ThemesSection({ glass = true }: { glass?: boolean }) {
  const baseClasses =
    "relative px-4 md:px-8 lg:px-20 py-12 md:py-12 overflow-hidden";
  const glassClasses = " bg-neutral-900/70 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Themes & Problem Statements</h2>
        {/*<p className="mt-1 text-gray-400 text-xs md:text-sm">
          Choose your challenge and make a real impact
        </p>*/}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
          {themes.map((theme) => (
            <ThemeCard
              key={theme.heading}
              number={theme.number}
              heading={theme.heading}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/problems"
            className="bg-cyan-400 text-black px-6 py-3 font-bold text-sm hover:bg-cyan-300 transition cursor-pointer"
          >
            VIEW PROBLEM STATEMENTS
          </a>
        </div>
      </div>
    </section>
  );
}
