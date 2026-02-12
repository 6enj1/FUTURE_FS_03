export const siteConfig = {
  name: "Barber Studio",
  tagline: "Premium Grooming in Illovo, Sandton",
  description:
    "Precision cuts, shaves, grooming and facial services in Illovo, Sandton. Book easily on WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://barberstudio.co.za",
  phone: "+27 65 980 5164",
  whatsapp: "27659805164",
  address: {
    street: "1 Corlett Dr",
    area: "Illovo",
    city: "Sandton",
    region: "Gauteng",
    postalCode: "2196",
    country: "ZA",
  },
  rating: {
    value: 5.0,
    count: 11,
  },
  hours: [
    { day: "Monday", open: "09:00", close: "19:00", label: "9am–7pm" },
    { day: "Tuesday", open: "09:00", close: "19:00", label: "9am–7pm" },
    { day: "Wednesday", open: "08:00", close: "19:00", label: "8am–7pm" },
    { day: "Thursday", open: "08:00", close: "19:00", label: "8am–7pm" },
    { day: "Friday", open: "08:00", close: "19:00", label: "8am–7pm" },
    { day: "Saturday", open: "09:00", close: "18:00", label: "9am–6pm" },
    { day: "Sunday", open: "09:00", close: "18:00", label: "9am–6pm" },
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
      latitude: -26.1325,
      longitude: 28.0575,
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
    priceRange: "R50–R400",
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
