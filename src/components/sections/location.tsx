"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/seo/config";

const orderedDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function Location() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "Africa/Johannesburg",
  });

  return (
    <section id="location" className="py-24">
      <Container>
        <SectionHeading
          title="Location & Hours"
          subtitle="Find us at Melrose Crossing, Birnam"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-mist mb-2">Address</h3>
              <p className="text-silver">
                Melrose Crossing, Delta Rd, Birnam, Johannesburg, 2196
              </p>
              <p className="text-silver">South Africa</p>
              <a
                href="tel:+27712440822"
                className="mt-2 inline-block text-barber-red hover:text-barber-red/80 transition-colors"
              >
                +27 71 244 0822
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-mist mb-3">
                Opening Hours
              </h3>
              <div className="space-y-2">
                {orderedDays.map((day) => {
                  const entry = siteConfig.hours.find((h) => h.day === day);
                  const isToday = day === today;
                  return (
                    <div
                      key={day}
                      className={`flex justify-between rounded-lg px-4 py-2.5 text-sm transition-colors ${
                        isToday
                          ? "bg-barber-red/10 border border-barber-red/20"
                          : "bg-charcoal/30"
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          isToday ? "text-barber-red" : "text-mist"
                        }`}
                      >
                        {day}
                        {isToday && (
                          <span className="ml-2 text-xs opacity-70">Today</span>
                        )}
                      </span>
                      <span className={isToday ? "text-barber-red" : "text-steel"}>
                        {entry?.label || "Closed"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl border border-silver/10 bg-charcoal/30 min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.8!2d28.066!3d-26.146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMelrose+Crossing%2C+Delta+Rd%2C+Birnam%2C+Johannesburg%2C+2196!5e0!3m2!1sen!2sza!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Noel's Barbershop & Lifestyle location on Google Maps"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
