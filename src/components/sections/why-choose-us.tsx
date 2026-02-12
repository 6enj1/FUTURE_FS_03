"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    title: "Attention to Detail",
    description: "Every cut is crafted with precision and care.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Consistent Results",
    description: "Same quality, every visit. You always leave looking your best.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Great Prices",
    description: "Premium grooming without the premium price tag.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Friendly Service",
    description: "A welcoming atmosphere where you feel right at home.",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Easy WhatsApp Booking",
    description: "Book your appointment in seconds via WhatsApp.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Convenient Location",
    description: "Located on Corlett Drive, Illovo — easy to find, easy to reach.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          title="Why Choose Barber Studio"
          subtitle="What keeps our clients coming back"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-silver/10 bg-charcoal/30 p-6 hover:border-silver/20 hover:bg-charcoal/50 transition-all duration-200"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-barber-red/10">
                <svg
                  className="h-5 w-5 text-barber-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={reason.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-mist">{reason.title}</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
