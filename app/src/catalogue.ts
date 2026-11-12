// Shop catalogue. Every product, price, review and image prop lives here.
// Image props are pinned per product (no seeded randomness), like the team avatars.

export type CategoryId = "kolben" | "labor" | "werkzeug" | "kabel" | "merch" | "digital" | "sets";
export type TeamPick = "joel" | "damon" | "niklas" | "maurice" | "trottmann";
export type Reviewer =
  | "Dijar"
  | "Zoltán"
  | "Julius"
  | "Joël"
  | "Damon"
  | "Niklas"
  | "Deniz"
  | "Levi"
  | "Cedric"
  | "Philippe"
  | "Maurice"
  | "Linus"
  | "Marwin"
  | "Frau Deubelbeiss"
  | "Herr Trottmann";

export type ArtKind =
  | "iron"
  | "station"
  | "bottle"
  | "perfume"
  | "jar"
  | "spool"
  | "cable"
  | "box"
  | "board"
  | "garment"
  | "mug"
  | "mat"
  | "tool"
  | "card";

export type Sticker = { text: string; shape: "burst" | "ribbon" | "seal" | "tag" };

export type Art = {
  kind: ArtKind;
  /** sub-shape within a kind, e.g. tool: "tweezers" */
  variant?: string;
  /** main, secondary, accent */
  colors: [string, string, string];
  /** text printed on the product itself */
  label?: string;
  count?: 1 | 2 | 3;
  tilt?: number;
  eyes?: boolean;
  glow?: boolean;
  sticker: Sticker;
  /** small yellow corner flag, e.g. "2026 NEU" */
  corner?: string;
  /** size claim on the comparison view */
  size: string;
};

export type Review = { by: Reviewer; stars: 1 | 2 | 3 | 4 | 5; text: string };
export type Variant = { label: string; options: { name: string; delta?: number }[] };

export type Product = {
  slug: string;
  name: string;
  title: string;
  category: CategoryId;
  price: number;
  compareAt: number;
  unit?: string;
  description: string[];
  callouts: [string, string, string];
  specs: { k: string; v: string }[];
  variants?: Variant;
  ship: { from: "Shenzhen" | "Keller Aarau" | "digital"; min: number; max: number | null; note?: string };
  team?: TeamPick;
  popularity: number;
  added: string;
  reviews: Review[];
  art: Art;
};

export const categories: { id: CategoryId; label: string; lead: string }[] = [
  { id: "kolben", label: "Lötkolben", lead: "Heiss, schnell, upgraded. Laut Verpackung." },
  { id: "labor", label: "Labor & Flux", lead: "Direkt aus Niklas' Labor. Riecht auch so." },
  { id: "werkzeug", label: "Werkzeug", lead: "Alles, was man neben dem Lötkolben noch kaufen kann." },
  { id: "kabel", label: "Kabel & Adapter", lead: "Längen nach Augenmass, Stecker nach Gefühl." },
  { id: "merch", label: "Merch", lead: "Von Maurice kuratiert. Fast alles orange." },
  { id: "digital", label: "Kurse & Digitales", lead: "Sofort verfügbar, sobald Zoltán sich meldet." },
  { id: "sets", label: "Sets & Bundles", lead: "Mehr Teile, mehr Rabatt, mehr Pinzetten." },
];

export const teamPicks: { id: TeamPick; label: string }[] = [
  { id: "joel", label: "Von Joël geprüft" },
  { id: "damon", label: "Von Damon gezähmt" },
  { id: "niklas", label: "Aus Niklas' Labor" },
  { id: "maurice", label: "Von Maurice empfohlen" },
  { id: "trottmann", label: "Von Herrn Trottmann freigegeben" },
];

const SZ = { from: "Shenzhen", min: 3, max: 6 } as const;

export const products: Product[] = [
  // ───────── Lötkolben & Stationen ─────────
  {
    slug: "loetkolben-pro-max",
    name: "Lötkolben Pro Max",
    title:
      "2026 NEU UPGRADED Lötkolben Pro Max 60W 80W 100W 120W Digital LCD Profi Elektronik Reparatur Schnellheizung Werkzeug Set Geschenk für Männer Vatertag",
    category: "kolben",
    price: 149.9,
    compareAt: 499.9,
    description: [
      "Laut Verpackung heizt der Pro Max in 3 Sekunden auf 360 °C. Joël hat nachgemessen: 11 Minuten. Wir haben die Verpackung trotzdem behalten, sie ist sehr schön.",
      "Mit vier Leistungsstufen, die alle gleichzeitig aktiv sind. Ein Schalter ist vorhanden. Was er schaltet, wird noch abgeklärt.",
    ],
    callouts: ["SCHNELL HEIZUNG · FAST HOT", "ERGONOMISCH GRIFF · HAND FRIEND", "LCD ANZEIGE · SEE NUMBER"],
    specs: [
      { k: "Leistung", v: "60W 80W 100W 120W (alle gleichzeitig)" },
      { k: "Aufheizzeit", v: "3 Sekunden (Verpackung), 11 Minuten (Joël)" },
      { k: "Temperatur", v: "200 bis 450 °C, meistens 360 °C" },
      { k: "Kabel", v: "1.2 m, nach Augenmass" },
      { k: "Zertifikat", v: "liegt bei (Kopie)" },
    ],
    variants: { label: "Farbe", options: [{ name: "Schwarz" }, { name: "Schwarz (neu)" }, { name: "Schwarz Pro Max", delta: 20 }] },
    ship: SZ,
    team: "joel",
    popularity: 98,
    added: "2026-10-02",
    reviews: [
      { by: "Joël", stars: 3, text: "Wird heiss. Irgendwann. Die Spitze war abgebrochen, ich habe sie wieder angelötet. Mit einem anderen Lötkolben." },
      { by: "Linus", stars: 5, text: "Habe schon 14 Stück verkauft, bevor meiner angekommen ist." },
    ],
    art: {
      kind: "iron",
      colors: ["#1d1f22", "#f08a24", "#3a3d42"],
      label: "PRO MAX",
      sticker: { text: "UPGRADED|2026 VERSION", shape: "burst" },
      corner: "HOT SALE",
      size: "ca. 23 cm",
    },
  },
  {
    slug: "loetkolben-plueschtier",
    name: "Lötkolben-Plüschtier",
    title:
      "Lötkolben Plüschtier Kuscheltier Weich Kawaii Niedlich Geschenk Kinder Erwachsene Elektroniker Büro Deko Sofa Kissen Stofftier 2026 Neu",
    category: "kolben",
    price: 39.9,
    compareAt: 119.9,
    description: [
      "Der einzige Lötkolben, den Damon ohne Handschuhe anfasst. Weich, kuschelig und bei Raumtemperatur betriebsbereit.",
      "Lötet nicht. Wir haben es versucht. Er hat uns dabei angeschaut.",
    ],
    callouts: ["SUPER WEICH · VERY SOFT", "KEIN STROM · NO DANGER", "MIT AUGEN · HAVE EYES"],
    specs: [
      { k: "Betriebstemperatur", v: "Raumtemperatur" },
      { k: "Füllung", v: "100 % Polyester, 0 % Lötzinn" },
      { k: "Länge", v: "40 cm (Bild ähnlich)" },
      { k: "Lötleistung", v: "0 W" },
    ],
    ship: SZ,
    team: "damon",
    popularity: 91,
    added: "2026-10-20",
    reviews: [
      { by: "Damon", stars: 5, text: "Endlich einer, der nicht beisst. Habe ihn trotzdem langsam angefasst." },
      { by: "Cedric", stars: 5, text: "Mein erster Lötkolben, mit dem nichts passiert ist." },
    ],
    art: {
      kind: "iron",
      colors: ["#f08a24", "#ffd7a8", "#c0611a"],
      eyes: true,
      tilt: 8,
      sticker: { text: "KAWAII|SÜSS", shape: "seal" },
      size: "ca. 40 cm",
    },
  },
  {
    slug: "loetkolben-leine",
    name: "Lötkolben-Leine, Damon-geprüft",
    title:
      "Lötkolben Leine Einziehbar 5m Hitzebeständig Anti-Flucht Sicherheit Werkstatt Training Zähmen Profi Lötstation Zubehör Ausbildung Haustier Kompatibel",
    category: "kolben",
    price: 59.9,
    compareAt: 189.9,
    description: [
      "Für Lötkolben, die noch nicht gezähmt sind. Entwickelt mit Damon, unserem Lötkolben-Zähmer, und getestet an Cedrics Lötkolben.",
      "Einziehbar auf 5 Meter. Der Kolben kann sich frei bewegen, aber nie zu weit weg. Bitte nicht am heissen Ende anleinen.",
    ],
    callouts: ["ANTI FLUCHT · NO RUN AWAY", "5M EINZIEHBAR · LONG LONG", "DAMON GEPRÜFT · TAME OK"],
    specs: [
      { k: "Zugkraft", v: "ausreichend für einen wilden 60W-Kolben" },
      { k: "Länge", v: "5 m, einziehbar" },
      { k: "Hitzebeständig", v: "am Griff ja, am Kolben nein" },
      { k: "Geprüft von", v: "Damon (Lötkolben-Zähmer)" },
    ],
    ship: SZ,
    team: "damon",
    popularity: 88,
    added: "2026-10-27",
    reviews: [
      { by: "Damon", stars: 5, text: "Kurz halten am Anfang. Ruhig sprechen. Dann geht er von selbst bei Fuss." },
      { by: "Levi", stars: 4, text: "Cedrics Kolben ist seither nicht mehr vom Tisch gefallen. Cedric schon." },
    ],
    art: {
      kind: "tool",
      variant: "leash",
      colors: ["#d62828", "#1d1f22", "#9aa0a6"],
      sticker: { text: "ANTI|FLUCHT", shape: "burst" },
      corner: "DAMON OK",
      size: "Griff ca. 12 cm",
    },
  },
  {
    slug: "smart-loetstation-wlan",
    name: "Smart-Lötstation mit WLAN",
    title:
      "Smart Lötstation WLAN App Steuerung Bluetooth 5.3 Sprachsteuerung KI Cloud Digital Anzeige Smart Home Profi Elektronik 2026 Neu Upgraded Version",
    category: "kolben",
    price: 399,
    compareAt: 1299,
    description: [
      "Die erste Lötstation, die sich mit Dijars WLAN verbindet. Das Passwort kennt Dijar.",
      "Mit KI, die die optimale Temperatur vorschlägt. Sie schlägt immer 360 °C vor. Die App ist in Entwicklung, ebenfalls bei Dijar.",
    ],
    callouts: ["WLAN VERBINDUNG · INTERNET HOT", "KI TEMPERATUR · SMART DEGREE", "APP STEUERUNG · PHONE CONTROL"],
    specs: [
      { k: "Konnektivität", v: "WLAN (Passwort: kennt Dijar), Bluetooth 5.3" },
      { k: "App", v: "in Entwicklung (Dijar)" },
      { k: "KI", v: "schlägt 360 °C vor" },
      { k: "Display", v: "LCD, zeigt 360" },
      { k: "Updates", v: "lebenslang, sofern Dijar Zeit hat" },
    ],
    ship: SZ,
    popularity: 74,
    added: "2026-11-01",
    reviews: [
      { by: "Dijar", stars: 5, text: "Funktioniert einwandfrei in meinem Netz. In anderen Netzen ist es nicht vorgesehen." },
      { by: "Zoltán", stars: 4, text: "Ich habe nach dem Passwort gefragt. Die Frage wurde abgelehnt, 98 zu 2." },
    ],
    art: {
      kind: "station",
      variant: "wifi",
      colors: ["#2b2d31", "#f08a24", "#7cf0b0"],
      label: "360",
      sticker: { text: "SMART|KI 2026", shape: "seal" },
      corner: "WLAN",
      size: "ca. 18 × 12 cm",
    },
  },
  {
    slug: "usb-c-loetkolben-powerbank",
    name: "USB-C-Lötkolben mit Powerbank",
    title:
      "Akku Lötkolben Kabellos USB-C Schnellladen Tragbar Mini 2026 Outdoor Camping Reise Lötkolben Powerbank Handy Laden 20000mAh Profi Geschenk",
    category: "kolben",
    price: 89.9,
    compareAt: 279.9,
    description: [
      "Lädt Ihr Handy, während er lötet. Oder lötet, während er Ihr Handy lädt. Beides gleichzeitig nicht.",
      "Ideal für unterwegs, im Zug oder auf dem Pausenhof. Der Akku reicht für eine Lötstelle oder 4 % Handyakku.",
    ],
    callouts: ["KABELLOS · NO CABLE", "POWERBANK · CHARGE PHONE", "TRAGBAR · POCKET HOT"],
    specs: [
      { k: "Akkulaufzeit", v: "eine Lötstelle" },
      { k: "Kapazität", v: "20000 mAh (Aufdruck)" },
      { k: "Ladeanschluss", v: "USB-C, Kabel nicht im Lieferumfang" },
      { k: "Handy laden", v: "ja, aber dann nicht löten" },
    ],
    ship: SZ,
    popularity: 79,
    added: "2026-09-15",
    reviews: [
      { by: "Deniz", stars: 4, text: "Habe das Projekt «Handy laden und löten» geplant. Es ist aktuell noch in Abklärung." },
      { by: "Julius", stars: 5, text: "Ich auch." },
    ],
    art: {
      kind: "iron",
      variant: "cordless",
      colors: ["#e8e6e1", "#2b2d31", "#4aa8ff"],
      label: "USB-C",
      tilt: -6,
      sticker: { text: "20000|mAh", shape: "tag" },
      corner: "KABELLOS",
      size: "ca. 19 cm",
    },
  },
  {
    slug: "rgb-gaming-loetkolben",
    name: "RGB-Gaming-Lötkolben",
    title:
      "RGB Gaming Lötkolben LED 16 Mio Farben Ergonomisch Esports Pro Gamer Setup Löten Elektronik Streamer Zubehör Beleuchtet Regenbogen 2026",
    category: "kolben",
    price: 129.9,
    compareAt: 349.9,
    description: [
      "Lötet nicht besser, aber man sieht es besser. 16 Millionen Farben, davon 3 unterscheidbar.",
      "Ergonomisch für lange Sessions. Wir empfehlen trotzdem Pausen, laut Marwin aus dem HR gesetzlich.",
    ],
    callouts: ["RGB 16 MIO · MANY COLOUR", "ESPORTS READY · PRO GAMER", "LED BELEUCHTET · LIGHT HOT"],
    specs: [
      { k: "Bildrate", v: "144 FPS" },
      { k: "Farben", v: "16 Mio (3 unterscheidbar)" },
      { k: "Latenz", v: "11 Minuten bis 360 °C" },
      { k: "Kompatibel mit", v: "jedem Setup, das Strom hat" },
    ],
    ship: SZ,
    popularity: 83,
    added: "2026-10-12",
    reviews: [
      { by: "Philippe", stars: 5, text: "Seit dem RGB-Kolben löte ich viel motivierter. Im sechsten Lehrjahr ist das wichtig." },
      { by: "Marwin", stars: 3, text: "Bitte nach 45 Minuten eine Pause einlegen. Das Licht hört nicht auf, Sie schon." },
    ],
    art: {
      kind: "iron",
      colors: ["#1d1f22", "#ff3df2", "#3a3d42"],
      glow: true,
      tilt: 4,
      label: "RGB",
      sticker: { text: "RGB|GAMING", shape: "burst" },
      corner: "144 FPS",
      size: "ca. 23 cm",
    },
  },
  {
    slug: "ceo-loetkolben-vergoldet",
    name: "CEO-Edition, vergoldet",
    title:
      "Luxus Lötkolben Gold 24K Optik Executive Edition CEO Geschenk Chef Boss Business Premium Limitiert Zertifikat Edel Etui Exklusiv Männer",
    category: "kolben",
    price: 990,
    compareAt: 2990,
    description: [
      "Wurde nie benutzt. Wie bei Zoltán üblich, wird er gehalten, nicht verwendet.",
      "Im Etui mit Echtheitszertifikat. Die Vergoldung beträgt 2 %, der Rest ist Überzeugung.",
    ],
    callouts: ["24K GOLD OPTIK · LOOK RICH", "CEO EDITION · BOSS ONLY", "MIT ETUI · HAVE BOX"],
    specs: [
      { k: "Vergoldung", v: "2 %" },
      { k: "Benutzt", v: "nie" },
      { k: "Etui", v: "Kunstleder, riecht nach Flux Nº 7" },
      { k: "Stimmrecht", v: "nicht inbegriffen" },
    ],
    ship: SZ,
    popularity: 42,
    added: "2026-08-30",
    reviews: [
      { by: "Zoltán", stars: 5, text: "Liegt gut in der Hand. Ich habe ihn noch nicht eingeschaltet, das ist auch nicht meine Aufgabe." },
      { by: "Joël", stars: 2, text: "Durfte ihn kurz halten." },
    ],
    art: {
      kind: "iron",
      variant: "gold",
      colors: ["#c9a227", "#1d1f22", "#8a6d12"],
      label: "CEO",
      tilt: -4,
      sticker: { text: "LUXUS|EDITION", shape: "seal" },
      corner: "LIMITIERT",
      size: "ca. 23 cm",
    },
  },
  {
    slug: "loetspitzen-100er-set",
    name: "Lötspitzen 100er-Set",
    title:
      "100 Stück Lötspitzen Set Universal Kompatibel Alle Marken Ersatz Spitze Lötkolben Zubehör Profi Bulk Grosshandel Vorrat Werkstatt Sparpaket",
    category: "kolben",
    price: 79.9,
    compareAt: 249.9,
    description: [
      "Passt auf alle Lötkolben, ausser auf Ihren. Wir haben es mit allen anderen getestet.",
      "100 Spitzen in 1 Form. Für Kunden, die sich nicht entscheiden möchten.",
    ],
    callouts: ["100 STÜCK · VERY MANY", "UNIVERSAL · FIT ALL", "PROFI QUALITÄT · GOOD TIP"],
    specs: [
      { k: "Kompatibilität", v: "universal (ausgenommen alle)" },
      { k: "Anzahl", v: "100 (Bild zeigt 12)" },
      { k: "Formen", v: "1" },
      { k: "Material", v: "Kupfer, sehr wahrscheinlich" },
    ],
    ship: SZ,
    popularity: 55,
    added: "2026-07-14",
    reviews: [
      { by: "Joël", stars: 1, text: "Passt nicht." },
      { by: "Linus", stars: 5, text: "Passt bestimmt bei jemandem." },
    ],
    art: {
      kind: "tool",
      variant: "tips",
      colors: ["#b87333", "#9aa0a6", "#1d1f22"],
      sticker: { text: "100 STK|BULK", shape: "tag" },
      size: "je ca. 3 cm",
    },
  },

  // ───────── Labor & Flussmittel ─────────
  {
    slug: "flux-no-7",
    name: "Flux Nº 7, Originalrezeptur",
    title:
      "Flux Nº 7 Flussmittel Original Labor Rezeptur Profi Kolophonium No Clean Bleifrei SMD BGA Reparatur 100ml Premium Chemiker Empfehlung Schweiz",
    category: "labor",
    price: 49.9,
    compareAt: 149.9,
    description: [
      "Unser hauseigenes Flussmittel, entwickelt von Chemiker Niklas. Die Rezeptur kennt nur er. Den Geruch kennen alle.",
      "Sechs Versuche sind gescheitert. Über Versuch Nº 4 sprechen wir nicht, er ist aber als Restposten erhältlich.",
    ],
    callouts: ["LABOR REZEPTUR · SECRET MIX", "NO CLEAN · NOT WASH", "WALD DUFT · SMELL TREE"],
    specs: [
      { k: "Zusammensetzung", v: "Kolophonium 62 %, Geheimrezept 31 %, «Niklas weiss es» 7 %" },
      { k: "Geruch", v: "Wald, aber angebrannt" },
      { k: "Siedepunkt", v: "Ja" },
      { k: "Haltbarkeit", v: "Länger als Philippes Lehre" },
      { k: "Gefahrenhinweis", v: "Nicht trinken. Wurde getestet." },
    ],
    ship: { from: "Keller Aarau", min: 1, max: 3, note: "Versand ab Labor, Umweg über Shenzhen" },
    team: "niklas",
    popularity: 99,
    added: "2026-09-01",
    reviews: [
      { by: "Niklas", stars: 5, text: "Ich darf nicht sagen, was drin ist. Aber es ist gut." },
      { by: "Joël", stars: 5, text: "Einziges Produkt im Shop, das ich selbst benutze." },
    ],
    art: {
      kind: "bottle",
      colors: ["#c46a1c", "#1d1f22", "#f08a24"],
      label: "FLUX Nº 7",
      sticker: { text: "ORIGINAL|REZEPTUR", shape: "seal" },
      corner: "BESTSELLER",
      size: "100 ml",
    },
  },
  {
    slug: "flux-no-4-restposten",
    name: "Flux Nº 4, Restposten",
    title:
      "Flux Nº 4 Flussmittel Restposten Sonderverkauf Ausverkauf Limitiert Labor Charge Experimentell Einzigartig Sammlerstück Rarität Letzte Chance",
    category: "labor",
    price: 14.9,
    compareAt: 745,
    description: ["Wir sprechen nicht darüber.", "Nur solange Vorrat reicht. Der Vorrat reicht leider noch sehr lange."],
    callouts: ["LETZTE CHARGE · LAST ONE", "EXPERIMENTELL · NEW SCIENCE", "SAMMLERSTÜCK · RARE"],
    specs: [
      { k: "Rabatt", v: "98 %" },
      { k: "Gefahrenhinweis", v: "Ja" },
      { k: "Farbe", v: "wechselt" },
      { k: "Geruch", v: "kein Kommentar" },
    ],
    ship: { from: "Keller Aarau", min: 1, max: 3, note: "Versand in neutraler Verpackung" },
    team: "niklas",
    popularity: 61,
    added: "2026-06-04",
    reviews: [
      { by: "Niklas", stars: 1, text: "Kein Kommentar." },
      { by: "Philippe", stars: 5, text: "Habe ich im dritten Lehrjahr verwendet. Danach war das dritte Lehrjahr nochmals." },
    ],
    art: {
      kind: "bottle",
      variant: "murky",
      colors: ["#5f7d3a", "#3a3d42", "#9aa0a6"],
      label: "FLUX Nº 4",
      tilt: -7,
      sticker: { text: "-98 %|RESTPOSTEN", shape: "burst" },
      corner: "LETZTE CHANCE",
      size: "100 ml",
    },
  },
  {
    slug: "duftkerze-wald-angebrannt",
    name: "Duftkerze «Wald, aber angebrannt»",
    title:
      "Duftkerze Soja Wachs Aromatherapie Entspannung Geschenk Wohnzimmer Hygge Kolophonium Duft Wald Rauch Handgemacht Glas Deko Achtsamkeit",
    category: "labor",
    price: 44.9,
    compareAt: 129.9,
    description: [
      "Endlich riecht es auch bei Ihnen zuhause nach Labor. Mit dem Duft von Flux Nº 7: Wald, aber angebrannt.",
      "Handgegossen von Niklas. Er hat dabei eine Schutzbrille getragen. Wir empfehlen, ebenfalls eine zu tragen.",
    ],
    callouts: ["ENTSPANNUNG · RELAX SMOKE", "SOJA WACHS · NATURE", "40H BRENNDAUER · LONG FIRE"],
    specs: [
      { k: "Brenndauer", v: "40 h (im Labor: 3 Sekunden)" },
      { k: "Duft", v: "Wald, aber angebrannt" },
      { k: "Wachs", v: "Soja, mit Spuren von Kolophonium" },
      { k: "Wirkung", v: "beruhigend, ausser auf Rauchmelder" },
    ],
    ship: SZ,
    team: "niklas",
    popularity: 70,
    added: "2026-10-30",
    reviews: [
      { by: "Maurice", stars: 5, text: "Brenne sie bei jedem Pitch. Riecht nach Innovation." },
      { by: "Marwin", stars: 3, text: "Bitte nicht im Sitzungszimmer anzünden. Es gab Rückmeldungen." },
    ],
    art: {
      kind: "jar",
      variant: "candle",
      colors: ["#efe6d6", "#2b2d31", "#f08a24"],
      label: "WALD, ABER ANGEBRANNT",
      sticker: { text: "HYGGE|2026", shape: "seal" },
      size: "ca. 9 cm",
    },
  },
  {
    slug: "loetzinn-premium-500g",
    name: "Lötzinn «Premium», 500 g",
    title:
      "Lötdraht Lötzinn 0.8mm 1.0mm Premium Bleifrei Zinn Silber Kupfer Flussmittelkern Rolle 500g Profi Industrie Qualität Elektronik Reparatur Grosspack",
    category: "labor",
    price: 69.9,
    compareAt: 219.9,
    description: [
      "Rolle 500 g. Inhalt 12 g. Der Rest ist Rolle.",
      "Premium-Lötzinn mit Flussmittelkern, Silberanteil und Kupferanteil. Genaue Anteile siehe Rolle, die Rolle ist leider unbeschriftet.",
    ],
    callouts: ["500G ROLLE · BIG ROUND", "FLUSSMITTEL KERN · HAVE FLUX", "BLEIFREI · NO HEAVY"],
    specs: [
      { k: "Gewicht inkl. Rolle", v: "500 g" },
      { k: "Gewicht ohne Rolle", v: "12 g" },
      { k: "Durchmesser", v: "0.8 mm oder 1.0 mm (Zufall)" },
      { k: "Schmelzpunkt", v: "irgendwo unter 360 °C" },
    ],
    ship: SZ,
    team: "joel",
    popularity: 77,
    added: "2026-07-22",
    reviews: [
      { by: "Joël", stars: 2, text: "Reicht für zwei Platinen. Die Rolle hält ewig." },
      { by: "Damon", stars: 4, text: "Die leere Rolle eignet sich hervorragend als Kolbenständer." },
    ],
    art: {
      kind: "spool",
      colors: ["#d62828", "#c8ccd1", "#1d1f22"],
      label: "500g",
      sticker: { text: "PREMIUM|QUALITÄT", shape: "burst" },
      size: "Ø ca. 9 cm",
    },
  },
  {
    slug: "eau-de-kolophonium",
    name: "Eau de Kolophonium",
    title:
      "Parfum Herren Eau de Toilette Langanhaltend Männer Duft Holzig Rauchig Geschenk Luxus 100ml Unisex Labor Edition Verführerisch Business",
    category: "labor",
    price: 119,
    compareAt: 389,
    description: [
      "«Professionell, pünktlich, und er riecht ganz leicht nach Kolophonium.» Ein Kunde hat das über Joël gesagt. Jetzt können Sie das auch erreichen.",
      "Kopfnote Kolophonium, Herznote Kolophonium, Basisnote ein Hauch Flux Nº 7.",
    ],
    callouts: ["LANGANHALTEND · LONG SMELL", "HOLZIG RAUCHIG · WOOD FIRE", "LUXUS FLASCHE · RICH GLASS"],
    specs: [
      { k: "Kopfnote", v: "Kolophonium" },
      { k: "Herznote", v: "Kolophonium" },
      { k: "Basisnote", v: "Flux Nº 7" },
      { k: "Haltbarkeit auf der Haut", v: "bis zur nächsten Dusche, oft länger" },
    ],
    ship: SZ,
    team: "niklas",
    popularity: 64,
    added: "2026-10-08",
    reviews: [
      { by: "Joël", stars: 5, text: "Ich brauche es nicht. Ich rieche schon so." },
      { by: "Niklas", stars: 4, text: "Enthält Spuren von Labor." },
    ],
    art: {
      kind: "perfume",
      colors: ["#e7b97a", "#c9a227", "#1d1f22"],
      label: "EAU DE KOLOPHONIUM",
      sticker: { text: "LUXUS|PARFUM", shape: "seal" },
      size: "100 ml",
    },
  },
  {
    slug: "entloetlitze-augenmass",
    name: "Entlötlitze nach Augenmass",
    title:
      "Entlötlitze Kupfer Geflecht Desoldering 1.5mm 2mm 3mm Profi Rolle Länge Variabel Entlöten Reparatur Elektronik Werkstatt Absaugen Litze",
    category: "labor",
    price: 24.9,
    compareAt: 74.9,
    description: [
      "Länge nach Augenmass. Das Augenmass stammt von Linus und ist entsprechend grosszügig.",
      "Saugt Lötzinn auf, wenn man es richtig macht. Sonst saugt es Zeit auf.",
    ],
    callouts: ["KUPFER GEFLECHT · COPPER HAIR", "SAUGT ZINN · DRINK SOLDER", "LÄNGE VARIABEL · SOME METER"],
    specs: [
      { k: "Länge", v: "ungefähr" },
      { k: "Breite", v: "1.5 mm, 2 mm oder 3 mm" },
      { k: "Gemessen von", v: "Linus" },
      { k: "Toleranz", v: "verhandelbar" },
    ],
    ship: SZ,
    popularity: 40,
    added: "2026-05-19",
    reviews: [
      { by: "Linus", stars: 5, text: "Ich habe 10 Meter verkauft. Wie viel es war, weiss niemand." },
      { by: "Joël", stars: 3, text: "Es waren 40 cm." },
    ],
    art: {
      kind: "spool",
      variant: "braid",
      colors: ["#2f6fb5", "#b87333", "#ffffff"],
      label: "2mm",
      count: 2,
      sticker: { text: "PROFI|QUALITY", shape: "tag" },
      size: "Ø ca. 5 cm",
    },
  },

  // ───────── Werkzeug & Zubehör ─────────
  {
    slug: "dritte-hand-vierte-hand",
    name: "Dritte Hand mit vierter Hand",
    title:
      "Dritte Hand Lötstation Lupe LED Krokodilklemmen Flexible Arme 4 6 8 Arme Werkstatt Halter Platine Löthilfe Elektronik Reparatur Profi Upgrade",
    category: "werkzeug",
    price: 89.9,
    compareAt: 269.9,
    description: [
      "Hält alles fest, ausser sich selbst. Mit sechs flexiblen Armen, von denen zwei funktionieren.",
      "Für zusätzliche Hände empfehlen wir Cedric und Philippe. Sie schauen gerne zu.",
    ],
    callouts: ["6 ARME · MANY HAND", "LED LUPE · BIG SEE", "KROKODIL KLEMME · BITE HOLD"],
    specs: [
      { k: "Arme", v: "6, davon 2 funktionieren" },
      { k: "Zuschauer", v: "2 (Cedric, Philippe)" },
      { k: "Lupe", v: "3×, LED mit 2 von 6 Dioden" },
      { k: "Standfestigkeit", v: "bis zum ersten Kabel" },
    ],
    ship: SZ,
    team: "joel",
    popularity: 72,
    added: "2026-08-11",
    reviews: [
      { by: "Cedric", stars: 4, text: "Hält gut. Ich halte trotzdem mit." },
      { by: "Philippe", stars: 5, text: "Benutze sie seit sechs Jahren. Sie mich auch." },
    ],
    art: {
      kind: "tool",
      variant: "helping",
      colors: ["#1d1f22", "#c8ccd1", "#d62828"],
      sticker: { text: "6 ARME|UPGRADE", shape: "burst" },
      size: "ca. 30 cm hoch",
    },
  },
  {
    slug: "silikon-loetmatte-xxl",
    name: "Silikon-Lötmatte XXL",
    title:
      "Silikon Lötmatte Hitzebeständig 500°C Magnetisch Arbeitsmatte Reparatur Handy Uhr Schrauben Fächer XXL Rutschfest Werkstatt Unterlage Profi",
    category: "werkzeug",
    price: 59.9,
    compareAt: 179.9,
    description: [
      "Hitzebeständig bis 500 °C, laut Etikett. Laut Joël bis 361 °C.",
      "Mit Fächern für Schrauben, die man nie wieder findet, und einer magnetischen Zone, die nichts anzieht.",
    ],
    callouts: ["500°C FEST · NO MELT", "MAGNETISCH · STICK METAL", "XXL GROSS · VERY BIG"],
    specs: [
      { k: "Hitzebeständig", v: "500 °C (Etikett), 361 °C (Joël)" },
      { k: "Grösse", v: "XXL (45 × 30 cm)" },
      { k: "Magnetzone", v: "vorhanden" },
      { k: "Fächer", v: "14" },
    ],
    ship: SZ,
    team: "joel",
    popularity: 66,
    added: "2026-06-28",
    reviews: [
      { by: "Joël", stars: 3, text: "Bei 362 °C hat sie anders gerochen." },
      { by: "Niklas", stars: 4, text: "Riecht nach dem Schmelzen fast wie Flux Nº 4." },
    ],
    art: {
      kind: "mat",
      colors: ["#2f6fb5", "#ffffff", "#f08a24"],
      label: "500°C",
      sticker: { text: "XXL|500°C", shape: "burst" },
      size: "45 × 30 cm",
    },
  },
  {
    slug: "pinzetten-set-37",
    name: "Pinzetten-Set, 37-teilig",
    title:
      "Präzisions Pinzette Set 37 Teilig Antimagnetisch Edelstahl ESD SMD Elektronik Uhrmacher Modellbau Profi Werkzeug Etui Spitz Gebogen Flach",
    category: "werkzeug",
    price: 49.9,
    compareAt: 159.9,
    description: [
      "37 Pinzetten, alle gleich. Für Kunden, die nicht gerne suchen.",
      "Antimagnetisch, antistatisch und, wie sich herausgestellt hat, auch anti-unterscheidbar.",
    ],
    callouts: ["37 TEILIG · MANY PICK", "ANTIMAGNETISCH · NO MAGNET", "EDELSTAHL · STRONG IRON"],
    specs: [
      { k: "Teile", v: "37 (identisch)" },
      { k: "Formen", v: "spitz" },
      { k: "Etui", v: "für 36 Pinzetten" },
      { k: "ESD", v: "ja" },
    ],
    ship: SZ,
    popularity: 58,
    added: "2026-09-09",
    reviews: [
      { by: "Levi", stars: 4, text: "Ich habe jedem Lehrling 18 gegeben. Eine ist übrig." },
      { by: "Cedric", stars: 5, text: "Ich habe die übrige." },
    ],
    art: {
      kind: "tool",
      variant: "tweezers",
      colors: ["#c8ccd1", "#2b2d31", "#2f6fb5"],
      sticker: { text: "37 STK|SET", shape: "tag" },
      size: "je ca. 12 cm",
    },
  },
  {
    slug: "led-lupenbrille-25x",
    name: "LED-Lupenbrille 25×",
    title:
      "Lupenbrille LED Kopflupe 25x Vergrösserung Stirnband Uhrmacher Elektronik Lesebrille Lötbrille Profi Licht Präzision Reparatur Schmuck",
    category: "werkzeug",
    price: 69.9,
    compareAt: 199.9,
    description: [
      "SMD ab Bauform 0402. Bauteile so klein, dass wir sie selbst kaum sehen. Jetzt sehen Sie sie.",
      "Ihr Gegenüber sieht Sie allerdings auch. Wir empfehlen das Tragen nur im Keller.",
    ],
    callouts: ["25X VERGRÖSSERUNG · BIG BIG", "LED LICHT · BRIGHT", "STIRNBAND · HEAD FIX"],
    specs: [
      { k: "Vergrösserung", v: "25× (gefühlt)" },
      { k: "Licht", v: "2 LED, eine davon hell" },
      { k: "Gewicht", v: "spürbar" },
      { k: "Stil", v: "unverkennbar" },
    ],
    ship: SZ,
    popularity: 52,
    added: "2026-08-02",
    reviews: [
      { by: "Joël", stars: 4, text: "Ich sehe jetzt meine Lötstellen. Manche hätte ich lieber nicht gesehen." },
      { by: "Maurice", stars: 5, text: "Trage sie für mein neues LinkedIn-Profilbild. Visionär." },
    ],
    art: {
      kind: "tool",
      variant: "glasses",
      colors: ["#1d1f22", "#9fd3ff", "#ffe14d"],
      sticker: { text: "25×|LED", shape: "burst" },
      size: "Einheitsgrösse",
    },
  },
  {
    slug: "loetrauch-absauger",
    name: "Lötrauch-Absauger",
    title:
      "Lötrauchabsauger Rauchabsauger Aktivkohle Filter Leise Lüfter Desktop Werkstatt Gesundheit Schutz Dämpfe Elektronik Labor Luftreiniger 2026",
    category: "werkzeug",
    price: 139,
    compareAt: 429,
    description: [
      "Kostenlose Dämpfe, täglich frisch. Jetzt mit Absauger, der die Dämpfe gleichmässig im Raum verteilt.",
      "Mit Aktivkohlefilter. Der Filter ist aktiv, die Kohle hält sich eher zurück.",
    ],
    callouts: ["AKTIVKOHLE · BLACK CLEAN", "LEISE LÜFTER · QUIET WIND", "GESUNDHEIT · GOOD LUNG"],
    specs: [
      { k: "Wirkung", v: "Verteilung" },
      { k: "Lautstärke", v: "leise, laut Verpackung" },
      { k: "Filter", v: "Aktivkohle, 1 Stück, nicht ersetzbar" },
      { k: "Empfohlen von", v: "Marwin (HR)" },
    ],
    ship: SZ,
    popularity: 47,
    added: "2026-09-25",
    reviews: [
      { by: "Marwin", stars: 4, text: "Seit der Anschaffung sind die Dämpfe im ganzen Keller gleich verteilt. Das ist fair." },
      { by: "Niklas", stars: 5, text: "Jetzt riecht auch der Gang nach Labor." },
    ],
    art: {
      kind: "tool",
      variant: "fan",
      colors: ["#2b2d31", "#c8ccd1", "#f08a24"],
      sticker: { text: "LEISE|SILENT", shape: "seal" },
      size: "ca. 18 × 18 cm",
    },
  },
  {
    slug: "loetkolben-pumpe-6-bar",
    name: "Lötkolben-Pumpe 6 bar",
    title:
      "Mini Luftpumpe Fahrrad Presta Schrader Manometer 6 bar Hochdruck Tragbar Universal Lötkolben Ventil Adapter Werkstatt Profi Pumpe Zubehör",
    category: "werkzeug",
    price: 34.9,
    compareAt: 99.9,
    description: [
      "Damon pumpt jeden Lötkolben vor dem Einsatz auf 6 bar. Als gelernter Fahrradmechaniker weiss er, warum. Wir nicht.",
      "Jetzt können Sie das auch. Mit Manometer, damit Sie sehen, dass es nichts bringt.",
    ],
    callouts: ["6 BAR DRUCK · HARD AIR", "MANOMETER · SEE PRESSURE", "DAMON EMPFEHLUNG · PRO TIP"],
    specs: [
      { k: "Druck", v: "bis 6 bar" },
      { k: "Ventil", v: "Lötkolben (Adapter separat)" },
      { k: "Wirkung", v: "nach Damon spürbar" },
      { k: "Herkunft der Idee", v: "Fahrradmechaniker EFZ" },
    ],
    ship: SZ,
    team: "damon",
    popularity: 63,
    added: "2026-10-24",
    reviews: [
      { by: "Damon", stars: 5, text: "Ein Kolben mit 4 bar lötet wie ein Kolben mit 4 bar. Ich sage nichts weiter." },
      { by: "Joël", stars: 3, text: "Ich habe nichts gemerkt. Damon sagt, das sei normal am Anfang." },
    ],
    art: {
      kind: "tool",
      variant: "pump",
      colors: ["#d62828", "#1d1f22", "#c8ccd1"],
      sticker: { text: "6 BAR|PRO", shape: "burst" },
      corner: "DAMON OK",
      size: "ca. 25 cm",
    },
  },
  {
    slug: "zentrierstaender-loetkolben",
    name: "Zentrierständer für Lötkolben",
    title:
      "Zentrierständer Montageständer Profi Werkstatt Fahrrad Laufrad Lötkolben Ausrichten Präzision Halter Klemme Stabil Stahl Mechaniker Qualität",
    category: "werkzeug",
    price: 179,
    compareAt: 549,
    description: [
      "Bei Damon wird jeder Kolben vor dem Einsatz zentriert, geölt und auf 6 bar gepumpt. Der Zentrierständer übernimmt Schritt eins.",
      "Für Schritt zwei empfehlen wir Öl. Für Schritt drei die Lötkolben-Pumpe 6 bar.",
    ],
    callouts: ["PRÄZISION · VERY STRAIGHT", "STAHL STABIL · NO WOBBLE", "MECHANIKER QUALITÄT · PRO"],
    specs: [
      { k: "Rundlauf", v: "±0.1 mm" },
      { k: "Klemme", v: "für Kolben bis 25 mm" },
      { k: "Gewicht", v: "7 kg (Versand nach Gewicht)" },
      { k: "Zentrierte Kolben", v: "bisher 1" },
    ],
    ship: SZ,
    team: "damon",
    popularity: 36,
    added: "2026-10-26",
    reviews: [
      { by: "Damon", stars: 5, text: "Mein Kolben lief einen Zehntelmillimeter unrund. Jetzt nicht mehr." },
      { by: "Deniz", stars: 4, text: "Habe das Zentrieren als Projekt aufgenommen." },
    ],
    art: {
      kind: "tool",
      variant: "stand",
      colors: ["#2f6fb5", "#1d1f22", "#f08a24"],
      sticker: { text: "PROFI|MECHANIK", shape: "seal" },
      size: "ca. 45 cm hoch",
    },
  },
  {
    slug: "hitzeschutzhandschuhe",
    name: "Hitzeschutzhandschuhe",
    title:
      "Hitzeschutz Handschuhe 800°C Feuerfest Grill BBQ Ofen Kamin Schweissen Löten Aramid Lang Unisex Küche Werkstatt Schutz Paar Profi",
    category: "werkzeug",
    price: 39.9,
    compareAt: 119.9,
    description: [
      "Damon hält den Lötkolben nie am heissen Ende. Für alle anderen gibt es diese Handschuhe.",
      "Feuerfest bis 800 °C. Das Feingefühl endet leider bei etwa 20 °C.",
    ],
    callouts: ["800°C FEUERFEST · NO BURN", "ARAMID FASER · SPACE CLOTH", "EXTRA LANG · LONG ARM"],
    specs: [
      { k: "Hitzeschutz", v: "800 °C" },
      { k: "Grösse", v: "Einheitsgrösse (Damon)" },
      { k: "Feingefühl", v: "keins" },
      { k: "Paar", v: "2 linke, laut Rückmeldungen" },
    ],
    ship: SZ,
    team: "damon",
    popularity: 45,
    added: "2026-07-03",
    reviews: [
      { by: "Damon", stars: 4, text: "Brauche ich nicht. Habe sie für Cedric gekauft." },
      { by: "Cedric", stars: 5, text: "Seither keine Verbrennungen. Auch keine Lötstellen." },
    ],
    art: {
      kind: "tool",
      variant: "gloves",
      colors: ["#e8c21a", "#1d1f22", "#d62828"],
      sticker: { text: "800°C|FEUERFEST", shape: "burst" },
      size: "Einheitsgrösse",
    },
  },
  {
    slug: "schutzbrille-trottmann-edition",
    name: "Schutzbrille «Trottmann Edition»",
    title:
      "Schutzbrille Arbeitsschutzbrille Klar Anti Beschlag Labor Chemie Löten Werkstatt Augenschutz EN166 Überbrille Brillenträger Unisex 2026 NEU Profi",
    category: "werkzeug",
    price: 24.9,
    compareAt: 89.9,
    description: [
      "Von Herrn Trottmann freigegeben, nachdem er sie drei Wochen lang getragen hat. Auch in der Kaffeepause. Auch jetzt.",
      "Pflicht in der Werkstatt, in Meetings und laut Herrn Trottmann auch beim Lesen dieser Produktbeschreibung.",
    ],
    callouts: ["ANTI BESCHLAG · NO FOG", "LABOR GEPRÜFT · CHEMIE OK", "PAUSE TAUGLICH · COFFEE SAFE"],
    specs: [
      { k: "Norm", v: "EN 166 (laut Verpackung)" },
      { k: "Beschlag", v: "nur beim Kaffee" },
      { k: "Passt über", v: "Brillen, Lupenbrillen und Zweifel" },
      { k: "Freigabe", v: "Herr Trottmann" },
    ],
    ship: SZ,
    team: "trottmann",
    popularity: 63,
    added: "2026-11-12",
    reviews: [
      { by: "Herr Trottmann", stars: 5, text: "Trage ich seit drei Wochen. Ich nehme sie nicht mehr ab." },
      { by: "Cedric", stars: 5, text: "Seit ich sie trage, sehe ich meine Fehler früher. Verhindern kann ich sie noch nicht." },
      { by: "Philippe", stars: 4, text: "Passt gut. Der Türrahmen leider immer noch nicht." },
    ],
    art: {
      kind: "tool",
      variant: "glasses",
      colors: ["#c2410c", "#e6f4ff", "#ffe14d"],
      label: "TROTTMANN",
      sticker: { text: "EN 166|GEPRÜFT", shape: "seal" },
      corner: "NEU",
      size: "Einheitsgrösse",
    },
  },
  {
    slug: "feuerloescher-abschliessbar",
    name: "Feuerlöscher, abschliessbar",
    title:
      "Feuerlöscher CO2 2kg Werkstatt Küche Auto Büro Brandschutz Notfall Löschgerät Wandhalterung Abschliessbar Sicherheit Profi Set Schlüssel Nicht Inbegriffen",
    category: "werkzeug",
    price: 89,
    compareAt: 249,
    description: [
      "Der Feuerlöscher der Zolilöt AG, jetzt auch für zu Hause. Wird abgeschlossen geliefert. Den Schlüssel hat Herr Trottmann.",
      "Im Brandfall bitte Herrn Trottmann kontaktieren. Er kommt, sobald die Lektion fertig ist.",
    ],
    callouts: ["CO₂ LÖSCHEN · FIRE STOP", "ABSCHLIESSBAR · VERY SAFE", "WANDHALTER · ON WALL"],
    specs: [
      { k: "Inhalt", v: "2 kg CO₂ (Titel), 100 ml (Etikett)" },
      { k: "Schlüssel", v: "nicht inbegriffen, liegt bei Herrn Trottmann" },
      { k: "Einsatzbereit", v: "nach Rücksprache" },
      { k: "Geeignet für", v: "Brandklasse B und Maurices Folien" },
    ],
    ship: SZ,
    team: "trottmann",
    popularity: 41,
    added: "2026-11-12",
    reviews: [
      { by: "Damon", stars: 4, text: "Musste ihn noch nie benutzen. Ich spreche ruhig mit dem Kolben." },
      { by: "Cedric", stars: 3, text: "Hätte ihn letzte Woche gebraucht. Herr Trottmann war im Unterricht." },
      { by: "Herr Trottmann", stars: 5, text: "Bleibt abgeschlossen. Das ist der Sinn der Sache." },
    ],
    art: {
      kind: "bottle",
      colors: ["#d62828", "#1d1f22", "#ffe14d"],
      label: "CO₂ LÖSCHER",
      sticker: { text: "2 KG|LAUT TITEL", shape: "burst" },
      size: "100 ml",
    },
  },
  {
    slug: "sicherheitsdatenblatt-pdf",
    name: "Sicherheitsdatenblatt Zolilöt AG (PDF)",
    title:
      "Sicherheitsdatenblatt SDB PDF Download 16 Abschnitte ChemV Konform Firma Gemisch Gefahrstoff Profi Vorlage Sofort Digital Original Signiert",
    category: "digital",
    price: 9.9,
    compareAt: 49.9,
    description: [
      "Alle 16 Abschnitte, von Herrn Trottmann verfasst und von Frau Deubelbeiss lektoriert. Gratis lesbar unter /sicherheit. Hier kostet es 9.90.",
      "Für den Preis bekommen Sie dasselbe Dokument, aber mit dem guten Gefühl, dafür bezahlt zu haben.",
    ],
    callouts: ["16 ABSCHNITTE · MANY PART", "SIGNIERT · REAL NAME", "SOFORT DOWNLOAD · FAST SAFE"],
    specs: [
      { k: "Seiten", v: "16 Abschnitte" },
      { k: "Format", v: "PDF" },
      { k: "Signalwort", v: "Achtung" },
      { k: "Gratis-Version", v: "identisch" },
    ],
    ship: { from: "digital", min: 0, max: null, note: "per E-Mail, sobald Zoltán sich meldet" },
    team: "trottmann",
    popularity: 38,
    added: "2026-11-12",
    reviews: [
      { by: "Joël", stars: 5, text: "Gelesen. Danach weitergelötet." },
      { by: "Niklas", stars: 2, text: "Abschnitt 3 ist falsch. Was richtig wäre, sage ich nicht." },
    ],
    art: {
      kind: "card",
      variant: "ebook",
      colors: ["#d62828", "#ffffff", "#ffe14d"],
      label: "SICHERHEITS DATENBLATT",
      sticker: { text: "PDF|SIGNIERT", shape: "seal" },
      size: "16 Abschnitte",
    },
  },

  // ───────── Kabel & Adapter ─────────
  {
    slug: "ladekabel-repariert",
    name: "Ladekabel, von uns repariert",
    title:
      "USB-C Ladekabel 2 in 1 Schnellladen 100W Nylon Geflochten 2m Handy Tablet Laptop Universal Datenkabel Repariert Refurbished Nachhaltig",
    category: "kabel",
    price: 29.9,
    compareAt: 89.9,
    description: [
      "Ein Kunde hat uns ein kaputtes Ladekabel gegeben. Jetzt hat er zwei kaputte Ladekabel. Fünf Sterne.",
      "Jedes Kabel wird von Hand nachgelötet. Ob es lädt, kommt auf den Winkel an.",
    ],
    callouts: ["2 IN 1 · TWO CABLE", "NYLON GEFLOCHTEN · STRONG HAIR", "HANDGELÖTET · HAND MADE"],
    specs: [
      { k: "Funktion", v: "kommt auf den Winkel an" },
      { k: "Länge", v: "2 m (in zwei Teilen)" },
      { k: "Leistung", v: "100 W (Aufdruck)" },
      { k: "Reparatur-Garantie", v: "2 Tage" },
    ],
    ship: { from: "Keller Aarau", min: 1, max: 3, note: "Versand ab Keller, Umweg über Shenzhen" },
    team: "joel",
    popularity: 86,
    added: "2026-09-18",
    reviews: [
      { by: "Linus", stars: 5, text: "Aus einem verkauften Kabel werden zwei verkaufte Kabel. Bestes Produkt im Shop." },
      { by: "Joël", stars: 4, text: "Lädt, wenn man es so hält wie ich." },
    ],
    art: {
      kind: "cable",
      variant: "broken",
      colors: ["#ffffff", "#c8ccd1", "#f08a24"],
      label: "USB-C",
      sticker: { text: "2 IN 1|100W", shape: "burst" },
      corner: "REPARIERT",
      size: "2 m (2 Teile)",
    },
  },
  {
    slug: "kabel-nach-augenmass",
    name: "Kabel nach Augenmass",
    title:
      "Kabel Meterware Kupfer Litze Flexibel Rot Schwarz 0.5mm² 1mm² Länge nach Wahl Elektro Installation KFZ Modellbau Lautsprecher Zwillingslitze",
    category: "kabel",
    price: 19.9,
    compareAt: 59.9,
    unit: "pro ungefähr Meter",
    description: [
      "Längen nach Augenmass. Wir machen aus einem Kabel zwei oder aus zwei Kabeln eines, je nach Auftrag, manchmal auch unabhängig davon.",
      "Zugeschnitten im Keller von Hand. Die Hand ist erfahren, das Mass nicht.",
    ],
    callouts: ["KUPFER LITZE · COPPER GOOD", "ROT SCHWARZ · TWO COLOUR", "NACH WAHL · YOU CHOOSE"],
    specs: [
      { k: "Länge", v: "ungefähr 1 m" },
      { k: "Toleranz", v: "±40 cm" },
      { k: "Querschnitt", v: "0.5 mm² oder 1 mm²" },
      { k: "Farben", v: "Rot und Schwarz, Reihenfolge nach Gefühl" },
    ],
    variants: { label: "Länge", options: [{ name: "ungefähr 1 m" }, { name: "ziemlich genau 1 m", delta: 15 }, { name: "Linus-Meter", delta: -5 }] },
    ship: { from: "Keller Aarau", min: 1, max: 3, note: "Versand ab Keller, Umweg über Shenzhen" },
    popularity: 50,
    added: "2026-05-02",
    reviews: [
      { by: "Linus", stars: 5, text: "Ein Linus-Meter ist das, was der Kunde braucht." },
      { by: "Joël", stars: 2, text: "Es waren 61 cm." },
    ],
    art: {
      kind: "cable",
      colors: ["#d62828", "#1d1f22", "#b87333"],
      count: 2,
      sticker: { text: "METER|WARE", shape: "tag" },
      size: "ca. 1 m ±40 cm",
    },
  },
  {
    slug: "adapter-adapter",
    name: "Adapter-Adapter",
    title:
      "Universal Adapter Set 32 in 1 USB-C auf USB-A Mikro Klinke HDMI Reise Adapter Konverter Alle Geräte Kompatibel Multiport Hub Stecker Set",
    category: "kabel",
    price: 49.9,
    compareAt: 149.9,
    description: [
      "Adaptiert jeden Adapter auf einen anderen Adapter. Wofür Sie ursprünglich einen Adapter brauchten, ist danach nicht mehr wichtig.",
      "32 Anschlüsse in einem Set. Wir haben noch keinen Fall gefunden, in dem man einen davon braucht.",
    ],
    callouts: ["32 IN 1 · ALL CONNECT", "UNIVERSAL · EVERY THING", "REISE · TRAVEL OK"],
    specs: [
      { k: "Anschlüsse", v: "32 (davon 0 benötigt)" },
      { k: "Kompatibel", v: "mit sich selbst" },
      { k: "Länge", v: "je nach Kombination bis 1.4 m" },
      { k: "Anleitung", v: "Chinesisch, 3 Seiten" },
    ],
    ship: SZ,
    popularity: 69,
    added: "2026-08-20",
    reviews: [
      { by: "Dijar", stars: 4, text: "Habe einen HDMI-Port über 7 Adapter an ein USB-C-Kabel angeschlossen. Wozu, weiss ich nicht mehr." },
      { by: "Deniz", stars: 5, text: "Perfekt für Projekte, die noch in Abklärung sind." },
    ],
    art: {
      kind: "box",
      variant: "adapters",
      colors: ["#1d1f22", "#f08a24", "#c8ccd1"],
      label: "32 IN 1",
      sticker: { text: "32 IN 1|UNIVERSAL", shape: "burst" },
      size: "Box ca. 15 × 10 cm",
    },
  },
  {
    slug: "kabel-organizer-vorverknotet",
    name: "Kabel-Organizer, vorverknotet",
    title:
      "Kabel Organizer Ordnung Kabelmanagement Schreibtisch Klett Clips Set Bunt Gemischt Büro Gaming Aufräumen Kabelbinder Kabelsalat Lösung",
    category: "kabel",
    price: 39.9,
    compareAt: 119.9,
    description: [
      "Kommt bereits verknotet an, damit Sie sich die Arbeit sparen.",
      "14 Knoten, von Hand gesetzt. Jeder Knoten ist ein Unikat, das Lösen auch.",
    ],
    callouts: ["ORDNUNG · NO CHAOS", "VORVERKNOTET · READY KNOT", "BUNT GEMISCHT · MANY COLOUR"],
    specs: [
      { k: "Knoten", v: "14" },
      { k: "Lösbar", v: "theoretisch" },
      { k: "Clips", v: "6, verknotet" },
      { k: "Ordnung", v: "nach dem Auspacken nicht wiederherstellbar" },
    ],
    ship: SZ,
    popularity: 38,
    added: "2026-07-30",
    reviews: [
      { by: "Levi", stars: 3, text: "Habe ihn Philippe zum Lösen gegeben. Er sagt, er brauche noch ein Jahr." },
      { by: "Marwin", stars: 4, text: "Gute Teamübung. Hat 3 Stunden gedauert und niemand wurde befördert." },
    ],
    art: {
      kind: "cable",
      variant: "knot",
      colors: ["#2f6fb5", "#d62828", "#3fa34d"],
      sticker: { text: "ORDNUNG|2026", shape: "seal" },
      size: "ca. 20 cm (Knäuel)",
    },
  },
  {
    slug: "verlaengerungskabel-0-5-cm",
    name: "Verlängerungskabel 0.5 cm",
    title:
      "Verlängerungskabel Kurz Mini Ultra Kompakt Platzsparend Premium Kupfer Typ 13 Schweiz Reise Steckdose Verlängerung Weiss Flach Neu",
    category: "kabel",
    price: 24.9,
    compareAt: 79.9,
    description: [
      "Verlängert Ihr Kabel um 0.5 cm. Für alle, denen genau so viel gefehlt hat.",
      "Ultra kompakt. Auf dem Produktbild wirkt es länger, das ist Absicht.",
    ],
    callouts: ["ULTRA KOMPAKT · VERY SMALL", "TYP 13 · SWISS PLUG", "PREMIUM KUPFER · GOOD ELECTRIC"],
    specs: [
      { k: "Länge", v: "0.5 cm (Bild ähnlich)" },
      { k: "Stecker", v: "Typ 13" },
      { k: "Verlängerung", v: "messbar mit Lupenbrille 25×" },
      { k: "Farbe", v: "Weiss" },
    ],
    ship: SZ,
    popularity: 57,
    added: "2026-10-15",
    reviews: [
      { by: "Julius", stars: 5, text: "Hat mir genau gefehlt." },
      { by: "Deniz", stars: 4, text: "Damit erreicht das Kabel jetzt fast die Steckdose. Projekt läuft." },
    ],
    art: {
      kind: "cable",
      variant: "short",
      colors: ["#ffffff", "#c8ccd1", "#1d1f22"],
      sticker: { text: "ULTRA|KOMPAKT", shape: "burst" },
      corner: "BILD ÄHNLICH",
      size: "0.5 cm",
    },
  },
  {
    slug: "wlan-kabel",
    name: "WLAN-Kabel",
    title:
      "WLAN Kabel Kabelloses Netzwerk Kabel Gigabit Wifi 7 Highspeed Gaming Router Verstärker LAN 10m Flach Internet Schnell Stabil 2026",
    category: "kabel",
    price: 79.9,
    compareAt: 249.9,
    description: [
      "Das WLAN von Dijar, jetzt auch als Kabel. Das Passwort ist nicht im Lieferumfang.",
      "Kabellos verkabelt, für alle, die sich nicht entscheiden möchten. 10 Meter Reichweite, kabelabhängig.",
    ],
    callouts: ["KABELLOS KABEL · WIRE NO WIRE", "GIGABIT · VERY FAST", "10M REICHWEITE · LONG NET"],
    specs: [
      { k: "Passwort", v: "kennt Dijar" },
      { k: "Länge", v: "10 m" },
      { k: "Standard", v: "WLAN, aber im Kabel" },
      { k: "Geschwindigkeit", v: "abhängig von Dijars Server" },
    ],
    ship: SZ,
    popularity: 81,
    added: "2026-11-03",
    reviews: [
      { by: "Dijar", stars: 5, text: "Funktioniert hervorragend, solange es mit meinem Server verbunden ist." },
      { by: "Zoltán", stars: 3, text: "Ich bin verbunden, aber habe keinen Zugriff. Wie bei der Website." },
    ],
    art: {
      kind: "cable",
      variant: "wlan",
      colors: ["#2f6fb5", "#f6f5f2", "#f08a24"],
      label: "WLAN",
      sticker: { text: "GIGABIT|WLAN", shape: "burst" },
      corner: "NEU",
      size: "10 m",
    },
  },

  // ───────── Merch & Lifestyle ─────────
  {
    slug: "hoodie-thought-leader",
    name: "Hoodie #THOUGHT LEADER",
    title:
      "Hoodie Herren Oversize Streetwear Motivation Spruch Thought Leader Visionär Hustle Grindset Unternehmer Mindset Geschenk Kapuzenpullover Orange",
    category: "merch",
    price: 89.9,
    compareAt: 279.9,
    description: [
      "Maurice trägt ihn zu jeder Präsentation. Die Präsentationen sind orange.",
      "Bedruckt mit #THOUGHT LEADER, damit es niemand übersieht. Oversize, wie die Visionen.",
    ],
    callouts: ["OVERSIZE · BIG STYLE", "MINDSET DRUCK · THINK SHIRT", "WEICH BAUMWOLLE · SOFT"],
    specs: [
      { k: "Farbe", v: "Orange" },
      { k: "Druck", v: "#THOUGHT LEADER" },
      { k: "Passform", v: "Oversize" },
      { k: "Material", v: "80 % Baumwolle, 20 % Vision" },
    ],
    variants: { label: "Farbe", options: [{ name: "Orange" }, { name: "Orange (anders)" }, { name: "Orange (Maurice)", delta: 10 }] },
    ship: SZ,
    team: "maurice",
    popularity: 85,
    added: "2026-10-05",
    reviews: [
      { by: "Maurice", stars: 5, text: "Visionär. Storyteller. Disruptor. Und jetzt auch im Hoodie." },
      { by: "Linus", stars: 5, text: "Trage ihn bei Kundengesprächen. Die Kunden kaufen schneller, um gehen zu dürfen." },
    ],
    art: {
      kind: "garment",
      variant: "hoodie",
      colors: ["#f08a24", "#ffffff", "#c0611a"],
      label: "#THOUGHT LEADER",
      sticker: { text: "MINDSET|2026", shape: "burst" },
      size: "Grösse M bis XXL",
    },
  },
  {
    slug: "tasse-wir-machens-moeglich",
    name: "Tasse «Wir machens möglich»",
    title:
      "Tasse Kaffeebecher Spruch Lustig Büro Motivation Chef Kollegen Geschenk Keramik 330ml Spülmaschinenfest Wir machens möglich Slogan Firma",
    category: "merch",
    price: 34.9,
    compareAt: 99.9,
    description: [
      "Mit unserem Slogan «Wir machens möglich». Frau Deubelbeiss hat ihn dreimal rot angestrichen. Wir haben ihn trotzdem gedruckt.",
      "Auf Wunsch auch mit ihren Korrekturen, von Hand übertragen. Das ist die Version, die wir empfehlen.",
    ],
    callouts: ["330ML · BIG COFFEE", "SPÜLMASCHINEN FEST · WASH OK", "SLOGAN DRUCK · WORD CUP"],
    specs: [
      { k: "Inhalt", v: "330 ml" },
      { k: "Druck", v: "Wir machens möglich" },
      { k: "Rechtschreibung", v: "umstritten" },
      { k: "Spülmaschinenfest", v: "der Druck ja, der Slogan nicht" },
    ],
    variants: { label: "Ausführung", options: [{ name: "Original" }, { name: "mit Korrekturen von Frau Deubelbeiss", delta: 5 }] },
    ship: SZ,
    team: "maurice",
    popularity: 90,
    added: "2026-09-28",
    reviews: [
      { by: "Maurice", stars: 5, text: "Der Slogan auf 14 Folien war gut. Auf einer Tasse ist er besser." },
      { by: "Frau Deubelbeiss", stars: 2, text: "Die Tasse ist schön. Der Slogan ist nach wie vor nicht korrekt." },
    ],
    art: {
      kind: "mug",
      colors: ["#ffffff", "#2b2d31", "#d62828"],
      label: "Wir machens möglich.",
      sticker: { text: "BESTSELLER|SLOGAN", shape: "seal" },
      size: "330 ml",
    },
  },
  {
    slug: "ceo-cap",
    name: "CEO-Cap",
    title:
      "Cap Baseball Kappe Herren CEO Boss Chef Bestickt Verstellbar Unisex Snapback Business Geschenk Mütze Sonne Stickerei Premium Logo",
    category: "merch",
    price: 49.9,
    compareAt: 149.9,
    description: [
      "Macht Sie zum CEO. Das Stimmrecht beträgt 2 %.",
      "Mit gesticktem CEO-Schriftzug. Zoltán trägt sie, wenn Entscheidungen anstehen, die er nicht trifft.",
    ],
    callouts: ["CEO STICKEREI · BOSS WORD", "VERSTELLBAR · ALL HEAD", "PREMIUM · RICH CAP"],
    specs: [
      { k: "Stimmrecht", v: "2 %" },
      { k: "Stickerei", v: "CEO" },
      { k: "Grösse", v: "verstellbar" },
      { k: "Autorität", v: "symbolisch" },
    ],
    ship: SZ,
    popularity: 67,
    added: "2026-09-04",
    reviews: [
      { by: "Zoltán", stars: 5, text: "Sie steht mir. Wie die Firma, eigentlich." },
      { by: "Julius", stars: 4, text: "Ich habe mir auch eine bestellt. Ich auch." },
    ],
    art: {
      kind: "garment",
      variant: "cap",
      colors: ["#2b2d31", "#f08a24", "#ffffff"],
      label: "CEO",
      sticker: { text: "BOSS|EDITION", shape: "tag" },
      size: "verstellbar",
    },
  },
  {
    slug: "t-shirt-mitarbeiter-des-monats",
    name: "T-Shirt «Mitarbeiter des Monats»",
    title:
      "T-Shirt Herren Mitarbeiter des Monats Lustig Spruch Arbeit Kollege Geschenk Baumwolle Premium Rundhals Kurzarm Büro Firma Team Shirt",
    category: "merch",
    price: 39.9,
    compareAt: 119.9,
    description: [
      "Joël ist seit 24 Monaten in Folge Mitarbeiter des Monats. Er besitzt 24 dieser T-Shirts.",
      "Jetzt auch für Sie, unabhängig von Ihrer Leistung. Bei Joël war das anders.",
    ],
    callouts: ["PREMIUM BAUMWOLLE · SOFT COTTON", "RUNDHALS · ROUND NECK", "STOLZ DRUCK · PROUD"],
    specs: [
      { k: "Waschbarkeit", v: "einmal" },
      { k: "Material", v: "100 % Baumwolle (Etikett)" },
      { k: "Druck", v: "Mitarbeiter des Monats" },
      { k: "Joël besitzt", v: "24" },
    ],
    ship: SZ,
    team: "joel",
    popularity: 76,
    added: "2026-08-15",
    reviews: [
      { by: "Joël", stars: 4, text: "Ich habe jetzt 25. Eines war ein Geschenk von mir an mich." },
      { by: "Cedric", stars: 5, text: "Trage es, bis ich es werde." },
    ],
    art: {
      kind: "garment",
      variant: "tee",
      colors: ["#2b2d31", "#f08a24", "#ffffff"],
      label: "MITARBEITER DES MONATS",
      sticker: { text: "PREMIUM|COTTON", shape: "seal" },
      size: "Grösse S bis XXL",
    },
  },
  {
    slug: "visionaer-kalender-2027",
    name: "Visionär-Kalender 2027",
    title:
      "Wandkalender 2027 Motivation Erfolg Mindset 12 Monate Thought Leader Zitate Büro Deko A3 Planer Inspiration Geschenk Unternehmer",
    category: "merch",
    price: 44.9,
    compareAt: 134.9,
    description: [
      "12 Monate, 12 Zitate von Maurice, alle orange.",
      "Jeder Monat beginnt mit einer Vision. Die Vision von März ist dieselbe wie die von Februar, aber grösser gedruckt.",
    ],
    callouts: ["12 MONATE · ALL YEAR", "ZITATE · WISE WORD", "A3 GROSS · BIG WALL"],
    specs: [
      { k: "Monate", v: "12 (alle orange)" },
      { k: "Format", v: "A3" },
      { k: "Zitate", v: "Maurice" },
      { k: "Feiertage", v: "nicht eingetragen, Hustle" },
    ],
    ship: SZ,
    team: "maurice",
    popularity: 44,
    added: "2026-10-18",
    reviews: [
      { by: "Maurice", stars: 5, text: "Das Zitat im Juli habe ich mir selbst gewidmet." },
      { by: "Frau Deubelbeiss", stars: 3, text: "Im April fehlt ein Komma. Im Mai fehlen zwei." },
    ],
    art: {
      kind: "card",
      variant: "calendar",
      colors: ["#f08a24", "#ffffff", "#2b2d31"],
      label: "2027",
      sticker: { text: "MINDSET|2027", shape: "burst" },
      size: "A3",
    },
  },
  {
    slug: "mauspad-aktienregister",
    name: "Mauspad «Aktienregister»",
    title:
      "Mauspad XXL Gaming Schreibtischunterlage Excel Tabelle Shortcuts Spickzettel Büro Rutschfest 90x40cm Genäht Rand Wasserfest Office Pro",
    category: "merch",
    price: 39.9,
    compareAt: 119.9,
    description: [
      "Mit aufgedruckter Excel-Tabelle, nach dem Vorbild des echten Aktienregisters auf Dijars Laptop.",
      "Die Zelle von Zoltán ist bereits auf 2 % gesperrt. Das Passwort für die Zelle kennt Dijar.",
    ],
    callouts: ["XXL 90X40 · VERY LONG", "EXCEL DRUCK · TABLE PRINT", "RUTSCHFEST · NO SLIDE"],
    specs: [
      { k: "Grösse", v: "90 × 40 cm" },
      { k: "Schreibschutz", v: "Spalte C" },
      { k: "Aufdruck", v: "Aktienregister, Stand: Dienstagnachmittag" },
      { k: "Bearbeitet von", v: "Dijar" },
    ],
    ship: SZ,
    popularity: 60,
    added: "2026-10-10",
    reviews: [
      { by: "Dijar", stars: 5, text: "Originalgetreu. Ich habe es selbst gestaltet." },
      { by: "Zoltán", stars: 2, text: "Ich habe versucht, meine Zelle zu bearbeiten. Es ist ein Mauspad." },
    ],
    art: {
      kind: "mat",
      variant: "sheet",
      colors: ["#1d1f22", "#3fa34d", "#f08a24"],
      label: "AKTIENREGISTER.XLSX",
      sticker: { text: "XXL|90×40", shape: "tag" },
      size: "90 × 40 cm",
    },
  },
  {
    slug: "badge-zutritt-keller",
    name: "Badge «Zutritt Keller»",
    title:
      "Ausweishalter Lanyard Schlüsselband Badge Halter Mitarbeiter Ausweis Büro Firma Zutritt Personalisiert Karte Clip Umhängeband Sicherheit",
    category: "merch",
    price: 19.9,
    compareAt: 59.9,
    description: [
      "Gewährt Zutritt zum Kellergeschoss der Zolilöt AG, Aarau.",
      "Der Keller ist nicht abgeschlossen. Mit Badge fühlt es sich trotzdem offizieller an.",
    ],
    callouts: ["ZUTRITT · ENTER OK", "SICHERHEIT · SAFE CARD", "LANYARD · NECK STRING"],
    specs: [
      { k: "Sicherheitsstufe", v: "keine" },
      { k: "Zutritt", v: "Kellergeschoss" },
      { k: "Kontrolle", v: "nicht vorgesehen" },
      { k: "Band", v: "orange, 90 cm" },
    ],
    ship: SZ,
    popularity: 49,
    added: "2026-09-12",
    reviews: [
      { by: "Marwin", stars: 5, text: "Alle neuen Mitarbeitenden bekommen eins. Wir haben aktuell keine neuen Mitarbeitenden." },
      { by: "Cedric", stars: 4, text: "Bin damit reingekommen. Ohne auch." },
    ],
    art: {
      kind: "card",
      variant: "badge",
      colors: ["#f08a24", "#ffffff", "#2b2d31"],
      label: "ZUTRITT KELLER",
      sticker: { text: "SECURITY|PRO", shape: "seal" },
      size: "Karte 8.5 × 5.4 cm",
    },
  },

  // ───────── Kurse, Digitales & Beteiligungen ─────────
  {
    slug: "loet-dropshipping-masterclass",
    name: "Löt-Dropshipping-Masterclass (Linus)",
    title:
      "Masterclass Online Kurs Dropshipping Passives Einkommen 2026 Erfolg Millionär Business Mindset Video Kurs Zertifikat Verkaufen Lernen Linus",
    category: "digital",
    price: 1997,
    compareAt: 9997,
    description: [
      "Linus erklärt in 14 Modulen, wie man Dinge verkauft, die man gar nicht anbietet. Besonders die.",
      "Alle Folien von Maurice gestaltet, alle orange. Mit Zertifikat, unterschrieben von Linus und, sobald er sich meldet, von Zoltán.",
    ],
    callouts: ["14 MODULE · MANY LEARN", "PASSIVES EINKOMMEN · MONEY SLEEP", "ZERTIFIKAT · PAPER PROOF"],
    specs: [
      { k: "Module", v: "14 (alle orange)" },
      { k: "Dauer", v: "so lange, bis Sie kaufen" },
      { k: "Zertifikat", v: "ja, ohne Wert" },
      { k: "Erfolgsquote", v: "Linus: 100 %" },
    ],
    ship: { from: "digital", min: 0, max: null, note: "per E-Mail, sobald Zoltán sich meldet" },
    team: "maurice",
    popularity: 73,
    added: "2026-10-28",
    reviews: [
      { by: "Linus", stars: 5, text: "Ich habe den Kurs mir selbst verkauft. Damit ist er bewiesen." },
      { by: "Maurice", stars: 5, text: "Die Folien sind meine besten. Modul 9 hat 40 Folien." },
    ],
    art: {
      kind: "card",
      variant: "course",
      colors: ["#2b2d31", "#f08a24", "#ffffff"],
      label: "MASTERCLASS",
      sticker: { text: "-80 %|NUR HEUTE", shape: "burst" },
      corner: "BESTSELLER",
      size: "14 Module",
    },
  },
  {
    slug: "namenaktie-zolilot-ag",
    name: "1 Namenaktie Zolilöt AG",
    title:
      "Aktie Zolilöt AG Namenaktie Beteiligung Investment Startup Unternehmen Anteil Zertifikat Geschenk Anleger 2026 Wertanlage Rendite Aktionär",
    category: "digital",
    price: 4900,
    compareAt: 49000,
    description: [
      "Aus dem Bestand von Zoltán. Er hat ohnehin nur 2 %, das merkt er nicht.",
      "Stimmrecht 0 %. Die Eintragung ins Aktienregister erfolgt nach Ermessen von Dijar, der als Einziger Zugriff auf die Excel-Datei hat.",
    ],
    callouts: ["BETEILIGUNG · OWN COMPANY", "ZERTIFIKAT · PAPER SHARE", "RENDITE · MAYBE MONEY"],
    specs: [
      { k: "Stimmrecht", v: "0 %" },
      { k: "Eintrag", v: "Dijar entscheidet" },
      { k: "Herkunft", v: "Bestand Zoltán" },
      { k: "Dividende", v: "wird demokratisch abgelehnt" },
      { k: "Generalversammlung", v: "4 Sekunden, Ergebnis 98 zu 2" },
    ],
    ship: { from: "digital", min: 0, max: null, note: "Eintrag ins Aktienregister: Dijar entscheidet" },
    popularity: 41,
    added: "2026-10-01",
    reviews: [
      { by: "Dijar", stars: 5, text: "Ich habe den Kauf geprüft und ihn nicht eingetragen. Danke für Ihr Vertrauen." },
      { by: "Zoltán", stars: 1, text: "Wer hat meine Aktien verkauft?" },
    ],
    art: {
      kind: "card",
      variant: "share",
      colors: ["#f6f0dc", "#2b2d31", "#c9a227"],
      label: "NAMENAKTIE",
      sticker: { text: "INVEST|2026", shape: "seal" },
      size: "A4",
    },
  },
  {
    slug: "loetstelle-nft",
    name: "Lötstelle als NFT",
    title:
      "NFT Digital Kunst Sammlerstück Blockchain Lötstelle Einzigartig Krypto Investition Limitiert 1 von 1 Zertifikat Kunstwerk Wertanlage Digital",
    category: "digital",
    price: 349,
    compareAt: 3490,
    description: [
      "Ein Foto einer Lötstelle von Joël. Er hat 24 davon gemacht, alle sind 1 von 1.",
      "Mit Echtheitszertifikat. Die Lötstelle selbst bleibt im Keller und gehört weiterhin Joël.",
    ],
    callouts: ["1 VON 1 · ONLY ONE", "BLOCKCHAIN · BLOCK CHAIN", "KUNST · ART VERY"],
    specs: [
      { k: "Auflage", v: "1 von 1 (24×)" },
      { k: "Motiv", v: "Lötstelle, Joël" },
      { k: "Format", v: "JPG" },
      { k: "Rechte", v: "Sie dürfen es anschauen" },
    ],
    ship: { from: "digital", min: 0, max: null, note: "per E-Mail, sobald Zoltán sich meldet" },
    team: "joel",
    popularity: 39,
    added: "2026-07-07",
    reviews: [
      { by: "Joël", stars: 3, text: "Das ist meine Lötstelle. Ich verstehe es nicht, aber sie ist gut." },
      { by: "Dijar", stars: 5, text: "Liegt auf meinem Server. Sicherer geht es nicht." },
    ],
    art: {
      kind: "board",
      variant: "nft",
      colors: ["#1f6d3a", "#c8ccd1", "#c9a227"],
      label: "1/1",
      sticker: { text: "1 VON 1|NFT", shape: "burst" },
      size: "1080 × 1080 px",
    },
  },
  {
    slug: "ebook-kalte-loetstellen",
    name: "E-Book «Kalte Lötstellen, die wir zugeben»",
    title:
      "E-Book PDF Ratgeber Löten Lernen Anfänger Profi Tipps Tricks Geheimnisse Experten Sofort Download Elektronik Handbuch Deutsch Bestseller",
    category: "digital",
    price: 29.9,
    compareAt: 89.9,
    description: [
      "Alle kalten Lötstellen, die wir zugeben, auf einen Blick.",
      "Bestseller in seiner Kategorie. Die Kategorie hat ein Buch.",
    ],
    callouts: ["SOFORT DOWNLOAD · FAST BOOK", "EXPERTEN WISSEN · SMART PAGE", "BESTSELLER · MANY BUY"],
    specs: [
      { k: "Seiten", v: "0" },
      { k: "Format", v: "PDF" },
      { k: "Lesedauer", v: "sofort" },
      { k: "Lektorat", v: "nicht nötig" },
    ],
    ship: { from: "digital", min: 0, max: null, note: "per E-Mail, sobald Zoltán sich meldet" },
    popularity: 54,
    added: "2026-08-25",
    reviews: [
      { by: "Levi", stars: 5, text: "Habe es den Lehrlingen als Pflichtlektüre gegeben. Alle waren pünktlich fertig." },
      { by: "Philippe", stars: 4, text: "Ich lese es zum sechsten Mal." },
    ],
    art: {
      kind: "card",
      variant: "ebook",
      colors: ["#2f6fb5", "#ffffff", "#f08a24"],
      label: "KALTE LÖTSTELLEN",
      sticker: { text: "E-BOOK|BESTSELLER", shape: "seal" },
      size: "0 Seiten",
    },
  },
  {
    slug: "loet-consulting-nicken",
    name: "Löt-Consulting: 1 Stunde Nicken",
    title:
      "Beratung Coaching 1:1 Session Experte Consulting Business Mentor Persönlich Erfolg Strategie CEO Löten Feedback Stunde Termin Exklusiv",
    category: "digital",
    price: 120,
    compareAt: 360,
    description: [
      "Sie löten, Zoltán steht daneben, verschränkt die Arme und nickt anerkennend. Das Nicken ist im Preis inbegriffen.",
      "Auf Wunsch mit verschränkten Armen. Termine nach der Schule, sobald Zoltán sich meldet.",
    ],
    callouts: ["1:1 SESSION · ONE ONE", "CEO NICKEN · BOSS YES", "ERFOLG · WIN"],
    specs: [
      { k: "Dauer", v: "60 Minuten" },
      { k: "Nicken", v: "inbegriffen" },
      { k: "Mitarbeit", v: "nicht vorgesehen" },
      { k: "Tarif", v: "CHF 120.00 / h, wie auf der Website" },
    ],
    variants: { label: "Ausführung", options: [{ name: "Standard" }, { name: "mit verschränkten Armen", delta: 20 }] },
    ship: { from: "digital", min: 0, max: null, note: "Termin, sobald Zoltán sich meldet" },
    popularity: 46,
    added: "2026-09-21",
    reviews: [
      { by: "Joël", stars: 5, text: "Ich habe eine Stunde gelötet. Zoltán hat eine Stunde genickt. Faire Aufteilung." },
      { by: "Zoltán", stars: 5, text: "Ich habe sehr anerkennend genickt." },
    ],
    art: {
      kind: "card",
      variant: "ticket",
      colors: ["#2b2d31", "#f08a24", "#ffffff"],
      label: "1 STUNDE NICKEN",
      sticker: { text: "CEO|1:1", shape: "tag" },
      size: "60 Minuten",
    },
  },
  {
    slug: "lehrjahr-7-verlaengerung",
    name: "Lehrjahr 7 (Verlängerung)",
    title:
      "Lehre Verlängerung Zusatzjahr Ausbildung Weiterbildung Zertifikat Lehrling Karriere Berufsbildung Upgrade Sicherheit Erfahrung Jahr Extra",
    category: "digital",
    price: 2490,
    compareAt: 6990,
    description: [
      "Die Lehre dauert vier Jahre. Wer ganz sicher sein will, verlängert.",
      "Philippe hat das siebte Lehrjahr bereits vorbestellt. Levi hat die Bestellung bestätigt und kurz durchgeatmet.",
    ],
    callouts: ["EXTRA JAHR · MORE YEAR", "SICHERHEIT · VERY SURE", "KARRIERE · GO UP"],
    specs: [
      { k: "Dauer", v: "1 Jahr (erfahrungsgemäss 3)" },
      { k: "Berufsbildner", v: "Levi" },
      { k: "Vorbestellt von", v: "Philippe" },
      { k: "Abschluss", v: "in Abklärung" },
    ],
    ship: { from: "digital", min: 0, max: null, note: "Beginn nach Absprache mit Levi" },
    popularity: 37,
    added: "2026-06-12",
    reviews: [
      { by: "Philippe", stars: 5, text: "Ich will einfach ganz sicher sein." },
      { by: "Levi", stars: 4, text: "Bei Philippe läuft es." },
    ],
    art: {
      kind: "card",
      variant: "certificate",
      colors: ["#ffffff", "#2b2d31", "#f08a24"],
      label: "LEHRJAHR 7",
      sticker: { text: "UPGRADE|+1 JAHR", shape: "burst" },
      size: "A4",
    },
  },
  {
    slug: "geschenkkarte-chf-50",
    name: "Geschenkkarte CHF 50",
    title:
      "Geschenkkarte Gutschein Geschenk Geburtstag Weihnachten Last Minute Wert CHF 50 Digital Sofort Einlösbar Karte Präsent Überraschung",
    category: "digital",
    price: 65,
    compareAt: 50,
    description: [
      "Eine Geschenkkarte im Wert von CHF 50.00. Für CHF 65.00.",
      "Einlösbar auf alle Produkte im Shop, ausser auf Geschenkkarten.",
    ],
    callouts: ["SOFORT · FAST GIFT", "WERT CHF 50 · VALUE MONEY", "GESCHENK · PRESENT"],
    specs: [
      { k: "Wert", v: "CHF 50.00" },
      { k: "Preis", v: "CHF 65.00" },
      { k: "Rabatt", v: "+30 %" },
      { k: "Gültigkeit", v: "2 Tage" },
    ],
    ship: { from: "digital", min: 0, max: null, note: "per E-Mail, sobald Zoltán sich meldet" },
    popularity: 34,
    added: "2026-11-04",
    reviews: [
      { by: "Linus", stars: 5, text: "Mein Lieblingsprodukt. Die Marge erklärt sich selbst." },
      { by: "Julius", stars: 4, text: "Habe auch eine." },
    ],
    art: {
      kind: "card",
      variant: "gift",
      colors: ["#f08a24", "#2b2d31", "#ffffff"],
      label: "CHF 50",
      sticker: { text: "GESCHENK|IDEE", shape: "tag" },
      size: "8.5 × 5.4 cm",
    },
  },

  // ───────── Sets & Bundles ─────────
  {
    slug: "starter-set-lernt-noch",
    name: "Starter-Set «Lernt noch» (Cedric)",
    title:
      "Lötset Anfänger Komplett Set 60W Lötkolben Lötzinn Ständer Spitzen Pinzette Koffer DIY Elektronik Starter Kit 42 Teile Geschenk Lernen",
    category: "sets",
    price: 199,
    compareAt: 699,
    description: [
      "Alles, was Cedric für seine erste Lötstelle brauchte. Wir sprechen nicht darüber.",
      "Im Koffer, 42 Teile. 37 davon sind Pinzetten.",
    ],
    callouts: ["42 TEILE · MANY THING", "KOFFER · BOX CARRY", "ANFÄNGER · NEW PEOPLE"],
    specs: [
      { k: "Teile", v: "42, davon 37 Pinzetten" },
      { k: "Lötkolben", v: "1 (60 W)" },
      { k: "Koffer", v: "Kunststoff, schliesst" },
      { k: "Anleitung", v: "Chinesisch" },
    ],
    ship: SZ,
    popularity: 80,
    added: "2026-09-30",
    reviews: [
      { by: "Cedric", stars: 4, text: "Damit habe ich meine erste Lötstelle gemacht. Mehr sage ich nicht." },
      { by: "Levi", stars: 5, text: "Für jeden Lehrling empfohlen. Für Philippe zum dritten Mal." },
    ],
    art: {
      kind: "box",
      variant: "kit",
      colors: ["#d62828", "#1d1f22", "#c8ccd1"],
      label: "STARTER KIT",
      sticker: { text: "42 TEILE|SET", shape: "burst" },
      corner: "ANFÄNGER",
      size: "Koffer ca. 30 × 20 cm",
    },
  },
  {
    slug: "profi-set-joel-efz",
    name: "Profi-Set Joël EFZ",
    title:
      "Profi Lötstation Set Komplett Werkstatt Ausrüstung Diplom EFZ Qualität Industrie Elektronik Reparatur Komplettpaket Premium Zubehör Koffer",
    category: "sets",
    price: 899,
    compareAt: 2999,
    description: [
      "Enthält alles, was Joël täglich benutzt. Ausser Joël.",
      "Joël ist nicht im Lieferumfang. Wir haben gefragt.",
    ],
    callouts: ["PROFI KOMPLETT · ALL HAVE", "EFZ QUALITÄT · DIPLOMA", "INDUSTRIE · FACTORY"],
    specs: [
      { k: "Joël", v: "nicht im Lieferumfang" },
      { k: "Lötstation", v: "1" },
      { k: "Flux Nº 7", v: "1 Flasche" },
      { k: "Ergebnis ohne Joël", v: "variabel" },
    ],
    ship: SZ,
    team: "joel",
    popularity: 59,
    added: "2026-08-08",
    reviews: [
      { by: "Joël", stars: 3, text: "Gutes Set. Ich bin aber wirklich nicht dabei." },
      { by: "Deniz", stars: 4, text: "Habe es bestellt und das Projekt «ohne Joël» gestartet. Es läuft nicht." },
    ],
    art: {
      kind: "box",
      variant: "pro",
      colors: ["#2b2d31", "#f08a24", "#c8ccd1"],
      label: "PROFI SET",
      sticker: { text: "EFZ|PROFI", shape: "seal" },
      size: "Koffer ca. 45 × 30 cm",
    },
  },
  {
    slug: "generalversammlung-kit",
    name: "Generalversammlung-Kit",
    title:
      "Abstimmung Set Stimmkarten Wahlurne Verein Firma Meeting Büro Konferenz Generalversammlung Demokratie Wahl Box Karten Protokoll Vorlage",
    category: "sets",
    price: 98,
    compareAt: 100,
    description: [
      "Alles für Ihre eigene Generalversammlung. Dauer im Schnitt 4 Sekunden.",
      "Mit Wahlurne, Stimmkarten und vorgedrucktem Protokoll. Ergebnis: 98 zu 2.",
    ],
    callouts: ["WAHLURNE · VOTE BOX", "PROTOKOLL · PAPER RESULT", "DEMOKRATIE · ALL DECIDE"],
    specs: [
      { k: "Rabatt", v: "2 %" },
      { k: "Dauer", v: "4 Sekunden" },
      { k: "Ergebnis", v: "98 zu 2 (vorgedruckt)" },
      { k: "Stimmkarten", v: "98 grüne, 2 rote" },
    ],
    ship: SZ,
    popularity: 53,
    added: "2026-10-22",
    reviews: [
      { by: "Dijar", stars: 5, text: "Funktioniert genau wie unsere. Ich habe es auf meinem Server getestet." },
      { by: "Zoltán", stars: 2, text: "Ich habe dagegen gestimmt. Steht so im Protokoll." },
    ],
    art: {
      kind: "box",
      variant: "ballot",
      colors: ["#ffffff", "#2b2d31", "#3fa34d"],
      label: "98 : 2",
      sticker: { text: "-2 %|AKTION", shape: "burst" },
      size: "ca. 25 × 25 cm",
    },
  },
  {
    slug: "mystery-box-linus",
    name: "Mystery Box (Linus)",
    title:
      "Mystery Box Überraschung Elektronik Paket Zufällig Wert bis CHF 999 Geschenk Unboxing Glück Restposten Überraschungspaket Gemischt 2026",
    category: "sets",
    price: 79.9,
    compareAt: 999,
    description: [
      "Enthält garantiert etwas. Linus hat sie verkauft, bevor er wusste, was.",
      "Wert bis CHF 999. Der Wert ist eine Obergrenze, keine Untergrenze.",
    ],
    callouts: ["ÜBERRASCHUNG · SURPRISE", "WERT BIS 999 · MAYBE RICH", "UNBOXING · OPEN FUN"],
    specs: [
      { k: "Inhalt", v: "ja" },
      { k: "Wert", v: "bis CHF 999" },
      { k: "Gepackt von", v: "Linus" },
      { k: "Rückgabe", v: "nur ungeöffnet, also nie" },
    ],
    ship: SZ,
    popularity: 87,
    added: "2026-11-02",
    reviews: [
      { by: "Julius", stars: 5, text: "In meiner war eine Excel-Datei. Ich besitze jetzt 49 % von etwas." },
      { by: "Linus", stars: 5, text: "Ich habe 30 verkauft. Gepackt habe ich 4." },
    ],
    art: {
      kind: "box",
      variant: "mystery",
      colors: ["#6b2fb5", "#ffe14d", "#2b2d31"],
      label: "?",
      sticker: { text: "WERT BIS|CHF 999", shape: "burst" },
      corner: "ÜBERRASCHUNG",
      size: "ca. 30 × 30 cm",
    },
  },
  {
    slug: "lehrlings-bundle-philippe",
    name: "Lehrlings-Bundle (Philippe)",
    title:
      "Lehrling Bundle Set Ausbildung Werkzeug Komplett Langlebig 6 Jahre Garantie Spar Paket Lernen Berufslehre Starter Zubehör Robust",
    category: "sets",
    price: 249,
    compareAt: 749,
    description: [
      "Gebaut für sechs Lehrjahre. Bisher.",
      "Enthält Werkzeug, Schutzbrille und einen Wochenplan, der jedes Jahr gleich bleibt.",
    ],
    callouts: ["6 JAHRE · LONG LONG", "ROBUST · NO BREAK", "SPAR PAKET · SAVE MONEY"],
    specs: [
      { k: "Garantie", v: "6 Jahre (verlängerbar)" },
      { k: "Getestet", v: "von Philippe, seit 6 Jahren" },
      { k: "Teile", v: "18" },
      { k: "Wochenplan", v: "immer derselbe" },
    ],
    ship: SZ,
    popularity: 48,
    added: "2026-09-07",
    reviews: [
      { by: "Philippe", stars: 5, text: "Hält. Wie ich." },
      { by: "Levi", stars: 4, text: "Das Bundle ist fertig. Philippe nicht." },
    ],
    art: {
      kind: "box",
      variant: "bundle",
      colors: ["#3fa34d", "#ffffff", "#1d1f22"],
      label: "BUNDLE",
      count: 2,
      sticker: { text: "6 JAHRE|GARANTIE", shape: "seal" },
      size: "ca. 35 × 25 cm",
    },
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const views = ["front", "info", "lieferumfang", "groesse"] as const;
export type View = (typeof views)[number];
export const viewLabels: Record<View, string> = {
  front: "Produktbild",
  info: "Produktmerkmale",
  lieferumfang: "Lieferumfang",
  groesse: "Grössenvergleich",
};
export const imageUrl = (slug: string, view: View = "front") => `/shop/bild/${slug}/${view}.svg`;

export const discountPct = (p: Product) => Math.round((1 - p.price / p.compareAt) * 100);

export function shipLabel(p: Product) {
  if (p.ship.from === "digital") return "Sofort, sobald Zoltán sich meldet";
  const range = p.ship.max ? `${p.ship.min} bis ${p.ship.max} Wochen` : "irgendwann";
  return `${range} ab ${p.ship.from}`;
}

export const chf = (n: number) =>
  new Intl.NumberFormat("de-CH", { style: "currency", currency: "CHF", minimumFractionDigits: 2 }).format(n);
