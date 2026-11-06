import type { ReactNode } from "react";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={`size-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="square" />
    </svg>
  );
}

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solder";

/** Split button: label cell + arrow cell that fills with solder orange on hover. */
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
  if (variant === "ghost") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`group inline-flex h-12 items-center gap-2.5 px-1 text-[15px] font-medium text-graphite ${focus}`}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 h-px w-full bg-graphite/25" />
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-solder transition-transform duration-500 ease-out-soft group-hover:scale-x-100" />
        </span>
        <Arrow className="transition-transform duration-500 ease-out-soft group-hover:translate-x-1" />
      </a>
    );
  }
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex h-12 items-stretch overflow-hidden rounded-[3px] bg-graphite text-[15px] font-medium text-paper shadow-[0_1px_0_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)] ${focus}`}
    >
      <span className="flex items-center px-5">{children}</span>
      <span className="relative grid w-12 place-items-center overflow-hidden border-l border-white/10">
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-solder transition-transform duration-500 ease-out-soft group-hover:scale-y-100" />
        <Arrow className="relative transition-transform duration-500 ease-out-soft group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

export function SubmitButton({ children, disabled }: { children: ReactNode; disabled?: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`group inline-flex h-12 items-stretch overflow-hidden rounded-[3px] bg-graphite text-[15px] font-medium text-paper shadow-[0_1px_0_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)] disabled:opacity-85 ${focus}`}
    >
      <span className="flex items-center gap-2 px-5">{children}</span>
      <span className="relative grid w-12 place-items-center overflow-hidden border-l border-white/10">
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-solder transition-transform duration-500 ease-out-soft group-hover:scale-y-100 group-disabled:scale-y-100" />
        <Arrow className="relative" />
      </span>
    </button>
  );
}
