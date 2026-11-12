// News posts. Add a post by appending an object; newest date shows first.

export type Block =
  | { type: "p"; text: string }
  | { type: "facts"; items: { k: string; v: string }[] }
  | { type: "link"; href: string; label: string };

export type Post = {
  slug: string;
  date: string; // YYYY-MM-DD
  category: string;
  title: string;
  excerpt: string;
  body: Block[];
};

export const newsPage = {
  eyebrow: "News",
  title: "Neuigkeiten aus der Werkstatt.",
  lead: "Personal, Produkte und alles andere, was bei uns passiert. Lektoriert von Frau Deubelbeiss, veröffentlicht von Dijar.",
};

export const posts: Post[] = [
  {
    slug: "herr-trottmann-sicherheit",
    date: "2026-11-12",
    category: "Personal",
    title: "Herr Trottmann übernimmt die Sicherheit",
    excerpt: "Die Zolilöt AG hat zum ersten Mal einen Sicherheitschef. Seine erste Amtshandlung: ein Sicherheitsdatenblatt für die ganze Firma.",
    body: [
      {
        type: "p",
        text: "Die Zolilöt AG begrüsst Herrn Trottmann als Chief Safety Officer für Gefahrstoffe und Brandschutz. Als Chemielehrer weiss er, was passiert, wenn man Dinge mischt, die man nicht mischen sollte. Bei uns ist das der Normalfall.",
      },
      {
        type: "p",
        text: "Wie Frau Deubelbeiss gehört er zu den angestellten Lehrpersonen: Er hilft, er arbeitet nicht. Das ist vertraglich so geregelt. Den Schlüssel zum Feuerlöscher hat er trotzdem als Einziger.",
      },
      {
        type: "facts",
        items: [
          { k: "Tage ohne Lötunfall", v: "0. Der Rekord liegt bei einem Tag. Dann kam Cedric." },
          { k: "Flux Nº 7", v: "Als Gefahrstoff eingestuft. Niklas hat Einsprache erhoben. Herr Trottmann hat sie verdünnt." },
          { k: "Evakuationsübung", v: "Alle in 40 Sekunden draussen. Philippe nach 4 Minuten, er hing im Türrahmen." },
          { k: "Lötkolben-Ausweis", v: "Damon hat als Einziger Kategorie A. Cedric fährt mit Lernfahrausweis und Begleitperson." },
          { k: "Frauenquote", v: "Von 28 % auf 26 %. Aisha hat nachgerechnet. Marwin verbucht es diesmal nicht als persönlichen Erfolg." },
        ],
      },
      {
        type: "p",
        text: "Erste Amtshandlung: ein Sicherheitsdatenblatt für die gesamte Firma, in 16 Abschnitten, wie es sich gehört. Die Zolilöt AG ist darin als Gemisch eingestuft, Signalwort «Achtung». Frau Deubelbeiss hat es lektoriert. Joël hat es gelesen und weitergelötet.",
      },
      { type: "link", href: "/sicherheit", label: "Zum Sicherheitsdatenblatt" },
    ],
  },
  {
    slug: "frauenquote-28-prozent",
    date: "2026-11-06",
    category: "Personal",
    title: "Frauenquote steigt auf 28 %",
    excerpt: "Mit Violetta, Johanna, Aisha und Engjelina wächst die Zolilöt AG auf achtzehn Mitarbeitende. Die Frauenquote hat sich damit vervierfacht.",
    body: [
      {
        type: "p",
        text: "Die Zolilöt AG begrüsst vier neue Mitarbeiterinnen. Violetta und Johanna bilden ab sofort das Erste-Hilfe-Team für Lötunfälle, Aisha übernimmt die Finanzen und Engjelina startet ihr erstes Lehrjahr im HR. Gemeinsam mit Frau Deubelbeiss arbeiten damit fünf Frauen bei der Zolilöt AG.",
      },
      {
        type: "facts",
        items: [
          { k: "Frauenquote", v: "Von 7 % auf 28 %. Aisha hat nachgerechnet. Diesmal war es nicht knapp." },
          { k: "Erste Hilfe", v: "Violetta und Johanna. Das Unfallbuch hat seit ihrem Start 23 Einträge, 14 davon von Cedric." },
          { k: "Finanzen", v: "Aisha. Sie hat das Firmenkonto, Dijar hat das Passwort. Gespräche laufen." },
          { k: "HR", v: "Engjelina, 1. Lehrjahr. Marwin hat damit erstmals jemanden, für den er zuständig ist und der ihm auch zuhört." },
        ],
      },
      {
        type: "p",
        text: "Marwin aus dem HR verbucht die Steigerung erneut als persönlichen Erfolg. Frau Deubelbeiss hat die Pressemitteilung lektoriert und nur zwei Kommas ergänzt. Intern gilt das als Bestnote.",
      },
    ],
  },
  {
    slug: "frau-deubelbeiss-beratung",
    date: "2026-11-06",
    category: "Personal",
    title: "Frau Deubelbeiss übernimmt Global Affairs, Kommunikation und Sprache",
    excerpt: "Die erste Frau in der Geschichte des Unternehmens übernimmt Global Affairs, Kommunikation und Sprache. Löten liegt bei ihr in der Familie.",
    body: [
      {
        type: "p",
        text: "Die Zolilöt AG freut sich, Frau Deubelbeiss als Head of Global Affairs, Kommunikation & Sprache begrüssen zu dürfen. Sie verantwortet ab sofort die internationalen Beziehungen der Firma (aktuell: keine) und prüft jede Offerte, jede E-Mail und jede Folie von Maurice, bevor sie das Haus verlässt. Offerten kommen bei ihr mit einer Note zurück.",
      },
      {
        type: "p",
        text: "Damit ist Frau Deubelbeiss die erste Frau in der Geschichte der Zolilöt AG. Als Beraterin gehört sie zur Gruppe der angestellten Lehrpersonen: Sie helfen, sie arbeiten nicht. Das ist vertraglich so geregelt.",
      },
      {
        type: "facts",
        items: [
          { k: "Löt-Erbe", v: "Ihre Mutter hat schon gelötet. Damit ist sie die Einzige im Haus mit echter Löttradition in der Familie. Joël hat nachgefragt, ob ihre Mutter auch Kurse gibt." },
          { k: "Frauenquote", v: "Seit ihrem Eintritt von 0 % auf 7 %. Marwin aus dem HR verbucht das als persönlichen Erfolg." },
          { k: "Honorar", v: "Wird in korrekt gesetzten Kommas ausbezahlt." },
        ],
      },
      {
        type: "p",
        text: "Erste Amtshandlung: Der Slogan «Wir machens möglich» wurde dreimal rot angestrichen. Er bleibt trotzdem. Die Bedenken sind protokolliert.",
      },
    ],
  },
  {
    slug: "damon-loetkolben-zaehmer",
    date: "2026-11-06",
    category: "Personal",
    title: "Neu im Team: Damon zähmt ab sofort unsere Lötkolben",
    excerpt: "Mit Damon gewinnt die Zolilöt AG ihren ersten Lötkolben-Zähmer. Seine Vergangenheit als Fahrradmechaniker kommt ihm dabei zugute.",
    body: [
      {
        type: "p",
        text: "Kein Lötkolben ist zu wild für ihn. Damon nähert sich langsam, spricht ruhig und hält ihn nie am heissen Ende. Seit seinem Eintritt ist kein einziger Lötkolben mehr entlaufen.",
      },
      {
        type: "p",
        text: "Als gelernter Fahrradmechaniker EFZ bringt Damon ein neues Wartungskonzept mit: Jeder Kolben wird vor dem Einsatz zentriert, geölt und auf 6 bar gepumpt. In Prozessschritt 3 hat er damit einen festen Platz: Damon zähmt den Lötkolben, danach lötet Joël.",
      },
    ],
  },
  {
    slug: "flux-no-7",
    date: "2026-11-04",
    category: "Produkte",
    title: "Markteinführung: Zolilöt Flux Nº 7",
    excerpt: "Nach sechs gescheiterten Versuchen bringt Chemiker Niklas unser hauseigenes Flussmittel auf den Markt.",
    body: [
      {
        type: "p",
        text: "Das Labor der Zolilöt AG hat geliefert. Zolilöt Flux Nº 7 ist ab sofort im Einsatz, entwickelt von Chemiker EFZ Niklas. Die Rezeptur kennt nur er. Den Geruch kennen alle.",
      },
      {
        type: "facts",
        items: [
          { k: "Zusammensetzung", v: "Kolophonium 62 %, Geheimrezept 31 %, «Niklas weiss es» 7 %" },
          { k: "Geruch", v: "Wald, aber angebrannt" },
          { k: "Gefahrenhinweis", v: "Nicht trinken. Wurde getestet." },
        ],
      },
      {
        type: "p",
        text: "Über Versuch Nº 4 sprechen wir weiterhin nicht.",
      },
    ],
  },
];

export const sortedPosts = () => [...posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

const fmt = new Intl.DateTimeFormat("de-CH", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
export const formatDate = (iso: string) => fmt.format(new Date(`${iso}T00:00:00Z`));
