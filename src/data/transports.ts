/**
 * REGISTRE DES TRANSPORTS — les itinéraires qui déposent au club.
 *
 * La règle, et elle est stricte : une ligne n'entre ici que si elle fait
 * avancer quelqu'un de la ville du site jusqu'au 61 route d'Espagne. Une ligne
 * qui dessert le secteur sans mener au club n'a rien à faire sur cette page.
 *
 * On raisonne donc en ITINÉRAIRES, pas en lignes : un itinéraire porte ses
 * étapes dans l'ordre, avec le point de correspondance nommé quand il y en a
 * un. Le visiteur lit le trajet complet, du premier arrêt au dernier.
 *
 * Ce qu'on n'écrit JAMAIS ici : un horaire, une fréquence à la minute, une
 * durée de trajet. Ces chiffres bougent, et un horaire recopié devient faux à
 * la première modification. Chaque étape porte le lien vers sa page officielle :
 * c'est Tisséo qui dit quand, ce site dit quoi.
 */

export type Mode = 'bus' | 'train';

export type Etape = {
  mode: Mode;
  /** le code tel qu'il s'affiche sur le véhicule */
  code: string;
  /** où l'on monte */
  de: string;
  /** où l'on descend */
  a: string;
  /** ce que cet arrêt a de remarquable, quand il en a */
  precision?: string;
  jours: string;
  /** la page officielle de la ligne — la seule qui fasse foi sur les horaires */
  href: string;
};

export type Itineraire = {
  id: string;
  /** l'étiquette de l'onglet */
  onglet: string;
  /** le titre du panneau, affirmatif */
  titre: string;
  /** une phrase qui dit ce que fait ce trajet */
  resume: string;
  mode: Mode;
  etapes: readonly Etape[];
  /** l'itinéraire ouvert par défaut : le plus simple */
  meilleur?: true;
};

export const RESEAU = {
  nom: 'Tisséo',
  site: 'https://www.tisseo.fr/',
  itineraire: 'https://www.tisseo.fr/se-deplacer/itineraires',
} as const;

export const LIBELLE_MODE: Record<Mode, string> = { bus: 'Bus', train: 'Train' };

/** L'arrêt d'arrivée, et ce qu'il a d'exceptionnel : c'est la rue du club. */
export const ARRIVEE = {
  arret: 'Jean Jaurès',
  rue: 'route d’Espagne',
  phrase: 'Tu descends à « Jean Jaurès », sur la route d’Espagne. Le club est au 61.',
} as const;

/** Le titre de la page, ligne par ligne. La dernière porte l'accent. */
export const TITRE = [
  'Y aller en bus,',
  'c’est une seule ligne :',
  'la 117 Express.',
] as const;

/** Le chapeau : ce que fait le meilleur trajet, en une phrase. */
export const CHAPEAU =
  'Tu la prends à la gare de Muret et tu descends à l’arrêt « Jean Jaurès », sur la route d’Espagne. Le club est au 61, dans la même rue. Une seule ligne, toute la semaine, sans changement.';

export const ITINERAIRES: readonly Itineraire[] = [
  {
    id: 'express',
    onglet: 'La 117 Express',
    titre: 'La 117 Express, sans changement.',
    resume:
      'Elle part de la gare de Muret et suit la même route que tu prendrais en voiture. À Portet, elle s’arrête deux fois sur la route d’Espagne : « Ax » et « Jean Jaurès ». Descends au second, le club est au 61.',
    mode: 'bus',
    meilleur: true,
    etapes: [
      {
        mode: 'bus',
        code: '117 Express',
        de: 'Muret Gare SNCF',
        a: 'Jean Jaurès',
        precision: 'sur la route d’Espagne, à Portet-sur-Garonne',
        jours: 'toute la semaine',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-117',
      },
    ],
  },
  {
    id: 'train',
    onglet: 'Le train, puis la L5',
    titre: 'Le train, puis la L5.',
    resume:
      'Muret et Portet-Saint-Simon sont deux gares de la même ligne. Tu descends à Portet, tu prends la L5 sur le parvis, et tu t’arrêtes route d’Espagne. Utile si tu habites près de la gare.',
    mode: 'train',
    etapes: [
      {
        mode: 'train',
        code: 'TER liO',
        de: 'Gare de Muret',
        a: 'Gare de Portet-Saint-Simon',
        precision: 'ligne de Toulouse à Bayonne',
        jours: 'toute la semaine',
        href: 'https://www.lio-occitanie.fr/',
      },
      {
        mode: 'bus',
        code: 'L5',
        de: 'Portet Gare SNCF',
        a: 'Jean Jaurès',
        precision: 'le Linéo part du parvis de la gare ; premier arrêt',
        jours: 'sept jours sur sept',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-l5',
      },
    ],
  },
];

export const itineraire = (id: string) => {
  const i = ITINERAIRES.find((x) => x.id === id);
  if (!i) throw new Error(`Itinéraire inconnu : ${id}`);
  return i;
};

export const MEILLEUR = ITINERAIRES.find((i) => i.meilleur) ?? ITINERAIRES[0];

/** Le résumé qui remplace la distance, partout où elle apparaissait. */
export const RESUME = 'La 117 Express, de la gare de Muret à la route d’Espagne';

/** D'où l'on part, et le trajet qui va avec. */
export type Depart = { depuis: string; itineraire: string; texte: string };

export const DEPARTS: readonly Depart[] = [
  {
    depuis: 'Muret',
    itineraire: 'express',
    texte:
      'Tu montes à la gare, tu descends à « Jean Jaurès ». Un seul bus, et il te laisse dans la rue du club.',
  },
  {
    depuis: 'La gare de Muret',
    itineraire: 'train',
    texte:
      'Le train te dépose à Portet-Saint-Simon. La L5 part du parvis, et son premier arrêt est « Jean Jaurès », sur la route d’Espagne.',
  },
  {
    depuis: 'Roques',
    itineraire: 'express',
    texte:
      'Roques est sur le parcours de la 117 Express. Tu montes en route et tu descends au club.',
  },
];

/** Le rappel honnête : les horaires appartiennent au réseau. */
export const AVERTISSEMENT =
  'Les horaires changent d’une saison à l’autre. On te dit quel bus prendre ; pour l’heure exacte, ouvre la fiche Tisséo de la ligne — le lien est juste à côté de chaque étape.';

/** Les nombres en lettres, pour compter depuis les registres sans jamais écrire un chiffre à la main. */
export const NOMBRES = [
  'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
  'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt',
] as const;
export const enLettres = (n: number) => NOMBRES[n] ?? String(n);
