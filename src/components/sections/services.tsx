"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";

const slides = [
  {
    title: "Hair Dressing",
    subtitle: "Precision cuts, fades, styling and classic looks.",
    imageUrl: "/images/services/haircuts.jpg",
  },
  {
    title: "Massage",
    subtitle: "Relaxing head, neck and body massage treatments.",
    imageUrl: "/images/services/shaves.jpg",
  },
  {
    title: "Pedicure",
    subtitle: "Professional foot care and grooming services.",
    imageUrl: "/images/services/facial.jpg",
  },
  {
    title: "Manicure",
    subtitle: "Expert hand and nail care treatments.",
    imageUrl: "/images/services/beard.jpg",
  },
  {
    title: "Full Grooming",
    subtitle: "The complete package — haircut, massage, pedicure and manicure.",
    imageUrl: "/images/services/packages.jpg",
  },
];

// SEO keywords kept in markup for search engines
const seoKeywords = [
  "Hair dressing",
  "Massage",
  "Pedicure",
  "Manicure",
  "Haircut",
  "Beard trim",
  "Grooming",
  "Barber shop Johannesburg",
  "Birnam barber",
  "Melrose Crossing",
  "Hair styling",
  "Men's grooming",
];

export function Services() {
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (index: number) => {
      setActive(index);
    },
    []
  );

  const prev = useCallback(() => {
    const next = active === 0 ? slides.length - 1 : active - 1;
    go(next);
  }, [active, go]);

  const next = useCallback(() => {
    const n = active === slides.length - 1 ? 0 : active + 1;
    go(n);
  }, [active, go]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const slide = slides[active];

  return (
    <section id="services" className="hero-bg py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block text-white/60">Meet our Tailored</span>
            <span className="block text-white">Services for You</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-steel sm:text-lg">
            From Hair Dressing to Lifestyle Treatments, We&apos;ve Got You.
          </p>
        </motion.div>

        <motion.div
          ref={cardRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Service categories"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="services-card relative overflow-hidden rounded-2xl sm:rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-barber-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          style={{ aspectRatio: "16 / 7" }}
        >
          {slides.map((s, i) => (
            <div
              key={s.title}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                i === active ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.imageUrl}
                alt={s.title}
                className="h-full w-full object-cover"
              />
            </div>
          ))}

          <div className="services-vignette absolute inset-0 z-[1]" />

          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    {slide.title}
                  </h3>
                  <p className="mt-1 text-sm text-silver sm:text-base">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous service"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      aria-label={`Go to ${slides[i].title}`}
                      aria-current={i === active ? "true" : undefined}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === active
                          ? "w-6 bg-white"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next service"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 self-start rounded-lg border border-white/25 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white/50 sm:self-auto"
            >
              Browse All Services
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-sm text-steel/60 leading-relaxed">
          {seoKeywords.join(" · ")}
        </p>
      </Container>
    </section>
  );
}
