export default function Footer() {
  const quickLinks = [
    { label: "HOME", href: "/" },
    { label: "PROBLEMS", href: "/problems" },
    { label: "MERCH", href: "/merch" },
    { label: "ORGANIZERS", href: "/#organizers" },
    { label: "SPONSORS", href: "#" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-neutral-900/75 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-4 md:px-8 lg:px-20 py-12 md:py-16 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Branding */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 tracking-widest mb-4">
              SOLVE-A-THON&apos;26
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Code - Compete - Conquer
            </p>
            <p className="text-gray-500 text-xs mt-2">
              27th - 28th March 2026
            </p>
          </div>

          {/* Quick Links - Desktop Only */}
          <div className="hidden md:block">
            <h4 className="text-base md:text-lg font-bold text-white mb-4 tracking-widest">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition text-xs md:text-sm tracking-wide flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-emerald-300 text-[10px]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-bold text-white mb-4 tracking-widest">
              GET IN TOUCH
            </h4>
            <a
              href="mailto:solveathon@vit.ac.in"
              className="text-gray-400 hover:text-cyan-400 transition text-xs md:text-sm flex items-center gap-2 mb-3"
            >
              <i className="fas fa-envelope text-cyan-400" />
              solveathon@vit.ac.in
            </a>
            <p className="text-gray-500 text-xs flex items-start gap-2">
              <i className="fas fa-map-marker-alt text-emerald-300 mt-0.5" />
              <span>VIT Chennai, Tamil Nadu</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 md:mt-12 border-t border-white/10 pt-6">
          <p className="text-gray-400 text-xs md:text-sm text-center">
            &copy; 2026 Solve-A-Thon VIT Chennai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
