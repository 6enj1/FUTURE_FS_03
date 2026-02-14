export const siteConfig = {
  name: "Noel's Barbershop & Lifestyle",
  tagline: "Hair, Grooming & Lifestyle in Birnam, Johannesburg",
  description:
    "Hair dressing, massage, pedicure and manicure services in Birnam, Johannesburg. Book easily on WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://noelsbarbershop.co.za",
  phone: "+27 71 244 0822",
  whatsapp: "27712440822",
  address: {
    street: "Melrose Crossing, Delta Rd",
    area: "Birnam",
    city: "Johannesburg",
    region: "Gauteng",
    postalCode: "2196",
    country: "ZA",
  },
  rating: {
    value: 3.7,
    count: 3,
  },
  hours: [
    { day: "Monday", open: "08:00", close: "19:00", label: "8am–7pm" },
    { day: "Tuesday", open: "08:00", close: "19:00", label: "8am–7pm" },
    { day: "Wednesday", open: "08:00", close: "18:30", label: "8am–6:30pm" },
    { day: "Thursday", open: "08:00", close: "19:30", label: "8am–7:30pm" },
    { day: "Friday", open: "08:00", close: "20:00", label: "8am–8pm" },
    { day: "Saturday", open: "08:00", close: "20:30", label: "8am–8:30pm" },
    { day: "Sunday", open: "08:00", close: "19:00", label: "8am–7pm" },
  ],
} as const;

export function getJsonLd() {
  const { address, hours, rating } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/storefront.webp`,
    telephone: siteConfig.phone,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.1465,
      longitude: 28.0665,
    },
    openingHoursSpecification: hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: rating.count,
      bestRating: 5,
    },
    priceRange: "R50–R500",
  };
}

export function isOpenNow(): boolean {
  const now = new Date();
  const saTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Africa/Johannesburg" })
  );
  const dayIndex = saTime.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[dayIndex];
  const entry = siteConfig.hours.find((h) => h.day === dayName);
  if (!entry) return false;

  const currentMinutes = saTime.getHours() * 60 + saTime.getMinutes();
  const [openH, openM] = entry.open.split(":").map(Number);
  const [closeH, closeM] = entry.close.split(":").map(Number);

  return (
    currentMinutes >= openH * 60 + openM &&
    currentMinutes < closeH * 60 + closeM
  );
}
