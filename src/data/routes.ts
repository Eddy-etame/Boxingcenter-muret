/**
 * REGISTRE DES ROUTES — une page = une question que quelqu'un se pose vraiment.
 *
 * Aucune URL n'est écrite en dur ailleurs : on passe par `route('mma')`.
 * Titres et descriptions vivent ici parce qu'ils font partie de
 * l'architecture de recherche, pas de la mise en page.
 *
 * Plannings et Tarifs ne sont PAS des pages : ce sont des liens directs vers
 * les pages réelles du club (voir `LIENS_CLUB`). Recopier un planning, c'est
 * publier une information fausse à la première modification.
 */

import { DESTINATION } from './verite';

export type RouteId =
  | 'accueil'
  | 'boxe-anglaise'
  | 'mma'
  | 'kick-boxing'
  | 'boxe-enfants'
  | 'boxing-fitness'
  | 'premiere-seance'
  | 'ta-seance'
  | 'transports'
  | 'contact'
  | 'merci'
  | 'introuvable'
  | 'mentions-legales'
  | 'confidentialite';

export type Route = {
  id: RouteId;
  chemin: string;
  nav: string;
  /** la question à laquelle la page répond, du point de vue du visiteur */
  question: string;
  titre: string;
  description: string;
  menu: boolean;
  index: boolean;
  /**
   * Page mise en avant : elle sort de la liste de navigation et prend sa
   * propre pastille, parce qu'elle répond à l'objection numéro un — « c'est
   * loin » — et qu'une objection ne se range pas au milieu d'un menu.
   */
  promo?: true;
};

export const ROUTES: readonly Route[] = [
  {
    id: 'accueil',
    chemin: '/',
    nav: 'Accueil',
    question: 'Où boxer quand on habite Muret ?',
    titre: 'Club de boxe et MMA près de Muret | Boxing Center',
    description:
      'Boxe, MMA, kick-boxing et sports de combat à proximité de Muret : Boxing Center accueille les Muretains à Portet-sur-Garonne, 600 m², une cage, 6 j/7 de 10h à 21h30.',
    menu: true,
    index: true,
  },
  {
    id: 'boxe-anglaise',
    chemin: '/boxe-anglaise/',
    nav: 'Boxe anglaise',
    question: 'À quoi ressemble un cours de boxe anglaise, et est-ce que je peux commencer ?',
    titre: 'Boxe anglaise près de Muret | Boxing Center',
    description:
      'Cours de boxe anglaise accessibles depuis Muret, au club Boxing Center de Portet-sur-Garonne. Aucun niveau demandé, encadrement diplômé, 6 jours sur 7.',
    menu: true,
    index: true,
  },
  {
    id: 'mma',
    chemin: '/mma/',
    nav: 'MMA',
    question: 'Où faire du MMA quand on part de Muret ?',
    titre: 'Club MMA près de Muret — cage, grappling et JJB | Boxing Center',
    description:
      'Salle MMA à proximité de Muret : Boxing Center Portet-sur-Garonne entraîne le MMA en cage, avec le grappling et le jiu-jitsu brésilien. Débutants accueillis.',
    menu: true,
    index: true,
  },
  {
    id: 'kick-boxing',
    chemin: '/kick-boxing/',
    nav: 'Kick-boxing',
    question: 'Je veux frapper avec les jambes aussi. Où ?',
    titre: 'Kick-boxing et boxe pieds-poings près de Muret | Boxing Center',
    description:
      'Club de kick-boxing à proximité de Muret : la boxe pieds-poings se pratique à Boxing Center Portet-sur-Garonne, adultes comme enfants et ados.',
    menu: true,
    index: true,
  },
  {
    id: 'boxe-enfants',
    chemin: '/boxe-enfants/',
    nav: 'Boxe enfants',
    question: 'Quelle boxe pour mon enfant, et est-ce que c’est sans danger ?',
    titre: 'Boxe enfant près de Muret | Boxing Center',
    description:
      'Cours de boxe enfant accessibles depuis Muret : Baby boxe, boxe éducative et kick-boxing enfants/ados à Boxing Center Portet-sur-Garonne. Touché contrôlé.',
    menu: true,
    index: true,
  },
  {
    id: 'boxing-fitness',
    chemin: '/boxing-fitness/',
    nav: 'Boxing fitness',
    question: 'Je veux la forme et le défoulement, sans combattre.',
    titre: 'Boxing fitness et boxe femme près de Muret | Boxing Center',
    description:
      'Lady Boxing et préparation physique à proximité de Muret, au club Boxing Center de Portet-sur-Garonne : le geste de boxe et le cardio, sans opposition.',
    menu: true,
    index: true,
  },
  {
    id: 'premiere-seance',
    chemin: '/premiere-seance/',
    nav: 'Première séance',
    question: 'Je n’ai jamais boxé. Qu’est-ce qui va m’arriver ?',
    titre: 'Première séance de boxe près de Muret | Boxing Center',
    description:
      'Ce qu’il faut apporter, ce que tu vas faire et ce que tu ne feras pas : le déroulé d’un premier cours de boxe ou de MMA pour un débutant venu de Muret.',
    menu: false,
    index: true,
  },
  {
    id: 'ta-seance',
    chemin: '/ta-seance/',
    nav: 'Ta séance',
    question: 'Quelle discipline, à quel moment, pour moi ?',
    titre: 'Trouver ta séance depuis Muret | Boxing Center',
    description:
      'Deux réponses et tu sais quelle pratique viser à Boxing Center Portet-sur-Garonne, et à quel moment de la semaine y aller depuis Muret.',
    menu: true,
    index: true,
  },
  {
    id: 'transports',
    chemin: '/transports/',
    nav: 'Transports',
    question: 'Comment j’y vais si je n’ai pas de voiture ?',
    titre: 'Y aller en bus depuis Muret | Boxing Center',
    description:
      'La 117 Express relie la gare de Muret à Portet-sur-Garonne sans correspondance. Bus, métro et TER pour rejoindre Boxing Center depuis Muret sans voiture.',
    menu: true,
    index: true,
    promo: true,
  },
  {
    id: 'contact',
    chemin: '/contact/',
    nav: 'Contact',
    question: 'Je veux poser ma question à quelqu’un.',
    titre: 'Contact | Boxing Center depuis Muret',
    description:
      'Une question avant de te déplacer depuis Muret ? Écris-nous, on te répond avec la discipline et le créneau qui correspondent. Téléphone : 09 56 65 37 82.',
    menu: true,
    index: true,
  },
  {
    id: 'merci',
    chemin: '/merci/',
    nav: 'Merci',
    question: 'Message envoyé.',
    titre: 'Message bien reçu | Boxing Center Muret',
    description: 'Ta demande est partie. On te répond rapidement.',
    menu: false,
    index: false,
  },
  {
    id: 'introuvable',
    chemin: '/404/',
    nav: 'Page introuvable',
    question: 'Cette adresse ne mène nulle part.',
    titre: 'Page introuvable | Boxing Center depuis Muret',
    description: 'Cette page n’existe pas ou a changé d’adresse. Voilà les pages du site.',
    menu: false,
    index: false,
  },
  {
    id: 'mentions-legales',
    chemin: '/mentions-legales/',
    nav: 'Mentions légales',
    question: 'Qui édite ce site ?',
    titre: 'Mentions légales | Boxing Center Muret',
    description: 'Mentions légales du site boxingcenter-muret.fr.',
    menu: false,
    index: true,
  },
  {
    id: 'confidentialite',
    chemin: '/confidentialite/',
    nav: 'Confidentialité',
    question: 'Qu’est-ce que vous faites de mes données ?',
    titre: 'Politique de confidentialité | Boxing Center Muret',
    description: 'Ce que devient une demande envoyée depuis boxingcenter-muret.fr.',
    menu: false,
    index: true,
  },
] as const;

export function route(id: RouteId): Route {
  const r = ROUTES.find((x) => x.id === id);
  if (!r) throw new Error(`Route inconnue : ${id}`);
  return r;
}

export const MENU = ROUTES.filter((r) => r.menu);

/** Les entrées de navigation ordinaires, hors pages mises en avant. */
export const MENU_SIMPLE = MENU.filter((r) => !r.promo);

/** La page mise en avant, s'il y en a une. */
export const PROMO = ROUTES.find((r) => r.promo);

/**
 * Plannings et Tarifs vivent chez le club. Ce sont des liens sortants dans la
 * navigation, pas des pages : la source à jour est toujours la sienne.
 */
export const LIENS_CLUB = [
  { nav: 'Plannings', href: DESTINATION.plannings, titre: `Voir les plannings ${DESTINATION.nom}` },
  { nav: 'Tarifs', href: DESTINATION.tarifs, titre: `Consulter les tarifs ${DESTINATION.nom}` },
] as const;
