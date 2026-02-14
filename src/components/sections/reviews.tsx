"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const reviews = [
  {
    text: "Great service and friendly staff. Always leave looking fresh.",
    author: "Happy Client",
  },
  {
    text: "One stop shop for all grooming needs — haircuts, massage, the works.",
    author: "Satisfied Customer",
  },
  {
    text: "Best barbershop in the area. Highly recommend!",
    author: "Loyal Client",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <Container>
        <SectionHeading
          title="What Clients Say"
          subtitle="Real reviews from real clients"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-silver/10 bg-charcoal/30 p-6"
            >
              <div className="mb-3 flex text-yellow-400 text-sm gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j}>&#9733;</span>
                ))}
              </div>
              <p className="text-mist leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-steel">
                — {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
