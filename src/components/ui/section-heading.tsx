"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 id={id} className="text-3xl font-bold tracking-tight text-mist sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-steel max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="barber-stripe mx-auto mt-6 h-1 w-16 rounded-full opacity-60" />
    </motion.div>
  );
}
