/**
 * REGISTRE DE VÉRITÉ — Boxing Center depuis Muret.
 *
 * Un fait s'écrit ICI une fois, avec sa source et sa date, puis se projette
 * dans le HTML, les métadonnées, le JSON-LD, llms.txt, le formulaire et le
 * moteur. Aucun composant n'écrit un horaire, une adresse ou une URL en dur —
 * le contrôle de build le refuse.
 *
 * Ce qui n'est pas vérifié ne s'affiche pas. On n'invente ni distance au
 * mètre, ni temps de trajet, ni prix, ni tranche d'âge.
 */

export type Source = 'site-club' | 'wikipedia' | 'cahier-des-charges' | 'a-verifier';

export type Fait<T = string> = { valeur: T; source: Source; verifie: string };

const CLUB = (v: string): Fait => ({ valeur: v, source: 'site-club', verifie: '2026-09-08' });
const WIKI = (v: string): Fait => ({ valeur: v, source: 'wikipedia', verifie: '2026-09-08' });

/* ─────────────────────────────  LE SITE  ───────────────────────────── */

export const SITE = {
  origine: 'https://www.boxingcenter-muret.fr',
  nom: 'Boxing Center — depuis Muret',
  nomCourt: 'Boxing Center Muret',
  langue: 'fr-FR',
  /** Muret est le point de départ du visiteur, jamais une adresse de club. */
  ville: 'Muret',
  codePostal: '31600',
  gentile: 'Muretains',
  departement: 'Haute-Garonne',
  secteur: 'sud toulousain',
} as const;

/* ─────────────────────────────  CONTACT  ───────────────────────────── */

export const CONTACT = {
  telephone: CLUB('05 62 24 46 82'),
  telephoneLien: CLUB('+33562244682'),
  email: CLUB('bc.combat31@gmail.com'),
} as const;

/* ─────────────────────────────  LE CLUB  ───────────────────────────── */

export type Club = {
  id: 'portet';
  nom: string;
  nomCourt: string;
  ville: string;
  codePostal: string;
  adresse: string;
  telephone: string;
  telephoneLien: string;
  site: string;
  activites: string;
  plannings: string;
  tarifs: string;
  /** amplitude d'accueil publiée par le club */
  horaires: Fait;
  horairesCourt: string;
  ouverture: string;
  fermeture: string;
  ouvertureTexte: string;
  fermetureTexte: string;
  /** l'accès réel depuis Muret, sans temps de trajet inventé */
  acces: string;
  /** le fait qui distingue ce club de tous les autres */
  singularite: string;
  /** faits chiffrés, pour les cotes du hero */
  faits: readonly { cle: string; valeur: string; source: string }[];
  angle: string;
};

export const CLUBS: readonly Club[] = [
  {
    id: 'portet',
    nom: 'Boxing Center Portet-sur-Garonne',
    nomCourt: 'Portet-sur-Garonne',
    ville: 'Portet-sur-Garonne',
    codePostal: '31120',
    adresse: "61 route d'Espagne, 31120 Portet-sur-Garonne",
    telephone: '06 87 90 02 16',
    telephoneLien: '+33687900216',
    site: 'https://boxing-center-portet.fr/',
    activites: 'https://boxing-center-portet.fr/activites/',
    plannings: 'https://boxing-center-portet.fr/plannings/',
    tarifs: 'https://boxing-center-portet.fr/tarifs/',
    horaires: CLUB('du lundi au samedi, de 10h à 21h30'),
    horairesCourt: 'lun–sam, 10h–21h30',
    ouverture: '10:00',
    fermeture: '21:30',
    ouvertureTexte: '10h',
    fermetureTexte: '21h30',
    acces: "Par l'A64 en direction de Toulouse, sortie Portet, puis la route d'Espagne.",
    singularite: 'Le seul club du réseau avec une cage MMA.',
    faits: [
      { cle: 'Distance', valeur: '23 km par la route', source: 'Wikipédia' },
      { cle: 'Surface', valeur: '600 m²', source: 'boxing-center-portet.fr' },
      { cle: 'Équipement', valeur: '1 ring, 1 cage MMA', source: 'boxing-center-portet.fr' },
      { cle: 'Accueil', valeur: '10h → 21h30, 6 j/7', source: 'boxing-center-portet.fr' },
      { cle: 'Disciplines', valeur: '9 publiées', source: 'boxing-center-portet.fr' },
    ],
    angle:
      "Le club du sud de l'agglomération, sur la route d'Espagne — celui qu'on rejoint en remontant depuis Muret, avec du stationnement simple.",
  },
] as const;

export const club = (id: Club['id'] = 'portet'): Club => {
  const c = CLUBS.find((x) => x.id === id);
  if (!c) throw new Error(`Club inconnu : ${id}`);
  return c;
};

/** Le club de destination du site. Une seule destination ici. */
export const DESTINATION = CLUBS[0];

/* ─────────────────────────  MURET, LES FAITS  ───────────────────────── */

export const VILLE = {
  population: WIKI('26 079 habitants (2023)'),
  statut: WIKI('sous-préfecture de la Haute-Garonne'),
  distance: WIKI('23 km par la route au sud de Toulouse'),
  rivieres: WIKI('la Garonne et la Louge'),
  routes: WIKI('A64 (sorties 33 à 35) et D817, l’ancienne nationale 117'),
  gare: WIKI('gare SNCF sur la ligne Toulouse–Bayonne, desservie par les TER Occitanie'),
  /** Le fait local qui donne son identité au site. */
  figure: WIKI(
    'Clément Ader (1841-1925), né à Muret, pionnier de l’aviation et constructeur de l’Éole'
  ),
  histoire: WIKI('la bataille de Muret, en 1213'),
} as const;

/**
 * La phrase qui relie le secteur au club, quand un fait honnête le permet.
 * Vide si aucun lien géographique réel n'existe — on n'en invente pas.
 */
export const NOTE_SECTEUR =
  'Roques touche Portet-sur-Garonne : depuis le sud de Muret, le club est au bout de la même route.';

/** Les douze communes limitrophes. Roques touche Portet : c'est le lien. */
export const LIMITROPHES: readonly { nom: string; note?: string }[] = [
  { nom: 'Lamasquère' },
  { nom: 'Saint-Clar-de-Rivière' },
  { nom: 'Labastidette' },
  { nom: 'Seysses' },
  { nom: 'Roques', note: 'la commune qui touche Portet-sur-Garonne' },
  { nom: 'Saubens' },
  { nom: 'Lherm' },
  { nom: 'Villate' },
  { nom: 'Saint-Hilaire' },
  { nom: 'Le Fauga' },
  { nom: 'Eaunes' },
  { nom: 'Beaumont-sur-Lèze' },
] as const;

/* ─────────────────────────  CE QU'ON NE DIT PAS  ───────────────────── */

/** Laisser croire qu'une salle est DANS Muret. Refusé au build. */
export const INTERDIT: readonly string[] = [
  'salle de Muret',
  'notre salle à Muret',
  'notre club à Muret',
  'situé à Muret',
  'située à Muret',
  'basé à Muret',
  'Boxing Center Muret vous accueille',
];

/** Vendre l'absence. La faute la plus coûteuse. Refusée au build. */
export const VENTE_NEGATIVE: readonly string[] = [
  'pas de salle',
  'pas de club',
  'aucune salle',
  'aucun club',
  'n’existe pas de salle',
  "n'existe pas de salle",
];

/** Formulations justes, à reprendre telles quelles. */
export const FORMULATIONS = [
  'club de boxe à proximité de Muret',
  'club de MMA près de Muret',
  'cours accessibles depuis Muret',
  'Boxing Center accueille les Muretains dans son club de Portet-sur-Garonne',
] as const;
