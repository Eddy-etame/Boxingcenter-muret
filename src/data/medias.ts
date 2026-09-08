/**
 * MANIFESTE MÉDIA — la seule porte d'entrée des images.
 *
 * Nom de fichier : `<sujet>-muret` — le sujet est ce qu'on voit, la ville est
 * celle du site. Pas de « boxing-center » dans le nom, pas de numéro d'origine.
 *
 * `alt` décrit la scène, jamais un lieu. `legende` dit ce qu'on voit puis le
 * club de destination du site — toujours, quelle que soit la salle où la photo
 * a été prise.
 */

export type Media = {
  /** nom de fichier SEO, sans extension */
  slug: string;
  /** fichier source dans le lot WeTransfer */
  source: string;
  /** ce qu'on voit — pour les lecteurs d'écran et pour Google Images */
  alt: string;
  /** visible sous la photo quand elle est présentée comme document */
  legende?: string;
  /** point d'intérêt, pour les recadrages mobiles */
  focus?: string;
};

const LOT = 'wetransfer_photos-site-bc-muret_2026-09-08_0920';

export const MEDIAS = [
  {
    slug: 'club-boxe-muret',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_051.jpg',
    alt: 'Un boxeur en garde devant le mot « Boxing Center » peint sur le mur bleu de la salle.',
    legende: 'En garde — Boxing Center Portet-sur-Garonne',
    focus: '55% 40%',
  },
  {
    slug: 'cage-mma-muret',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_050.jpg',
    alt: 'Une pratiquante enchaîne des frappes à vide, vue à travers le grillage de la cage.',
    legende: 'Dans la cage — Boxing Center Portet-sur-Garonne',
    focus: '50% 40%',
  },
  {
    slug: 'sac-de-frappe-muret',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_038.jpg',
    alt: 'Un pratiquant en sweat du club frappe un sac de cuir brun, alignés sous le plafond de tôle.',
    legende: 'Travail au sac — Boxing Center Portet-sur-Garonne',
    focus: '45% 45%',
  },
  {
    slug: 'pattes-d-ours-muret',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_016.jpg',
    alt: 'Une pratiquante frappe les pattes d’ours orange tenues par un coach, au bord du ring.',
    legende: 'Aux pattes d’ours — Boxing Center Portet-sur-Garonne',
    focus: '50% 40%',
  },
  {
    slug: 'boxe-anglaise-muret',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_032.jpg',
    alt: 'Deux boxeurs casqués à l’entraînement, un direct qui touche la garde.',
    legende: 'Opposition contrôlée — Boxing Center Portet-sur-Garonne',
    focus: '50% 35%',
  },
  {
    slug: 'entrainement-boxe-muret',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_026.jpg',
    alt: 'Un boxeur casqué de dos, débardeur blanc, l’horloge de la salle au mur derrière lui.',
    legende: 'L’heure de la séance — Boxing Center Portet-sur-Garonne',
    focus: '50% 40%',
  },
  {
    slug: 'kick-boxing-muret',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_046.jpg',
    alt: 'Un jeune pratiquant en garde au bord du ring, sous les drapeaux du plafond.',
    legende: 'En garde au bord du ring — Boxing Center Portet-sur-Garonne',
    focus: '55% 35%',
  },
  {
    slug: 'preparation-physique-muret',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_049.jpg',
    alt: 'Un pratiquant enchaîne des frappes à vide avec de petits haltères, sur le tapis bleu.',
    legende: 'Travail à vide, charges légères — Boxing Center Portet-sur-Garonne',
    focus: '50% 40%',
  },
  {
    slug: 'club-boxe-muret-2',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_044.jpg',
    alt: 'Deux pratiquants s’échauffent devant l’affiche d’un gala de boxe professionnel.',
    legende: 'Avant la séance — Boxing Center Portet-sur-Garonne',
    focus: '45% 40%',
  },
] as const satisfies readonly Media[];

export type MediaSlug = (typeof MEDIAS)[number]['slug'];

const INDEX = new Map(MEDIAS.map((m) => [m.slug, m as Media]));

export function media(slug: MediaSlug): Media {
  const m = INDEX.get(slug);
  if (!m) throw new Error(`Média inconnu : ${slug}`);
  return m;
}

export const DOSSIER_SOURCE = LOT;
