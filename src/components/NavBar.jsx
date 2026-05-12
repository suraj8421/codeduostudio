import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ease-in-out
        ${scrolled
          ? "h-16 bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "h-20 bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10">

        {/* Logo */}
        <a
          href="#hero"
          className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          aria-label="CodeDuo Studio"
        >
          <img
            src="/images/logo.png"
            alt="CodeDuo Studio"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(({ link, name }) => (
            <a
              key={name}
              href={link}
              className="relative text-white/75 text-sm font-medium hover:text-white transition-colors duration-250 group py-1"
            >
              {name}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-brand-orange rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold
              hover:bg-brand-orange hover:text-white transition-all duration-300"
          >
            Work with us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-[-1] lg:hidden
          bg-black/96 backdrop-blur-2xl
          flex flex-col items-center justify-center gap-8 px-8
          transition-all duration-400 ease-in-out
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {navLinks.map(({ link, name }) => (
          <a
            key={name}
            href={link}
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold text-white/80 hover:text-white transition-colors tracking-tight"
          >
            {name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 w-full max-w-xs rounded-2xl bg-brand-orange py-4 text-center text-lg font-bold text-black hover:bg-orange-400 active:scale-95 transition-all"
        >
          Start a Project
        </a>
      </div>
    </header>
  );
};

export default NavBar;
