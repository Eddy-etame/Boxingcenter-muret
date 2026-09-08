import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Statique par défaut. Seul /api/contact tourne à la demande : il relaie le
// formulaire vers Inlet (JSON + preuve de travail), ce qu'un <form> natif ne
// peut pas faire seul. Tout le reste est pré-rendu.
export default defineConfig({
  site: 'https://www.boxingcenter-muret.fr',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  compressHTML: true,
  redirects: {
    // Les formes d'URL à mots-clés fonctionnent, mais ne sont pas des pages :
    // fabriquer /club-boxe-muret/ à côté de / serait le schéma de page
    // satellite que Google sanctionne.
    '/club-boxe-muret': '/',
    '/boxe-muret': '/',
    '/sport-combat-muret': '/',
    '/salle-de-boxe-muret': '/',
    '/boxe-anglaise-muret': '/boxe-anglaise/',
    '/club-mma-muret': '/mma/',
    '/salle-mma-muret': '/mma/',
    '/mma-muret': '/mma/',
    '/grappling-muret': '/mma/',
    '/club-boxe-thai-muret': '/kick-boxing/',
    '/boxe-thai-muret': '/kick-boxing/',
    '/club-kick-boxing-muret': '/kick-boxing/',
    '/kick-boxing-muret': '/kick-boxing/',
    '/boxe-pieds-poings-muret': '/kick-boxing/',
    '/boxe-enfant-muret': '/boxe-enfants/',
    '/boxe-femme-muret': '/boxing-fitness/',
    '/plannings': '/ta-seance/',
    '/tarifs': '/ta-seance/',
  },
});
