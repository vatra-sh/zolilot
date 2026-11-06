// All copy for the site lives here. Add class in-jokes without touching layout.

export const company = {
  name: "Zolilöt AG",
  tagline: "Wir machens möglich.",
  city: "Aarau",
  uid: "CHE-000.000.000",
  founded: 2026,
};

export const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Prozess", href: "#prozess" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Team", href: "#team" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Karriere", href: "#karriere" },
];

export const hero = {
  eyebrow: "Löttechnik · Kabelkonfektion · Reparatur",
  title: ["Wir verbinden,", "was zusammen"],
  titleAccent: "gehört.",
  lead:
    "Die Zolilöt AG ist Ihr Partner für Löttechnik, Kabelkonfektion und alles, was sonst noch irgendwie hält. Schweizer Qualität, von Hand gefertigt. Von einer Hand, um genau zu sein.",
  primary: { label: "Offerte anfragen", href: "#kontakt" },
  secondary: { label: "Leistungen ansehen", href: "#leistungen" },
  meta: "Inhabergeführt seit 2026 · Aarau, Schweiz",
};

export const press = {
  label: "Bekannt aus",
  items: ["Klassenchat", "Pausenhof", "Hinterste Reihe", "WhatsApp-Status", "Lehrerzimmer"],
};

export const stats = [
  { value: 360, suffix: " °C", label: "Betriebstemperatur", note: "konstant, ausser wenn jemand am Kabel zieht" },
  { value: 0, suffix: "", label: "Kalte Lötstellen", note: "die wir zugeben" },
  { value: 10, suffix: "", label: "Mitarbeitende", note: "davon 2 Besitzer und 1 CEO" },
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
    { n: "03", title: "Ausführung", text: "Joël lötet bei 360 °C. Cedric schaut zu und macht Notizen. Bitte nicht ansprechen." },
    { n: "04", title: "Qualitätskontrolle", text: "Levi prüft, Zoltán nickt. Dijar und Julius genehmigen. Damit ist es offiziell." },
  ],
};

export const about = {
  eyebrow: "Über uns",
  title: "Gegründet von einem. Besessen von zwei.",
  story: [
    "Zoltán hatte die Idee, den Namen und den Lötkolben. Dijar und Julius hatten das Kapital. Seit der ersten Generalversammlung ist die Rollenverteilung klar: Zoltán führt die Firma, Dijar und Julius besitzen sie.",
    "Heute beschäftigt die Zolilöt AG zehn Mitarbeitende, vom Lehrling bis zum Verwaltungsrat. Gelötet wird hauptsächlich von Joël.",
  ],
  quote: "Ich bin der CEO. Das steht so im Handelsregister.",
  quoteBy: "Zoltán, CEO, 2 % Aktien",
  capTable: {
    label: "Aktionariat",
    holders: [
      { name: "Dijar", role: "CTO", pct: 49 },
      { name: "Julius", role: "Verwaltungsrat", pct: 49 },
      { name: "Zoltán", role: "CEO", pct: 2 },
    ],
  },
  facts: [
    { k: "Generalversammlung", v: "Dauer im Schnitt 4 Sekunden. Ergebnis jedes Mal 98 zu 2." },
    { k: "Mitspracherecht CEO", v: "Zoltán darf jederzeit Ideen einbringen. Sie werden anschliessend demokratisch abgelehnt." },
    { k: "Wertschöpfung", v: "Joël besitzt 0 % der Aktien und macht 100 % der Lötstellen." },
  ],
};

export type Person = {
  name: string;
  role: string;
  line: string;
  shares?: number;
  tag?: string;
  ring?: string;
  bg: string;
  avatar: Record<string, unknown>;
};

export const team: { eyebrow: string; title: string; lead: string; board: Person[]; staff: Person[] } = {
  eyebrow: "Team",
  title: "Die Köpfe hinter der Lötstelle.",
  lead: "Zehn Personen, sieben Abteilungen, ein Lötkolben. Jede Rolle ist besetzt, manche sogar doppelt.",
  board: [
    {
      name: "Dijar",
      role: "Chief Technology Officer",
      shares: 49,
      line: "Verantwortlich für Technik, Strategie und die Mehrheit. Hat den Lötkolben noch nie angefasst. Muss er auch nicht.",
      bg: "#f3d6b8",
      avatar: { gesture: ["okLongArm"], glasses: ["variant02"], glassesProbability: 100 },
    },
    {
      name: "Zoltán",
      role: "Chief Executive Officer",
      shares: 2,
      line: "Gründer, Namensgeber und Gesicht der Firma. Führt das Unternehmen mit 2 % der Stimmen und 100 % Überzeugung.",
      bg: "#dfe3e8",
      avatar: { gesture: ["point"], glassesProbability: 0 },
    },
    {
      name: "Julius",
      role: "Mitglied des Verwaltungsrats",
      shares: 49,
      line: "Sitzt im Verwaltungsrat. Und auf 49 % der Firma. Unterschreibt alles, was Dijar auch unterschreibt.",
      bg: "#f3d6b8",
      avatar: { gesture: ["ok"], glasses: ["variant05"], glassesProbability: 100 },
    },
  ],
  staff: [
    {
      name: "Joël",
      role: "Löter EFZ",
      tag: "Mitarbeiter des Monats",
      line: "Der einzige mit einem Diplom im Löten. Mitarbeiter des Monats, seit 24 Monaten in Folge.",
      bg: "#e4e8dc",
      avatar: { gestureProbability: 0, glassesProbability: 0 },
    },
    {
      name: "Deniz",
      role: "Projektleiter",
      line: "Leitet sämtliche Projekte. Welche das sind, ist aktuell noch in Abklärung.",
      bg: "#ebe4d6",
      avatar: { gesture: ["pointLongArm"] },
    },
    {
      name: "Levi",
      role: "Berufsbildner",
      line: "Bildet Cedric aus. Seit zwei Jahren. Wir bitten um Geduld.",
      bg: "#e6e1ea",
      avatar: { gesture: ["hand"], glassesProbability: 0 },
    },
    {
      name: "Cedric",
      role: "Lehrling, 2. Lehrjahr",
      ring: "#LERNT NOCH",
      line: "Hat letzte Woche zum ersten Mal selbst gelötet. Wir sprechen nicht darüber.",
      bg: "#f1ddd5",
      avatar: { gestureProbability: 0, glassesProbability: 0 },
    },
    {
      name: "Maurice",
      role: "Marketing",
      line: "Hat den Slogan «Wir machens möglich» auf 14 Folien präsentiert. Die Folien waren alle orange.",
      bg: "#f3e3c7",
      avatar: { gesture: ["wavePointLongArms"], glassesProbability: 0 },
    },
    {
      name: "Linus",
      role: "Aussendienst & Verkauf",
      ring: "#OFFEN FÜR DEALS",
      line: "Verkauft alles. Auch Dinge, die wir gar nicht anbieten. Besonders die.",
      bg: "#dbe4e6",
      avatar: { gesture: ["handPhone"], glasses: ["variant07"], glassesProbability: 100 },
    },
    {
      name: "Marwin",
      role: "Human Resources",
      ring: "#WIR STELLEN EIN",
      line: "Zuständig für alle Mitarbeitenden. Ausser für die zwei mit 49 %. Für die ist niemand zuständig.",
      bg: "#e9e2dc",
      avatar: { gesture: ["waveLongArm"], glassesProbability: 0 },
    },
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
  lead: "Zehn Leute, zwei Besitzer, ein Lötkolben. Für Nummer elf ist noch Platz.",
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
};
