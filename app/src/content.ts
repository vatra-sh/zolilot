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
  { value: 19, suffix: "", label: "Mitarbeitende", note: "davon 2 Besitzer und 1 CEO" },
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
    "Heute beschäftigt die Zolilöt AG neunzehn Mitarbeitende, vom Lehrling über den Chemiker bis zu zwei Lehrpersonen. Gelötet wird hauptsächlich von Joël.",
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
  lead: "Neunzehn Personen, ein Labor, ein Erste-Hilfe-Team, ein Sicherheitschef, ein Lötkolben und einer, der ihn zähmt. Jede Rolle ist besetzt, manche schon seit sechs Lehrjahren.",
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
      label: "Beratende",
      intro: "Bei uns fest angestellt, als Beraterinnen und Berater. Sie helfen, sie arbeiten nicht. Das ist vertraglich so geregelt.",
    },
  },
  advisors: [
    {
      name: "Frau Deubelbeiss",
      role: "Head of Global Affairs, Kommunikation & Sprache",
      ring: "#BITTE ÜBERARBEITEN",
      ringColor: "#d62828",
      tag: "Erste Frau bei der Zolilöt AG",
      line: "Prüft jede Offerte und jede Folie von Maurice. Hat den Slogan «Wir machens möglich» dreimal rot angestrichen. Wir haben ihn trotzdem behalten. Sie hat Bedenken angemeldet.",
      bg: "#efdcd6",
      avatar: { hair: ["variant23"], body: ["variant15"], gesture: ["point"], glassesProbability: 0, beardProbability: 0 },
    },
    {
      name: "Herr Trottmann",
      role: "Chief Safety Officer, Gefahrstoffe & Brandschutz",
      ring: "#SCHUTZBRILLE AUF",
      ringColor: "#c2410c",
      tag: "Einziger mit Schlüssel zum Feuerlöscher",
      line: "Der Diktator der Löterei. Hat jede Lötstelle und alle Ideen von Zoltán mit einem Gefahrensymbol versehen. Trägt die Schutzbrille auch in der Kaffeepause. Philippe und Cedric verheimlichen ihre Fehler vor ihm. Bisher sind es 14.",
      bg: "#f4e3c4",
      avatar: { hair: ["variant07"], body: ["variant05"], gesture: ["point"], glasses: ["variant03"], glassesProbability: 100, beardProbability: 0 },
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
      line: "*Visionär. Wissenschaftler. Unternehmer.* Zumindest in meiner eigenen Vorstellung. Ich löse Probleme, die vorher niemand hatte, mit Lösungen, nach denen niemand gefragt hat. Ob das die Welt besser macht, ist Gegenstand laufender Untersuchungen.",
      bg: "#dde7e4",
      avatar: { hair: ["variant42"], body: ["variant07"], gestureProbability: 0, glasses: ["variant08"], glassesProbability: 100, beardProbability: 0 },
    },
    {
      name: "Violetta",
      role: "Erste Hilfe bei Lötunfällen",
      ring: "#ERSTE HILFE",
      ringColor: "#2e7d4f",
      tag: "Erste-Hilfe-Team",
      line: "Bildet mit Johanna das Erste-Hilfe-Team. Seit ihrem Eintritt hat Cedric 14 Pflaster verbraucht und Philippe sich dreimal am Türrahmen gestossen. Beides war absehbar.",
      bg: "#dfe9e2",
      avatar: { hair: ["variant39"], body: ["variant22"], gesture: ["ok"], glassesProbability: 0, beardProbability: 0 },
    },
    {
      name: "Johanna",
      role: "Erste Hilfe bei Lötunfällen",
      ring: "#ERSTE HILFE",
      ringColor: "#2e7d4f",
      tag: "Erste-Hilfe-Team",
      line: "Die andere Hälfte des Erste-Hilfe-Teams. Führt das Unfallbuch. Häufigster Eintrag: «Am heissen Ende angefasst.» Von Damon gibt es noch keinen einzigen.",
      bg: "#e3ece6",
      avatar: { hair: ["variant28"], body: ["variant14"], gesture: ["hand"], glassesProbability: 0, beardProbability: 0 },
    },
    {
      name: "Deniz",
      role: "Projektleiter",
      line: "Der Diktator der Projektleitung. Leitet sämtliche Projekte, welche das sind, ist aktuell noch in Abklärung. Wer ein Projekt will, stellt bei ihm einen Antrag. Zoltán hat elf gestellt. Alle sind in Abklärung.",
      bg: "#ebe4d6",
      avatar: { hair: ["variant21"], body: ["variant05"], gesture: ["pointLongArm"], glasses: ["variant03"], glassesProbability: 100, beardProbability: 0 },
    },
    {
      name: "Aisha",
      role: "Finanzen",
      line: "Verantwortet die Finanzen. Sie hat das Firmenkonto, Dijar hat das Passwort. Hat als Einzige nachgerechnet, ob 49 plus 49 plus 2 wirklich 100 ergibt. Es war knapp.",
      bg: "#ece6d6",
      avatar: { hair: ["variant41"], body: ["variant05"], gesture: ["point"], glasses: ["variant11"], glassesProbability: 100, beardProbability: 0 },
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
      line: "Die Lehre dauert vier Jahre. Philippe ist im sechsten. Er sagt, er wolle einfach ganz sicher sein. Der einzige Lehrling mit Bart. Mit 205 cm zu gross für den Tisch.",
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
      tag: "aka «Hakan»",
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
    {
      name: "Engjelina",
      role: "HR, Lehrling 1. Lehrjahr",
      line: "Lernt HR bei Marwin. Hat in der ersten Woche alle Personalakten sortiert, auch die von Philippe. Die füllt drei Ordner.",
      bg: "#efe2e8",
      avatar: { hair: ["variant46"], body: ["variant24"], gesture: ["waveLongArm"], glassesProbability: 0, beardProbability: 0 },
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
  lead: "Neunzehn Leute, zwei Besitzer, ein Lötkolben und ein abgeschlossener Feuerlöscher. Für Nummer zwanzig ist noch Platz.",
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
  safety: { label: "Sicherheitsdatenblatt", href: "/sicherheit" },
  repo: { label: "Quellcode auf GitHub", href: "https://github.com/vatra-sh/zolilot" },
};

export const shop = {
  label: "Shop",
  menuMeta: "50 Artikel · Lieferung 3 bis 6 Wochen",
  announcements: [
    "Gratisversand ab CHF 0.05 mehr",
    "Lieferung in 3 bis 6 Wochen ab Shenzhen",
    "Über 2 zufriedene Kunden",
    "Viral im Klassenchat",
  ],
  index: {
    eyebrow: "Offizieller Shop",
    title: "Alles für die perfekte Verbindung.",
    lead: "Direkt ab Lager Shenzhen, kuratiert im Keller in Aarau. Jeder Artikel ist von mindestens einer Person im Team gesehen worden.",
  },
  sorts: [
    { id: "empfohlen", label: "Empfohlen" },
    { id: "bestseller", label: "Bestseller" },
    { id: "neu", label: "Neuheiten" },
    { id: "preis-auf", label: "Preis aufsteigend" },
    { id: "preis-ab", label: "Preis absteigend" },
    { id: "bewertung", label: "Bewertung" },
    { id: "rabatt", label: "Grösster Rabatt" },
  ],
  filters: {
    title: "Filter",
    all: "Alle Artikel",
    price: "Preis (CHF)",
    min: "von",
    max: "bis",
    ship: "Lieferzeit",
    shipOptions: [
      { id: "3", label: "bis 3 Wochen" },
      { id: "6", label: "bis 6 Wochen" },
      { id: "irgendwann", label: "irgendwann" },
    ],
    discount: "Rabatt",
    discountOptions: [
      { id: "50", label: "ab 50 %" },
      { id: "70", label: "ab 70 %" },
    ],
    team: "Team-Empfehlung",
    clear: "Alle entfernen",
    apply: "Artikel anzeigen",
    empty: "Keine Artikel gefunden. Linus verkauft Ihnen trotzdem gerne etwas.",
    reset: "Filter zurücksetzen",
  },
  rating: "4.9",
  reviewsLabel: (n: number) => `${n} ${n === 1 ? "Bewertung" : "Bewertungen"}`,
  stock: "Nur noch 3 an Lager",
  viewers: (n: number) => `${n} Personen sehen sich diesen Artikel gerade an, davon 2 Besitzer.`,
  flash: {
    title: "Blitzangebot",
    endsIn: "endet in",
    extended: "Angebot verlängert. Ausnahmsweise. Wieder.",
  },
  buy: {
    add: "In den Warenkorb",
    added: "Im Warenkorb",
    qty: "Menge",
    shipping: "Versand CHF 12.90",
    returns: "Rückgabe innert 2 Tagen, wie bei Reparaturen",
    gift: "Gratis-Geschenk zu jeder Bestellung",
    trust: "Geprüft und zertifiziert",
  },
  tabs: {
    description: "Beschreibung",
    specs: "Technische Daten",
    delivery: "Lieferung & Rückgabe",
    reviews: "Bewertungen",
  },
  delivery: [
    { k: "Versand", v: "Standard ab Shenzhen, CHF 12.90. Express ab Shenzhen, gleich schnell, CHF 39.90." },
    { k: "Lieferzeit", v: "Wie angegeben, plus Zoll, plus Zoltán." },
    { k: "Tracking", v: "Sie erhalten eine Sendungsnummer. Der Status bleibt danach angenehm konstant." },
    { k: "Rückgabe", v: "Innert 2 Tagen ab Erhalt. Rücksendung bitte nach Shenzhen, frankiert." },
  ],
  verified: "Verifizierter Käufer",
  related: "Kunden kauften auch",
  breadcrumb: "Shop",
  cart: {
    title: "Warenkorb",
    open: (n: number) => `Warenkorb öffnen, ${n} Artikel`,
    close: "Warenkorb schliessen",
    empty: "Ihr Warenkorb ist leer. Noch.",
    emptyLead: "Unsere Bestseller warten bereits. Sie warten übrigens auch auf Ware aus Shenzhen.",
    toShop: "Zum Shop",
    gift: { name: "GRATIS: Kabelbinder", note: "Wert CHF 19.90 · nur Versand", shipping: 6.9 },
    freeShipping: "Noch CHF 0.05 bis zum Gratisversand",
    subtotal: "Zwischensumme",
    checkout: "Zur Kasse",
    upsell: "Passt dazu",
    remove: "Entfernen",
    announce: (name: string) => `${name} wurde in den Warenkorb gelegt.`,
    taxNote: "Inkl. MwSt. (geschätzt), exkl. Versand und Zoll",
  },
  checkout: {
    title: "Kasse",
    lead: "Drei Schritte, keine Kreditkarte, keine Adresse. Wir wissen ohnehin, wo Sie sitzen.",
    sections: { delivery: "Lieferung", shipping: "Versand", payment: "Zahlung" },
    name: "Wie dürfen wir Sie nennen?",
    nameHint: "Optional. Wird nirgends gespeichert, auch nicht von Dijar.",
    places: ["Klassenzimmer", "Pausenhof", "Hinterste Reihe", "Kellergeschoss Aarau"],
    placeLabel: "Lieferort",
    shippingOptions: [
      { id: "standard", label: "Standard ab Shenzhen", meta: "3 bis 6 Wochen", price: 12.9 },
      { id: "express", label: "Express ab Shenzhen", meta: "3 bis 6 Wochen, wird schneller verpackt", price: 39.9 },
      { id: "keller", label: "Abholung im Keller, Aarau", meta: "Abholgebühr", price: 4.9 },
    ],
    paymentOptions: [
      { id: "bar", label: "Bar in der Pause", meta: "Bitte passend" },
      { id: "rechnung", label: "Rechnung an Dijar", meta: "Dijar weiss noch nichts davon" },
      { id: "aktien", label: "In Zolilöt-Aktien", meta: "0 % Stimmrecht, wie üblich" },
      { id: "pausenbrot", label: "Pausenbrot", meta: "Ohne Gurken" },
    ],
    coupon: "Gutscheincode",
    couponApply: "Einlösen",
    coupons: {
      ZOLTAN2: { pct: 2, msg: "2 % Rabatt. Mehr hat Zoltán nicht." },
      JULIUS49: { pct: 49, msg: "Gültig, weil Sie gerade im Raum waren." },
    } as Record<string, { pct: number; msg: string }>,
    couponRefused: { DIJAR49: "Nur über das Aktienregister einlösbar." } as Record<string, string>,
    couponInvalid: "Dieser Code ist ungültig. Linus prüft, ob man ihn verkaufen kann.",
    summary: "Bestellübersicht",
    showSummary: "Bestellübersicht anzeigen",
    discount: "Rabatt",
    shippingLine: "Versand",
    giftLine: "Versand Gratis-Geschenk",
    total: "Total",
    submit: "Kostenpflichtig bestellen",
    legal: "Mit der Bestellung akzeptieren Sie die AGB (Allgemeine Glücksbedingungen). Es werden keine Daten gesendet oder gespeichert.",
    emptyCart: "Ihr Warenkorb ist leer. Bitte zuerst etwas Überteuertes auswählen.",
  },
  confirmation: {
    eyebrow: "Bestellung ZL-000002",
    title: "Danke. Zoltán meldet sich.",
    lead: (name: string) =>
      `${name ? `${name}, Ihre` : "Ihre"} Bestellung ist eingegangen. ZL-000001 war die Kontaktanfrage, das hier ist erst die zweite.`,
    trackingTitle: "Sendungsverfolgung",
    tracking: [
      { label: "Bestellung erhalten", meta: "soeben", done: true },
      { label: "An Zoltán weitergeleitet", meta: "soeben", done: true },
      { label: "Zoltán meldet sich", meta: "ausstehend", done: false },
      { label: "Paket hat Shenzhen verlassen", meta: "seit 19 Tagen", done: false },
      { label: "Zoll", meta: "in Abklärung (Deniz)", done: false },
      { label: "Zustellung", meta: "irgendwann", done: false },
    ],
    back: "Weiter einkaufen",
  },
  toast: {
    bought: (who: string, n: number, item: string) => `${who} aus Aarau hat gerade ${n}× «${item}» gekauft`,
    ago: (m: number) => `vor ${m} Min.`,
    dismiss: "Hinweis schliessen",
  },
};

// /sicherheit: the company's safety data sheet, by Herr Trottmann. Real SDS structure (16 sections).
export type Pictogram = "flamme" | "achtung" | "gesundheit";

export const sds: {
  eyebrow: string;
  title: string;
  lead: string;
  meta: string[];
  signal: string;
  hazards: { id: Pictogram; code: string; label: string; note: string }[];
  sections: { title: string; items: { k: string; v: string }[] }[];
  signoff: string;
} = {
  eyebrow: "Sicherheitsdatenblatt",
  title: "Zolilöt AG",
  lead: "Für die Firma als Ganzes. Erstellt von Herrn Trottmann, nachdem er die Werkstatt zum ersten Mal betreten hatte. Bitte vor dem ersten Besuch lesen. Die Schutzbrille gilt auch beim Lesen.",
  meta: ["gemäss ChemV", "Version 1", "überarbeitet am 12.11.2026", "erstellt von Herrn Trottmann"],
  signal: "Achtung",
  hazards: [
    { id: "flamme", code: "GHS02", label: "Damons Lötkolben", note: "entzündbar, auch gezähmt" },
    { id: "achtung", code: "GHS07", label: "Zoltáns Ideen", note: "treten ohne Vorwarnung auf" },
    { id: "gesundheit", code: "GHS08", label: "Flux Nº 7", note: "Zusammensetzung unbekannt" },
  ],
  sections: [
    {
      title: "Bezeichnung des Gemischs und des Unternehmens",
      items: [
        { k: "Handelsname", v: "Zolilöt AG" },
        { k: "Verwendung", v: "Löten, Kabelkonfektion, Reparatur. Abgeraten wird von allem, was keinen Strom leitet. Wir versuchen es trotzdem." },
        { k: "Hersteller", v: "Zoltán (2 %), Dijar (49 %), Julius (49 %, war gerade im Raum)" },
        { k: "Notruf", v: "Violetta und Johanna, Erste-Hilfe-Team. Cedric kennt die Nummer auswendig." },
      ],
    },
    {
      title: "Mögliche Gefahren",
      items: [
        { k: "Einstufung", v: "Gemisch aus neunzehn Bestandteilen. Einzeln harmlos, gemeinsam in einem Keller nur bedingt." },
        { k: "H360 °C", v: "Wird konstant bei 360 °C betrieben, ausser wenn jemand am Kabel zieht." },
        { k: "H049 %", v: "Kann zu Aktienanteilen führen, wenn man sich im falschen Moment im Raum aufhält." },
        { k: "P280", v: "Schutzbrille tragen. Auch in Meetings. Auch in der Kaffeepause." },
        { k: "P-ZL1", v: "Lötkolben nie am heissen Ende anfassen. Im Zweifel Damon fragen." },
      ],
    },
    {
      title: "Zusammensetzung, Angaben zu Bestandteilen",
      items: [
        { k: "Joël", v: "100 % der Lötstellen" },
        { k: "Lehrlinge", v: "2, davon einer im 6. Lehrjahr" },
        { k: "Flux Nº 7", v: "Kolophonium 62 %, Geheimrezept 31 %, «Niklas weiss es» 7 %" },
        { k: "Lehrpersonen", v: "2. Helfen, arbeiten nicht. Vertraglich so geregelt." },
      ],
    },
    {
      title: "Erste-Hilfe-Massnahmen",
      items: [
        { k: "Hautkontakt", v: "Mit dem heissen Ende: kaltes Wasser, dann Violetta oder Johanna. Eintrag ins Unfallbuch nicht vergessen." },
        { k: "Einatmen", v: "Von Flux Nº 7: Fenster öffnen, Frischluft. Niklas nicht fragen, was drin ist. Er sagt es nicht." },
        { k: "Verschlucken", v: "Von Lötzinn: nicht. Einfach nicht." },
        { k: "Hinweis für den Arzt", v: "Der Patient heisst vermutlich Cedric." },
      ],
    },
    {
      title: "Massnahmen zur Brandbekämpfung",
      items: [
        { k: "Geeignete Löschmittel", v: "CO₂-Löscher, an der Wand neben der Tür. Abgeschlossen. Den Schlüssel hat Herr Trottmann." },
        { k: "Ungeeignet", v: "Maurices Folien. Alle orange, wirken eher anfeuernd." },
        { k: "Schutzausrüstung", v: "Damon. Er nähert sich langsam und spricht ruhig." },
      ],
    },
    {
      title: "Massnahmen bei unbeabsichtigter Freisetzung",
      items: [
        { k: "Lötzinn", v: "Abkühlen lassen. Joël fragen, ob er ihn noch braucht. Er braucht ihn noch." },
        { k: "Aktienregister", v: "Bei Freisetzung bitte sofort Dijar informieren. Er weiss es bereits." },
      ],
    },
    {
      title: "Handhabung und Lagerung",
      items: [
        { k: "Lötkolben", v: "In der Ablage lagern, nicht in Cedrics Hand." },
        { k: "Flux Nº 7", v: "Kühl, trocken und mit Abstand zu allen Nasen." },
        { k: "Philippe", v: "Nicht unter Türrahmen lagern (205 cm)." },
        { k: "Lagerort", v: "Keller Aarau" },
      ],
    },
    {
      title: "Begrenzung und Überwachung der Exposition, persönliche Schutzausrüstung",
      items: [
        { k: "Augenschutz", v: "Schutzbrille, Pflicht. Herr Trottmann prüft das auch beim Mittagessen." },
        { k: "Handschutz", v: "Hitzeschutzhandschuhe bis 800 °C. Das Feingefühl endet bei etwa 20 °C." },
        { k: "Atemschutz", v: "Lötrauch-Absauger. Verteilt den Rauch gleichmässig im Raum." },
        { k: "Grenzwert", v: "Ideen des CEO pro Meeting: 3. Gemessen: 11." },
      ],
    },
    {
      title: "Physikalische und chemische Eigenschaften",
      items: [
        { k: "Aggregatzustand", v: "Fest. Beim Löten flüssig. Danach wieder fest, meistens an der richtigen Stelle." },
        { k: "Schmelzpunkt", v: "Lötzinn Sn63Pb37: 183 °C. Von Herrn Trottmann nachgemessen und bestätigt. Als einzige Angabe auf dieser Website." },
        { k: "Geruch", v: "Flux Nº 7. Unverkennbar." },
        { k: "pH-Wert der Stimmung", v: "7, montags 4" },
        { k: "Siedepunkt", v: "Philippe: unbekannt, wurde noch nie erreicht." },
      ],
    },
    {
      title: "Stabilität und Reaktivität",
      items: [
        { k: "Stabilität", v: "Stabil bei Raumtemperatur, solange Linus nichts verkauft." },
        { k: "Zu vermeiden", v: "Montagmorgen, Prüfungswochen, Kabel, an denen jemand zieht." },
        { k: "Unverträglich", v: "Lötkolben und Cedric" },
        { k: "Zersetzungsprodukte", v: "Kalte Lötstellen. Offiziell 0, die wir zugeben." },
      ],
    },
    {
      title: "Toxikologische Angaben",
      items: [
        { k: "Akute Toxizität", v: "Flux Nº 7: nicht bestimmt. Niklas verweigert die Probe." },
        { k: "Reizwirkung", v: "Maurices LinkedIn-Beiträge, ab dem dritten am Tag" },
        { k: "Sensibilisierung", v: "Wer einmal 49 % hatte, will nicht mehr zurück." },
        { k: "Langzeitwirkung", v: "Die Lehre kann sich verlängern. Siehe Philippe." },
      ],
    },
    {
      title: "Umweltbezogene Angaben",
      items: [
        { k: "Persistenz", v: "Hoch. Philippe ist im 6. Lehrjahr." },
        { k: "Bioakkumulation", v: "Aktien reichern sich bei Dijar und Julius an." },
        { k: "Mobilität", v: "Linus, Aussendienst" },
      ],
    },
    {
      title: "Hinweise zur Entsorgung",
      items: [
        { k: "Lötzinnreste", v: "Sammeln, nicht essen." },
        { k: "Kaputte Ladekabel", v: "An uns zurück. Wir löten sie nach, danach sind es zwei." },
        { k: "Ideen des CEO", v: "Werden demokratisch entsorgt." },
      ],
    },
    {
      title: "Angaben zum Transport",
      items: [
        { k: "UN-Nummer", v: "beantragt" },
        { k: "Transportweg", v: "Shenzhen bis Keller Aarau, 3 bis 6 Wochen" },
        { k: "Verpackungsgruppe", v: "III. Orange, von Maurice gestaltet." },
      ],
    },
    {
      title: "Rechtsvorschriften",
      items: [
        { k: "Chemikalienverordnung", v: "Von Herrn Trottmann Abschnitt für Abschnitt geprüft. Wir haben genickt." },
        { k: "Arbeitsvertrag", v: "Lehrpersonen helfen, sie arbeiten nicht." },
        { k: "Aktienregister", v: "Eine Excel-Datei auf Dijars Laptop. Rechtlich in Abklärung." },
      ],
    },
    {
      title: "Sonstige Angaben",
      items: [
        { k: "Änderungen", v: "Erste Version. Es gab keine Vorversion. Es gab auch keine Sicherheit." },
        { k: "Lektorat", v: "Frau Deubelbeiss. Zwei Kommas ergänzt, ein Gefahrensymbol rot angestrichen." },
        { k: "Gelesen von", v: "Joël. Er hat danach weitergelötet." },
      ],
    },
  ],
  signoff: "Herr Trottmann, Chief Safety Officer, Gefahrstoffe & Brandschutz",
};
