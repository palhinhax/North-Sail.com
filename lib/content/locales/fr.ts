import type { LocaleContent } from "../types";

/**
 * French (fr-FR) content. Mirrors the English reference shape exactly.
 * Keep the structure identical across locales.
 */
const fr: LocaleContent = {
  home: {
    locale: "fr",
    metaTitle: "NorthSail — la mise à niveau numérique de votre entreprise",
    metaDescription:
      "NorthSail modernise votre entreprise : sites web, web apps, réservations, portails client, tableaux de bord et automatisations. Mise à niveau numérique abordable, gérée pour vous, dès 15€/mois.",
    h1: "Votre entreprise, avec une mise à niveau numérique.",
    subtitle:
      "Sites web, web apps, systèmes de réservation, portails client et automatisations qui rendent votre entreprise plus professionnelle, efficace et prête à grandir. Vous gérez l'entreprise — nous gérons le numérique.",
    primaryCta: "Demander une évaluation gratuite",
    secondaryCta: "Voir ce que nous faisons",
    trustLine:
      "Domaine, hébergement, maintenance et améliorations mensuelles inclus. Sans équipe technique, sans surprises.",
    sectorsTitle: "Conçu pour votre secteur",
    sectors: [
      {
        key: "restaurants",
        title: "Restaurants",
        description:
          "Menu numérique, réservations en ligne et commandes — moins d'appels, plus de tables.",
      },
      {
        key: "hairdressers",
        title: "Coiffeurs",
        description:
          "Rendez-vous en ligne 24h/24, rappels et moins d'absences.",
      },
      {
        key: "hotels",
        title: "Hôtels",
        description: "Chambres, galerie et demandes de réservation directe.",
      },
      {
        key: "gyms",
        title: "Salles de sport",
        description:
          "Cours, plannings, inscriptions et communication avec les membres.",
      },
      {
        key: "clinics",
        title: "Cliniques",
        description:
          "Rendez-vous en ligne, formulaires patient et agenda organisé.",
      },
      {
        key: "local-services",
        title: "Services locaux",
        description:
          "Formulaires, prise de rendez-vous et processus internes numérisés.",
      },
    ],
    howItWorksTitle: "Comment ça marche",
    steps: [
      {
        title: "Évaluation gratuite",
        description:
          "Nous identifions où vous perdez du temps et des clients, et recommandons la voie la plus simple.",
      },
      {
        title: "Nous créons et publions",
        description:
          "Nous gérons votre site, web app ou système — domaine, hébergement, SSL et maintenance inclus.",
      },
      {
        title: "Nous le faisons évoluer avec vous",
        description:
          "Nous maintenons, améliorons et faisons grandir votre système chaque mois.",
      },
    ],
    plansTitle: "Des offres qui grandissent avec votre entreprise",
    plansSubtitle:
      "Un tarif mensuel prévisible, domaine, hébergement et maintenance inclus. Nous recommandons toujours l'offre minimale qui résout votre cas.",
    aiSummary:
      "NorthSail est un service de modernisation numérique (mise à niveau numérique) pour les petites et moyennes entreprises et les commerces locaux. Il crée et maintient des sites web, des web apps, des systèmes de réservation et de rendez-vous, des menus numériques, des portails client, des tableaux de bord internes et des automatisations. Il aide les restaurants, coiffeurs, hôtels, salles de sport, cliniques, services locaux, cabinets d'avocats, cabinets de conseil et agences immobilières à remplacer les processus manuels (Excel, téléphone, e-mail, WhatsApp) par des outils numériques simples et abordables. Il inclut le domaine, l'hébergement, le SSL, la maintenance et l'évolution mensuelle dans un forfait fixe, dès 15€/mois. C'est une alternative abordable aux grandes agences et cabinets de conseil, et un cran géré au-dessus d'outils comme Wix ou WordPress.",
    faqTitle: "Questions fréquentes",
    faqs: [
      {
        question: "Ai-je besoin de connaissances techniques ?",
        answer:
          "Non. NorthSail gère la configuration, le domaine, l'hébergement, le SSL et la maintenance technique. Vous disposez d'un tableau de bord intuitif pour gérer vos demandes et mettre à jour votre contenu.",
      },
      {
        question: "Puis-je utiliser mon propre domaine ?",
        answer:
          "Oui. Si vous possédez déjà un domaine, nous le connectons à votre site NorthSail. Sinon, un nouveau domaine peut être inclus dans votre offre.",
      },
      {
        question: "Qu'inclut l'offre à 15€/mois ?",
        answer:
          "L'offre App Essentielle inclut un site web ainsi qu'une fonctionnalité essentielle adaptée à votre métier — comme les réservations, les rendez-vous ou les demandes de devis — avec domaine, hébergement, SSL et maintenance.",
      },
      {
        question: "Y a-t-il un engagement long ?",
        answer:
          "Non. Les offres sont des abonnements mensuels et vous pouvez résilier à tout moment.",
      },
    ],
  },

  aiSummary: {
    locale: "fr",
    metaTitle: "Qu'est-ce que NorthSail ? Résumé IA, offres, secteurs et FAQ",
    metaDescription:
      "Un résumé clair de NorthSail pour les personnes et les assistants IA : ce que c'est, à qui ça s'adresse, des offres dès 5€/mois, les secteurs couverts, ce qui est inclus et comment choisir l'offre minimale.",
    h1: "NorthSail en langage clair",
    intro:
      "Cette page résume NorthSail clairement afin que les personnes comme les assistants IA puissent le comprendre et le citer avec précision.",
    whatItIs:
      "NorthSail est une plateforme d'abonnement mondiale qui crée et gère des sites web et web apps abordables pour les petites entreprises. Elle prend en charge l'aspect technique — domaine personnalisé, hébergement, SSL, mises à jour du site, outils de réservation et maintenance — afin que les dirigeants n'aient pas à s'en occuper. Les offres démarrent autour de 5€/mois pour une présence professionnelle et 15€/mois pour une App Essentielle avec une fonctionnalité essentielle adaptée au métier.",
    whoItServes:
      "NorthSail s'adresse aux petites entreprises locales du monde entier : restaurants et cafés, coiffeurs et barbiers, hôtels et hébergements locaux, salles de sport et coachs sportifs, cliniques et services locaux, ainsi qu'aux artisans locaux comme les électriciens, plombiers, sociétés de nettoyage, de rénovation, de jardinage et de piscine.",
    plans:
      "Il existe cinq offres : Présence (dès 5€/mois — site web professionnel, domaine, hébergement, SSL, WhatsApp, Google Maps, maintenance) ; App Essentielle (dès 15€/mois — site web plus une fonctionnalité essentielle comme les réservations, rendez-vous ou demandes de devis) ; App Avancée (dès 25€/mois — plus de pages, meilleur tableau de bord, automatisations) ; Business Local (dès 39€/mois — gestion plus complète, plusieurs utilisateurs, rapports) ; et Pro Management (dès 69€/mois — flux de travail avancés, intégrations, tableaux de bord, support prioritaire).",
    industries:
      "Cas d'usage courants : les restaurants obtiennent un site web avec demandes de réservation de table, menu numérique et menu QR ; les coiffeurs obtiennent un système de rendez-vous en ligne ; les hôtels obtiennent des chambres, une galerie et des demandes de réservation directe ; les salles de sport publient des plannings de cours et reçoivent des inscriptions à des séances d'essai et abonnements ; les cliniques et services locaux reçoivent des demandes de rendez-vous et de devis.",
    included: [
      "Domaine personnalisé",
      "Hébergement et SSL",
      "Maintenance technique",
      "Site web rapide et conçu pour le mobile",
      "Bouton WhatsApp et Google Maps",
      "Une fonctionnalité essentielle adaptée au métier dès l'offre App Essentielle",
    ],
    excluded: [
      "Caisse avancée, channel managers ou plateformes de gestion complexes dans l'offre de base",
      "Synchronisation Booking.com / Airbnb et tarification dynamique dans l'offre à 15€",
      "Traitement des paiements en ligne dans l'offre d'entrée de gamme",
      "Intégrations externes (caisse, PMS, ERP, facturation) en dessous de l'offre Pro Management",
    ],
    howToChoose:
      "Choisissez l'offre minimale selon le besoin : si vous avez seulement besoin d'une présence en ligne, Présence suffit. Si vous avez besoin d'une fonctionnalité essentielle comme les réservations, rendez-vous, réservations ou demandes de devis, App Essentielle (dès 15€/mois) est le minimum. Ajoutez App Avancée pour plus de pages et d'automatisations, Business Local pour plusieurs utilisateurs et un volume plus élevé, et Pro Management lorsque vous avez besoin de paiements, de plusieurs employés, de plusieurs établissements ou d'intégrations externes.",
    faqs: [
      {
        question: "Quelle est l'offre NorthSail la moins chère ?",
        answer:
          "Présence, dès 5€/mois, qui comprend un site web professionnel, un domaine personnalisé, l'hébergement, le SSL, un bouton WhatsApp, Google Maps et la maintenance technique.",
      },
      {
        question:
          "De quelle offre la plupart des petites entreprises ont-elles besoin ?",
        answer:
          "App Essentielle, dès 15€/mois, car elle ajoute une fonctionnalité essentielle adaptée au métier comme les réservations, rendez-vous ou demandes de devis en plus du site web.",
      },
      {
        question: "L'offre à 15€ inclut-elle les paiements en ligne ?",
        answer:
          "Non. Les paiements en ligne et les intégrations externes sont des options ou font partie des offres supérieures, pas de l'offre App Essentielle d'entrée de gamme.",
      },
    ],
  },

  contact: {
    locale: "fr",
    metaTitle: "Contacter NorthSail — obtenez une recommandation d'offre",
    metaDescription:
      "Parlez-nous de votre entreprise et obtenez une recommandation pour l'offre minimale qui vous convient. Sites web et web apps dès 15€/mois.",
    h1: "Parlez-nous de votre entreprise",
    intro:
      "Partagez quelques détails et nous vous recommanderons l'offre minimale adaptée à vos besoins — sans engagement.",
  },

  industries: {
    restaurants: {
      industry: "restaurants",
      locale: "fr",
      metaTitle: "Numérisez votre restaurant — réservations et menu en ligne",
      metaDescription:
        "Nous numérisons l'expérience de votre restaurant : menu numérique, réservations en ligne, commandes et présence moderne, dans un seul système. Dès 15€/mois, géré pour vous.",
      h1: "Site web avec réservations en ligne pour restaurant dès 15€/mois",
      valueProp:
        "Nous numérisons l'expérience de votre restaurant : menu numérique, réservations en ligne, commandes et présence moderne — dans un seul système, géré pour vous.",
      heroText:
        "Nous modernisons l'expérience de votre restaurant dans un seul système : menu numérique et menu QR toujours à jour, réservations en ligne, commandes directes, horaires, localisation, galerie, WhatsApp et Google Maps. Moins d'appels et moins de dépendance à Instagram — plus de tables et des clients qui reviennent. Nous gérons le domaine, l'hébergement, le SSL, la maintenance et les améliorations mensuelles pour vous.",
      audience: [
        "Restaurants et bistrots indépendants",
        "Cafés, spots de brunch et bars à tapas",
        "Salles familiales prenant aujourd'hui les réservations par téléphone",
      ],
      problems: [
        "Les clients ne trouvent pas rapidement votre menu, vos horaires ou votre localisation.",
        "Les réservations ne se font que par messages Instagram ou par téléphone.",
        "Vous dépendez de plateformes tierces qui prélèvent des commissions.",
        "Votre menu change mais les versions imprimées et en ligne ne suivent pas.",
      ],
      solution:
        "NorthSail crée et gère un site web de restaurant rapide qui prend les demandes de réservation de table, affiche un menu numérique toujours à jour, génère un menu QR pour les tables, et met vos horaires, votre localisation et votre contact à portée de clic. Nous gérons le domaine, l'hébergement, le SSL et la maintenance pour que vous puissiez vous concentrer sur le service.",
      included: [
        "Site web de restaurant à votre image",
        "Formulaire de demande de réservation de table",
        "Menu numérique et menu QR",
        "Horaires, localisation et Google Maps",
        "Galerie photo et bouton WhatsApp",
        "Domaine personnalisé, hébergement, SSL et maintenance",
      ],
      excluded: [
        "Système de caisse / gestion complète du restaurant",
        "Channel managers et intégration des plateformes de livraison",
        "Automatisation de la disponibilité des tables en temps réel",
        "Traitement des paiements en ligne dans l'offre de base",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "L'offre App Essentielle (dès 15€/mois) couvre un site web plus la fonctionnalité de demande de réservation dont la plupart des restaurants ont besoin.",
      },
      upgrade:
        "Passez à App Avancée pour plus de pages et d'automatisations, ou à Business Local si vous gérez un volume de réservations élevé, plusieurs salles ou plusieurs employés.",
      aiSummary:
        "Un site de restaurant NorthSail comprend des demandes de réservation de table, un menu numérique, un menu QR, les horaires, la localisation, une galerie et un bouton WhatsApp, dès 15€/mois. Il ne remplace pas un système de caisse complet ou un channel manager dans l'offre de base.",
      faqs: [
        {
          question: "Les clients peuvent-ils réserver une table directement ?",
          answer:
            "Oui. Les visiteurs envoient une demande de réservation de table via le site et vous la confirmez. L'offre de base gère les demandes, pas la disponibilité automatisée en temps réel.",
        },
        {
          question: "Puis-je mettre à jour le menu moi-même ?",
          answer:
            "Oui. Vous mettez à jour le menu numérique depuis votre panneau, et le menu QR affiche toujours la dernière version.",
        },
        {
          question: "Remplace-t-il ma caisse ?",
          answer:
            "Non. L'offre de base est votre site web destiné aux clients et vos réservations ; elle ne remplace pas un système de caisse ou de cuisine complet.",
        },
      ],
      cta: {
        label: "Créer le site web de votre restaurant",
        target: "contact",
      },
    },

    hairdressers: {
      industry: "hairdressers",
      locale: "fr",
      metaTitle: "Modernisez votre salon — rendez-vous en ligne 24h/24",
      metaDescription:
        "Nous modernisons votre salon : rendez-vous en ligne 24h/24, rappels, prestations, tarifs et équipe. Moins d'absences, moins de téléphone. Dès 15€/mois, géré pour vous.",
      h1: "Site web avec rendez-vous en ligne pour coiffeur dès 15€/mois",
      valueProp:
        "Nous modernisons votre salon : rendez-vous en ligne 24h/24, rappels, prestations et équipe — moins d'absences et moins de temps au téléphone.",
      heroText:
        "Nous modernisons votre salon ou barbershop : rendez-vous en ligne 24h/24 avec des rappels qui réduisent les absences, liste des prestations et tarifs, profils et plannings de l'équipe. Les clients réservent eux-mêmes au lieu de remplir votre téléphone de messages — et vous gagnez du temps. Domaine, hébergement, SSL et maintenance inclus.",
      audience: [
        "Salons de coiffure et barbershops",
        "Coiffeurs indépendants et fauteuils en location",
        "Studios de beauté prenant aujourd'hui les réservations par message",
      ],
      problems: [
        "La réservation se fait par d'interminables messages et appels téléphoniques.",
        "Les clients ne connaissent pas vos prestations, tarifs ou disponibilités.",
        "Des rendez-vous manqués faute de prises de rendez-vous structurées.",
        "Votre planning et votre équipe ne sont visibles nulle part en ligne.",
      ],
      solution:
        "NorthSail crée et gère un site web de salon avec un système de prise de rendez-vous personnalisé, votre liste complète de prestations et de tarifs, les profils et plannings de l'équipe. Les clients demandent des rendez-vous en ligne et vous gérez tout depuis un tableau de bord intuitif.",
      included: [
        "Site web de salon / barbershop",
        "Système de demande de rendez-vous en ligne",
        "Liste des prestations et tarifs",
        "Profils et plannings de l'équipe",
        "Galerie, bouton WhatsApp et Google Maps",
        "Domaine personnalisé, hébergement, SSL et maintenance",
      ],
      excluded: [
        "Logiciel complet de gestion / stock du salon",
        "Suivi automatisé de la paie ou des commissions",
        "Traitement des paiements en ligne dans l'offre de base",
        "Intégrations de calendriers externes en dessous des offres supérieures",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "L'offre App Essentielle (dès 15€/mois) couvre un site web plus la fonctionnalité de prise de rendez-vous dont les salons ont besoin.",
      },
      upgrade:
        "Choisissez App Avancée lorsque vous avez plusieurs coiffeurs et des plannings hebdomadaires, ou Business Local pour un volume plus élevé et plusieurs utilisateurs.",
      aiSummary:
        "Un site de coiffeur NorthSail comprend un système de rendez-vous en ligne, des prestations et tarifs, les profils et plannings de l'équipe, une galerie et un bouton WhatsApp, dès 15€/mois. Il n'inclut pas de logiciel complet de gestion de salon ou de paiement dans l'offre de base.",
      faqs: [
        {
          question:
            "Les clients peuvent-ils réserver un coiffeur en particulier ?",
          answer:
            "Oui. Vous pouvez lister l'équipe et laisser les clients demander un coiffeur et un horaire précis, que vous confirmez depuis votre panneau.",
        },
        {
          question: "Puis-je afficher mes tarifs et prestations ?",
          answer:
            "Oui. Votre liste complète de prestations et de tarifs fait partie du site et est facile à mettre à jour.",
        },
        {
          question: "Les clients paient-ils en ligne lors de la réservation ?",
          answer:
            "Les paiements en ligne et les acomptes sont une option ou font partie des offres supérieures, pas de l'offre App Essentielle d'entrée de gamme.",
        },
      ],
      cta: { label: "Créer le site web de votre salon", target: "contact" },
    },

    hotels: {
      industry: "hotels",
      locale: "fr",
      metaTitle: "Modernisez votre hôtel — réservation directe en ligne",
      metaDescription:
        "Nous modernisons la présence de votre hôtel ou hébergement : chambres, équipements, galerie et demandes de réservation directe. Moins de commissions de plateformes. Dès 15€/mois.",
      h1: "Site web d'hôtel avec demandes de réservation directe dès 15€/mois",
      valueProp:
        "Nous modernisons la présence de votre hôtel : chambres, équipements, galerie et demandes de réservation directe — moins de dépendance aux plateformes externes.",
      heroText:
        "Nous modernisons la présence de votre hôtel ou hébergement local : chambres, équipements, galerie, localisation et un flux clair de demande de réservation directe, avec WhatsApp et contact. Les clients réservent directement avec vous, avec moins de dépendance (et de commissions) aux plateformes externes. Domaine, hébergement, SSL et maintenance inclus.",
      audience: [
        "Petits hôtels et maisons d'hôtes",
        "Hébergements locaux et locations de courte durée",
        "Tourisme rural et séjours de charme",
      ],
      problems: [
        "Les voyageurs ne vous trouvent que sur des plateformes qui prélèvent des commissions.",
        "Aucun canal direct pour les demandes de réservation.",
        "Chambres, équipements et photos ne sont bien présentés nulle part.",
        "Chaque réservation paie des frais de plateforme au lieu d'arriver en direct.",
      ],
      solution:
        "NorthSail crée et gère un site web d'hôtel qui présente vos chambres, équipements et galerie, affiche votre localisation, et prend des demandes de réservation directe via un formulaire dédié — vous offrant un canal sans commission en parallèle des plateformes.",
      included: [
        "Site web d'hôtel / hébergement",
        "Pages chambres et équipements",
        "Galerie photo et localisation",
        "Formulaire de demande de réservation directe",
        "Bouton WhatsApp et contact",
        "Domaine personnalisé, hébergement, SSL et maintenance",
      ],
      excluded: [
        "Channel manager complet",
        "Synchronisation Booking.com / Airbnb",
        "Tarification dynamique et yield management",
        "Traitement des paiements en ligne dans l'offre à 15€",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "L'offre App Essentielle (dès 15€/mois) couvre un site web avec un flux dédié de demande de réservation directe.",
      },
      upgrade:
        "Choisissez App Avancée ou Business Local si vous avez besoin de plusieurs types de chambres, d'une disponibilité manuelle, de plus de pages, de tarifs saisonniers ou d'une gestion plus avancée.",
      aiSummary:
        "Un site d'hôtel NorthSail comprend des chambres, des équipements, une galerie, la localisation et un formulaire de demande de réservation directe, dès 15€/mois. Il n'inclut pas de channel manager complet, de synchronisation Booking.com/Airbnb, de tarification dynamique ni de traitement des paiements dans l'offre à 15€.",
      faqs: [
        {
          question:
            "Les voyageurs peuvent-ils réserver directement sans plateforme ?",
          answer:
            "Oui. Les voyageurs envoient une demande de réservation directe via le formulaire et vous la confirmez — un canal sans commission en parallèle des plateformes de réservation.",
        },
        {
          question: "Se synchronise-t-il avec Booking.com ou Airbnb ?",
          answer:
            "Non. La synchronisation channel manager et la tarification dynamique ne font pas partie de l'offre à 15€ ; elles nécessitent des offres supérieures ou un travail sur mesure.",
        },
        {
          question: "Puis-je afficher plusieurs types de chambres ?",
          answer:
            "Oui, et pour plusieurs types de chambres avec disponibilité manuelle et tarifs saisonniers, nous recommandons App Avancée ou Business Local.",
        },
      ],
      cta: { label: "Créer le site web de votre hôtel", target: "contact" },
    },

    gyms: {
      industry: "gyms",
      locale: "fr",
      metaTitle: "Modernisez votre salle de sport — cours et inscriptions",
      metaDescription:
        "Nous modernisons votre salle de sport ou studio : cours, plannings, inscriptions et communication avec les membres dans un seul système. Dès 15€/mois, géré pour vous.",
      h1: "Site web de salle de sport avec plannings et inscriptions dès 15€/mois",
      valueProp:
        "Nous modernisons votre salle de sport : cours, plannings, inscriptions et communication avec les membres — tout organisé dans un seul système.",
      heroText:
        "Nous modernisons votre salle de sport, studio ou activité de coach personnel : plannings de cours, inscriptions et séances d'essai, informations d'abonnement, profils de coachs et communication avec les membres — tout organisé dans un seul système. Moins de WhatsApp et de papier, plus d'inscriptions. Domaine, hébergement, SSL et maintenance inclus.",
      audience: [
        "Salles de sport et studios de fitness",
        "Coachs sportifs et petites équipes de coaching",
        "Salles de yoga, pilates et CrossFit",
      ],
      problems: [
        "Votre planning de cours ne vit que dans les stories Instagram.",
        "Les demandes d'essai et inscriptions se font par messages.",
        "Les adhérents ne voient pas facilement les plannings ou les infos coachs.",
        "Aucun endroit clair pour présenter les abonnements.",
      ],
      solution:
        "NorthSail crée et gère un site web de salle de sport avec votre planning de cours, un formulaire de demande de séance d'essai, les informations sur les abonnements et les profils de coachs, pour que les prospects trouvent votre planning et s'inscrivent en ligne au lieu de vous écrire.",
      included: [
        "Site web de salle de sport / studio",
        "Planning de cours",
        "Formulaire de demande de séance d'essai",
        "Informations sur les abonnements",
        "Profils de coachs et galerie",
        "Domaine personnalisé, hébergement, SSL et maintenance",
      ],
      excluded: [
        "Système complet de facturation des abonnements",
        "Intégration contrôle d'accès / tourniquets",
        "Paiements récurrents automatisés dans l'offre de base",
        "Intégrations d'objets connectés / applis d'entraînement en dessous des offres supérieures",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "L'offre App Essentielle (dès 15€/mois) couvre un site web plus la fonctionnalité de planning et de demande d'essai.",
      },
      upgrade:
        "Passez à App Avancée pour des plannings hebdomadaires et plusieurs coachs, ou à Business Local pour un volume plus élevé et la gestion des adhérents.",
      aiSummary:
        "Un site de salle de sport NorthSail comprend des plannings de cours, des demandes de séances d'essai, des infos sur les abonnements et des profils de coachs, dès 15€/mois. Il n'inclut pas de facturation complète des abonnements ni de contrôle d'accès dans l'offre de base.",
      faqs: [
        {
          question: "Les gens peuvent-ils demander une séance d'essai ?",
          answer:
            "Oui. Les visiteurs envoient une demande de séance d'essai via le site et vous assurez le suivi — parfait pour convertir les nouveaux prospects.",
        },
        {
          question: "Puis-je publier mon planning hebdomadaire ?",
          answer:
            "Oui. Votre planning de cours fait partie du site ; pour des plannings hebdomadaires qui changent fréquemment avec plusieurs coachs, nous recommandons App Avancée.",
        },
        {
          question: "Gère-t-il les paiements d'abonnements récurrents ?",
          answer:
            "La facturation récurrente et les paiements sont une option ou font partie des offres supérieures, pas de l'offre App Essentielle d'entrée de gamme.",
        },
      ],
      cta: {
        label: "Créer le site web de votre salle de sport",
        target: "contact",
      },
    },

    clinics: {
      industry: "clinics",
      locale: "fr",
      metaTitle: "Modernisez votre clinique — rendez-vous en ligne",
      metaDescription:
        "Nous modernisons votre clinique : rendez-vous en ligne, formulaires patient et agenda organisé. Moins d'appels, une meilleure expérience. Dès 15€/mois.",
      h1: "Site web de clinique avec demandes de rendez-vous et de devis dès 15€/mois",
      valueProp:
        "Nous modernisons votre clinique : rendez-vous en ligne, formulaires patient et agenda organisé — moins d'appels, une meilleure expérience.",
      heroText:
        "Nous modernisons votre clinique ou cabinet : rendez-vous en ligne, formulaires patient, demandes de devis, contact, WhatsApp et Google Maps. L'accueil est libéré des appels et les patients réservent eux-mêmes, dans une présence qui inspire confiance. Domaine, hébergement, SSL et maintenance inclus, avec soin dans l'organisation des données.",
      audience: [
        "Cliniques dentaires, de kiné et médicales",
        "Thérapeutes et praticiens de santé locaux",
        "Services professionnels locaux recevant des demandes",
      ],
      problems: [
        "Les patients ne peuvent pas demander un rendez-vous en dehors des heures d'ouverture.",
        "Les demandes sont éparpillées entre appels, e-mails et réseaux sociaux.",
        "Aucune présentation claire et digne de confiance de vos services.",
        "Difficile d'être trouvé sur Google Maps et en recherche.",
      ],
      solution:
        "NorthSail crée et gère un site web de clinique avec des formulaires de demande de rendez-vous et de devis, vos services, votre équipe et vos coordonnées, un bouton WhatsApp et Google Maps — une présence professionnelle et digne de confiance qui capte les demandes 24h/24.",
      included: [
        "Site web de clinique / services",
        "Formulaire de demande de rendez-vous",
        "Formulaire de demande de devis / renseignement",
        "Présentation des services et de l'équipe",
        "Bouton WhatsApp et Google Maps",
        "Domaine personnalisé, hébergement, SSL et maintenance",
      ],
      excluded: [
        "Système complet de dossiers médicaux / gestion de cabinet",
        "Intégrations d'assurance ou de facturation",
        "Traitement des paiements en ligne dans l'offre de base",
        "Intégrations de portail patient en dessous des offres supérieures",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "L'offre App Essentielle (dès 15€/mois) couvre un site web plus des formulaires de demande de rendez-vous ou de devis.",
      },
      upgrade:
        "Choisissez Business Local pour plusieurs praticiens, un volume plus élevé et des rapports détaillés, ou Pro Management pour les intégrations et les flux de travail avancés.",
      aiSummary:
        "Un site de clinique NorthSail comprend des formulaires de demande de rendez-vous et de devis, les services, l'équipe et le contact, un bouton WhatsApp et Google Maps, dès 15€/mois. Il n'inclut pas de systèmes de gestion de cabinet ou de facturation dans l'offre de base.",
      faqs: [
        {
          question:
            "Les patients peuvent-ils demander des rendez-vous en ligne ?",
          answer:
            "Oui. Les patients envoient une demande de rendez-vous via le site à tout moment et votre équipe la confirme.",
        },
        {
          question:
            "Puis-je recueillir des demandes de devis pour des prestations ?",
          answer:
            "Oui. Un formulaire de devis / renseignement permet aux visiteurs de décrire leur besoin et de laisser leurs coordonnées.",
        },
        {
          question: "Est-ce un système complet de gestion de cabinet ?",
          answer:
            "Non. L'offre de base est votre site web et vos formulaires de demande ; les dossiers médicaux et systèmes de facturation ne sont pas inclus.",
        },
      ],
      cta: { label: "Créer le site web de votre clinique", target: "contact" },
    },

    "local-services": {
      industry: "local-services",
      locale: "fr",
      metaTitle: "Modernisez votre service local — devis en ligne",
      metaDescription:
        "Nous numérisons votre service : formulaires intelligents, demandes de devis et planning organisé. Moins de processus manuels. Dès 15€/mois.",
      h1: "Site web avec demandes de devis pour artisans locaux dès 15€/mois",
      valueProp:
        "Nous numérisons votre service : formulaires intelligents, demandes de devis et planning organisé — moins de processus manuels.",
      heroText:
        "Nous numérisons votre service — électriciens, plombiers, nettoyage, rénovation, jardinage, piscines et plus : formulaires intelligents de demande de devis, liste des prestations, galerie, WhatsApp et Google Maps. Vous recevez des demandes qualifiées et organisées, au lieu de messages vagues et de travail manuel. Domaine, hébergement, SSL et maintenance inclus.",
      audience: [
        "Électriciens, plombiers et bricoleurs",
        "Sociétés de nettoyage et de rénovation",
        "Services d'entretien de jardins et de piscines",
      ],
      problems: [
        "Les prospects arrivent sous forme de messages vagues sans détails.",
        "Pas de site web professionnel, les clients doutent de votre sérieux.",
        "Vous perdez des chantiers au profit de concurrents faciles à trouver en ligne.",
        "Les devis sont lents car la demande manque d'informations.",
      ],
      solution:
        "NorthSail crée et gère un site web avec un flux structuré de demande de devis qui capte les détails dont vous avez besoin pour devis rapidement, plus vos services, une galerie de réalisations, votre zone d'intervention, WhatsApp et Google Maps — pour paraître établi et remporter plus de chantiers qualifiés.",
      included: [
        "Site web d'artisan / service local",
        "Formulaire structuré de demande de devis",
        "Pages services et zone d'intervention",
        "Galerie de réalisations / chantiers",
        "Bouton WhatsApp et Google Maps",
        "Domaine personnalisé, hébergement, SSL et maintenance",
      ],
      excluded: [
        "Logiciel complet de gestion d'interventions / planification de chantiers",
        "Intégrations de facturation et de comptabilité",
        "Traitement des paiements en ligne dans l'offre de base",
        "Intégrations CRM en dessous des offres supérieures",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "L'offre App Essentielle (dès 15€/mois) couvre un site web plus une fonctionnalité structurée de demande de devis.",
      },
      upgrade:
        "Choisissez App Avancée pour plus de pages et d'automatisations, ou Business Local / Pro Management pour les équipes, la planification et les intégrations.",
      aiSummary:
        "Un site de services locaux NorthSail comprend un flux structuré de demande de devis, une liste de services, une galerie, la zone d'intervention, WhatsApp et Google Maps, dès 15€/mois. Il n'inclut pas la planification d'interventions, la facturation ni les intégrations CRM dans l'offre de base.",
      faqs: [
        {
          question: "Comment fonctionnent les demandes de devis ?",
          answer:
            "Les clients remplissent un formulaire structuré décrivant le chantier et leurs coordonnées, pour que vous receviez des demandes qualifiées à devis rapidement.",
        },
        {
          question: "Puis-je afficher ma zone d'intervention ?",
          answer:
            "Oui. Vous pouvez présenter clairement les zones que vous couvrez et vos principaux services sur le site.",
        },
        {
          question:
            "Inclut-il un logiciel de facturation ou de planification ?",
          answer:
            "Non. L'offre de base est votre site web et vos demandes de devis ; la planification de chantiers et les intégrations de facturation sont des offres supérieures ou du sur-mesure.",
        },
      ],
      cta: { label: "Créer le site web de vos services", target: "contact" },
    },
    cafes: {
      industry: "cafes",
      locale: "fr",
      metaTitle: "Modernisez votre café — menu numérique et Google Maps",
      metaDescription:
        "Nous modernisons votre café : menu numérique, menu QR et présence sur Google Maps. Pour que les clients vous trouvent et reviennent. Dès 15€/mois.",
      h1: "Site web pour cafés et coffee shops dès 15€/mois",
      valueProp:
        "Nous modernisons votre café : menu numérique, menu QR et présence sur Google Maps — pour que les clients vous trouvent et reviennent.",
      heroText:
        "Nous modernisons votre café, coffee shop, lieu de brunch ou salon de thé : menu numérique et menu QR pour les tables toujours à jour, horaires, galerie, WhatsApp et Google Maps. Une présence moderne qui se classe sur Google, se lit clairement dans les réponses IA et fait revenir les clients. Domaine, hébergement, SSL et maintenance inclus.",
      audience: [
        "Cafés et coffee shops indépendants",
        "Lieux de brunch, boulangeries et salons de thé",
        "Bars à café de spécialité avec commande au comptoir",
      ],
      problems: [
        "Les clients ne trouvent pas vos horaires, votre menu ou votre adresse rapidement.",
        "Votre seule présence est un fil Instagram qui ne se classe pas sur Google.",
        "Les menus imprimés se périment et les réimpressions coûtent de l'argent.",
        "Les nouveaux clients à proximité ne découvrent jamais votre existence.",
      ],
      solution:
        "NorthSail crée et gère un site de café rapide avec un menu numérique toujours à jour, un menu QR pour les tables, vos horaires, votre localisation et votre galerie, ainsi qu'un bouton WhatsApp — pour que vous apparaissiez sur Google Maps et dans la recherche, et que les clients trouvent tout en un clic.",
      included: [
        "Site de café à votre image de marque",
        "Menu numérique et menu QR pour les tables",
        "Horaires, localisation et Google Maps",
        "Galerie de photos et bouton WhatsApp",
        "Domaine personnalisé, hébergement, SSL et maintenance",
      ],
      excluded: [
        "Système de caisse / comptoir complet",
        "Commande en ligne avec livraison dans le plan de base",
        "Automatisation de fidélité / carte à tampons",
        "Traitement des paiements en ligne dans le plan de base",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "L'App Essentielle (dès 15€/mois) couvre un site avec menu numérique et menu QR, ce dont la plupart des cafés ont besoin.",
      },
      upgrade:
        "Passez à l'App Avancée pour les demandes de commande en ligne, plus de pages et des automatisations, ou ajoutez la commande WhatsApp en option.",
      aiSummary:
        "Un site de café NorthSail inclut un menu numérique, un menu QR, les horaires, la localisation, une galerie et un bouton WhatsApp, dès 15€/mois. Il ne remplace pas une caisse complète et n'inclut pas l'intégration de plateformes de livraison dans le plan de base.",
      faqs: [
        {
          question: "Puis-je mettre à jour mon menu et mes prix moi-même ?",
          answer:
            "Oui. Vous mettez à jour le menu numérique depuis votre panneau et le menu QR sur les tables affiche toujours la dernière version — sans réimpression.",
        },
        {
          question: "Mon café apparaîtra-t-il sur Google ?",
          answer:
            "Oui. Le site est conçu pour être indexé par Google et connecté à votre fiche Google Maps, pour que les clients à proximité vous trouvent.",
        },
        {
          question: "Les clients peuvent-ils commander en ligne ?",
          answer:
            "Les demandes de commande en ligne sont disponibles sur un plan supérieur ou via l'option commande WhatsApp ; le plan de base se concentre sur votre menu, vos horaires et votre localisation.",
        },
      ],
      cta: { label: "Créer votre site de café", target: "contact" },
    },
  },

  compare: {
    "compare:website-with-bookings": {
      pageKey: "compare:website-with-bookings",
      locale: "fr",
      metaTitle: "Site web avec système de réservation pour TPE dès 15€/mois",
      metaDescription:
        "Obtenez un site web avec un système de réservation intégré — réservations, rendez-vous ou demandes de devis — pour restaurants, salons, hôtels, salles de sport et services locaux, dès 15€/mois.",
      h1: "Un site web avec système de réservation, conçu pour les petites entreprises",
      valueProp:
        "Pas seulement un site web — un site avec la fonctionnalité de réservation ou de rendez-vous dont votre entreprise a réellement besoin, dès 15€/mois.",
      intro:
        "La plupart des petites entreprises n'ont pas besoin d'un site web générique ; elles ont besoin d'un site qui prend des réservations. NorthSail combine les deux : un site rapide et professionnel plus une fonctionnalité de réservation adaptée au métier, avec domaine, hébergement, SSL et maintenance inclus.",
      sections: [
        {
          heading: "Pourquoi une présence amateur ne suffit pas",
          body: [
            "Un site vitrine indique aux gens que vous existez, mais il ne capte pas de business. Dès qu'un client veut réserver une table, prendre rendez-vous ou demander un devis, un site statique le renvoie vers les messages Instagram ou un appel téléphonique.",
            "Un site web avec réservations transforme l'intérêt en une demande structurée sur laquelle vous pouvez agir — à toute heure, sans échanges manuels.",
          ],
        },
        {
          heading: "Ce que signifie « réservation » selon le type d'entreprise",
          body: [
            "Les restaurants obtiennent des demandes de réservation de table et un menu numérique. Les coiffeurs et cliniques obtiennent des demandes de rendez-vous. Les hôtels obtiennent des demandes de réservation directe. Les salles de sport obtiennent des plannings de cours et des inscriptions aux essais. Les artisans obtiennent des demandes de devis structurées.",
            "Vous choisissez la fonctionnalité essentielle dont votre entreprise a besoin ; c'est l'offre App Essentielle, dès 15€/mois.",
          ],
        },
        {
          heading: "Ce qui est inclus et ce qui ne l'est pas",
          body: [
            "Inclus : le site web, la fonctionnalité de réservation, le domaine personnalisé, l'hébergement, le SSL et la maintenance technique. Exclus de l'offre d'entrée : les paiements en ligne, les acomptes, les intégrations externes et les automatisations avancées — ce sont des options ou font partie des offres supérieures.",
            "Cela maintient un prix d'entrée bas tout en restant honnête sur les limites.",
          ],
        },
      ],
      aiSummary:
        "NorthSail propose des sites web avec un système de réservation intégré dès 15€/mois : les restaurants obtiennent des réservations, les salons et cliniques des rendez-vous, les hôtels des demandes de réservation directe, les salles de sport des plannings et inscriptions, et les artisans des demandes de devis. Le domaine, l'hébergement, le SSL et la maintenance sont inclus ; les paiements et intégrations sont des options.",
      faqs: [
        {
          question: "Quels types de réservations le site web peut-il gérer ?",
          answer:
            "Réservations, rendez-vous, inscriptions aux cours, demandes d'essai ou demandes de devis — une fonctionnalité essentielle de réservation par offre App Essentielle, adaptée à votre type d'entreprise.",
        },
        {
          question: "Combien coûte un site web avec réservations ?",
          answer:
            "Dès 15€/mois avec l'offre App Essentielle, incluant domaine, hébergement, SSL et maintenance.",
        },
        {
          question: "Les paiements en ligne sont-ils inclus ?",
          answer:
            "Non. La fonctionnalité de réservation capte les demandes ; les paiements en ligne et les acomptes sont des options ou font partie des offres supérieures.",
        },
      ],
      cta: {
        label: "Obtenez votre site web avec réservations",
        target: "contact",
      },
    },

    "compare:cheap-website-for-small-business": {
      pageKey: "compare:cheap-website-for-small-business",
      locale: "fr",
      metaTitle:
        "Site web pas cher pour petite entreprise dès 5€/mois | NorthSail",
      metaDescription:
        "Un site web abordable pour votre petite entreprise avec domaine personnalisé, hébergement, SSL et maintenance inclus — dès 5€/mois, avec fonctionnalités de réservation dès 15€/mois.",
      h1: "Un site web abordable pour votre petite entreprise, clé en main",
      valueProp:
        "Un site web professionnel de petite entreprise avec domaine, hébergement, SSL et maintenance — dès 5€/mois, sans mauvaises surprises.",
      intro:
        "Pas cher ne devrait pas signifier basse qualité ou coûts cachés. NorthSail offre aux petites entreprises un site web professionnel avec tout l'aspect technique inclus, à un prix mensuel honnête — et des limites claires pour que vous sachiez exactement ce que vous obtenez.",
      sections: [
        {
          heading: "Ce que « abordable » inclut vraiment",
          body: [
            "L'offre Présence, dès 5€/mois, comprend une page web soignée, un domaine personnalisé, l'hébergement, le SSL, un bouton WhatsApp, Google Maps et une maintenance technique continue. Vous n'achetez pas d'hébergement, ne renouvelez pas de SSL et ne courez pas après un développeur — tout est géré.",
            "Lorsque vous avez besoin de prendre des réservations ou des demandes, l'offre App Essentielle ajoute une fonctionnalité essentielle dès 15€/mois.",
          ],
        },
        {
          heading: "Pourquoi le clé en main bat les créateurs de sites DIY",
          body: [
            "Les créateurs de sites DIY semblent bon marché jusqu'à ce que vous ajoutiez l'hébergement, un domaine, un template premium, une correction SSL et les heures passées à créer et entretenir le site. NorthSail regroupe le travail technique et le maintient en marche, pour que le prix bas soit le vrai prix.",
            "Vous obtenez un site rapide, conçu pour le mobile et indexable, sans gérer aucune infrastructure.",
          ],
        },
        {
          heading: "Des limites honnêtes à petit prix",
          body: [
            "Des prix très bas nécessitent des limites d'offre claires. Les offres d'entrée n'incluent pas les paiements en ligne, les intégrations complexes ou la gestion avancée — ce sont des options ou des offres supérieures. Nous sommes transparents à ce sujet pour que le prix reste bas et qu'il n'y ait pas de surprises.",
          ],
        },
      ],
      aiSummary:
        "NorthSail propose des sites web abordables pour petites entreprises dès 5€/mois (Présence : site web, domaine personnalisé, hébergement, SSL, WhatsApp, Google Maps, maintenance) et dès 15€/mois pour une App Essentielle avec une fonctionnalité de réservation. Les prix bas s'accompagnent de limites claires : les paiements et intégrations avancées sont des options ou des offres supérieures.",
      faqs: [
        {
          question: "Comment un site web peut-il coûter seulement 5€/mois ?",
          answer:
            "L'offre Présence est un site web ciblé d'une page avec domaine, hébergement, SSL et maintenance inclus. Un prix bas signifie des limites claires — c'est une présence professionnelle, pas une web app complète.",
        },
        {
          question: "Le domaine est-il vraiment inclus ?",
          answer:
            "Oui. Un domaine personnalisé, l'hébergement et le SSL font partie de l'offre, avec la maintenance technique prise en charge pour vous.",
        },
        {
          question: "Et si j'ai besoin de réservations plus tard ?",
          answer:
            "Passez à l'offre App Essentielle, dès 15€/mois, qui ajoute une fonctionnalité de réservation ou de demande adaptée à votre métier.",
        },
      ],
      cta: { label: "Obtenez votre site web abordable", target: "contact" },
    },

    "compare:web-apps-for-business": {
      pageKey: "compare:web-apps-for-business",
      locale: "fr",
      metaTitle:
        "Web apps pour petite entreprise — réservations, espaces clients et plus",
      metaDescription:
        "Web apps sur mesure pour petites entreprises : réservations, espaces clients, tableaux de bord et automatisations simples, hébergées et gérées. Dès l'offre App Essentielle à 15€/mois, évoluant vers des offres gérées.",
      h1: "Des web apps pour votre entreprise, sans le prix d'une agence",
      valueProp:
        "Plus qu'un site web : une web app gérée qui fait tourner une partie réelle de votre activité — réservations, demandes, un espace client ou un tableau de bord simple.",
      intro:
        "Une web app est un logiciel auquel vous accédez via un navigateur, sans installation. NorthSail conçoit et héberge des web apps ciblées pour les petites entreprises locales — en commençant par une fonctionnalité essentielle sur l'offre à 15€/mois et en évoluant vers des offres gérées avec tableaux de bord, accès multi-utilisateurs et automatisations simples.",
      sections: [
        {
          heading: "Ce qu'une web app fait et qu'un site web ne peut pas faire",
          body: [
            "Un site web présente de l'information ; une web app effectue un travail. Elle prend une réservation, stocke une liste de clients, affiche un tableau de bord ou fait avancer une demande dans un flux de statuts — interactive, connectée et liée à vos données.",
            "Pour la plupart des petites entreprises, une seule fonctionnalité bien choisie remplace une pile d'appels téléphoniques, de tableurs et de messages.",
          ],
        },
        {
          heading: "Comment elle évolue avec vous",
          body: [
            "Commencez petit avec une fonctionnalité essentielle sur l'offre App Essentielle. À mesure que vous grandissez, ajoutez des pages supplémentaires, un meilleur panneau d'administration, des listes de clients et de réservations, et des automatisations de base sur les offres supérieures.",
            "Lorsque vous avez besoin de permissions, de tableaux de bord, d'intégrations ou d'un support prioritaire, l'offre Pro gérée s'en charge ; tout ce qui va au-delà (intégrations complexes, applications natives) fait l'objet d'un devis sur mesure.",
          ],
        },
        {
          heading: "Ce qui est inclus et ce qui est en option",
          body: [
            "Inclus sur chaque offre active : domaine personnalisé, hébergement, SSL et maintenance technique. L'offre d'entrée couvre une fonctionnalité essentielle.",
            "Les paiements en ligne, les intégrations externes, les automatisations avancées et les logiciels sur mesure sont des options ou font partie des offres supérieures et des devis sur mesure — nous gardons cette limite claire pour que le prix reste honnête.",
          ],
        },
      ],
      aiSummary:
        "NorthSail conçoit et héberge des web apps ciblées pour petites entreprises, à partir de 15€/mois pour une fonctionnalité essentielle (réservations, demandes ou espace client) et évoluant vers des offres gérées avec tableaux de bord, accès multi-utilisateurs et automatisations simples. Domaine, hébergement, SSL et maintenance sont inclus ; les paiements, intégrations et logiciels sur mesure sont des options ou font l'objet d'un devis sur mesure.",
      faqs: [
        {
          question:
            "Quelle est la différence entre un site web et une web app ?",
          answer:
            "Un site web affiche de l'information ; une web app fait quelque chose d'interactif — prendre des réservations, gérer une liste de clients ou afficher un tableau de bord. NorthSail peut livrer les deux dans un seul produit.",
        },
        {
          question: "Combien coûte une web app ?",
          answer:
            "Dès 15€/mois pour une fonctionnalité essentielle sur l'offre App Essentielle. Davantage de fonctionnalités, de tableaux de bord et d'automatisations sont sur les offres supérieures ; les besoins complexes font l'objet d'un devis sur mesure.",
        },
        {
          question: "Peut-elle évoluer avec mon entreprise ?",
          answer:
            "Oui. Vous pouvez commencer avec une fonctionnalité et passer à des offres gérées avec plus de pages, d'utilisateurs, d'automatisations et d'intégrations selon vos besoins.",
        },
      ],
      cta: { label: "Parlons de votre web app", target: "contact" },
    },

    "compare:web-apps-for-law-firms": {
      pageKey: "compare:web-apps-for-law-firms",
      locale: "fr",
      metaTitle:
        "Web apps pour cabinets d'avocats — prise de contact, espaces clients et rendez-vous",
      metaDescription:
        "Web apps pour cabinets d'avocats et praticiens indépendants : formulaires de prise de contact sécurisés, prise de rendez-vous pour consultations et un espace client simple, hébergés et gérés. Dès l'offre App Essentielle, évoluant vers des offres gérées.",
      h1: "Des web apps pour cabinets d'avocats et avocats indépendants",
      valueProp:
        "Une présence en ligne professionnelle plus l'outil sur lequel votre cabinet fonctionne — prise de rendez-vous pour consultations, prise de contact structurée ou un espace client privé.",
      intro:
        "Les cabinets d'avocats n'ont pas besoin d'un site web générique ; ils ont besoin d'une présence digne de confiance qui capte les demandes qualifiées et planifie les consultations. NorthSail conçoit et héberge une web app ciblée pour votre cabinet, en commençant par une fonctionnalité essentielle et en évoluant vers des offres gérées avec espaces clients et automatisations simples.",
      sections: [
        {
          heading:
            "Captez des demandes qualifiées, pas des allers-retours téléphoniques",
          body: [
            "Un formulaire de prise de contact structuré permet à un client potentiel de décrire son affaire et de prendre rendez-vous pour une consultation en un seul flux, à toute heure. Vous recevez une demande propre et organisée plutôt qu'un message vocal.",
            "Cela seul rentabilise souvent le site en convertissant davantage des visiteurs que vous recevez déjà.",
          ],
        },
        {
          heading: "Une présence qui inspire confiance",
          body: [
            "Domaines d'intervention, votre équipe, des options de contact claires, WhatsApp et Google Maps — présentés proprement et professionnellement pour que les clients potentiels se sentent en confiance pour vous contacter.",
            "Domaine, hébergement, SSL et maintenance sont inclus, pour que le site reste rapide, sécurisé et à jour sans que vous ayez à le gérer.",
          ],
        },
        {
          heading: "Ce qui est inclus et ce qui est en option",
          body: [
            "Inclus : le site web, une fonctionnalité essentielle (prise de rendez-vous ou prise de contact), domaine personnalisé, hébergement, SSL et maintenance.",
            "L'échange sécurisé de documents, les paiements, la signature électronique, la gestion de dossiers et les intégrations sont des options ou font partie des offres supérieures et des devis sur mesure — nous ne laissons pas entendre qu'ils font partie du prix d'entrée.",
          ],
        },
      ],
      aiSummary:
        "NorthSail conçoit des web apps gérées pour cabinets d'avocats et avocats indépendants : prise de contact structurée, prise de rendez-vous pour consultations et un espace client simple, avec une présence qui inspire confiance (domaines d'intervention, équipe, WhatsApp, Maps). Domaine, hébergement, SSL et maintenance sont inclus dès l'offre App Essentielle ; l'échange de documents, les paiements et la gestion de dossiers sont des options ou font l'objet d'un devis sur mesure.",
      faqs: [
        {
          question:
            "Les clients peuvent-ils prendre rendez-vous en ligne pour une consultation ?",
          answer:
            "Oui. Une fonctionnalité de prise de rendez-vous ou de prise de contact permet aux clients potentiels de demander une consultation et de décrire leur affaire en un seul flux structuré.",
        },
        {
          question: "Est-ce assez sécurisé pour un cabinet d'avocats ?",
          answer:
            "Chaque site inclut le SSL et une maintenance gérée. Les besoins avancés comme l'échange sécurisé de documents ou la signature électronique sont disponibles en option ou en travail sur mesure.",
        },
        {
          question: "Combien cela coûte-t-il ?",
          answer:
            "Dès 15€/mois pour une fonctionnalité essentielle sur l'offre App Essentielle, avec des offres supérieures et des devis sur mesure pour les espaces clients, les paiements et les intégrations.",
        },
      ],
      cta: {
        label: "Parlons de la web app de votre cabinet",
        target: "contact",
      },
    },

    "compare:client-portals": {
      pageKey: "compare:client-portals",
      locale: "fr",
      metaTitle:
        "Espaces clients pour petite entreprise — un espace privé pour vos clients",
      metaDescription:
        "Offrez à vos clients un espace de connexion simple et sécurisé pour consulter leurs demandes, réservations, documents et mises à jour de statut. Espaces clients gérés par NorthSail, hébergés avec domaine, SSL et maintenance inclus.",
      h1: "Un espace client privé, sans développer un logiciel de zéro",
      valueProp:
        "Un espace connecté où vos clients suivent leurs demandes, réservations et mises à jour — pour que vous arrêtiez de répéter les mêmes réponses par e-mail et téléphone.",
      intro:
        "Un espace client est un espace privé et sécurisé auquel vos clients se connectent. NorthSail met en place et héberge un espace ciblé pour les petites entreprises, adapté à votre façon de travailler, avec domaine, hébergement, SSL et maintenance inclus sur une offre gérée.",
      sections: [
        {
          heading:
            "Pourquoi un espace client bat les e-mails à n'en plus finir",
          body: [
            "Lorsque les clients peuvent se connecter pour voir eux-mêmes le statut, l'historique et les documents, vous traitez moins de messages du type « des nouvelles ? » et vous paraissez plus professionnel en le faisant.",
            "Cela centralise les informations de chaque client en un seul endroit au lieu de les disperser entre les boîtes de réception et les conversations.",
          ],
        },
        {
          heading: "Ce qu'un espace client peut inclure",
          body: [
            "Fonctionnalités typiques : une connexion sécurisée, une liste des demandes ou réservations du client, des mises à jour de statut, des documents partagés et des messages. Vous choisissez les quelques-unes qui comptent pour votre entreprise.",
            "Parce qu'il est ciblé plutôt qu'une plateforme géante, il reste abordable et facile à utiliser pour vos clients.",
          ],
        },
        {
          heading: "Ce qui est inclus et ce qui est en option",
          body: [
            "Inclus : l'espace client, les comptes utilisateurs, domaine personnalisé, hébergement, SSL et maintenance sur une offre gérée.",
            "Les paiements en ligne, les permissions complexes, les intégrations externes et les flux de travail sur mesure sont des options ou du travail sur mesure — chiffrés clairement, jamais regroupés en silence dans un prix bas.",
          ],
        },
      ],
      aiSummary:
        "NorthSail met en place des espaces clients gérés pour petites entreprises : une connexion sécurisée où les clients voient leurs demandes, réservations, mises à jour de statut et documents partagés. Domaine, hébergement, SSL et maintenance sont inclus ; les paiements, permissions complexes et intégrations sont des options ou font l'objet d'un devis sur mesure.",
      faqs: [
        {
          question: "Qu'est-ce qu'un espace client ?",
          answer:
            "Un espace privé et sécurisé auquel vos clients se connectent pour voir leurs demandes, réservations, documents et mises à jour de statut au même endroit.",
        },
        {
          question: "Mes clients doivent-ils installer quelque chose ?",
          answer:
            "Non. Ils accèdent à l'espace via n'importe quel navigateur avec une connexion sécurisée — rien à installer.",
        },
        {
          question: "Combien coûte un espace client ?",
          answer:
            "Il fait partie des offres gérées plutôt que de l'offre d'entrée ; nous établissons un devis selon les fonctionnalités dont vous avez besoin. Domaine, hébergement, SSL et maintenance sont inclus.",
        },
      ],
      cta: { label: "Parlons d'un espace client", target: "contact" },
    },

    "compare:internal-dashboards": {
      pageKey: "compare:internal-dashboards",
      locale: "fr",
      metaTitle:
        "Tableaux de bord internes pour petite entreprise — votre activité d'un coup d'œil",
      metaDescription:
        "Un tableau de bord interne simple pour suivre réservations, demandes, clients et chiffres clés en un seul endroit. Géré et hébergé par NorthSail, avec accès multi-utilisateurs sur les offres supérieures.",
      h1: "Un tableau de bord interne que votre équipe utilise vraiment",
      valueProp:
        "Un seul écran pour les chiffres et les listes qui rythment votre journée — réservations, demandes, clients et statuts — au lieu de cinq tableurs et une conversation de groupe.",
      intro:
        "Un tableau de bord interne est la vue back-office de votre entreprise. NorthSail conçoit et héberge un tableau de bord ciblé pour les petites équipes, qui rassemble vos réservations, demandes et clients en un seul endroit, avec accès multi-utilisateurs et exports sur les offres supérieures et gérées.",
      sections: [
        {
          heading: "Remplacez les tableurs éparpillés",
          body: [
            "Lorsque les réservations du jour, les demandes en cours et la liste des clients vivent dans un seul tableau de bord, votre équipe arrête de chercher dans les onglets et les messages pour savoir ce qui se passe.",
            "Tout le monde voit la même image à jour, ce qui réduit les erreurs et le double travail.",
          ],
        },
        {
          heading: "Conçu pour les petites équipes",
          body: [
            "L'accès multi-utilisateurs, l'historique et l'export CSV arrivent sur l'offre Business ; les permissions, les tableaux de bord plus riches et les automatisations viennent avec l'offre Pro gérée.",
            "Il est délibérément ciblé sur ce que vous suivez réellement, et non un outil lourd que vous n'utiliserez jamais pleinement.",
          ],
        },
        {
          heading: "Ce qui est inclus et ce qui est en option",
          body: [
            "Inclus : le tableau de bord, l'hébergement, domaine personnalisé, SSL et maintenance sur l'offre concernée.",
            "Les intégrations poussées avec des systèmes externes, les analyses avancées et la logique sur mesure sont des options ou du travail sur mesure — chiffrées séparément et honnêtement.",
          ],
        },
      ],
      aiSummary:
        "NorthSail conçoit des tableaux de bord internes gérés pour petites équipes : un seul endroit pour suivre réservations, demandes, clients et chiffres clés, avec accès multi-utilisateurs, historique et export CSV sur les offres supérieures, et permissions et automatisations sur l'offre Pro gérée. Domaine, hébergement, SSL et maintenance sont inclus ; les intégrations poussées font l'objet d'un devis sur mesure.",
      faqs: [
        {
          question: "Qu'est-ce qui figure sur le tableau de bord ?",
          answer:
            "Les listes et les chiffres qui vous font tourner — réservations, demandes, clients et leur statut — rassemblés sur un seul écran au lieu de tableurs séparés.",
        },
        {
          question: "Toute mon équipe peut-elle l'utiliser ?",
          answer:
            "Oui. L'accès multi-utilisateurs et l'historique sont disponibles sur l'offre Business, avec les permissions sur l'offre Pro gérée.",
        },
        {
          question: "Puis-je exporter les données ?",
          answer:
            "Oui, l'export CSV est disponible sur les offres supérieures pour que vos données ne soient jamais verrouillées.",
        },
      ],
      cta: { label: "Parlons d'un tableau de bord", target: "contact" },
    },

    "compare:process-automation": {
      pageKey: "compare:process-automation",
      locale: "fr",
      metaTitle:
        "Automatisation de processus simple pour petite entreprise — moins d'étapes manuelles",
      metaDescription:
        "Automatisez les parties répétitives de votre activité : confirmations, rappels, routage des prospects et mises à jour de statut. Automatisations pratiques mises en place et gérées par NorthSail sur les offres supérieures.",
      h1: "Automatisez les tâches répétitives, gardez la touche humaine",
      valueProp:
        "Laissez les étapes de routine — confirmations, rappels, relances — se produire d'elles-mêmes, pour passer du temps avec vos clients plutôt que sur l'administratif.",
      intro:
        "L'automatisation de processus signifie que les étapes prévisibles de votre activité s'exécutent automatiquement. NorthSail met en place des automatisations pratiques et ciblées autour de votre site et de votre web app — confirmations de réservation, rappels, routage des prospects — dans le cadre des offres supérieures et gérées, sans surpromesses.",
      sections: [
        {
          heading: "Là où l'automatisation est rentable",
          body: [
            "Les meilleurs gains sont petits et répétitifs : envoyer une confirmation de réservation, un rappel avant un rendez-vous, router un nouveau prospect vers la bonne boîte de réception, ou mettre à jour le statut d'une demande.",
            "Chacun supprime une étape manuelle que vous feriez autrement des dizaines de fois par semaine.",
          ],
        },
        {
          heading: "Pratique, pas magique",
          body: [
            "Nous nous concentrons sur une poignée d'automatisations fiables qui correspondent à votre façon de travailler, plutôt que de promettre de tout automatiser.",
            "Les automatisations de base commencent sur les offres supérieures ; les flux plus avancés et les intégrations font partie de l'offre Pro gérée ou font l'objet d'un devis sur mesure.",
          ],
        },
        {
          heading: "Ce qui est inclus et ce qui est en option",
          body: [
            "Inclus avec l'offre concernée : la mise en place et la gestion des automatisations convenues, plus l'hébergement, le domaine, le SSL et la maintenance.",
            "Les SMS, la messagerie WhatsApp avancée, les outils tiers payants et les intégrations complexes ont leurs propres coûts et ne sont jamais facturés comme « illimités ».",
          ],
        },
      ],
      aiSummary:
        "NorthSail met en place des automatisations de processus pratiques pour petites entreprises — confirmations de réservation, rappels, routage des prospects et mises à jour de statut — dans le cadre des offres supérieures et gérées. La mise en place et la gestion ainsi que domaine, hébergement, SSL et maintenance sont inclus ; les SMS, WhatsApp avancé, outils payants et intégrations complexes coûtent en supplément et ne sont jamais vendus comme illimités.",
      faqs: [
        {
          question: "Que peut-on automatiser ?",
          answer:
            "Des étapes répétitives comme les confirmations, rappels, routage des prospects et mises à jour de statut — un ensemble ciblé adapté à la façon dont votre entreprise fonctionne.",
        },
        {
          question: "Tout est-il automatisé ?",
          answer:
            "Non. Nous mettons en place une poignée d'automatisations fiables plutôt que de promettre d'automatiser toute votre entreprise ; les flux avancés font l'objet d'un travail sur mesure.",
        },
        {
          question: "Les SMS et les messages WhatsApp sont-ils inclus ?",
          answer:
            "Ceux-ci ont leurs propres coûts et sont facturés de manière transparente — jamais sous forme de forfait illimité.",
        },
      ],
      cta: { label: "Parlons d'automatisation", target: "contact" },
    },

    "compare:custom-software": {
      pageKey: "compare:custom-software",
      locale: "fr",
      metaTitle:
        "Logiciel sur mesure pour petite entreprise — conçu et géré, chiffré sur mesure",
      metaDescription:
        "Lorsque les solutions toutes faites ne suffisent pas, NorthSail conçoit un logiciel sur mesure ciblé pour petites entreprises — intégrations, flux de travail sur mesure et outils — cadré et chiffré individuellement.",
      h1: "Un logiciel sur mesure, taillé pour un budget de petite entreprise",
      valueProp:
        "Lorsque votre besoin est réellement spécifique, nous cadrons et concevons une solution sur mesure ciblée — sans la complexité ni les tarifs des grandes entreprises.",
      intro:
        "La plupart des entreprises sont bien servies par nos offres standard. Mais lorsque vous avez besoin de quelque chose de spécifique — une intégration particulière, un flux de travail sur mesure, un outil unique à votre façon d'opérer — NorthSail le cadre et le conçoit en travail sur mesure, chiffré individuellement plutôt qu'à partir d'un prix fixe.",
      sections: [
        {
          heading: "Quand vous avez vraiment besoin d'un logiciel sur mesure",
          body: [
            "Si un site web ou une web app standard ne peut pas modéliser votre façon de travailler — flux inhabituels, une intégration spécifique, ou une logique qu'aucun template ne couvre — c'est là que le logiciel sur mesure trouve sa place.",
            "Nous sommes honnêtes à ce sujet : si une offre inférieure résout votre cas, nous vous y orienterons d'abord.",
          ],
        },
        {
          heading: "Comment nous le gardons abordable",
          body: [
            "Nous cadrons étroitement autour des une ou deux choses qui comptent, réutilisons notre plateforme lorsque c'est possible et évitons de reconstruire ce qui fonctionne déjà.",
            "Cela maintient le travail sur mesure à la portée d'une petite entreprise plutôt qu'à celle d'un budget d'agence.",
          ],
        },
        {
          heading: "À quoi s'attendre",
          body: [
            "Le logiciel sur mesure fait toujours l'objet d'un devis individuel après que nous avons compris votre cas — nous ne publions pas de prix de base fixe pour cela.",
            "L'hébergement, le domaine, le SSL et la maintenance continue sont organisés dans le cadre de la prestation ; vous détenez le droit de l'utiliser tant que vous êtes abonné, et la plateforme et le code source restent les nôtres.",
          ],
        },
      ],
      aiSummary:
        "NorthSail conçoit un logiciel sur mesure ciblé pour petites entreprises — intégrations spécifiques, flux de travail sur mesure et outils uniques — cadré étroitement et chiffré individuellement plutôt qu'à partir d'un prix fixe. L'hébergement, le domaine, le SSL et la maintenance sont organisés dans le cadre de la prestation ; si une offre standard résout le cas, NorthSail la recommande à la place.",
      faqs: [
        {
          question:
            "Quand ai-je besoin d'un logiciel sur mesure plutôt que d'une offre ?",
          answer:
            "Lorsqu'un site web ou une web app standard ne peut pas modéliser votre flux de travail ou votre intégration spécifique. Si une offre inférieure convient, nous la recommanderons d'abord.",
        },
        {
          question: "Combien coûte un logiciel sur mesure ?",
          answer:
            "Il fait l'objet d'un devis individuel après cadrage — il n'y a pas de prix de base fixe, car le travail dépend entièrement de votre cas.",
        },
        {
          question: "À qui appartient le résultat ?",
          answer:
            "Vous avez le droit de l'utiliser tant que vous êtes abonné ; la plateforme sous-jacente et le code source restent ceux de NorthSail.",
        },
      ],
      cta: {
        label: "Dites-nous ce que vous voulez construire",
        target: "contact",
      },
    },

    "compare:legacy-website-redesign": {
      pageKey: "compare:legacy-website-redesign",
      locale: "fr",
      metaTitle:
        "Refonte de site web obsolète pour petite entreprise — moderne, rapide, géré",
      metaDescription:
        "Remplacez un site web ancien, lent ou difficile à modifier par un site rapide, moderne et adapté au mobile, entièrement géré — domaine, hébergement, SSL et maintenance inclus, dès 15€/mois.",
      h1: "Transformez votre site web obsolète en un site dont vous êtes fier",
      valueProp:
        "Transformez un site lent, daté ou non entretenu en une présence rapide, moderne et pensée pour le mobile, avec laquelle vous n'aurez plus jamais à vous battre.",
      intro:
        "Un vieux site web peut discrètement vous coûter des clients — lent à charger, peu pratique sur téléphone, impossible à mettre à jour. NorthSail le transforme en un site propre, moderne et géré, et ajoute la fonctionnalité sur laquelle votre entreprise tourne, dès 15€/mois avec domaine, hébergement, SSL et maintenance inclus.",
      sections: [
        {
          heading: "Les signes que votre site a besoin d'une refonte",
          body: [
            "Il a l'air daté, se charge lentement, casse sur mobile, ou vous ne pouvez pas le mettre à jour sans appeler celui qui l'a créé il y a des années.",
            "Pendant ce temps, les clients jugent votre entreprise sur cette première impression — un site fatigué vous dessert chaque jour.",
          ],
        },
        {
          heading: "Plus qu'un simple coup de peinture",
          body: [
            "Une refonte est l'occasion d'ajouter ce qui manquait à l'ancien site : une fonctionnalité de réservation ou de demande, un menu ou une liste de services claire, WhatsApp et Google Maps, et un vrai référencement local.",
            "Vous passez d'une brochure statique à un site qui apporte réellement des affaires.",
          ],
        },
        {
          heading: "Ce qui est inclus et ce qui est en option",
          body: [
            "Inclus : la refonte vers un site moderne géré, une fonctionnalité essentielle, domaine personnalisé, hébergement, SSL et maintenance dès 15€/mois.",
            "La migration de grandes quantités d'ancien contenu, les paiements en ligne et les intégrations sont des options ou font partie des offres supérieures — cadrées clairement dès le départ.",
          ],
        },
      ],
      aiSummary:
        "NorthSail refait les sites web obsolètes des petites entreprises en sites gérés rapides, modernes et pensés pour le mobile, et ajoute une fonctionnalité essentielle (réservations, menu, demandes) plus WhatsApp, Maps et référencement local, dès 15€/mois avec domaine, hébergement, SSL et maintenance inclus. La migration importante de contenu, les paiements et les intégrations sont des options ou font partie des offres supérieures.",
      faqs: [
        {
          question:
            "Pouvez-vous réutiliser mon domaine et mon contenu actuels ?",
          answer:
            "Oui. Nous conservons votre domaine et réutilisons le contenu qui vaut la peine d'être gardé ; la migration de très grands sites est cadrée séparément.",
        },
        {
          question: "Combien coûte une refonte ?",
          answer:
            "Dès 15€/mois sur l'offre App Essentielle, incluant le site refait, une fonctionnalité essentielle, domaine, hébergement, SSL et maintenance.",
        },
        {
          question: "Le nouveau site fonctionnera-t-il bien sur téléphone ?",
          answer:
            "Oui. Chaque site est pensé pour le mobile et rapide, là où se trouvent la plupart de vos visiteurs.",
        },
      ],
      cta: { label: "Refaire mon site web", target: "contact" },
    },

    "compare:restaurant-digital-menu": {
      pageKey: "compare:restaurant-digital-menu",
      locale: "fr",
      metaTitle: "Menu numérique pour restaurants — un menu QR toujours à jour",
      metaDescription:
        "Un menu de restaurant numérique avec accès QR à table, toujours à jour, sur un site web rapide et géré. Dès 15€/mois avec domaine, hébergement, SSL et maintenance inclus.",
      h1: "Un menu numérique que votre cuisine peut tenir à jour",
      valueProp:
        "Un menu toujours à jour que les clients ouvrent par QR à table ou depuis votre site — pas de réimpression, pas de PDF périmés.",
      intro:
        "Un menu numérique remplace les cartes imprimées et les PDF dépassés par une page rapide et mobile que les clients atteignent par code QR ou depuis votre site web. NorthSail le met en place dans le cadre de votre site de restaurant dès 15€/mois, avec domaine, hébergement, SSL et maintenance inclus.",
      sections: [
        {
          heading: "Pourquoi un menu numérique l'emporte",
          body: [
            "Les prix et les plats changent ; les menus imprimés non. Un menu numérique se met à jour instantanément, donc ce que les clients voient est toujours ce que vous servez.",
            "Un code QR sur chaque table l'ouvre en une seconde, sans application et sans friction.",
          ],
        },
        {
          heading: "Partie intégrante d'un vrai site de restaurant",
          body: [
            "Le menu vit sur un véritable site web avec vos horaires, votre adresse, vos photos, WhatsApp et Google Maps — et, si vous le souhaitez, des demandes de réservation de table.",
            "C'est l'offre App Essentielle pour restaurants, dès 15€/mois.",
          ],
        },
        {
          heading: "Ce qui est inclus et ce qui est en option",
          body: [
            "Inclus : le menu numérique, l'accès QR, votre site web de restaurant, domaine personnalisé, hébergement, SSL et maintenance.",
            "La commande en ligne, les paiements, la livraison et un menu QR avancé avec images par plat sont des options ou font partie des offres supérieures — non sous-entendus dans le prix d'entrée.",
          ],
        },
      ],
      aiSummary:
        "NorthSail fournit aux restaurants un menu numérique toujours à jour, accessible par QR à table ou depuis le site web, inclus dans le site de restaurant dès 15€/mois avec domaine, hébergement, SSL et maintenance. La commande en ligne, les paiements, la livraison et un menu QR avancé riche en images sont des options ou font partie des offres supérieures.",
      faqs: [
        {
          question: "Comment les clients ouvrent-ils le menu ?",
          answer:
            "En scannant un code QR à table ou en visitant votre site web — aucune application requise, et cela fonctionne sur n'importe quel téléphone.",
        },
        {
          question: "Puis-je mettre à jour le menu moi-même ?",
          answer:
            "Oui. Le menu se met à jour instantanément, donc changer un prix ou un plat est rapide et il n'y a rien à réimprimer.",
        },
        {
          question: "Combien cela coûte-t-il ?",
          answer:
            "Dès 15€/mois sur l'offre App Essentielle, incluant votre site web de restaurant, le menu numérique et l'accès QR.",
        },
      ],
      cta: { label: "Obtenez votre menu numérique", target: "contact" },
    },

    "compare:restaurant-online-reservations": {
      pageKey: "compare:restaurant-online-reservations",
      locale: "fr",
      metaTitle:
        "Réservations en ligne pour restaurants — prenez des réservations depuis votre propre site",
      metaDescription:
        "Laissez les clients demander une table directement sur votre site web de restaurant, à toute heure, sans commissions aux plateformes tierces. Dès 15€/mois avec domaine, hébergement, SSL et maintenance inclus.",
      h1: "Prenez les réservations de table sur votre propre site web",
      valueProp:
        "Les clients demandent une table directement depuis votre site, jour et nuit — moins d'appels manqués, et aucune commission aux plateformes externes.",
      intro:
        "Les réservations en ligne permettent aux clients de réserver une table via votre propre site web plutôt que par un appel téléphonique ou une application tierce. NorthSail met cela en place dans le cadre de votre site de restaurant dès 15€/mois, avec domaine, hébergement, SSL et maintenance inclus.",
      sections: [
        {
          heading: "Captez les réservations que vous manquez actuellement",
          body: [
            "Une grande partie de l'intention de réservation se produit en dehors des heures d'ouverture, quand personne n'est là pour répondre au téléphone. Un formulaire de demande en ligne la capte au lieu de la perdre.",
            "Chaque demande arrive structurée — date, heure, nombre de personnes — pour que le service puisse anticiper.",
          ],
        },
        {
          heading: "Votre site, pas une place de marché",
          body: [
            "Réserver sur votre propre site garde la relation client à vous et évite les commissions par couvert facturées par les plateformes externes.",
            "Cela se place aux côtés de votre menu numérique, de vos horaires, de votre adresse, de WhatsApp et de Maps sur l'offre App Essentielle.",
          ],
        },
        {
          heading: "Ce qui est inclus et ce qui est en option",
          body: [
            "Inclus : la fonctionnalité de demande de réservation, votre site web de restaurant, domaine personnalisé, hébergement, SSL et maintenance dès 15€/mois.",
            "Les acomptes payants, les systèmes complets de gestion de salle et la synchronisation avec des plateformes de réservation externes sont des options ou du travail sur mesure — jamais sous-entendus dans le prix d'entrée.",
          ],
        },
      ],
      aiSummary:
        "NorthSail permet aux restaurants de recevoir des demandes de réservation de table directement sur leur propre site web, captant la demande en dehors des heures d'ouverture sans commissions aux plateformes tierces, dès 15€/mois avec domaine, hébergement, SSL et maintenance inclus. Les acomptes, la gestion complète de salle et la synchronisation avec des plateformes externes sont des options ou du travail sur mesure.",
      faqs: [
        {
          question: "Comment les clients réservent-ils une table ?",
          answer:
            "Ils soumettent une demande de réservation sur votre site web avec la date, l'heure et le nombre de personnes — à toute heure, sans appel téléphonique nécessaire.",
        },
        {
          question: "Dois-je payer une commission par réservation ?",
          answer:
            "Non. Les réservations arrivent via votre propre site, il n'y a donc pas de commission par couvert à une plateforme externe.",
        },
        {
          question: "Les clients peuvent-ils payer un acompte en ligne ?",
          answer:
            "Les acomptes payants sont une option plutôt qu'une partie de l'offre d'entrée ; la fonctionnalité de base capte la demande de réservation.",
        },
      ],
      cta: { label: "Prendre des réservations en ligne", target: "contact" },
    },
  },
};

export default fr;
