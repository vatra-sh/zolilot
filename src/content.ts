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
  certs: ["ISO 9001 (beantragt)", "Swiss Made (überwiegend)", "RoHS-konform (wahrscheinlich)"],
  caption: "Abb. 1: Gründer bei der Arbeit. Gestellt.",
};

export const press = {
  label: "Bekannt aus",
  items: ["Klassenchat", "Pausenhof", "Hinterste Reihe", "WhatsApp-Status", "Lehrerzimmer (Gerücht)"],
};

export const stats = [
  { value: 360, suffix: " °C", label: "Betriebstemperatur", note: "konstant, ausser wenn jemand am Kabel zieht" },
  { value: 0, suffix: "", label: "Kalte Lötstellen", note: "die wir zugeben" },
  { value: 1, suffix: "", label: "Mitarbeiter", note: "davon 100 % Geschäftsleitung" },
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
      text: "Sie löten, Zoltan steht daneben, verschränkt die Arme und nickt anerkennend. Das Nicken ist im Preis inbegriffen.",
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
    { n: "02", title: "Analyse", text: "Zoltan schaut es sich an. Lange. Mit verschränkten Armen und ernstem Blick." },
    { n: "03", title: "Ausführung", text: "360 °C, ruhige Hand, Flussmittel nach Gefühl. Bitte nicht ansprechen." },
    { n: "04", title: "Qualitätskontrolle", text: "Zoltan schaut es sich nochmals an. Dann nickt er. Damit ist es offiziell." },
  ],
};

export const about = {
  eyebrow: "Über uns",
  title: "Ein Gründer. Eine Vision. Ein Lötkolben.",
  name: "Zoltan",
  role: "Gründer, CEO, CTO, CFO und Lehrling",
  quote:
    "Ich habe die Zolilöt AG gegründet, weil ich eine Lücke im Markt gesehen habe. Und einen Lötkolben im Keller.",
  body: [
    "Was als Witz in der Klasse begann, ist heute ein Unternehmen mit klaren Werten: Präzision, Zuverlässigkeit und die feste Überzeugung, dass man fast alles löten kann.",
    "Zoltan führt die Zolilöt AG mit flachen Hierarchien. Sehr flachen. Es gibt genau eine Ebene, und auf der steht er.",
  ],
  facts: [
    { k: "Gründung", v: "2026" },
    { k: "Rechtsform", v: "AG (1 Aktie)" },
    { k: "Mitarbeitende", v: "1" },
    { k: "Lötkolben", v: "1, plus 1 in Reparatur" },
    { k: "Verwaltungsrat", v: "Zoltan" },
    { k: "Revisionsstelle", v: "Zoltans Mutter" },
  ],
};

export const testimonials = {
  eyebrow: "Referenzen",
  title: "Was unsere Kunden sagen.",
  rating: "4.9 von 5 · 3 Bewertungen, eine davon von Zoltan",
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
      quote: "Ich wusste nicht, dass man ein Sandwich löten kann. Zoltan wusste es auch nicht. Er hat es trotzdem gemacht.",
      who: "Anonym",
    },
  ],
};

export const career = {
  eyebrow: "Karriere",
  title: "Werde Teil eines kleinen Teams.",
  lead: "Sehr klein. Du wärst die Hälfte.",
  job: {
    title: "Lötlehrling (m/w/d) 100 %",
    meta: ["Aarau, Keller", "ab sofort", "unbefristet, solange Zoltan Lust hat"],
    offer: [
      "Flache Hierarchien (es gibt nur Zoltan)",
      "Kostenlose Dämpfe, täglich frisch",
      "Firmenwagen (Velo, bring dein eigenes)",
    ],
    need: [
      "Ruhige Hand",
      "Eigener Lötkolben von Vorteil",
      "Bereitschaft, Zoltan recht zu geben",
    ],
  },
};

export const contact = {
  eyebrow: "Kontakt",
  title: "Sprechen wir über Ihre Verbindung.",
  lead: "Offerte, Notfall-Löten oder Bewerbung: Schreiben Sie uns. Wir antworten innerhalb von 1 bis 365 Werktagen.",
  details: [
    { k: "Adresse", v: ["Zolilöt AG", "Kellergeschoss", "5000 Aarau (gefühlt)"] },
    { k: "Telefon", v: ["+41 00 000 00 00", "klingelt nicht"] },
    { k: "Öffnungszeiten", v: ["Mo bis Fr: nach der Schule", "Sa: nach Absprache", "So: niemals"] },
  ],
  topics: ["Offerte anfragen", "Notfall-Löten", "Bewerbung als Lötlehrling", "Sonstiges"],
  consent: "Ich habe verstanden, dass Zoltan sich irgendwann meldet.",
  success: {
    title: "Danke. Zoltan meldet sich.",
    text: "Irgendwann. Ihre Anfrage hat die Ticketnummer ZL-000001. Das war auch die letzte.",
  },
};

export const footer = {
  legal: "Fiktive Firma. Echter Humor. Es werden keine echten Lötarbeiten angeboten.",
  rights: "Alle Rechte vorbehalten, auch die linken.",
  links: ["Impressum", "Datenschutz", "AGB (Allgemeine Glücksbedingungen)"],
  privacy: "Wir speichern keine Daten. Wir vergessen auch sonst vieles.",
};
