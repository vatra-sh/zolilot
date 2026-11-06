import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
}) {
  const base =
    "group inline-flex h-11 items-center gap-2 rounded-md px-5 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solder";
  const styles =
    variant === "primary"
      ? "bg-graphite text-paper hover:bg-ink"
      : "border border-graphite/20 text-graphite hover:border-graphite/50";
  return (
    <a href={href} onClick={onClick} className={`${base} ${styles}`}>
      {children}
      <span aria-hidden className="transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
