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
  phrase: 'Le bus s’arrête route d’Espagne. Le club est au 61.',
} as const;

/** Le titre de la page, ligne par ligne. La dernière porte l'accent. */
export const TITRE = [
  'Un bus part de la gare de Muret',
  'et s’arrête route d’Espagne.',
  'Le club est au 61.',
] as const;

/** Le chapeau : ce que fait le meilleur trajet, en une phrase. */
export const CHAPEAU =
  'La 117 Express suit l’ancienne nationale 117, de la gare de Muret au cœur de Portet-sur-Garonne, et marque deux arrêts sur la route d’Espagne. Boxing Center Portet-sur-Garonne t’attend au 61 de cette rue, du lundi au samedi de 10h à 21h30.';

export const ITINERAIRES: readonly Itineraire[] = [
  {
    id: 'express',
    onglet: 'La 117 Express',
    titre: 'Un bus part de la gare de Muret et s’arrête route d’Espagne.',
    resume:
      'La 117 Express relie la gare de Muret à Portet-sur-Garonne en suivant l’ancienne nationale 117 — la route que tu prendrais en voiture. Elle marque deux arrêts sur la route d’Espagne, « Ax » et « Jean Jaurès ». Le club est au 61 de cette rue.',
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
    titre: 'Deux gares sur la même ligne, et un Linéo pour finir.',
    resume:
      'La gare de Muret et celle de Portet-Saint-Simon se suivent sur la ligne de Toulouse à Bayonne. À Portet, la Linéo 5 part de la gare et dessert l’arrêt « Route d’Espagne ». Le trajet se fait entièrement sur rail puis sur site propre, à l’abri de la circulation.',
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
        a: 'Route d’Espagne',
        precision: 'le Linéo part du parvis de la gare',
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
      'Monte à la gare de Muret, descends à « Jean Jaurès ». Un seul bus, et il te laisse dans la rue du club.',
  },
  {
    depuis: 'La gare de Muret',
    itineraire: 'train',
    texte:
      'Le TER te dépose à Portet-Saint-Simon. La Linéo 5 attend sur le parvis et file vers la route d’Espagne.',
  },
  {
    depuis: 'Roques',
    itineraire: 'express',
    texte:
      'Roques est sur le parcours de la 117 Express, entre Muret et Portet. Depuis le nord du secteur, tu montes en route et tu descends au club.',
  },
];

/** Le rappel honnête : les horaires appartiennent au réseau. */
export const AVERTISSEMENT =
  'Tisséo publie les horaires, les fréquences et les arrêts, et les met à jour à chaque saison. Cette page te dit quel bus prendre ; Tisséo te dit à quelle heure il passe.';
