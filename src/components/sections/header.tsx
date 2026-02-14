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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3">
        <header
          className={`mx-auto max-w-7xl rounded-full transition-all duration-300 ${
            scrolled || menuOpen
              ? "bg-ink/90 backdrop-blur-md border border-silver/10 shadow-lg shadow-black/20"
              : "bg-charcoal/50 backdrop-blur-sm border border-silver/5"
          }`}
        >
          <div className="flex h-14 items-center justify-between px-6">
            <a
              href="#"
              className="text-xl font-bold tracking-wide text-mist hover:text-white transition-colors"
            >
              Noel&apos;s Barbershop
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
                href="https://wa.me/27712440822"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-barber-red px-4 py-2 text-sm font-semibold text-white hover:bg-barber-red/90 transition-colors"
              >
                Book Now
              </a>
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 md:hidden flex flex-col gap-1.5 p-2 text-mist"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </header>
      </div>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-ink/95 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu content */}
            <nav className="relative z-10 flex h-full flex-col items-center justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="text-2xl font-semibold text-silver hover:text-white py-3 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="https://wa.me/27712440822"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="mt-6 rounded-xl bg-barber-red px-8 py-3.5 text-base font-semibold text-white hover:bg-barber-red/90 transition-colors"
              >
                Book on WhatsApp
              </motion.a>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-10 text-sm text-steel"
              >
                +27 71 244 0822
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
