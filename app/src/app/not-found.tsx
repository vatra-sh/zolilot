import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-7 pb-32 pt-20 md:px-8 md:pt-28">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-solder-ink">Fehler 404</p>
      <h1 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-graphite md:text-6xl">
        Diese Seite gibt es nicht.
      </h1>
      <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-steel md:text-lg">
        Vermutlich hat Philippe sie verlegt. Er sucht seit dem dritten Lehrjahr.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-[3px] bg-graphite px-5 text-[15px] font-medium text-paper transition-colors duration-300 hover:bg-ink"
      >
        Zur Startseite
      </Link>
    </main>
  );
}
