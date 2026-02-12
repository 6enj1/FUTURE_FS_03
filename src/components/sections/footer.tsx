import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-silver/10 bg-ink py-10 pb-28 sm:pb-10">
      <Container>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-mist">Barber Studio</p>
            <p className="text-sm text-steel">
              1 Corlett Dr, Illovo, Sandton, 2196
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-steel">
            <a
              href="tel:+27659805164"
              className="hover:text-mist transition-colors"
            >
              +27 65 980 5164
            </a>
            <a
              href="https://wa.me/27659805164"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mist transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-silver/10 pt-6 text-center text-xs text-steel">
          &copy; {year} Barber Studio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
