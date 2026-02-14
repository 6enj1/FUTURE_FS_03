import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-silver/10 bg-ink py-10 pb-28 sm:pb-10">
      <Container>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-mist">Noel&apos;s Barbershop &amp; Lifestyle</p>
            <p className="text-sm text-steel">
              Melrose Crossing, Delta Rd, Birnam, Johannesburg, 2196
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-steel">
            <a
              href="tel:+27712440822"
              className="hover:text-mist transition-colors"
            >
              +27 71 244 0822
            </a>
            <a
              href="https://wa.me/27712440822"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mist transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-silver/10 pt-6 text-center text-xs text-steel">
          &copy; {year} Noel&apos;s Barbershop &amp; Lifestyle. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
