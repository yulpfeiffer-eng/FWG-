// ── Quizfragen ─────────────────────────────────────────────
// Pro Frage:
//   q:       Fragetext
//   answers: alle Antwortmöglichkeiten (Reihenfolge wird gemischt)
//   correct: Index der richtigen Antwort (0 = erste, 1 = zweite, usw.)
const QUESTIONS = [
  {
    q: "Was bedeutet ein Exportüberschuss?",
    answers: [
      "Ein Land importiert mehr, als es exportiert.",
      "Ein Land exportiert mehr, als es importiert.",
      "Exporte und Importe sind gleich hoch."
    ],
    correct: 1
  },
  {
    q: "Zu welchem wirtschaftspolitischen Konzept gehört das außenwirtschaftliche Gleichgewicht?",
    answers: [
      "Zum Magischen Viereck",
      "Zur Kapitalbilanz",
      "Zur globalen Wertschöpfungskette"
    ],
    correct: 0
  },
  {
    q: "Wie viele Arbeitsplätze hängen laut Material in Deutschland ungefähr vom Export ab?",
    answers: [
      "Jeder zweite",
      "Jeder zehnte",
      "Jeder vierte"
    ],
    correct: 2
  },
  {
    q: "Warum ist Deutschland besonders auf Rohstoffimporte angewiesen?",
    answers: [
      "Weil Deutschland ein rohstoffarmes Land ist",
      "Weil Deutschland keine Waren produziert",
      "Weil Deutschland mehr importieren als exportieren muss"
    ],
    correct: 0
  },
  {
    q: "Was versteht man unter globalen Wertschöpfungsketten?",
    answers: [
      "Alle Produkte werden im selben Land hergestellt.",
      "Produktionsschritte sind auf verschiedene Länder verteilt.",
      "Waren werden ausschließlich im Herstellungsland verkauft."
    ],
    correct: 1
  },
  {
    q: "Wie entwickelten sich die deutschen Importe im ersten Halbjahr 2025 gegenüber dem Vorjahreszeitraum?",
    answers: [
      "Sie sanken um 4,4 %.",
      "Sie blieben unverändert.",
      "Sie stiegen um 4,4 %."
    ],
    correct: 2
  },
  {
    q: "Wie hoch war der deutsche Exportüberschuss im ersten Halbjahr 2025?",
    answers: [
      "104 Milliarden Euro",
      "682 Milliarden Euro",
      "786 Milliarden Euro"
    ],
    correct: 0
  },
  {
    q: "Welche Warengruppe war im ersten Halbjahr 2025 Deutschlands wichtigste Exportwarengruppe?",
    answers: [
      "Landwirtschaftliche Erzeugnisse",
      "Kraftfahrzeuge und Fahrzeugteile",
      "Pharmazeutische Erzeugnisse"
    ],
    correct: 1
  },
  {
    q: "Bei welcher Warengruppe stiegen die Exporte im ersten Halbjahr 2025?",
    answers: [
      "Maschinen",
      "Chemische Erzeugnisse",
      "Pharmazeutische Erzeugnisse"
    ],
    correct: 2
  },
  {
    q: "Welches Land war im ersten Halbjahr 2025 Deutschlands wichtigster Warenlieferant?",
    answers: [
      "USA",
      "China",
      "Frankreich"
    ],
    correct: 1
  },
  {
    q: "Wie war das Handelsverhältnis Deutschlands zu China im ersten Halbjahr 2025?",
    answers: [
      "Deutschland importierte mehr aus China, als es dorthin exportierte.",
      "Deutschland exportierte mehr nach China, als es von dort importierte.",
      "Exporte und Importe waren ausgeglichen."
    ],
    correct: 0
  },
  {
    q: "Welche Leistungen werden in der Dienstleistungsbilanz erfasst?",
    answers: [
      "Ausschließlich Warenlieferungen",
      "Erbschaften und Schenkungen",
      "Beispielsweise Reisen, Transporte und Versicherungsleistungen"
    ],
    correct: 2
  },
  {
    q: "Was kennzeichnet laufende Übertragungen?",
    answers: [
      "Ihnen steht immer eine Warenlieferung gegenüber.",
      "Ihnen steht keine unmittelbare Gegenleistung gegenüber.",
      "Sie erfolgen ausschließlich zwischen Unternehmen."
    ],
    correct: 1
  },
  {
    q: "Was gehört zu den einmaligen Vermögensübertragungen?",
    answers: [
      "Schuldenerlasse und Erbschaften",
      "Warenexporte und Warenimporte",
      "Reisen und Transportleistungen"
    ],
    correct: 0
  },
  {
    q: "Was erfasst die Devisenbilanz?",
    answers: [
      "Die Anzahl der Arbeitslosen",
      "Den Wert aller exportierten Fahrzeuge",
      "Veränderungen der Währungsreserven der Zentralbank"
    ],
    correct: 2
  }
];
