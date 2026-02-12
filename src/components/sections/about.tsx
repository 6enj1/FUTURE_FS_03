"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="py-24 bg-charcoal/40">
      <Container>
        <SectionHeading
          title="About Barber Studio"
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
            Barber Studio was founded by Neshi with a simple goal: deliver
            consistently excellent grooming in a space where every client feels
            valued. Located on Corlett Drive in Illovo, Sandton, the studio has
            built a loyal following through precision cuts, attention to detail,
            and genuine hospitality.
          </p>
          <p>
            Whether you need a quick trim, a full combo, or a relaxing head
            massage, Neshi and the team bring years of experience and a passion
            for the craft to every appointment. Walk in or book on WhatsApp — the
            chair is always ready.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
