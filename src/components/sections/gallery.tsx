"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const images = [
  { src: "/images/storefront.webp", alt: "Noel's Barbershop & Lifestyle storefront" },
  { src: "/images/gallery-1.webp", alt: "Precision haircut" },
  { src: "/images/gallery-2.webp", alt: "Classic shave" },
  { src: "/images/gallery-3.webp", alt: "Beard grooming" },
  { src: "/images/gallery-4.webp", alt: "Interior of Noel's Barbershop & Lifestyle" },
  { src: "/images/gallery-5.webp", alt: "Barber at work" },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-charcoal/40">
      <Container>
        <SectionHeading
          title="Gallery"
          subtitle="A look inside Noel's Barbershop & Lifestyle"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(i)}
              className="relative aspect-square overflow-hidden rounded-lg bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-barber-red focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[80vh] max-w-3xl w-full aspect-square rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                fill
                className="object-cover"
                sizes="80vw"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-white hover:bg-ink transition-colors"
                aria-label="Close lightbox"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
