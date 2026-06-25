import type { LocaleContent } from "../types";

/**
 * French (fr-FR) content. Mirrors the English reference shape exactly.
 * Keep the structure identical across locales.
 */
const fr: LocaleContent = {
  home: {
    locale: "fr",
    metaTitle: "NorthSail — sites web et web apps abordables pour TPE",
    metaDescription:
      "NorthSail offre à votre petite entreprise son propre site web avec domaine, hébergement, SSL, maintenance et outils de réservation — dès 15€/mois. Réservations, rendez-vous, devis et plus.",
    h1: "Le site web de votre entreprise, avec réservations et rendez-vous intégrés.",
    subtitle:
      "NorthSail crée et gère des sites web et web apps abordables pour les petites entreprises — domaine, hébergement, SSL et maintenance inclus, dès 15€/mois.",
    primaryCta: "Créer votre site web",
    secondaryCta: "Voir les tarifs",
    trustLine:
      "Pour les restaurants, coiffeurs, hôtels, salles de sport, cliniques et services locaux.",
    sectorsTitle: "Conçu pour votre type d'entreprise",
    sectors: [
      {
        key: "restaurants",
        title: "Restaurants",
        description:
          "Menus numériques, menu QR et demandes de réservation de table.",
      },
      {
        key: "hairdressers",
        title: "Coiffeurs",
        description: "Rendez-vous en ligne, prestations, tarifs et équipe.",
      },
      {
        key: "hotels",
        title: "Hôtels",
        description: "Chambres, galerie et demandes de réservation directe.",
      },
      {
        key: "gyms",
        title: "Salles de sport",
        description: "Plannings de cours, séances d'essai et inscriptions.",
      },
      {
        key: "clinics",
        title: "Cliniques",
        description: "Demandes de rendez-vous et de devis, contact et plans.",
      },
      {
        key: "local-services",
        title: "Services locaux",
        description: "Demandes de devis pour artisans et services à domicile.",
      },
    ],
    howItWorksTitle: "Comment ça marche",
    steps: [
      {
        title: "Choisissez votre offre",
        description:
          "Choisissez l'offre qui correspond aux besoins réels de votre entreprise.",
      },
      {
        title: "Nous le créons et le publions",
        description:
          "Nous prenons en charge la configuration, le domaine, l'hébergement et le SSL pour vous.",
      },
      {
        title: "Vous le gérez depuis un seul panneau",
        description:
          "Mettez à jour le contenu et traitez les demandes depuis un tableau de bord intuitif.",
      },
    ],
    plansTitle: "Des offres claires et transparentes",
    plansSubtitle:
      "Des offres mensuelles abordables. Les prix d'entrée de gamme s'accompagnent de limites claires.",
    aiSummary:
      "NorthSail aide les petites entreprises à obtenir leur propre site web, un domaine personnalisé, l'hébergement, le SSL, la maintenance et des outils de réservation adaptés à leur métier, à des prix mensuels bas. Les restaurants peuvent obtenir des pages de réservation et des menus numériques, les coiffeurs des systèmes de rendez-vous, les hôtels des demandes de réservation directe, et les salles de sport peuvent publier des plannings et recevoir des inscriptions. Les offres démarrent à 5€/mois pour une présence professionnelle et 15€/mois pour une App Essentielle avec une fonctionnalité essentielle.",
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
      metaTitle:
        "Site web avec réservations en ligne pour restaurant dès 15€/mois",
      metaDescription:
        "Offrez à votre restaurant son propre site web avec demandes de réservation de table, menu numérique, menu QR, horaires, galerie, WhatsApp et Google Maps — dès 15€/mois avec NorthSail.",
      h1: "Site web avec réservations en ligne pour restaurant dès 15€/mois",
      valueProp:
        "Votre propre site web de restaurant avec demandes de réservation de table, un menu numérique et un menu QR — pas seulement une page Instagram.",
      heroText:
        "Les restaurants peuvent obtenir leur propre site web avec demandes de réservation de table, un menu numérique, un menu QR, les horaires, la localisation, une galerie, un bouton WhatsApp, Google Maps et des demandes directes de clients — sans dépendre uniquement d'Instagram ou de plateformes tierces.",
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
      metaTitle:
        "Site web avec prise de rendez-vous pour coiffeur dès 15€/mois",
      metaDescription:
        "Offrez à votre salon ou barbershop son propre site web avec un système de rendez-vous en ligne, prestations, tarifs, équipe et plannings — dès 15€/mois avec NorthSail.",
      h1: "Site web avec rendez-vous en ligne pour coiffeur dès 15€/mois",
      valueProp:
        "Votre propre site web de salon avec un système de réservation personnalisé, prestations, tarifs et plannings de l'équipe.",
      heroText:
        "Les coiffeurs et barbiers peuvent obtenir leur propre site web avec un système de réservation personnalisé, une liste de prestations et de tarifs, les profils et plannings de l'équipe — pour que les clients réservent en ligne au lieu de remplir votre téléphone de messages.",
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
      metaTitle:
        "Site web d'hôtel avec demandes de réservation directe dès 15€/mois",
      metaDescription:
        "Offrez à votre hôtel ou hébergement local son propre site web avec chambres, équipements, galerie, localisation et un formulaire de demande de réservation directe — dès 15€/mois avec NorthSail.",
      h1: "Site web d'hôtel avec demandes de réservation directe dès 15€/mois",
      valueProp:
        "Votre propre site web d'hôtel avec chambres, équipements, galerie et un formulaire de demande de réservation directe.",
      heroText:
        "Les hôtels et hébergements locaux peuvent avoir leur propre site web avec chambres, équipements, galerie, localisation, un formulaire de demande de réservation directe, WhatsApp, contact et un flux dédié de disponibilité/demande — pour que les voyageurs vous joignent directement.",
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
      metaTitle:
        "Site web de salle de sport avec plannings et essais dès 15€/mois",
      metaDescription:
        "Offrez à votre salle de sport ou studio son propre site web avec plannings de cours, demandes de séances d'essai, abonnements et profils de coachs — dès 15€/mois avec NorthSail.",
      h1: "Site web de salle de sport avec plannings et inscriptions dès 15€/mois",
      valueProp:
        "Votre propre site web de salle de sport avec plannings de cours, demandes de séances d'essai et profils de coachs.",
      heroText:
        "Les salles de sport, studios et coachs sportifs peuvent obtenir leur propre site web avec plannings de cours, demandes de séances d'essai, informations sur les abonnements et profils de coachs — pour que les prospects voient votre planning et s'inscrivent en ligne.",
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
      metaTitle:
        "Site web de clinique avec demandes de RDV et devis dès 15€/mois",
      metaDescription:
        "Offrez à votre clinique ou service local son propre site web avec demandes de rendez-vous, demandes de devis, formulaires de contact, WhatsApp et Google Maps — dès 15€/mois avec NorthSail.",
      h1: "Site web de clinique avec demandes de rendez-vous et de devis dès 15€/mois",
      valueProp:
        "Votre propre site web de clinique avec demandes de rendez-vous, demandes de devis et options de contact claires.",
      heroText:
        "Les cliniques et services locaux peuvent obtenir leur propre site web avec demandes de rendez-vous, demandes de devis, formulaires de contact, un bouton WhatsApp et Google Maps — une présence en ligne digne de confiance qui transforme les visiteurs en rendez-vous réservés.",
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
      metaTitle:
        "Site web avec demandes de devis pour services locaux dès 15€/mois",
      metaDescription:
        "Électriciens, plombiers, sociétés de nettoyage et de rénovation, jardiniers et pisciniers : obtenez votre propre site web avec des flux de demande de devis — dès 15€/mois avec NorthSail.",
      h1: "Site web avec demandes de devis pour artisans locaux dès 15€/mois",
      valueProp:
        "Votre propre site web avec un flux clair de demande de devis pour les artisans et services à domicile.",
      heroText:
        "Les artisans locaux — électriciens, plombiers, sociétés de nettoyage, sociétés de rénovation, jardiniers et pisciniers — peuvent obtenir leur propre site web avec un flux structuré de demande de devis, une liste de services, une galerie, WhatsApp et Google Maps, pour que les clients envoient des demandes qualifiées au lieu de messages vagues.",
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
  },
};

export default fr;
