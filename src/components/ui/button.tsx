import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-barber-red text-white hover:bg-barber-red/90 focus-visible:ring-barber-red",
  secondary:
    "bg-barber-blue text-white hover:bg-soft-blue focus-visible:ring-barber-blue",
  outline:
    "border border-silver/30 text-mist hover:bg-charcoal focus-visible:ring-silver",
  ghost: "text-silver hover:text-mist hover:bg-charcoal focus-visible:ring-silver",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-50 disabled:pointer-events-none";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
