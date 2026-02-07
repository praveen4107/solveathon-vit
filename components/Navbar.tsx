"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "PROBLEMS", href: "/problems" },
    { label: "MERCH", href: "/merch" },
    { label: "ORGANIZERS", href: "/#organizers" },
    { label: "SPONSORS", href: "/#sponsors" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-neutral-900/95 backdrop-blur-sm border-b border-white/10">
      {/* Logo */}
      <a href="/" className="font-bold tracking-widest flex-shrink-0">
        <img
          src="/vit_cystal_logo.png"
          alt="VIT Crystal"
          className="h-8 w-auto"
          style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
        />
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center px-6 py-2 border border-white/20 bg-neutral-900/60">
        {navItems.map((item, index, arr) => (
          <a
            key={item.label}
            href={item.href}
            className={`text-xs md:text-sm uppercase tracking-widest text-white/80 hover:text-cyan-400 transition border-white/30 ${
              index === 0 ? "pr-3 md:pr-4" : "px-3 md:px-4 border-l"
            } ${index === arr.length - 1 ? "pl-3 md:pl-4" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Desktop Register Button */}
      <a
        href="/register"
        className="hidden md:block bg-cyan-400 text-black px-6 py-2 font-bold uppercase tracking-widest text-sm hover:bg-cyan-300 transition cursor-pointer"
      >
        REGISTER
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-white hover:text-cyan-400 transition p-2 cursor-pointer"
      >
        <i className={`fas fa-${mobileMenuOpen ? "times" : "bars"} text-xl`} />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-sm border-b border-white/10 md:hidden">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm uppercase tracking-widest text-white/80 hover:text-cyan-400 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/register"
              className="w-full bg-cyan-400 text-black px-6 py-2 font-bold uppercase tracking-widest text-sm hover:bg-cyan-300 transition mt-2 text-center cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              REGISTER
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
