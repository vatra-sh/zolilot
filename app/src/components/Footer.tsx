import Image from "next/image";
import { certs, company, footer, nav } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-7 py-14 md:px-8 md:py-16">
        <div className="mb-14 flex flex-col gap-6 border-b border-line pb-12 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">{certs.label}</p>
          <ul className="grid grid-cols-4 items-center gap-5 sm:gap-10">
            {certs.items.map((c) => (
              <li key={c.src}>
                {/* eslint-disable-next-line @next/next/no-img-element -- small static SVG seals */}
                <img src={c.src} alt={c.alt} width={200} height={200} loading="lazy" className="size-16 sm:size-20 md:size-24" />
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src="/logo.png" alt="Zolilöt AG" width={1321} height={399} className="h-10 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel">
              Löttechnik, Kabelkonfektion und Reparatur. {company.tagline}
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="font-medium text-[11px] uppercase tracking-[0.14em] text-steel">Unternehmen</p>
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
            <p className="font-medium text-[11px] uppercase tracking-[0.14em] text-steel">Rechtliches</p>
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
          <div className="space-y-1 md:text-right">
            <p>{footer.it}</p>
            <p>{footer.proofread}</p>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2 text-xs text-steel md:flex-row-reverse md:justify-between">
          <p>{footer.legal}</p>
          <a
            href={footer.repo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-graphite/80 underline decoration-line decoration-1 underline-offset-4 transition-colors duration-300 hover:text-graphite hover:decoration-solder"
          >
            {footer.repo.label}
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
