"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="py-24 bg-charcoal/40">
      <Container>
        <SectionHeading
          title="About Noel's Barbershop & Lifestyle"
          subtitle="More than just a haircut"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl space-y-5 text-center text-silver leading-relaxed"
        >
          <p>
            Noel&apos;s Barbershop &amp; Lifestyle is your one-stop destination for
            hair dressing, massage, pedicure and manicure services. Located at
            Melrose Crossing on Delta Road in Birnam, Johannesburg, the shop
            delivers quality grooming and lifestyle services in a welcoming
            environment.
          </p>
          <p>
            Whether you need a fresh cut, a relaxing massage, or a full pedicure
            and manicure, Noel and the team are ready to take care of you. Walk
            in or book on WhatsApp — we look forward to seeing you.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
