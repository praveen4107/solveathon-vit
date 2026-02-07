import OrganizerCard from "./OrganizerCard";

const organizers = [
  {
    name: "Dr. Trilok Nath Pandey",
    email: "triloknath.pandey@vit.ac.in",
    role: "Faculty Coordinator",
  },
  {
    name: "Dr. Mansoor Hussain D",
    email: "mansoorhussain.d@vit.ac.in",
    role: "Faculty Coordinator",
  },
  {
    name: "Dr. Natarajan B",
    email: "natarajan.b@vit.ac.in",
    role: "Faculty Coordinator",
  },
];

export default function OrganizersSection() {
  return (
    <section id="organizers" className="relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Organizers</h2>
        <p className="mt-1 text-gray-400 text-sm">
          Meet the team making it all happen
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizers.map((organizer) => (
            <OrganizerCard
              key={organizer.email}
              name={organizer.name}
              email={organizer.email}
              role={organizer.role}
              avatarCharIndex={4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
