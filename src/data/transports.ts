/**
 * REGISTRE DES TRANSPORTS — comment on y va sans voiture.
 *
 * Pourquoi ce registre existe : « 23 km » est un chiffre qui éloigne. « La 117
 * Express, direct, de la gare de Muret à Portet » est une phrase qui rapproche.
 * Les deux sont vrais ; un seul donne envie de venir. On mesure donc le trajet
 * en lignes, pas en kilomètres.
 *
 * Ce qu'on écrit ici : le numéro de la ligne, ses deux terminus, les communes
 * qu'elle dessert, les jours où elle roule. Ce sont des faits de structure —
 * ils tiennent d'une saison à l'autre.
 *
 * Ce qu'on n'écrit JAMAIS ici : un horaire, une fréquence à la minute, une
 * durée de trajet. Ces chiffres bougent, et un horaire recopié devient faux à
 * la première modification. Chaque ligne porte donc le lien vers sa page
 * officielle : c'est Tisséo qui dit quand, ce site dit quoi.
 */

export type Mode = 'metro' | 'bus' | 'tram' | 'train';

export type Ligne = {
  mode: Mode;
  /** le code tel qu'il s'affiche sur le véhicule */
  code: string;
  /** les deux terminus, dans l'ordre où on les lit sur la girouette */
  parcours: string;
  /** ce que cette ligne fait pour toi, en une phrase */
  role: string;
  /** vrai si elle dépose dans la commune du club, sans correspondance */
  direct: boolean;
  /** les jours publiés par le réseau */
  jours: string;
  /** les communes traversées, dans l'ordre du parcours */
  communes: readonly string[];
  /** la page officielle de la ligne — la seule qui fasse foi sur les horaires */
  href: string;
  /**
   * Les clubs que cette ligne dessert, par identifiant. Absent = le club de
   * destination du site. Utile aux sites qui en visent deux.
   */
  clubs?: readonly string[];
};

export type Mouvement = {
  depuis: string;
  ligne: string;
  texte: string;
};

export const RESEAU = {
  nom: 'Tisséo',
  site: 'https://www.tisseo.fr/',
  itineraire: 'https://www.tisseo.fr/se-deplacer/itineraires',
} as const;

export const LIBELLE_MODE: Record<Mode, string> = {
  metro: 'Métro',
  bus: 'Bus',
  tram: 'Tram',
  train: 'Train',
};

/**
 * Le mode qui couvre la plus longue partie du trajet, et donc l'onglet ouvert
 * par défaut. Ici c'est le bus : la 117 Express fait tout le trajet, de la gare
 * de Muret à Portet, sur le tracé de l'ancienne nationale 117.
 */
export const MODE_PAR_DEFAUT: Mode = 'bus';

export const LIGNES: readonly Ligne[] = [
  {
    mode: 'bus',
    code: '117 Express',
    parcours: 'Muret Gare SNCF ↔ Basso Cambo',
    role: 'La ligne du club, et de loin la plus simple. Elle suit le tracé de l’ancienne nationale 117 depuis la gare de Muret, traverse Roques puis Portet-sur-Garonne, et file jusqu’au métro. Aucune correspondance à faire pour descendre au club.',
    direct: true,
    jours: 'toute la semaine',
    communes: ['Muret', 'Roques', 'Portet-sur-Garonne', 'Toulouse'],
    href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-117',
  },
  {
    mode: 'bus',
    code: '58',
    parcours: 'Basso Cambo ↔ Seysses / Muret',
    role: 'La ligne du nord du secteur : elle relie Muret et Seysses au réseau toulousain par Basso Cambo. Utile depuis Seysses, Frouzins et le nord de Muret.',
    direct: false,
    jours: 'du lundi au samedi',
    communes: ['Toulouse', 'Frouzins', 'Seysses', 'Muret'],
    href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-58',
  },
  {
    mode: 'bus',
    code: '85',
    parcours: 'Basso Cambo ↔ Portet Gare SNCF',
    role: 'Le complément de la 117 : depuis Basso Cambo, elle redescend sur Portet Gare SNCF en desservant Cugnaux et Villeneuve-Tolosane. C’est la ligne à connaître si tu arrives de Toulouse.',
    direct: true,
    jours: 'du lundi au samedi',
    communes: ['Toulouse', 'Cugnaux', 'Villeneuve-Tolosane', 'Portet-sur-Garonne'],
    href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-85',
  },
  {
    mode: 'metro',
    code: 'A',
    parcours: 'Basso Cambo ↔ Balma-Gramont',
    role: 'Le terminus de Basso Cambo est la plaque tournante du sud toulousain : c’est là que la 117 Express, la 85 et la 58 se retrouvent. Si tu arrives de Toulouse, c’est par là que tu descends vers le club.',
    direct: false,
    jours: 'sept jours sur sept',
    communes: ['Toulouse'],
    href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-a',
  },
  {
    mode: 'train',
    code: 'TER liO',
    parcours: 'Muret ↔ Portet-Saint-Simon ↔ Toulouse-Matabiau',
    role: 'La gare de Muret et celle de Portet-Saint-Simon sont sur la même ligne, celle de Toulouse à Bayonne. C’est le trajet le plus court en distance de rail entre les deux communes, et il ne dépend d’aucune circulation.',
    direct: true,
    jours: 'toute la semaine',
    communes: ['Muret', 'Portet-sur-Garonne', 'Toulouse'],
    href: 'https://www.lio-occitanie.fr/',
  },
];

export const MODES: readonly Mode[] = [...new Set(LIGNES.map((l) => l.mode))];

export const lignesDe = (m: Mode) => LIGNES.filter((l) => l.mode === m);

export const ligne = (code: string) => {
  const l = LIGNES.find((x) => x.code === code);
  if (!l) throw new Error(`Ligne inconnue : ${code}`);
  return l;
};

export const MOUVEMENTS: readonly Mouvement[] = [
  {
    depuis: 'Muret',
    ligne: '117 Express',
    texte:
      'Tu montes à la gare de Muret et tu descends à Portet. La 117 Express suit l’ancienne nationale 117 : c’est la même route que tu prendrais en voiture, en te dispensant de conduire.',
  },
  {
    depuis: 'La gare de Muret',
    ligne: 'TER liO',
    texte:
      'Muret et Portet-Saint-Simon sont deux gares de la même ligne. Si tu habites près de la gare, c’est le trajet le plus direct qui existe entre les deux communes.',
  },
  {
    depuis: 'Roques',
    ligne: '117 Express',
    texte:
      'Roques touche Portet-sur-Garonne et se trouve sur le parcours de la 117 Express. Depuis le nord du secteur, le club est au bout de la même route et de la même ligne.',
  },
  {
    depuis: 'Seysses',
    ligne: '58',
    texte:
      'La 58 remonte vers Basso Cambo, où la 85 et la 117 Express repartent vers Portet. Une correspondance, deux bus, et le métro A au même endroit.',
  },
];

export const RESUME = 'Une ligne de bus directe, la 117 Express';

export const AVERTISSEMENT =
  'Les horaires, les fréquences et les arrêts exacts sont publiés par Tisséo et changent au fil des saisons. Ce site te dit quelle ligne prendre ; Tisséo te dit à quelle heure elle passe.';
