const hostelTeam = [
  // Leadership
  /*{
    name: "Dr. Janardhan Reddy K",
    email: "chennai.dirhostel@vit.ac.in",
    role: "Director – Hostel",
  },
  {
    name: "Dr. Felix A",
    email: "chennai.dydirectormh@vit.ac.in",
    role: "Deputy Director – Hostel",
  },*/
  // Wardens – maintenance / discipline / food
  {
    name: "Dr. Mohamed Imran A",
    email: "wmhmaintenance.cc@vit.ac.in",
    role: "Warden – Maintenance",
  },
  {
    name: "Dr. Murali Mohan G",
    email: "wmhdiscipline.cc@vit.ac.in",
    role: "Warden – Discipline",
  },
  {
    name: "Dr. Abhijit Mishra",
    email: "wmhfood.cc@vit.ac.in",
    role: "Warden – Food",
  },
  // Wardens – A Block
  {
    name: "Dr. Manikandan P",
    email: "wmha.cc@vit.ac.in",
    role: "Warden – A Block",
  },
  {
    name: "Dr. Sunil Kumar Pradhan",
    email: "wmha.cc@vit.ac.in",
    role: "Warden – A Block",
  },
  // Wardens – C Block
  /*{
    name: "Dr. Mansoor Hussain D",
    email: "wmhc.cc@vit.ac.in",
    role: "Warden – C Block",
  },*/
  {
    name: "Dr. Ankit Kumar",
    email: "wmhc.cc@vit.ac.in",
    role: "Warden – C Block",
  },
  // Wardens – D1 Block
  /*{
    name: "Dr. Trilok Nath Pandey",
    email: "wmhd.cc@vit.ac.in",
    role: "Warden – D1 Block",
  },*/
  {
    name: "Dr. Sankar P",
    email: "wmhd.cc@vit.ac.in",
    role: "Warden – D1 Block",
  },
  // Wardens – D2 Block
  /*{
    name: "Dr. Natarajan B",
    email: "wmhd2.cc@vit.ac.in",
    role: "Warden – D2 Block",
  },*/
  {
    name: "Prof. Tanmay Roy",
    email: "wmhd2.cc@vit.ac.in",
    role: "Warden – D2 Block",
  },
  // Wardens – E Block
  {
    name: "Dr. Sunil Kumar Pradhan",
    email: "wmhe.cc@vit.ac.in",
    role: "Warden – E Block",
  },
  {
    name: "Dr. Rajeesh C S",
    email: "wmhe.cc@vit.ac.in",
    role: "Warden – E Block",
  },
  // Superintendent team
  {
    name: "Mr. Thamarai Selvan G",
    email: "chennai.suptmh@vit.ac.in",
    role: "Superintendent – Men's Hostel",
  },
  {
    name: "Mr. Saravanan P",
    email: "chennai.dysuptmh@vit.ac.in",
    role: "Deputy Superintendent – Men's Hostel",
  },
  // Supervisors by block
  {
    name: "Mr. Ajith Kumar B S",
    email: "ajithkumar.bs@vit.ac.in",
    role: "Supervisor – A Block",
  },
  {
    name: "Mr. Manivel S",
    email: "manivel.s@vit.ac.in",
    role: "Supervisor – C Block",
  },
  {
    name: "Mr. Nagamuthu A",
    email: "nagamuthu.a@vit.ac.in",
    role: "Supervisor – D1 Block",
  },
  {
    name: "Mr. Venkatesan P M",
    email: "venkatesan.pm@vit.ac.in",
    role: "Supervisor – D2 Block",
  },
  {
    name: "Mr. Mhurthie V M",
    email: "mhurthie.vm@vit.ac.in",
    role: "Supervisor – E Block",
  },
];

export default function HostelTeamSection({ glass = true }: { glass?: boolean }) {
  const baseClasses =
    "relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-neutral-900/70 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Hostel Team</h2>

        {/* List Layout */}
        <ul className="mt-10 space-y-1">
          {hostelTeam.map((member) => (
            <li key={`${member.name}-${member.email}-${member.role}`}>
              <span className="text-gray-100">{member.name}</span>
              <span className="text-gray-400">{" – "}{member.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

