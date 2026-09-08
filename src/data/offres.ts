/**
 * LE GRAPHE RÉEL DES DISCIPLINES — ce que Portet publie, mot pour mot.
 *
 * Relevé le 07/09/2026 sur boxing-center-portet.fr/activites/.
 *
 * Pourquoi les intitulés exacts comptent : « nous proposons boxe et MMA » est
 * une phrase que n'importe quel club peut écrire. « Grappling & jiu-jitsu
 * brésilien », « Baby boxe », « Kick-boxing enfants/ados » sont le vocabulaire
 * que les gens tapent et que les moteurs de réponse peuvent citer sans se
 * tromper. C'est la différence entre une page générique et une page qui gagne.
 */

export type Famille =
  | 'boxe-anglaise'
  | 'kick-boxing'
  | 'mma'
  | 'grappling'
  | 'femme'
  | 'physique'
  | 'enfants';

export type Offre = {
  /** l'intitulé publié par le club, mot pour mot */
  intitule: string;
  famille: Famille;
  ages?: string;
  /** ce qui rend cette offre concrète, en une phrase */
  detail: string;
};

const SOURCE = 'https://boxing-center-portet.fr/activites/';

export const OFFRES: readonly Offre[] = [
  {
    intitule: 'Boxe anglaise',
    famille: 'boxe-anglaise',
    detail: 'Les poings, la garde, les déplacements. La porte d’entrée la plus simple.',
  },
  {
    intitule: 'Kick-boxing',
    famille: 'kick-boxing',
    detail: 'Les jambes en plus des poings, en garde haute et sur appuis.',
  },
  {
    intitule: 'MMA',
    famille: 'mma',
    detail: 'Debout, au corps à corps et au sol — et l’entraînement se fait dans la cage.',
  },
  {
    intitule: 'Grappling & jiu-jitsu brésilien',
    famille: 'grappling',
    detail: 'Le contrôle, les projections et les soumissions. Aucune frappe : on n’y prend pas de coup.',
  },
  {
    intitule: 'Lady Boxing',
    famille: 'femme',
    detail: 'Le geste de boxe et le cardio, entre femmes.',
  },
  {
    intitule: 'Préparation physique',
    famille: 'physique',
    detail: 'Le moteur : gainage, force, souffle. Ce qui fait tenir les trois derniers rounds.',
  },
  {
    intitule: 'Baby boxe',
    famille: 'enfants',
    detail: 'La première approche : le jeu, l’équilibre, la notion de distance.',
  },
  {
    intitule: 'Boxe éducative',
    famille: 'enfants',
    detail: 'Le geste, la règle et le respect du partenaire. Touché contrôlé, jamais de mise en danger.',
  },
  {
    intitule: 'Kick-boxing enfants/ados',
    famille: 'enfants',
    detail: 'La suite éducative pour ceux qui veulent aussi travailler les jambes.',
  },
] as const;

export const SOURCE_OFFRES = SOURCE;

export const offresDe = (f: Famille) => OFFRES.filter((o) => o.famille === f);

/** Les familles portées par chaque page de discipline du site. */
export const FAMILLES_PAR_PAGE = {
  'boxe-anglaise': ['boxe-anglaise'],
  mma: ['mma', 'grappling'],
  'kick-boxing': ['kick-boxing'],
  'boxe-enfants': ['enfants'],
  'boxing-fitness': ['femme', 'physique'],
} as const satisfies Record<string, readonly Famille[]>;

export type PageDiscipline = keyof typeof FAMILLES_PAR_PAGE;

export const offresDeLaPage = (page: PageDiscipline) =>
  OFFRES.filter((o) => (FAMILLES_PAR_PAGE[page] as readonly Famille[]).includes(o.famille));
