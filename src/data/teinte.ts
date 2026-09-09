/**
 * LA TEINTE DU SITE — les mêmes valeurs que `styles/jetons.css`, lisibles
 * depuis un script de build : la vignette OG et le favicon se dessinent avec
 * la couleur du site, pas avec une couleur retapée.
 *
 * Une valeur change ici ET dans jetons.css, jamais dans un seul des deux.
 */
export const TEINTE = {
  papier: '#f3efe6',
  papierCreuse: '#eae4d7',
  papierVif: '#fbf8f2',
  encre: '#1e2044',
  graphite: '#5f5f79',
  trait: 'rgba(30, 32, 68, 0.16)',
  signal: '#b8763a',
  signalTexte: '#7a3d16',
  signalProfond: '#5e2f11',
} as const;
