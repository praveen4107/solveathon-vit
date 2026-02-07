type EventCardProps = {
  icon: string;
  title: string;
  desc: string;
  highlight?: boolean;
};

export default function EventCard({
  icon,
  title,
  desc,
  highlight = false,
}: EventCardProps) {
  return (
    <div
      className={`min-h-[240px] p-8 border-2 transition-all duration-150 ease-in-out cursor-pointer group
        ${
          highlight
            ? "bg-cyan-400 text-black border-cyan-400"
            : "bg-neutral-900/90 border-cyan-400/40 hover:bg-cyan-400 hover:text-black hover:border-cyan-400"
        }`}
    >
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className={`text-sm ${highlight ? "text-black" : "text-gray-400 group-hover:text-black"}`}>
        {desc}
      </p>
    </div>
  );
}
