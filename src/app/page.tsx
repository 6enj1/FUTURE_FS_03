"use client";

import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { About } from "@/components/sections/about";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { MobileCTA } from "@/components/sections/mobile-cta";
import { BackToTop } from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
      <BackToTop />
    </>
  );
}
