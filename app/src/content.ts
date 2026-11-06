// All copy for the site lives here. Add class in-jokes without touching layout.

export const company = {
  name: "Zolilöt AG",
  tagline: "Wir machens möglich.",
  city: "Aarau",
  uid: "CHE-000.000.000",
  founded: 2026,
};

export const nav = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Prozess", href: "/#prozess" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Team", href: "/#team" },
  { label: "News", href: "/news" },
  { label: "Karriere", href: "/#karriere" },
];

export const hero = {
  eyebrow: "Löttechnik · Kabelkonfektion · Reparatur",
  title: ["Wir verbinden,", "was zusammen"],
  titleAccent: "gehört.",
  lead:
    "Die Zolilöt AG ist Ihr Partner für Löttechnik, Kabelkonfektion und alles, was sonst noch irgendwie hält. Schweizer Qualität, von Hand gefertigt. Von Joël, um genau zu sein.",
  cta: { label: "Leistungen ansehen", href: "#leistungen" },
  meta: "Inhabergeführt seit 2026 · Aarau, Schweiz",
};

export const press = {
  label: "Bekannt aus",
  items: ["Klassenchat", "Pausenhof", "Hinterste Reihe", "WhatsApp-Status", "Lehrerzimmer"],
};

export const stats = [
  { value: 360, suffix: " °C", label: "Betriebstemperatur", note: "konstant, ausser wenn jemand am Kabel zieht" },
  { value: 0, suffix: "", label: "Kalte Lötstellen", note: "die wir zugeben" },
  { value: 13, suffix: "", label: "Mitarbeitende", note: "davon 2 Besitzer und 1 CEO" },
  { value: 24, suffix: "/7", label: "Erreichbar", note: "ausser während der Schule" },
];

export const services = {
  eyebrow: "Leistungen",
  title: "Ein Lötkolben. Unbegrenzte Möglichkeiten.",
  lead: "Vom einzelnen Widerstand bis zur kompletten Baugruppe. Wenn es Strom leitet, löten wir es. Wenn nicht, versuchen wir es trotzdem.",
  items: [
    {
      code: "SMD",
      title: "SMD-Löten",
      text: "Bauteile so klein, dass wir sie selbst kaum sehen. Wir löten sie trotzdem, und zwar ziemlich sicher an der richtigen Stelle.",
      spec: "ab Bauform 0402",
    },
    {
      code: "THT",
      title: "THT-Bestückung",
      text: "Durchsteckmontage, wie früher. Weil früher bekanntlich alles besser war, inklusive der Bauteile.",
      spec: "ein- und beidseitig",
    },
    {
      code: "KAB",
      title: "Kabelkonfektion",
      text: "Wir machen aus einem Kabel zwei. Oder aus zwei Kabeln eines. Je nach Auftrag, manchmal auch unabhängig davon.",
      spec: "Längen nach Augenmass",
    },
    {
      code: "REP",
      title: "Reparatur & Nachlöten",
      text: "Kalte Lötstelle? Wir machen sie warm. Mit Gefühl, Flussmittel und einem leicht übertriebenen Selbstvertrauen.",
      spec: "Garantie: 2 Tage",
    },
    {
      code: "CON",
      title: "Löt-Consulting",
      text: "Sie löten, Zoltán steht daneben, verschränkt die Arme und nickt anerkennend. Das Nicken ist im Preis inbegriffen.",
      spec: "CHF 120.00 / h",
    },
    {
      code: "ETC",
      title: "Alles andere",
      text: "Ihr Anliegen steht nicht auf dieser Liste? Kein Problem. Wir machens möglich. Fragen Sie nicht, wie.",
      spec: "auf Anfrage",
    },
  ],
};

export const process = {
  eyebrow: "Prozess",
  title: "Vier Schritte zur perfekten Verbindung.",
  lead: "Unser Prozess ist ISO-nah, durchdacht und wurde in einer Pause erfunden.",
  steps: [
    { n: "01", title: "Anfrage", text: "Sie schildern Ihr Problem. Am liebsten im Klassenchat, gerne auch persönlich in der Pause." },
    { n: "02", title: "Analyse", text: "Deniz plant das Projekt. Zoltán schaut es sich an. Lange. Mit verschränkten Armen." },
    { n: "03", title: "Ausführung", text: "Damon zähmt den Lötkolben. Joël lötet bei 360 °C mit Flux Nº 7 aus Niklas' Labor. Cedric und Philippe schauen zu." },
    { n: "04", title: "Qualitätskontrolle", text: "Levi prüft, Zoltán nickt. Dijar und Julius genehmigen. Damit ist es offiziell." },
  ],
};

export const about = {
  eyebrow: "Über uns",
  title: "Gegründet von einem. Besessen von zwei.",
  story: [
    "Zoltán hatte die Idee, den Namen und den Lötkolben. Dijar hatte alles andere: die Domain, den Server, das WLAN-Passwort und als Einziger Zugriff auf das Aktienregister.",
    "Das Aktienregister ist eine Excel-Datei auf Dijars Laptop. An einem Dienstagnachmittag hat er sie aktualisiert, seither besitzt er 49 %. Julius war zufällig im Raum, sagte «ich auch» und besitzt seither ebenfalls 49 %. Zoltán bekam den Rest.",
    "Heute beschäftigt die Zolilöt AG dreizehn Mitarbeitende, vom Lehrling bis zum Chemiker. Gelötet wird hauptsächlich von Joël.",
  ],
  quote: "Ich bin der CEO. Das steht so im Handelsregister.",
  quoteBy: "Zoltán, CEO, 2 % Aktien",
  capTable: {
    label: "Aktionariat",
    note: "Zuletzt bearbeitet von: Dijar",
    holders: [
      { name: "Dijar", role: "CTO", pct: 49, how: "selbst zugeteilt" },
      { name: "Julius", role: "Verwaltungsrat", pct: 49, how: "war gerade im Raum" },
      { name: "Zoltán", role: "CEO", pct: 2, how: "der Rest" },
    ],
  },
  facts: [
    { k: "Aktienregister", v: "Eine Excel-Datei auf Dijars Laptop. Passwortgeschützt. Das Passwort kennt Dijar." },
    { k: "Generalversammlung", v: "Findet auf Dijars Server statt. Dauer im Schnitt 4 Sekunden. Ergebnis jedes Mal 98 zu 2." },
    { k: "Mitspracherecht CEO", v: "Zoltán darf jederzeit Ideen einbringen. Sie werden anschliessend demokratisch abgelehnt." },
    { k: "Wertschöpfung", v: "Joël besitzt 0 % der Aktien und macht 100 % der Lötstellen." },
  ],
};

export type Person = {
  name: string;
  role: string;
  line: string;
  shares?: number;
  how?: string;
  tag?: string;
  ring?: string;
  ringColor?: string;
  bg: string;
  avatar: Record<string, unknown>;
};

// Avatar traits are pinned per person (short hair, men's clothes) so the generator never picks a random look.
export const team: {
  eyebrow: string;
  title: string;
  lead: string;
  board: Person[];
  tabs: { staff: { label: string; intro: string }; advisors: { label: string; intro: string } };
  advisors: Person[];
  staff: Person[];
} = {
  eyebrow: "Team",
  title: "Die Köpfe hinter der Lötstelle.",
  lead: "Dreizehn Personen, eine externe Beraterin, ein Labor, ein Lötkolben und einer, der ihn zähmt. Jede Rolle ist besetzt, manche schon seit sechs Lehrjahren.",
  board: [
    {
      name: "Dijar",
      role: "Chief Technology Officer",
      shares: 49,
      how: "selbst zugeteilt",
      line: "Macht die gesamte IT: Website, Server, WLAN und das Aktienregister. Hat sich deshalb selbst 49 % zugeteilt. Die Abstimmung darüber lief auf seinem Server.",
      bg: "#f3d6b8",
      avatar: { hair: ["variant44"], body: ["variant18"], gesture: ["okLongArm"], glasses: ["variant02"], glassesProbability: 100, beardProbability: 0 },
    },
    {
      name: "Zoltán",
      role: "Chief Executive Officer",
      shares: 2,
      how: "der Rest",
      line: "Gründer, Namensgeber und Gesicht der Firma. Führt das Unternehmen mit 2 % der Stimmen und 100 % Überzeugung. Hat keinen Zugriff auf die Website.",
      bg: "#dfe3e8",
      avatar: { hair: ["variant05"], body: ["variant20"], gesture: ["point"], glassesProbability: 0, beard: ["variant03"], beardProbability: 100 },
    },
    {
      name: "Julius",
      role: "Mitglied des Verwaltungsrats",
      shares: 49,
      how: "war gerade im Raum",
      line: "War im Raum, als Dijar das Aktienregister bearbeitet hat, und sagte «ich auch». Sitzt seither im Verwaltungsrat und auf 49 % der Firma.",
      bg: "#f3d6b8",
      avatar: { hair: ["variant16"], body: ["variant16"], gesture: ["ok"], glasses: ["variant05"], glassesProbability: 100, beardProbability: 0 },
    },
  ],
  tabs: {
    staff: { label: "Mitarbeitende", intro: "Die Leute, die bei uns arbeiten. Mehr oder weniger." },
    advisors: {
      label: "Externe Beratung",
      intro: "Lehrpersonen, die uns beraten. Sie helfen, sie arbeiten nicht. Das ist vertraglich so geregelt.",
    },
  },
  advisors: [
    {
      name: "Frau Deubelbeiss",
      role: "Beraterin Sprache & Kommunikation",
      ring: "#BITTE ÜBERARBEITEN",
      ringColor: "#d62828",
      tag: "Erste Frau bei der Zolilöt AG",
      line: "Prüft jede Offerte und jede Folie von Maurice. Hat den Slogan «Wir machens möglich» dreimal rot angestrichen. Wir haben ihn trotzdem behalten. Sie hat Bedenken angemeldet.",
      bg: "#efdcd6",
      avatar: { hair: ["variant23"], body: ["variant15"], gesture: ["point"], glassesProbability: 0, beardProbability: 0 },
    },
  ],
  staff: [
    {
      name: "Joël",
      role: "Löter EFZ",
      tag: "Mitarbeiter des Monats",
      line: "Der einzige mit einem Diplom im Löten. Mitarbeiter des Monats, seit 24 Monaten in Folge.",
      bg: "#e4e8dc",
      avatar: { hair: ["variant13"], body: ["variant14"], gestureProbability: 0, glassesProbability: 0, beard: ["variant07"], beardProbability: 100 },
    },
    {
      name: "Damon",
      role: "Lötkolben-Zähmer",
      ring: "#KOLBEN-DOMPTEUR",
      tag: "ehem. Fahrradmechaniker EFZ",
      line: "Kein Lötkolben ist zu wild für ihn. Er nähert sich langsam, spricht ruhig und hält ihn nie am heissen Ende. Als gelernter Fahrradmechaniker wird bei ihm jeder Kolben vor dem Einsatz zentriert, geölt und auf 6 bar gepumpt.",
      bg: "#e6dccb",
      avatar: { hair: ["variant50"], body: ["variant10"], gesture: ["hand"], glassesProbability: 0, beard: ["variant09"], beardProbability: 100 },
    },
    {
      name: "Niklas",
      role: "Chemiker EFZ, Leiter Labor",
      line: "Entwickelt unser hauseigenes Flussmittel Flux Nº 7. Die Rezeptur kennt nur er. Den Geruch kennen alle.",
      bg: "#dde7e4",
      avatar: { hair: ["variant42"], body: ["variant07"], gestureProbability: 0, glasses: ["variant08"], glassesProbability: 100, beardProbability: 0 },
    },
    {
      name: "Deniz",
      role: "Projektleiter",
      line: "Leitet sämtliche Projekte. Welche das sind, ist aktuell noch in Abklärung.",
      bg: "#ebe4d6",
      avatar: { hair: ["variant21"], body: ["variant05"], gesture: ["pointLongArm"], glasses: ["variant03"], glassesProbability: 100, beardProbability: 0 },
    },
    {
      name: "Levi",
      role: "Berufsbildner",
      line: "Bildet Cedric und Philippe aus. Bei Cedric läuft es. Bei Philippe läuft es seit sechs Jahren.",
      bg: "#e6e1ea",
      avatar: { hair: ["variant35"], body: ["variant09"], gesture: ["hand"], glassesProbability: 0, beard: ["variant02"], beardProbability: 100 },
    },
    {
      name: "Cedric",
      role: "Lehrling, 2. Lehrjahr",
      ring: "#LERNT NOCH",
      line: "Hat letzte Woche zum ersten Mal selbst gelötet. Wir sprechen nicht darüber.",
      bg: "#f1ddd5",
      avatar: { hair: ["hat"], body: ["variant01"], gestureProbability: 0, glassesProbability: 0, beardProbability: 0 },
    },
    {
      name: "Philippe",
      role: "Lehrling, 6. Lehrjahr",
      ring: "#LERNT IMMER NOCH",
      tag: "Dienstältester Lehrling",
      line: "Die Lehre dauert vier Jahre. Philippe ist im sechsten. Er sagt, er wolle einfach ganz sicher sein. Der einzige Lehrling mit Bart.",
      bg: "#e8e4d8",
      avatar: { hair: ["variant60"], body: ["variant11"], gestureProbability: 0, glassesProbability: 0, beard: ["variant01"], beardProbability: 100 },
    },
    {
      name: "Maurice",
      role: "Marketing",
      ring: "#THOUGHT LEADER",
      line: "Nennt sich auf LinkedIn «Visionär, Storyteller, Disruptor». Hat den Slogan «Wir machens möglich» auf 14 Folien präsentiert. Die Folien waren alle orange.",
      bg: "#f3e3c7",
      avatar: { hair: ["variant19"], body: ["variant23"], gesture: ["wavePointLongArms"], glassesProbability: 0, beardProbability: 0 },
    },
    {
      name: "Linus",
      role: "Aussendienst & Verkauf",
      ring: "#OFFEN FÜR DEALS",
      line: "Verkauft alles. Auch Dinge, die wir gar nicht anbieten. Besonders die.",
      bg: "#dbe4e6",
      avatar: { hair: ["variant52"], body: ["variant04"], gesture: ["handPhone"], glasses: ["variant07"], glassesProbability: 100, beardProbability: 0 },
    },
    {
      name: "Marwin",
      role: "Human Resources",
      ring: "#WIR STELLEN EIN",
      line: "Zuständig für alle Mitarbeitenden. Ausser für die zwei mit 49 %. Für die ist niemand zuständig.",
      bg: "#e9e2dc",
      avatar: { hair: ["variant01"], body: ["variant13"], gesture: ["waveLongArm"], glassesProbability: 0, beard: ["variant05"], beardProbability: 100 },
    },
  ],
};

export const flux = {
  eyebrow: "Eigenentwicklung aus dem Labor",
  name: "Zolilöt Flux Nº 7",
  lead: "Unser hauseigenes Flussmittel, entwickelt von Chemiker Niklas. Sechs Versuche sind gescheitert. Über Versuch Nº 4 sprechen wir nicht.",
  sheet: [
    { k: "Zusammensetzung", v: "Kolophonium 62 %, Geheimrezept 31 %, «Niklas weiss es» 7 %" },
    { k: "Geruch", v: "Wald, aber angebrannt" },
    { k: "Siedepunkt", v: "Ja" },
    { k: "Haltbarkeit", v: "Länger als Philippes Lehre" },
    { k: "Gefahrenhinweis", v: "Nicht trinken. Wurde getestet." },
  ],
};

export const testimonials = {
  eyebrow: "Referenzen",
  title: "Was unsere Kunden sagen.",
  rating: "4.9 von 5 · 3 Bewertungen, eine davon von Maurice aus dem Marketing",
  items: [
    {
      quote: "Ich habe ihm ein kaputtes Ladekabel gegeben. Jetzt habe ich zwei kaputte Ladekabel. Fünf Sterne.",
      who: "Kunde aus der hintersten Reihe",
    },
    {
      quote: "Professionell, pünktlich, und er riecht ganz leicht nach Kolophonium. Was will man mehr.",
      who: "M., Sitznachbar",
    },
    {
      quote: "Ich wusste nicht, dass man ein Sandwich löten kann. Joël wusste es auch nicht. Er hat es trotzdem gemacht.",
      who: "Anonym",
    },
  ],
};

export const career = {
  eyebrow: "Karriere",
  title: "Werde Teil des Teams.",
  lead: "Dreizehn Leute, zwei Besitzer, ein Lötkolben. Für Nummer vierzehn ist noch Platz.",
  job: {
    title: "Lötlehrling (m/w/d) 100 %",
    meta: ["Aarau, Keller", "ab sofort", "unbefristet"],
    offer: [
      "Flache Hierarchien (zwei Personen ganz oben, der Rest ist flach)",
      "Kostenlose Dämpfe, täglich frisch",
      "Firmenwagen (Velo, bring dein eigenes)",
    ],
    need: [
      "Ruhige Hand",
      "Eigener Lötkolben von Vorteil",
      "Bereitschaft, Dijar und Julius recht zu geben",
    ],
  },
};

export const contact = {
  eyebrow: "Kontakt",
  title: "Sprechen wir über Ihre Verbindung.",
  lead: "Offerte, Notfall-Löten oder Bewerbung: Schreiben Sie uns. Wir antworten innerhalb von 1 bis 365 Werktagen.",
  details: [
    { k: "Adresse", v: ["Zolilöt AG", "Kellergeschoss", "5000 Aarau"] },
    { k: "Telefon", v: ["+41 00 000 00 00", "klingelt nicht"] },
    { k: "Öffnungszeiten", v: ["Mo bis Fr: nach der Schule", "Sa: nach Absprache", "So: niemals"] },
  ],
  topics: ["Offerte anfragen", "Notfall-Löten", "Bewerbung als Lötlehrling", "Sonstiges"],
  consent: "Ich habe verstanden, dass Zoltán sich irgendwann meldet.",
  success: {
    title: "Danke. Zoltán meldet sich.",
    text: "Irgendwann. Ihre Anfrage hat die Ticketnummer ZL-000001. Das war auch die letzte.",
  },
};

export const certs = {
  label: "Zertifizierungen",
  items: [
    { src: "/certs/iso-9001.svg", alt: "ISO 9001 Qualitätsmanagement zertifiziert" },
    { src: "/certs/swiss-made.svg", alt: "Swiss Made" },
    { src: "/certs/rohs.svg", alt: "RoHS konform" },
    { src: "/certs/loetqualitaet.svg", alt: "Lötqualität geprüft, Klasse 3" },
  ],
};

export const footer = {
  legal: "Alle Personen, Inhalte und Zertifikate auf dieser Website sind fiktiv.",
  rights: "Alle Rechte vorbehalten, auch die linken.",
  links: ["Impressum", "Datenschutz", "AGB (Allgemeine Glücksbedingungen)"],
  privacy: "Wir speichern keine Daten. Wir vergessen auch sonst vieles.",
  it: "Website, Server und Aktienregister betrieben von Dijar (CTO, 49 %).",
  proofread: "Lektorat: Frau Deubelbeiss. Alle verbleibenden Fehler gehören Dijar.",
};
