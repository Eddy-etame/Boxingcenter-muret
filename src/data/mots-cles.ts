/**
 * REGISTRE DES MOTS-CLÉS — le territoire de recherche, page par page.
 *
 * Principe : plus de pertinence Muret PAR page, pas plus de pages Muret.
 * Fabriquer /club-boxe-muret/, /boxe-muret/, /sport-combat-muret/ à côté des
 * routes existantes nous rapprocherait du schéma de page satellite que Google
 * sanctionne. On garde huit pages et on rend chacune beaucoup plus dense.
 *
 * Un motif n'entre dans une page que si la page répond réellement à la
 * question qu'il porte. Le contrôle de build vérifie chaque prioritaire dans
 * le texte visible : chaque motif gardé est une promesse d'écriture.
 */

import type { RouteId } from './routes';

export type Cluster = {
  page: RouteId;
  /** vérifiés au build dans le texte visible de la page */
  prioritaires: readonly string[];
  /** ce que la page gagne à porter, sans obligation */
  secondaires: readonly string[];
};

export const CONTEXTE_GEO = {
  ville: 'Muret',
  codePostal: '31600',
  gentile: 'Muretains',
  departement: 'Haute-Garonne',
  secteur: 'sud toulousain',
} as const;

export const CLUSTERS: readonly Cluster[] = [
  {
    page: 'accueil',
    prioritaires: ['club de boxe', 'Muret', 'MMA', 'sport de combat', 'Portet-sur-Garonne'],
    secondaires: [
      'club de boxe Muret',
      'boxe Muret',
      'club de boxe près de Muret',
      'club MMA Muret',
      'salle MMA Muret',
      'sports de combat Muret',
      'cours de boxe Muret',
      'salle de boxe près de Muret',
      'boxe anglaise Muret',
      'kick boxing Muret',
      'boxe thaï Muret',
      'boxe pieds poings Muret',
      'boxe enfant Muret',
      'boxe débutant Muret',
      '31600',
      'Muretains',
      'sud toulousain',
      'Haute-Garonne',
      'A64',
    ],
  },
  {
    page: 'boxe-anglaise',
    prioritaires: ['boxe anglaise', 'Muret', 'débutant'],
    secondaires: [
      'boxe anglaise Muret',
      'cours de boxe Muret',
      'club de boxe Muret',
      'boxe loisir',
      'apprendre à boxer',
      'cours de boxe adulte',
      'boxe débutant Muret',
      'noble art',
      'sparring',
      'pattes d’ours',
    ],
  },
  {
    page: 'mma',
    prioritaires: ['MMA', 'Muret', 'grappling', 'cage'],
    secondaires: [
      'club MMA Muret',
      'salle MMA Muret',
      'cours MMA Muret',
      'MMA débutant Muret',
      'club MMA près de Muret',
      'grappling Muret',
      'jiu-jitsu brésilien',
      'JJB Muret',
      'arts martiaux mixtes',
      'combat au sol',
      'cage MMA',
    ],
  },
  {
    page: 'kick-boxing',
    prioritaires: ['kick-boxing', 'Muret', 'pieds-poings'],
    secondaires: [
      'club kick boxing Muret',
      'kick boxing Muret',
      'boxe pieds poings Muret',
      'club boxe thaï Muret',
      'boxe thaï Muret',
      'boxe thaïlandaise',
      'Muay Thaï',
      'K1',
      'striking',
      'full contact',
    ],
  },
  {
    page: 'boxe-enfants',
    prioritaires: ['boxe enfant', 'Muret', 'boxe éducative', 'Baby boxe'],
    secondaires: [
      'boxe enfant Muret',
      'cours de boxe enfant Muret',
      'Baby boxe Muret',
      'boxe éducative Muret',
      'boxe ado Muret',
      'sport de combat enfant',
      'kick-boxing enfants',
      'boxe adolescent',
    ],
  },
  {
    page: 'boxing-fitness',
    prioritaires: ['boxing fitness', 'Muret', 'femme'],
    secondaires: [
      'boxing fitness Muret',
      'boxe femme Muret',
      'Lady Boxing',
      'cardio boxing Muret',
      'boxe sans opposition',
      'préparation physique',
      'remise en forme',
      'reprendre le sport',
    ],
  },
  {
    page: 'premiere-seance',
    prioritaires: ['première séance', 'Muret', 'débutant', 'essai'],
    secondaires: [
      'première séance boxe Muret',
      'cours d’essai boxe Muret',
      'boxe débutant Muret',
      'commencer la boxe',
      'essayer le MMA',
      'jamais fait de boxe',
      'que faut-il apporter',
    ],
  },
  {
    page: 'ta-seance',
    prioritaires: ['Muret', 'créneau', 'Portet-sur-Garonne'],
    secondaires: [
      'planning boxe Muret',
      'horaires boxe Muret',
      'quel cours de boxe Muret',
      'boxe le soir Muret',
      'boxe le midi',
      'boxe le samedi',
      'cours de boxe après le travail',
    ],
  },
  {
    page: 'contact',
    prioritaires: ['Muret', 'contact'],
    secondaires: [
      'club de boxe près de Muret',
      'inscription boxe Muret',
      'cours d’essai boxe Muret',
      'essayer la boxe',
    ],
  },
] as const;

export const cluster = (page: RouteId) => CLUSTERS.find((c) => c.page === page);
