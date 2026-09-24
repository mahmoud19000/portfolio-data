import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#0d0f12]/80 backdrop-blur-xl border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleClick("#hero")}
          className="flex items-center gap-2 text-white font-bold text-lg tracking-tight group"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 transition-transform group-hover:scale-110">
            <Terminal className="h-5 w-5 text-white" />
          </span>
          <span className="hidden sm:inline">
            MF<span className="text-cyan-400">.</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow duration-300"
          >
            Hire Me
          </button>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3 bg-[#0d0f12]/95 backdrop-blur-xl border-b border-white/5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left text-gray-300 hover:text-cyan-400 transition-colors py-2 font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-center mt-2"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
