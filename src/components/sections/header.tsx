"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3">
      <header
        className={`mx-auto max-w-7xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-ink/90 backdrop-blur-md border border-silver/10 shadow-lg shadow-black/20"
            : "bg-charcoal/50 backdrop-blur-sm border border-silver/5"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-6">
          <a
            href="#"
            className="text-xl font-bold tracking-wide text-mist hover:text-white transition-colors"
          >
            Barber Studio
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-silver hover:text-mist transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/27659805164"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-barber-red px-4 py-2 text-sm font-semibold text-white hover:bg-barber-red/90 transition-colors"
            >
              Book Now
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-mist"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-silver/10 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-silver hover:text-mist py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/27659805164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-lg bg-barber-red px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-barber-red/90 transition-colors"
                >
                  Book on WhatsApp
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
