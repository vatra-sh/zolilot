// News posts. Add a post by appending an object; newest date shows first.

export type Block =
  | { type: "p"; text: string }
  | { type: "facts"; items: { k: string; v: string }[] };

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
    slug: "frau-deubelbeiss-externe-beratung",
    date: "2026-11-06",
    category: "Personal",
    title: "Frau Deubelbeiss verstärkt die Zolilöt AG als externe Beraterin",
    excerpt: "Die erste Frau in der Geschichte des Unternehmens übernimmt Sprache und Kommunikation. Löten liegt bei ihr in der Familie.",
    body: [
      {
        type: "p",
        text: "Die Zolilöt AG freut sich, Frau Deubelbeiss als externe Beraterin für Sprache und Kommunikation begrüssen zu dürfen. Sie prüft ab sofort jede Offerte, jede E-Mail und jede Folie von Maurice, bevor sie das Haus verlässt. Offerten kommen bei ihr mit einer Note zurück.",
      },
      {
        type: "p",
        text: "Damit ist Frau Deubelbeiss die erste Frau in der Geschichte der Zolilöt AG. Als Beraterin gehört sie zur Gruppe der Lehrpersonen, die uns unterstützen: Sie helfen, sie arbeiten nicht. Das ist vertraglich so geregelt.",
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
