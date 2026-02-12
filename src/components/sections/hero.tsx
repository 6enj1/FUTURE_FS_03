"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/seo/config";

const WHATSAPP_URL =
  "https://wa.me/27659805164?text=Hi%20Barber%20Studio%2C%20I%27d%20like%20to%20book%20an%20appointment.";

function getTodayHours(): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[new Date().getDay()];
  const entry = siteConfig.hours.find((h) => h.day === dayName);
  return entry ? entry.label : "Closed";
}

export function Hero() {
  return (
    <section className="hero-bg relative h-screen min-h-[600px] max-h-[1100px] overflow-hidden">
      {/* Video container — masked with a feathered radial gradient so edges dissolve */}
      <div className="hero-video-mask absolute inset-0">
        {/* Static fallback for reduced-motion */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/storefront.webp)" }}
          aria-hidden="true"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/storefront.webp"
          className="hero-video absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/images/7697544-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="hero-vignette absolute inset-0 z-[1]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-6 sm:px-8 lg:px-10">
        <div className="mt-[14vh] sm:mt-[16vh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-4 text-sm font-medium tracking-widest text-silver uppercase sm:text-base">
              Welcome to Barber Studio.
            </p>

            <h1 className="hero-headline font-bold leading-[0.9] tracking-tight">
              <span className="block text-white/70">Expert</span>
              <span className="block text-white">Grooming.</span>
              <span className="block text-white/70">Distinct</span>
              <span className="block text-white">Style.</span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mb-8 sm:mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <InfoBlock
              icon={<MapPinIcon />}
              label="Address"
              value="1 Corlett Dr, Illovo, Sandton"
            />
            <InfoBlock
              icon={<ClockIcon />}
              label="Today"
              value={getTodayHours()}
            />
            <InfoBlock
              icon={<PhoneIcon />}
              label="Phone"
              value="+27 65 980 5164"
            />
          </div>

          <div className="hidden sm:flex items-center gap-5">
            <span className="flex items-center gap-2 text-base text-silver">
              <span className="inline-block h-2 w-2 rounded-full bg-barber-red animate-pulse" />
              Booking Open
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-barber-red px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-barber-red/90"
            >
              Book With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 text-silver/70">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-silver/60">
          {label}
        </p>
        <p className="text-base text-mist">{value}</p>
      </div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
