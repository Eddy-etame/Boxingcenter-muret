/**
 * CONTENU ÉDITORIAL des pages disciplines.
 *
 * Ton : clair, local, rassurant, sportif. Tutoiement respectueux. Le fait
 * avant l'adjectif. Chaque bloc part d'une question que la personne se pose
 * vraiment, pas d'un argument qu'on veut placer.
 *
 * Aucun fait volatil ici — horaires, prix, âges vivent dans verite.ts et
 * offres.ts, et n'existent qu'à un seul endroit.
 */

import type { MediaSlug } from './medias';
import type { PageDiscipline } from './offres';

export type Bloc = { titre: string; texte: string };

export type Contenu = {
  id: PageDiscipline;
  h1: string;
  /** la réponse immédiate, avant tout le reste — ce que citent Google et les IA */
  chapeau: string;
  photoHero: MediaSlug;
  photoSecondaire: MediaSlug;
  /** ce que le visiteur gagne concrètement — titre de la bande de conversion */
  promesse: string;
  blocs: readonly Bloc[];
  /** le déroulé d'une séance, dans l'ordre */
  seance: readonly string[];
  faq: readonly Bloc[];
};

export const CONTENUS: readonly Contenu[] = [
  {
    id: 'boxe-anglaise',
    h1: 'Cours de boxe anglaise à proximité de Muret',
    chapeau:
      "La boxe anglaise se pratique aux poings, avec des gants, dans un cadre encadré. Aucun niveau n'est demandé pour commencer. Depuis Muret, elle se pratique à Boxing Center Portet-sur-Garonne, au bout de la ligne 117 Express, six jours sur sept de 10h à 21h30.",
    photoHero: 'boxe-anglaise-muret',
    photoSecondaire: 'sac-de-frappe-muret',
    promesse: 'Apprendre à boxer pour de vrai, encadré, sans avoir rien à prouver à personne.',
    blocs: [
      {
        titre: 'Quatre coups à apprendre',
        texte:
          "Uniquement les poings : direct, crochet, uppercut, et le jab qui prépare tout le reste. Ce qui ressemble à une limite est en réalité ce qui rend la discipline si dense — quand on ne dispose que de quatre coups, tout se joue ailleurs : dans les appuis, la distance, la garde, et la lecture de celui d'en face. C'est un sport de placement bien plus que de puissance. C'est exactement pour ça qu'une personne qui n'a jamais fait de sport peut y progresser vite.",
      },
      {
        titre: 'Tu ne prendras pas de coups le premier jour',
        texte:
          "L'opposition arrive plus tard, et seulement pour celles et ceux qui la souhaitent. Un débutant travaille au sac, à la corde, aux pattes d'ours avec un coach, et sur le déplacement à vide. Beaucoup de pratiquants s'entraînent des mois sans jamais faire d'opposition — et progressent énormément.",
      },
      {
        titre: 'Ce que ça change dans ta semaine',
        texte:
          "Deux séances par semaine suffisent à sentir une différence en un mois : sur le souffle d'abord, sur la posture ensuite, sur la façon de gérer la fatigue enfin. La boxe a ceci de particulier qu'elle occupe complètement la tête. Il est très difficile de penser à sa journée de travail pendant un round au sac. Beaucoup viennent au départ pour la forme et restent pour cette raison-là.",
      },
      {
        titre: 'Comment tu y vas',
        texte:
          "Par l'A64 en direction de Toulouse, sortie Portet, puis la route d'Espagne : le club est au 61. Sans voiture, la 117 Express part de la gare de Muret et suit exactement le même tracé, celui de l'ancienne nationale 117. Le vrai critère n'est jamais la distance, c'est l'habitude : si cet axe est déjà celui de tes trajets, tu iras même les soirs où tu n'en as pas envie. Et c'est cela, et rien d'autre, qui fait qu'on tient en novembre.",
      },
    ],
    seance: [
      'Échauffement : corde, mobilité, déplacements à vide',
      'Technique : un geste, décomposé, répété lentement puis en rythme',
      'Sac ou pattes d’ours : l’application, avec correction du coach',
      'Renforcement : gainage, abdominaux, travail au poids du corps',
      'Retour au calme et étirements',
    ],
    faq: [
      {
        titre: 'Il me faut du matériel pour la première séance ?',
        texte:
          "Une tenue de sport, une bouteille d'eau, et c'est tout pour découvrir. Pour les gants et les bandes, les conditions de prêt sont propres au club : demande-les en arrivant ou par téléphone avant de venir, c'est lui qui a l'information à jour.",
      },
      {
        titre: 'J’ai plus de 40 ans, c’est trop tard ?',
        texte:
          "La boxe se pratique à l'intensité qu'on lui donne. Un coach adapte le volume au pratiquant qu'il a devant lui, et la salle accueille des profils très différents dans la même séance.",
      },
      {
        titre: 'Je ne suis vraiment pas en forme. Je vais être ridicule ?',
        texte:
          "Tout le monde a été le débutant essoufflé du fond de la salle. C'est même la situation la plus banale d'un club de boxe : personne ne regarde, chacun est occupé à sa propre séance.",
      },
    ],
  },

  {
    id: 'mma',
    h1: 'Club de MMA près de Muret : la cage est à Portet',
    chapeau:
      "Le MMA combine la frappe debout, le corps à corps et le travail au sol. Depuis Muret, il se pratique à Boxing Center Portet-sur-Garonne — et l'entraînement se fait dans la cage. Le club publie aussi le grappling et le jiu-jitsu brésilien, six jours sur sept de 10h à 21h30.",
    photoHero: 'cage-mma-muret',
    photoSecondaire: 'boxe-anglaise-muret',
    promesse: 'La discipline la plus complète, construite étape par étape, même en partant de zéro.',
    blocs: [
      {
        titre: 'Pourquoi le MMA fait peur, et pourquoi c’est un malentendu',
        texte:
          "L'image publique du MMA vient des combats professionnels : une cage, deux athlètes préparés, et une intensité qui n'a rien à voir avec un entraînement. Un cours en club, c'est autre chose : de la technique décomposée, des répétitions à vitesse lente, du travail de placement, et une progression par étapes. Ce qu'on voit à la télévision est le sommet d'une pyramide dont la base est un cours d'apprentissage tout à fait ordinaire.",
      },
      {
        titre: 'La paroi fait partie du jeu',
        texte:
          "Elle change la façon dont on travaille. Contre un grillage, il n'y a pas de sortie latérale : on apprend à gérer le dos au mur, les appuis, les relevés. C'est une compétence en soi, et c'est le genre de détail qui sépare un club qui publie « MMA » d'un club qui le pratique vraiment. Portet-sur-Garonne a la seule cage du réseau Boxing Center.",
      },
      {
        titre: 'Les trois zones, et dans quel ordre les apprendre',
        texte:
          "Debout, c'est la frappe : poings, pieds, genoux, avec la même logique de distance et de garde qu'en boxe. Au corps à corps, c'est le clinch et les projections, le travail de déséquilibre. Au sol, c'est le contrôle, les positions et les soumissions. Un débutant n'attaque pas les trois de front : on construit une zone après l'autre, et beaucoup commencent par le sol.",
      },
      {
        titre: 'Le grappling, la porte d’entrée la plus sûre',
        texte:
          "Le grappling, c'est la lutte et les soumissions sans aucune frappe. Le jiu-jitsu brésilien travaille le même terrain avec le kimono. Dans les deux cas, on ne prend pas de coup — ce qui en fait le meilleur premier pas pour quelqu'un que la frappe inquiète. Portet publie les deux, et beaucoup de pratiquants y entrent par là avant d'ajouter le debout.",
      },
    ],
    seance: [
      'Échauffement spécifique : mobilité des hanches, chutes, déplacements au sol',
      'Technique debout ou technique au sol, selon le cycle en cours',
      'Répétition à faible intensité, avec un partenaire, sans opposition',
      'Situations : une position de départ, un objectif, un temps court',
      'Retour au calme, étirements, et le point du coach',
    ],
    faq: [
      {
        titre: 'Faut-il déjà savoir boxer ou lutter ?',
        texte:
          "Partir de zéro est même plus simple : il n'y a rien à désapprendre. Ce qu'il faut, c'est accepter de mal faire pendant plusieurs semaines. Le MMA est la discipline où la sensation d'incompétence dure le plus longtemps, parce qu'il y a le plus de choses à intégrer — et c'est aussi celle où les progrès sont les plus visibles une fois le cap passé.",
      },
      {
        titre: 'Est-ce qu’on se bat vraiment à l’entraînement ?',
        texte:
          "Les situations d'opposition arrivent progressivement, encadrées, à intensité contrôlée, et seulement quand tu les choisis. Un club sérieux ne met jamais un débutant en difficulté : il n'y a rien à y gagner, et un blessé de plus ne revient pas.",
      },
      {
        titre: 'Quelle différence entre MMA, grappling et JJB ?',
        texte:
          "Le grappling est la lutte au sol sans frappe, en short et rashguard. Le jiu-jitsu brésilien travaille le même terrain avec le kimono et un système de ceintures. Le MMA réunit les deux et y ajoute la frappe debout. Le club publie les trois : tu peux commencer par celui qui te rassure et élargir ensuite.",
      },
    ],
  },

  {
    id: 'kick-boxing',
    h1: 'Kick-boxing et boxe pieds-poings à proximité de Muret',
    chapeau:
      "Le kick-boxing ajoute les jambes aux poings : coups de pied, tibias, garde haute et travail des appuis. Depuis Muret, il se pratique à Boxing Center Portet-sur-Garonne, pour les adultes comme pour les enfants et les ados, six jours sur sept de 10h à 21h30.",
    photoHero: 'kick-boxing-muret',
    photoSecondaire: 'pattes-d-ours-muret',
    promesse: 'Frapper avec tout le corps, et découvrir que la souplesse vient en travaillant.',
    blocs: [
      {
        titre: 'Ce que les jambes changent',
        texte:
          "Elles changent la distance. En boxe anglaise, la garde protège un couloir étroit ; dès qu'on ajoute les jambes, il faut surveiller le bas, tenir une distance plus longue, et lire l'appui de l'autre autant que ses épaules. C'est plus complet, et c'est aussi plus lent à assimiler — ce qui est une bonne nouvelle : la progression se sent longtemps.",
      },
      {
        titre: 'Boxe thaï, K1, kick-boxing : les mots et la réalité',
        texte:
          "Ces disciplines partagent l'essentiel — frappes de poing et de jambe — et se distinguent surtout par le règlement : ce qui est autorisé au clinch, les coups de genou, les coups de coude. Le club publie « Kick-boxing ». Si tu cherches précisément le Muay Thaï sous ce nom, demande-lui : les intitulés et les règles appliquées en cours appartiennent au coach, pas à ce site.",
      },
      {
        titre: 'Je ne suis pas souple. C’est éliminatoire ?',
        texte:
          "La souplesse est une conséquence de la pratique, et elle vient avec les séances. Les premiers coups de pied sont bas : dans la cuisse, dans le tibia, à hauteur de hanche. La hauteur vient toute seule, et beaucoup de pratiquants confirmés ne montent jamais très haut — ils frappent fort et juste, ce qui vaut mieux.",
      },
      {
        titre: 'Pour les enfants et les ados',
        texte:
          "Le club publie un créneau kick-boxing enfants/ados, distinct de la boxe éducative. C'est la suite logique pour un enfant qui a déjà le geste et veut travailler les jambes. Les tranches d'âge exactes dépendent de la saison : demande-les au club avant d'inscrire.",
      },
    ],
    seance: [
      'Échauffement : corde, mobilité des hanches et des chevilles',
      'Technique : un enchaînement poing-pied, décomposé puis en rythme',
      'Pattes d’ours ou paos : l’application, avec correction du coach',
      'Sac : puissance et répétition, sur un temps chronométré',
      'Gainage, étirements longs, retour au calme',
    ],
    faq: [
      {
        titre: 'Faut-il des protège-tibias dès le début ?',
        texte:
          "Pour le travail à vide et au sac, non. Dès qu'il y a un partenaire, oui. Les conditions de prêt du matériel appartiennent au club : pose-lui la question avant ta première séance, il te dira exactement quoi apporter.",
      },
      {
        titre: 'C’est plus dur que la boxe anglaise ?',
        texte:
          "Plus complet, pas forcément plus dur. Il y a davantage de gestes à intégrer, donc la phase où l'on se sent maladroit dure plus longtemps. En revanche, l'intensité d'une séance se règle exactement de la même façon : c'est le coach qui la fixe, en fonction de qui il a devant lui.",
      },
      {
        titre: 'Peut-on faire les deux, boxe anglaise et kick-boxing ?',
        texte:
          "Oui, et beaucoup le font. Les deux se nourrissent : la boxe anglaise affine les mains et les déplacements, le kick-boxing élargit la distance et le répertoire. Le planning du club te dira quels créneaux permettent de combiner les deux dans la même semaine.",
      },
    ],
  },

  {
    id: 'boxe-enfants',
    h1: 'Boxe enfant à proximité de Muret : Baby boxe et boxe éducative',
    chapeau:
      "La boxe éducative apprend d'abord le contrôle du geste, la règle, la distance et le respect du partenaire. Le touché est contrôlé, jamais la mise en danger. Depuis Muret, trois niveaux existent à Boxing Center Portet-sur-Garonne : Baby boxe, boxe éducative, et kick-boxing enfants/ados.",
    photoHero: 'pattes-d-ours-muret',
    photoSecondaire: 'club-boxe-muret-2',
    promesse: 'Un cadre qui apprend le geste, la maîtrise et le respect — et ça se voit hors de la salle.',
    blocs: [
      {
        titre: 'Ce qu’un enfant fait vraiment pendant une heure',
        texte:
          "Il joue, il se déplace, il apprend à tenir une distance et à ne pas foncer. Une séance de boxe éducative ressemble davantage à un cours de motricité qu'à un combat : des parcours, des jeux de réaction, des gestes répétés, et une part importante consacrée à la règle — quand on frappe, quand on arrête, comment on salue son partenaire. Le contrôle passe avant la puissance, toujours.",
      },
      {
        titre: 'Est-ce que ça rend violent',
        texte:
          "La boxe éducative apprend d'abord le contrôle du geste, la règle, la distance et le respect du partenaire. Un enfant y découvre qu'un coup se retient, qu'un arrêt se respecte, et qu'un adversaire se salue. Ce cadre-là est très clair, et il est tenu par le coach à chaque séance — c'est même l'essentiel de son travail.",
      },
      {
        titre: 'Les trois niveaux publiés par le club',
        texte:
          "La Baby boxe pour la première approche : le jeu, l'équilibre, la notion de distance. La boxe éducative ensuite : le geste, la règle, le respect du partenaire, en touché contrôlé. Et le kick-boxing enfants/ados pour ceux qui veulent aussi travailler les jambes. Les âges exacts de chaque créneau dépendent de la saison : le club te les donnera.",
      },
      {
        titre: 'Ce que ça demande à un parent',
        texte:
          "Un trajet régulier, et c'est le vrai sujet. Depuis Muret, on y va par l'A64 sortie Portet, ou par la 117 Express qui part de la gare. Regarde le planning avant de t'engager : le bon créneau n'est pas le plus intéressant sur le papier, c'est celui que tu pourras assurer en janvier, quand il fait nuit à 18h.",
      },
    ],
    seance: [
      'Échauffement en jeu : déplacements, réaction, coordination',
      'Le geste du jour, montré lentement puis répété',
      'Travail à deux, en touché contrôlé, avec la règle rappelée',
      'Un jeu d’opposition encadré, court, arbitré par le coach',
      'Retour au calme, salut, et le mot de la fin',
    ],
    faq: [
      {
        titre: 'À partir de quel âge ?',
        texte:
          "Le club publie la Baby boxe pour les plus jeunes, puis la boxe éducative. Les tranches d'âge exactes changent d'une saison à l'autre : appelle le club avec l'âge de ton enfant, il te dira quel créneau viser. On ne te donnera pas ici un chiffre qui pourrait être faux au moment où tu le lis.",
      },
      {
        titre: 'Mon enfant est timide. C’est un bon endroit ?',
        texte:
          "Souvent, oui. Un cours de boxe éducative est très cadré : on sait ce qu'on fait, quand, et avec qui. Cette prévisibilité rassure les enfants que le collectif intimide, et le fait de progresser sur un geste visible donne des résultats concrets à montrer.",
      },
      {
        titre: 'Faut-il un certificat médical ?',
        texte:
          "Les conditions d'inscription — licence, certificat, autorisation parentale — appartiennent au club et à la fédération, et elles évoluent. Demande-les au club avant l'inscription : c'est lui qui a la version en vigueur cette saison.",
      },
    ],
  },

  {
    id: 'boxing-fitness',
    h1: 'Boxing fitness et boxe femme à proximité de Muret',
    chapeau:
      "Le boxing fitness reprend les gestes de la boxe — frappe, déplacement, garde — sans aucune opposition. On ne prend pas de coup et on ne combat pas. Depuis Muret, Boxing Center Portet-sur-Garonne publie le Lady Boxing et la préparation physique, six jours sur sept de 10h à 21h30.",
    photoHero: 'preparation-physique-muret',
    photoSecondaire: 'sac-de-frappe-muret',
    promesse: 'Le cardio et le défoulement de la boxe, sans opposition et sans rien avoir à prouver.',
    blocs: [
      {
        titre: 'Frapper, sans être frappé',
        texte:
          "C'est toute la proposition. Le geste de boxe est un excellent exercice cardio : il engage les jambes, le tronc et les bras dans le même mouvement, il se règle en intensité au round près, et il occupe complètement la tête. Retire l'opposition et il ne reste que le bénéfice — un effort intense, mesurable, et une heure pendant laquelle tu ne penses à rien d'autre.",
      },
      {
        titre: 'Le Lady Boxing, et pourquoi un créneau entre femmes existe',
        texte:
          "Parce que pour beaucoup, le premier obstacle n'est pas l'effort, c'est la salle. Un créneau 100 % féminin retire cette question de l'équation : on vient, on travaille, on repart, sans avoir à négocier sa place. Ce n'est pas une version allégée de la boxe — c'est la même, dans un cadre choisi.",
      },
      {
        titre: 'La préparation physique',
        texte:
          "Le club publie aussi un créneau de préparation physique : gainage, force, souffle. C'est ce qui fait tenir les trois derniers rounds, et c'est aussi ce qui protège des blessures. Beaucoup de pratiquants combinent une séance technique et une séance de préparation dans la même semaine.",
      },
      {
        titre: 'Reprendre le sport par la boxe',
        texte:
          "C'est une bonne porte d'entrée, parce que la progression est visible tout de suite : un geste juste se voit, un round tenu se compte. Contrairement à une salle en libre accès, il y a quelqu'un qui regarde et qui corrige — et c'est précisément ce qui fait revenir la deuxième semaine.",
      },
    ],
    seance: [
      'Échauffement : corde, mobilité, montée en température',
      'Technique : le geste de boxe, décomposé, sans partenaire',
      'Rounds au sac : intensité réglée, temps chronométré',
      'Renforcement : gainage, poids du corps, circuit court',
      'Étirements et retour au calme',
    ],
    faq: [
      {
        titre: 'Est-ce qu’il y aura de l’opposition, même un peu ?',
        texte:
          "Le boxing fitness se pratique sans partenaire d'opposition : sac, pattes d'ours avec un coach, travail à vide. Si un jour tu veux essayer autre chose, le club a d'autres créneaux — mais rien ne t'y amène contre ton gré.",
      },
      {
        titre: 'Je n’ai jamais mis de gants. Ça se voit ?',
        texte:
          "Comme chez tout le monde à la première séance. Le coach montre la garde et la position des poings dans les cinq premières minutes ; le reste s'installe en quelques semaines. C'est un cours de débutants par nature : personne n'y arrive en sachant.",
      },
      {
        titre: 'Combien de séances par semaine pour voir un effet ?',
        texte:
          "Deux suffisent à sentir une différence sur le souffle en un mois. Une seule, tenue toute l'année, vaut mieux que trois abandonnées en mars — et c'est pour ça que le choix du créneau compte plus que l'intensité que tu te promets aujourd'hui.",
      },
    ],
  },
] as const;

export const contenu = (id: PageDiscipline): Contenu => {
  const c = CONTENUS.find((x) => x.id === id);
  if (!c) throw new Error(`Contenu inconnu : ${id}`);
  return c;
};
