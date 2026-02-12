"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const serviceOptions = [
  "Haircut",
  "Shave",
  "Nose Wax",
  "Ear Wax",
  "Eyebrows Threading",
  "Full Face",
  "Full Facial",
  "Head Massage",
  "Full Combo",
];

const dayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const timeOptions = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

const inputClasses =
  "w-full rounded-lg border border-silver/15 bg-ink/60 px-4 py-3 text-sm text-mist placeholder:text-steel focus:border-barber-red/50 focus:outline-none focus:ring-1 focus:ring-barber-red/50 transition-colors";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal/40">
      <Container>
        <SectionHeading
          title="Book & Contact"
          subtitle="Book via WhatsApp or send us a message"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <WhatsAppBooking />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function WhatsAppBooking() {
  const [service, setService] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");

  function buildWhatsAppUrl() {
    const parts = ["Hi Barber Studio"];
    if (service) parts.push(`I'd like to book a ${service}`);
    if (day && time) parts.push(`on ${day} at ${time}`);
    else if (day) parts.push(`on ${day}`);
    if (name) parts.push(`My name is ${name}`);

    const text = parts.join(", ") + ".";
    return `https://wa.me/27659805164?text=${encodeURIComponent(text)}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-silver/10 bg-ink/60 p-6 sm:p-8"
    >
      <h3 className="text-lg font-semibold text-mist mb-1">
        Quick WhatsApp Booking
      </h3>
      <p className="text-sm text-steel mb-6">
        Select your preferences and we&apos;ll open WhatsApp with a prefilled message.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="wa-name" className="block text-sm font-medium text-silver mb-1.5">
            Your Name
          </label>
          <input
            id="wa-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="wa-service" className="block text-sm font-medium text-silver mb-1.5">
            Service
          </label>
          <select
            id="wa-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClasses}
          >
            <option value="">Choose a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="wa-day" className="block text-sm font-medium text-silver mb-1.5">
              Preferred Day
            </label>
            <select
              id="wa-day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className={inputClasses}
            >
              <option value="">Day</option>
              {dayOptions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="wa-time" className="block text-sm font-medium text-silver mb-1.5">
              Preferred Time
            </label>
            <select
              id="wa-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={inputClasses}
            >
              <option value="">Time</option>
              {timeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#22bf5b] transition-colors"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Send on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-xl border border-silver/10 bg-ink/60 p-6 sm:p-8"
    >
      <h3 className="text-lg font-semibold text-mist mb-1">Send a Message</h3>
      <p className="text-sm text-steel mb-6">
        We&apos;ll get back to you as soon as possible.
      </p>

      {status === "success" ? (
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-6 text-center">
          <p className="text-green-400 font-semibold">Message sent!</p>
          <p className="mt-1 text-sm text-green-400/70">
            We&apos;ll be in touch shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm text-silver hover:text-mist underline transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="cf-name" className="block text-sm font-medium text-silver mb-1.5">
              Name <span className="text-barber-red">*</span>
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="cf-phone" className="block text-sm font-medium text-silver mb-1.5">
              Phone <span className="text-barber-red">*</span>
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              required
              placeholder="+27 ..."
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="cf-email" className="block text-sm font-medium text-silver mb-1.5">
              Email <span className="text-steel">(optional)</span>
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="cf-service" className="block text-sm font-medium text-silver mb-1.5">
              Service
            </label>
            <select id="cf-service" name="service" className={inputClasses}>
              <option value="">Choose a service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="cf-message" className="block text-sm font-medium text-silver mb-1.5">
              Message <span className="text-barber-red">*</span>
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              rows={4}
              placeholder="How can we help?"
              className={`${inputClasses} resize-none`}
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-barber-red">{errorMsg}</p>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={status === "loading"}
            className="w-full"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
