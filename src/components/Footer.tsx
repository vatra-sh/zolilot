import Image from "next/image";
import { company, footer, nav } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-7 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src="/logo.png" alt="Zolilöt AG" width={1321} height={399} className="h-10 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel">
              Löttechnik, Kabelkonfektion und Reparatur. {company.tagline}
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-steel">Unternehmen</p>
            <ul className="mt-4 space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-graphite/80 transition-colors duration-300 hover:text-graphite">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-steel">Rechtliches</p>
            <ul className="mt-4 space-y-2">
              {footer.links.map((l) => (
                <li key={l} className="text-sm text-graphite/80">
                  {l}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-steel">{footer.privacy}</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-steel md:flex-row md:justify-between">
          <p>
            © {company.founded} {company.name} · UID {company.uid} · {footer.rights}
          </p>
          <p>{footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
