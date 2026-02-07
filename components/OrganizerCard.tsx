type OrganizerCardProps = {
  name: string;
  email: string;
  role?: string;
  avatarCharIndex?: number;
};

export default function OrganizerCard({ name, email, role, avatarCharIndex = 0 }: OrganizerCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition duration-300" />

      <div className="relative bg-neutral-900/80 border border-cyan-400/40 p-6 md:p-8 text-center backdrop-blur-sm hover:border-cyan-400 transition-all duration-300">
        {/* Avatar */}
        <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 mx-auto mb-4 flex items-center justify-center flex-shrink-0">
          <div className="text-xl md:text-2xl font-bold text-black">
            {name.charAt(avatarCharIndex)}
          </div>
        </div>

        {/* Name */}
        <h3 className="text-base md:text-lg font-bold text-cyan-400 tracking-wider">
          {name}
        </h3>

        {/* Role */}
        {role && (
          <p className="text-[10px] md:text-xs text-emerald-300 uppercase tracking-widest mt-2 font-semibold">
            {role}
          </p>
        )}

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 mt-4 text-xs md:text-sm text-gray-400 hover:text-cyan-400 transition break-all"
        >
          <i className="fas fa-envelope text-cyan-400" />
          {email}
        </a>
      </div>
    </div>
  );
}
