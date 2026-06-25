import type { Locale } from "@/lib/i18n/config";
import type { LegalKey } from "@/lib/i18n/routes";

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  note: string;
}

const LEGAL: Record<Locale, Record<LegalKey, LegalContent>> = {
  en: {
    privacy: {
      metaTitle: "Privacy Policy | NorthSail",
      metaDescription:
        "How NorthSail collects, uses and protects the personal data of small businesses and visitors who contact us or use our subscription websites.",
      h1: "Privacy Policy",
      updated: "Last updated: 24 June 2026",
      intro:
        "This Privacy Policy explains what personal data NorthSail collects, why we collect it, and the choices you have. We aim to keep our handling of data clear, honest and proportionate to running our service.",
      sections: [
        {
          heading: "Who we are",
          body: [
            "NorthSail is a subscription platform that builds and manages affordable websites and small web apps for local businesses such as restaurants, hairdressers, hotels, gyms, clinics and other local services.",
            "If you have any question about this policy or your data, you can contact us at hello@north-sail.com.",
          ],
        },
        {
          heading: "What data we collect",
          body: [
            "When you contact us through a lead or enquiry form, we collect the details you provide: business name, business type, country, preferred language, your current website (if any), the need you describe, your email and, optionally, a phone number.",
            "If you register for an account, we also store your name and email. Like most websites, our servers keep standard technical logs (such as IP address, browser type and timestamps) needed to operate and secure the service.",
          ],
        },
        {
          heading: "How we use your data",
          body: [
            "We use your data to respond to your enquiries, recommend a suitable plan, and to provide and maintain your website or web app.",
            "We do not sell your personal data, and we do not use it for advertising profiling.",
          ],
        },
        {
          heading: "Legal basis and retention",
          body: [
            "Depending on the situation, we rely on your consent, our legitimate interest in answering and improving our service, or the performance of our contract with you.",
            "We keep personal data only for as long as it is needed for these purposes, after which it is deleted or anonymised.",
          ],
        },
        {
          heading: "Sharing your data",
          body: [
            "We share data with infrastructure and hosting providers strictly as needed to run the service, such as servers, domains and email delivery.",
            "These providers act on our instructions. We never sell your personal data to third parties.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "We use essential cookies only, for authentication and to keep your session working while you are signed in.",
            "We do not use advertising trackers. If that ever changes, we will update this policy and, where required, ask for your consent.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You can ask to access, correct, delete or object to the processing of your personal data.",
            "To exercise any of these rights, simply email us at hello@north-sail.com and we will respond within a reasonable time.",
          ],
        },
      ],
      note: "This is a general template provided for convenience and is not legal advice. Have it reviewed by a qualified lawyer for your jurisdiction before relying on it.",
    },
    terms: {
      metaTitle: "Terms of Service | NorthSail",
      metaDescription:
        "The terms that govern your use of NorthSail subscription websites and web apps, including plans, billing, responsibilities and honest expectations.",
      h1: "Terms of Service",
      updated: "Last updated: 24 June 2026",
      intro:
        "These Terms of Service set out the rules for using NorthSail. By using our website, contacting us or subscribing to a plan, you agree to these terms.",
      sections: [
        {
          heading: "Acceptance and overview",
          body: [
            "By accessing our site or subscribing to a NorthSail plan, you accept these terms.",
            "If you do not agree with them, please do not use the service.",
          ],
        },
        {
          heading: "The service",
          body: [
            "NorthSail provides a subscription website and, depending on your plan, one business-specific feature such as reservations, appointments, booking requests, schedules or quote requests.",
            "We handle the technical side, including domain, hosting, SSL and ongoing maintenance, so you can focus on your business.",
          ],
        },
        {
          heading: "Plans, pricing and billing",
          body: [
            "Advertised prices are entry-level, from prices. Lower plans have clear limits, and advanced features or integrations are available as paid extras or on higher plans.",
            "Subscriptions are billed monthly. The price and limits of your plan are shown before you subscribe.",
          ],
        },
        {
          heading: "Your responsibilities",
          body: [
            "You agree to provide accurate content and to use the service lawfully, without infringing the rights of others.",
            "You keep ownership of the content you provide, and you are responsible for having the rights to use it.",
          ],
        },
        {
          heading: "Availability and maintenance",
          body: [
            "The service is provided on a best-effort basis. We carry out reasonable maintenance, which may occasionally require short maintenance windows.",
            "This template does not contractually guarantee any specific level of uptime.",
          ],
        },
        {
          heading: "No unrealistic guarantees",
          body: [
            "We are honest about what a website can do. NorthSail does not guarantee specific Google rankings, search positions or particular business results.",
            "Online visibility and results depend on many factors outside our control.",
          ],
        },
        {
          heading: "Cancellation",
          body: [
            "You can cancel your subscription at any time. The service continues until the end of the period you have already paid for, and is not renewed afterwards.",
          ],
        },
        {
          heading: "Liability and changes to these terms",
          body: [
            "To the extent permitted by law, our liability is limited and we are not responsible for indirect or consequential losses.",
            "We may update these terms from time to time and will publish the current version on this page.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by the laws of the provider's country of establishment.",
          ],
        },
      ],
      note: "This is a general template provided for convenience and is not legal advice. Have it reviewed by a qualified lawyer for your jurisdiction before relying on it.",
    },
  },
  pt: {
    privacy: {
      metaTitle: "Política de Privacidade | NorthSail",
      metaDescription:
        "Como a NorthSail recolhe, utiliza e protege os dados pessoais das pequenas empresas e dos visitantes que nos contactam ou usam os nossos sites.",
      h1: "Política de Privacidade",
      updated: "Última atualização: 24 de junho de 2026",
      intro:
        "Esta Política de Privacidade explica que dados pessoais a NorthSail recolhe, porque os recolhe e que opções tem. Procuramos tratar os dados de forma clara, honesta e proporcional ao funcionamento do nosso serviço.",
      sections: [
        {
          heading: "Quem somos",
          body: [
            "A NorthSail é uma plataforma por subscrição que cria e gere sites e pequenas aplicações web acessíveis para negócios locais, como restaurantes, cabeleireiros, hotéis, ginásios, clínicas e outros serviços locais.",
            "Se tiver alguma questão sobre esta política ou sobre os seus dados, pode contactar-nos através de hello@north-sail.com.",
          ],
        },
        {
          heading: "Que dados recolhemos",
          body: [
            "Quando nos contacta através de um formulário de contacto ou pedido, recolhemos os dados que indica: nome do negócio, tipo de negócio, país, idioma preferido, o seu site atual (se existir), a necessidade que descreve, o seu email e, opcionalmente, um número de telefone.",
            "Se criar uma conta, guardamos também o seu nome e email. Como a maioria dos sites, os nossos servidores mantêm registos técnicos habituais (como endereço IP, tipo de navegador e datas) necessários para operar e proteger o serviço.",
          ],
        },
        {
          heading: "Como utilizamos os dados",
          body: [
            "Utilizamos os seus dados para responder aos seus pedidos, recomendar um plano adequado e fornecer e manter o seu site ou aplicação web.",
            "Não vendemos os seus dados pessoais e não os utilizamos para criar perfis publicitários.",
          ],
        },
        {
          heading: "Base legal e conservação",
          body: [
            "Consoante a situação, baseamo-nos no seu consentimento, no nosso interesse legítimo em responder e melhorar o serviço, ou na execução do contrato consigo.",
            "Conservamos os dados pessoais apenas durante o tempo necessário para estas finalidades, sendo depois eliminados ou anonimizados.",
          ],
        },
        {
          heading: "Partilha de dados",
          body: [
            "Partilhamos dados com fornecedores de infraestrutura e alojamento estritamente na medida do necessário para operar o serviço, como servidores, domínios e envio de email.",
            "Estes fornecedores atuam segundo as nossas instruções. Nunca vendemos os seus dados pessoais a terceiros.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Utilizamos apenas cookies essenciais, para autenticação e para manter a sua sessão ativa enquanto está autenticado.",
            "Não utilizamos rastreadores publicitários. Caso isso venha a mudar, atualizaremos esta política e, quando exigido, pediremos o seu consentimento.",
          ],
        },
        {
          heading: "Os seus direitos",
          body: [
            "Pode solicitar o acesso, a correção, a eliminação ou a oposição ao tratamento dos seus dados pessoais.",
            "Para exercer qualquer destes direitos, basta enviar-nos um email para hello@north-sail.com e responderemos num prazo razoável.",
          ],
        },
      ],
      note: "Este é um modelo geral fornecido por conveniência e não constitui aconselhamento jurídico. Solicite a sua revisão por um advogado qualificado para a sua jurisdição antes de o utilizar.",
    },
    terms: {
      metaTitle: "Termos e Condições | NorthSail",
      metaDescription:
        "Os termos que regem a utilização dos sites e aplicações web por subscrição da NorthSail, incluindo planos, faturação, responsabilidades e expectativas honestas.",
      h1: "Termos e Condições",
      updated: "Última atualização: 24 de junho de 2026",
      intro:
        "Estes Termos e Condições definem as regras de utilização da NorthSail. Ao utilizar o nosso site, ao contactar-nos ou ao subscrever um plano, aceita estes termos.",
      sections: [
        {
          heading: "Aceitação e visão geral",
          body: [
            "Ao aceder ao nosso site ou ao subscrever um plano NorthSail, aceita estes termos.",
            "Se não concordar com eles, por favor não utilize o serviço.",
          ],
        },
        {
          heading: "O serviço",
          body: [
            "A NorthSail fornece um site por subscrição e, consoante o seu plano, uma funcionalidade específica para o negócio, como reservas, marcações, pedidos de reserva, horários ou pedidos de orçamento.",
            "Tratamos da parte técnica, incluindo domínio, alojamento, SSL e manutenção contínua, para que se possa concentrar no seu negócio.",
          ],
        },
        {
          heading: "Planos, preços e faturação",
          body: [
            "Os preços anunciados são preços iniciais, a partir de. Os planos mais baixos têm limites claros, e as funcionalidades avançadas ou integrações estão disponíveis como extras pagos ou em planos superiores.",
            "As subscrições são faturadas mensalmente. O preço e os limites do seu plano são apresentados antes de subscrever.",
          ],
        },
        {
          heading: "As suas responsabilidades",
          body: [
            "Compromete-se a fornecer conteúdos corretos e a utilizar o serviço de forma legal, sem violar os direitos de terceiros.",
            "Mantém a propriedade dos conteúdos que fornece e é responsável por ter os direitos para os utilizar.",
          ],
        },
        {
          heading: "Disponibilidade e manutenção",
          body: [
            "O serviço é prestado com base no melhor esforço. Realizamos manutenção razoável, que pode ocasionalmente exigir breves janelas de manutenção.",
            "Este modelo não garante contratualmente qualquer nível específico de disponibilidade.",
          ],
        },
        {
          heading: "Sem garantias irrealistas",
          body: [
            "Somos honestos quanto ao que um site pode fazer. A NorthSail não garante posições específicas no Google, posições de pesquisa ou resultados de negócio concretos.",
            "A visibilidade e os resultados online dependem de muitos fatores fora do nosso controlo.",
          ],
        },
        {
          heading: "Cancelamento",
          body: [
            "Pode cancelar a sua subscrição a qualquer momento. O serviço continua até ao fim do período já pago e não é renovado depois disso.",
          ],
        },
        {
          heading: "Responsabilidade e alterações aos termos",
          body: [
            "Na medida permitida por lei, a nossa responsabilidade é limitada e não somos responsáveis por danos indiretos ou consequentes.",
            "Podemos atualizar estes termos periodicamente e publicaremos a versão atual nesta página.",
          ],
        },
        {
          heading: "Lei aplicável",
          body: [
            "Estes termos são regidos pelas leis do país de estabelecimento do prestador.",
          ],
        },
      ],
      note: "Este é um modelo geral fornecido por conveniência e não constitui aconselhamento jurídico. Solicite a sua revisão por um advogado qualificado para a sua jurisdição antes de o utilizar.",
    },
  },
  es: {
    privacy: {
      metaTitle: "Política de Privacidad | NorthSail",
      metaDescription:
        "Cómo NorthSail recopila, utiliza y protege los datos personales de las pequeñas empresas y de los visitantes que nos contactan o usan nuestros sitios web.",
      h1: "Política de Privacidad",
      updated: "Última actualización: 24 de junio de 2026",
      intro:
        "Esta Política de Privacidad explica qué datos personales recopila NorthSail, por qué los recopila y qué opciones tienes. Buscamos tratar los datos de forma clara, honesta y proporcional al funcionamiento de nuestro servicio.",
      sections: [
        {
          heading: "Quiénes somos",
          body: [
            "NorthSail es una plataforma por suscripción que crea y gestiona sitios web y pequeñas aplicaciones web asequibles para negocios locales como restaurantes, peluquerías, hoteles, gimnasios, clínicas y otros servicios locales.",
            "Si tienes cualquier duda sobre esta política o sobre tus datos, puedes contactarnos en hello@north-sail.com.",
          ],
        },
        {
          heading: "Qué datos recopilamos",
          body: [
            "Cuando nos contactas mediante un formulario de contacto o solicitud, recopilamos los datos que proporcionas: nombre del negocio, tipo de negocio, país, idioma preferido, tu sitio web actual (si lo tienes), la necesidad que describes, tu correo electrónico y, opcionalmente, un número de teléfono.",
            "Si creas una cuenta, también guardamos tu nombre y correo electrónico. Como la mayoría de los sitios web, nuestros servidores conservan registros técnicos habituales (como la dirección IP, el tipo de navegador y las fechas) necesarios para operar y proteger el servicio.",
          ],
        },
        {
          heading: "Cómo utilizamos tus datos",
          body: [
            "Utilizamos tus datos para responder a tus solicitudes, recomendarte un plan adecuado y proporcionar y mantener tu sitio web o aplicación web.",
            "No vendemos tus datos personales ni los utilizamos para crear perfiles publicitarios.",
          ],
        },
        {
          heading: "Base legal y conservación",
          body: [
            "Según el caso, nos basamos en tu consentimiento, en nuestro interés legítimo de responder y mejorar el servicio, o en la ejecución del contrato contigo.",
            "Conservamos los datos personales solo durante el tiempo necesario para estos fines, tras lo cual se eliminan o se anonimizan.",
          ],
        },
        {
          heading: "Compartir tus datos",
          body: [
            "Compartimos datos con proveedores de infraestructura y alojamiento estrictamente en la medida necesaria para operar el servicio, como servidores, dominios y envío de correo.",
            "Estos proveedores actúan según nuestras instrucciones. Nunca vendemos tus datos personales a terceros.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Utilizamos únicamente cookies esenciales, para la autenticación y para mantener tu sesión activa mientras has iniciado sesión.",
            "No utilizamos rastreadores publicitarios. Si esto cambiara, actualizaremos esta política y, cuando sea necesario, solicitaremos tu consentimiento.",
          ],
        },
        {
          heading: "Tus derechos",
          body: [
            "Puedes solicitar el acceso, la rectificación, la eliminación o la oposición al tratamiento de tus datos personales.",
            "Para ejercer cualquiera de estos derechos, basta con que nos escribas a hello@north-sail.com y responderemos en un plazo razonable.",
          ],
        },
      ],
      note: "Esta es una plantilla general proporcionada por comodidad y no constituye asesoramiento legal. Pide que la revise un abogado cualificado para tu jurisdicción antes de utilizarla.",
    },
    terms: {
      metaTitle: "Términos del Servicio | NorthSail",
      metaDescription:
        "Los términos que rigen el uso de los sitios web y aplicaciones por suscripción de NorthSail, incluyendo planes, facturación, responsabilidades y expectativas honestas.",
      h1: "Términos del Servicio",
      updated: "Última actualización: 24 de junio de 2026",
      intro:
        "Estos Términos del Servicio establecen las reglas para utilizar NorthSail. Al usar nuestro sitio web, contactarnos o suscribirte a un plan, aceptas estos términos.",
      sections: [
        {
          heading: "Aceptación y resumen",
          body: [
            "Al acceder a nuestro sitio o suscribirte a un plan de NorthSail, aceptas estos términos.",
            "Si no estás de acuerdo con ellos, por favor no utilices el servicio.",
          ],
        },
        {
          heading: "El servicio",
          body: [
            "NorthSail ofrece un sitio web por suscripción y, según tu plan, una función específica para el negocio como reservas, citas, solicitudes de reserva, horarios o solicitudes de presupuesto.",
            "Nos encargamos de la parte técnica, incluido el dominio, el alojamiento, el SSL y el mantenimiento continuo, para que puedas centrarte en tu negocio.",
          ],
        },
        {
          heading: "Planes, precios y facturación",
          body: [
            "Los precios anunciados son precios de entrada, desde. Los planes más bajos tienen límites claros, y las funciones avanzadas o integraciones están disponibles como extras de pago o en planes superiores.",
            "Las suscripciones se facturan mensualmente. El precio y los límites de tu plan se muestran antes de suscribirte.",
          ],
        },
        {
          heading: "Tus responsabilidades",
          body: [
            "Te comprometes a proporcionar contenido veraz y a utilizar el servicio de forma legal, sin vulnerar los derechos de terceros.",
            "Conservas la propiedad del contenido que proporcionas y eres responsable de tener los derechos para usarlo.",
          ],
        },
        {
          heading: "Disponibilidad y mantenimiento",
          body: [
            "El servicio se presta sobre la base del mejor esfuerzo. Realizamos un mantenimiento razonable, que ocasionalmente puede requerir breves ventanas de mantenimiento.",
            "Esta plantilla no garantiza contractualmente ningún nivel específico de disponibilidad.",
          ],
        },
        {
          heading: "Sin garantías poco realistas",
          body: [
            "Somos honestos sobre lo que un sitio web puede hacer. NorthSail no garantiza posiciones concretas en Google, posiciones de búsqueda ni resultados de negocio específicos.",
            "La visibilidad y los resultados en línea dependen de muchos factores fuera de nuestro control.",
          ],
        },
        {
          heading: "Cancelación",
          body: [
            "Puedes cancelar tu suscripción en cualquier momento. El servicio continúa hasta el final del periodo que ya has pagado y no se renueva después.",
          ],
        },
        {
          heading: "Responsabilidad y cambios en los términos",
          body: [
            "En la medida permitida por la ley, nuestra responsabilidad es limitada y no respondemos por daños indirectos o consecuentes.",
            "Podemos actualizar estos términos de vez en cuando y publicaremos la versión vigente en esta página.",
          ],
        },
        {
          heading: "Ley aplicable",
          body: [
            "Estos términos se rigen por las leyes del país de establecimiento del proveedor.",
          ],
        },
      ],
      note: "Esta es una plantilla general proporcionada por comodidad y no constituye asesoramiento legal. Pide que la revise un abogado cualificado para tu jurisdicción antes de utilizarla.",
    },
  },
  fr: {
    privacy: {
      metaTitle: "Politique de Confidentialité | NorthSail",
      metaDescription:
        "Comment NorthSail collecte, utilise et protège les données personnelles des petites entreprises et des visiteurs qui nous contactent ou utilisent nos sites.",
      h1: "Politique de Confidentialité",
      updated: "Dernière mise à jour : 24 juin 2026",
      intro:
        "Cette Politique de Confidentialité explique quelles données personnelles NorthSail collecte, pourquoi nous les collectons et quels sont vos choix. Nous cherchons à traiter les données de manière claire, honnête et proportionnée au fonctionnement de notre service.",
      sections: [
        {
          heading: "Qui sommes-nous",
          body: [
            "NorthSail est une plateforme par abonnement qui crée et gère des sites web et de petites applications web abordables pour des entreprises locales telles que restaurants, coiffeurs, hôtels, salles de sport, cliniques et autres services de proximité.",
            "Pour toute question concernant cette politique ou vos données, vous pouvez nous contacter à hello@north-sail.com.",
          ],
        },
        {
          heading: "Quelles données nous collectons",
          body: [
            "Lorsque vous nous contactez via un formulaire de contact ou de demande, nous collectons les informations que vous fournissez : nom de l'entreprise, type d'activité, pays, langue préférée, votre site web actuel (le cas échéant), le besoin que vous décrivez, votre adresse e-mail et, éventuellement, un numéro de téléphone.",
            "Si vous créez un compte, nous conservons également votre nom et votre e-mail. Comme la plupart des sites, nos serveurs conservent des journaux techniques habituels (tels que l'adresse IP, le type de navigateur et les horodatages) nécessaires au fonctionnement et à la sécurité du service.",
          ],
        },
        {
          heading: "Comment nous utilisons vos données",
          body: [
            "Nous utilisons vos données pour répondre à vos demandes, vous recommander une formule adaptée, et fournir et maintenir votre site ou application web.",
            "Nous ne vendons pas vos données personnelles et ne les utilisons pas à des fins de profilage publicitaire.",
          ],
        },
        {
          heading: "Base légale et conservation",
          body: [
            "Selon le cas, nous nous appuyons sur votre consentement, sur notre intérêt légitime à répondre et à améliorer le service, ou sur l'exécution de notre contrat avec vous.",
            "Nous ne conservons les données personnelles que le temps nécessaire à ces finalités, après quoi elles sont supprimées ou anonymisées.",
          ],
        },
        {
          heading: "Partage de vos données",
          body: [
            "Nous partageons des données avec des fournisseurs d'infrastructure et d'hébergement strictement dans la mesure nécessaire au fonctionnement du service, tels que serveurs, noms de domaine et envoi d'e-mails.",
            "Ces prestataires agissent selon nos instructions. Nous ne vendons jamais vos données personnelles à des tiers.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Nous utilisons uniquement des cookies essentiels, pour l'authentification et pour maintenir votre session active lorsque vous êtes connecté.",
            "Nous n'utilisons pas de traceurs publicitaires. Si cela venait à changer, nous mettrions à jour cette politique et, lorsque requis, demanderions votre consentement.",
          ],
        },
        {
          heading: "Vos droits",
          body: [
            "Vous pouvez demander l'accès, la rectification, la suppression ou l'opposition au traitement de vos données personnelles.",
            "Pour exercer l'un de ces droits, écrivez-nous simplement à hello@north-sail.com et nous vous répondrons dans un délai raisonnable.",
          ],
        },
      ],
      note: "Ceci est un modèle général fourni par commodité et ne constitue pas un avis juridique. Faites-le examiner par un avocat qualifié pour votre juridiction avant de vous y fier.",
    },
    terms: {
      metaTitle: "Conditions d'Utilisation | NorthSail",
      metaDescription:
        "Les conditions régissant l'utilisation des sites et applications web par abonnement de NorthSail, incluant formules, facturation, responsabilités et attentes honnêtes.",
      h1: "Conditions d'Utilisation",
      updated: "Dernière mise à jour : 24 juin 2026",
      intro:
        "Ces Conditions d'Utilisation définissent les règles d'utilisation de NorthSail. En utilisant notre site, en nous contactant ou en souscrivant une formule, vous acceptez ces conditions.",
      sections: [
        {
          heading: "Acceptation et présentation",
          body: [
            "En accédant à notre site ou en souscrivant une formule NorthSail, vous acceptez ces conditions.",
            "Si vous n'êtes pas d'accord avec elles, veuillez ne pas utiliser le service.",
          ],
        },
        {
          heading: "Le service",
          body: [
            "NorthSail fournit un site web par abonnement et, selon votre formule, une fonctionnalité propre à votre activité telle que réservations, rendez-vous, demandes de réservation, horaires ou demandes de devis.",
            "Nous gérons la partie technique, y compris le nom de domaine, l'hébergement, le SSL et la maintenance continue, afin que vous puissiez vous concentrer sur votre activité.",
          ],
        },
        {
          heading: "Formules, tarifs et facturation",
          body: [
            "Les prix annoncés sont des prix d'entrée, à partir de. Les formules les plus basses comportent des limites claires, et les fonctionnalités avancées ou intégrations sont disponibles en options payantes ou dans des formules supérieures.",
            "Les abonnements sont facturés mensuellement. Le prix et les limites de votre formule sont indiqués avant la souscription.",
          ],
        },
        {
          heading: "Vos responsabilités",
          body: [
            "Vous vous engagez à fournir un contenu exact et à utiliser le service de manière licite, sans porter atteinte aux droits d'autrui.",
            "Vous conservez la propriété du contenu que vous fournissez et êtes responsable de disposer des droits nécessaires pour l'utiliser.",
          ],
        },
        {
          heading: "Disponibilité et maintenance",
          body: [
            "Le service est fourni selon une obligation de moyens. Nous effectuons une maintenance raisonnable, qui peut occasionnellement nécessiter de brèves fenêtres de maintenance.",
            "Ce modèle ne garantit contractuellement aucun niveau spécifique de disponibilité.",
          ],
        },
        {
          heading: "Aucune garantie irréaliste",
          body: [
            "Nous sommes honnêtes sur ce qu'un site web peut faire. NorthSail ne garantit pas de positions précises sur Google, de positions de recherche ni de résultats commerciaux particuliers.",
            "La visibilité et les résultats en ligne dépendent de nombreux facteurs hors de notre contrôle.",
          ],
        },
        {
          heading: "Résiliation",
          body: [
            "Vous pouvez résilier votre abonnement à tout moment. Le service se poursuit jusqu'à la fin de la période déjà payée et n'est pas renouvelé ensuite.",
          ],
        },
        {
          heading: "Responsabilité et modifications des conditions",
          body: [
            "Dans la mesure permise par la loi, notre responsabilité est limitée et nous ne sommes pas responsables des dommages indirects ou consécutifs.",
            "Nous pouvons mettre à jour ces conditions de temps à autre et publierons la version en vigueur sur cette page.",
          ],
        },
        {
          heading: "Droit applicable",
          body: [
            "Ces conditions sont régies par les lois du pays d'établissement du prestataire.",
          ],
        },
      ],
      note: "Ceci est un modèle général fourni par commodité et ne constitue pas un avis juridique. Faites-le examiner par un avocat qualifié pour votre juridiction avant de vous y fier.",
    },
  },
  de: {
    privacy: {
      metaTitle: "Datenschutzerklärung | NorthSail",
      metaDescription:
        "Wie NorthSail die personenbezogenen Daten kleiner Unternehmen und der Besucher erhebt, nutzt und schützt, die uns kontaktieren oder unsere Websites verwenden.",
      h1: "Datenschutzerklärung",
      updated: "Zuletzt aktualisiert: 24. Juni 2026",
      intro:
        "Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten NorthSail erhebt, warum wir sie erheben und welche Wahlmöglichkeiten Sie haben. Wir behandeln Daten klar, ehrlich und im angemessenen Verhältnis zum Betrieb unseres Dienstes.",
      sections: [
        {
          heading: "Wer wir sind",
          body: [
            "NorthSail ist eine abobasierte Plattform, die erschwingliche Websites und kleine Web-Apps für lokale Unternehmen wie Restaurants, Friseure, Hotels, Fitnessstudios, Kliniken und andere lokale Dienstleistungen erstellt und verwaltet.",
            "Bei Fragen zu dieser Erklärung oder zu Ihren Daten erreichen Sie uns unter hello@north-sail.com.",
          ],
        },
        {
          heading: "Welche Daten wir erheben",
          body: [
            "Wenn Sie uns über ein Kontakt- oder Anfrageformular kontaktieren, erheben wir die von Ihnen angegebenen Daten: Firmenname, Art des Unternehmens, Land, bevorzugte Sprache, Ihre aktuelle Website (falls vorhanden), den beschriebenen Bedarf, Ihre E-Mail-Adresse und optional eine Telefonnummer.",
            "Wenn Sie ein Konto erstellen, speichern wir zudem Ihren Namen und Ihre E-Mail-Adresse. Wie die meisten Websites führen unsere Server übliche technische Protokolle (etwa IP-Adresse, Browsertyp und Zeitstempel), die für den Betrieb und die Sicherheit des Dienstes erforderlich sind.",
          ],
        },
        {
          heading: "Wie wir Ihre Daten nutzen",
          body: [
            "Wir nutzen Ihre Daten, um Ihre Anfragen zu beantworten, Ihnen einen passenden Tarif zu empfehlen sowie Ihre Website oder Web-App bereitzustellen und zu warten.",
            "Wir verkaufen Ihre personenbezogenen Daten nicht und verwenden sie nicht für Werbe-Profiling.",
          ],
        },
        {
          heading: "Rechtsgrundlage und Speicherdauer",
          body: [
            "Je nach Situation stützen wir uns auf Ihre Einwilligung, auf unser berechtigtes Interesse, Anfragen zu beantworten und den Dienst zu verbessern, oder auf die Erfüllung unseres Vertrags mit Ihnen.",
            "Wir speichern personenbezogene Daten nur so lange, wie es für diese Zwecke erforderlich ist, und löschen oder anonymisieren sie anschließend.",
          ],
        },
        {
          heading: "Weitergabe Ihrer Daten",
          body: [
            "Wir geben Daten an Infrastruktur- und Hosting-Anbieter ausschließlich in dem Umfang weiter, der für den Betrieb des Dienstes erforderlich ist, etwa für Server, Domains und E-Mail-Versand.",
            "Diese Anbieter handeln nach unseren Weisungen. Wir verkaufen Ihre personenbezogenen Daten niemals an Dritte.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Wir verwenden ausschließlich essenzielle Cookies, für die Authentifizierung und um Ihre Sitzung aufrechtzuerhalten, während Sie angemeldet sind.",
            "Wir verwenden keine Werbe-Tracker. Sollte sich dies ändern, aktualisieren wir diese Erklärung und holen, wo erforderlich, Ihre Einwilligung ein.",
          ],
        },
        {
          heading: "Ihre Rechte",
          body: [
            "Sie können Auskunft, Berichtigung, Löschung oder Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten verlangen.",
            "Um eines dieser Rechte auszuüben, senden Sie uns einfach eine E-Mail an hello@north-sail.com, und wir antworten Ihnen innerhalb einer angemessenen Frist.",
          ],
        },
      ],
      note: "Dies ist eine allgemeine Vorlage, die der Einfachheit halber bereitgestellt wird, und stellt keine Rechtsberatung dar. Lassen Sie sie von einer qualifizierten Anwältin oder einem qualifizierten Anwalt für Ihre Rechtsordnung prüfen, bevor Sie sich darauf verlassen.",
    },
    terms: {
      metaTitle: "Nutzungsbedingungen | NorthSail",
      metaDescription:
        "Die Bedingungen für die Nutzung der abobasierten Websites und Web-Apps von NorthSail, einschließlich Tarife, Abrechnung, Pflichten und ehrlicher Erwartungen.",
      h1: "Nutzungsbedingungen",
      updated: "Zuletzt aktualisiert: 24. Juni 2026",
      intro:
        "Diese Nutzungsbedingungen legen die Regeln für die Nutzung von NorthSail fest. Indem Sie unsere Website nutzen, uns kontaktieren oder einen Tarif abschließen, stimmen Sie diesen Bedingungen zu.",
      sections: [
        {
          heading: "Annahme und Überblick",
          body: [
            "Mit dem Zugriff auf unsere Website oder dem Abschluss eines NorthSail-Tarifs akzeptieren Sie diese Bedingungen.",
            "Wenn Sie damit nicht einverstanden sind, nutzen Sie den Dienst bitte nicht.",
          ],
        },
        {
          heading: "Der Dienst",
          body: [
            "NorthSail stellt eine abobasierte Website und je nach Tarif eine geschäftsspezifische Funktion bereit, etwa Reservierungen, Termine, Buchungsanfragen, Zeitpläne oder Angebotsanfragen.",
            "Wir übernehmen den technischen Teil, einschließlich Domain, Hosting, SSL und laufender Wartung, damit Sie sich auf Ihr Geschäft konzentrieren können.",
          ],
        },
        {
          heading: "Tarife, Preise und Abrechnung",
          body: [
            "Die angegebenen Preise sind Einstiegspreise, ab. Niedrigere Tarife haben klare Grenzen, und erweiterte Funktionen oder Integrationen sind als kostenpflichtige Zusätze oder in höheren Tarifen verfügbar.",
            "Abonnements werden monatlich abgerechnet. Preis und Grenzen Ihres Tarifs werden vor dem Abschluss angezeigt.",
          ],
        },
        {
          heading: "Ihre Pflichten",
          body: [
            "Sie verpflichten sich, korrekte Inhalte bereitzustellen und den Dienst rechtmäßig zu nutzen, ohne die Rechte Dritter zu verletzen.",
            "Sie behalten das Eigentum an den von Ihnen bereitgestellten Inhalten und sind dafür verantwortlich, die Rechte zu deren Nutzung zu besitzen.",
          ],
        },
        {
          heading: "Verfügbarkeit und Wartung",
          body: [
            "Der Dienst wird nach bestem Bemühen bereitgestellt. Wir führen angemessene Wartungen durch, die gelegentlich kurze Wartungsfenster erfordern können.",
            "Diese Vorlage garantiert vertraglich kein bestimmtes Maß an Verfügbarkeit.",
          ],
        },
        {
          heading: "Keine unrealistischen Garantien",
          body: [
            "Wir sind ehrlich darüber, was eine Website leisten kann. NorthSail garantiert keine bestimmten Google-Platzierungen, Suchpositionen oder konkreten Geschäftsergebnisse.",
            "Online-Sichtbarkeit und Ergebnisse hängen von vielen Faktoren ab, die außerhalb unserer Kontrolle liegen.",
          ],
        },
        {
          heading: "Kündigung",
          body: [
            "Sie können Ihr Abonnement jederzeit kündigen. Der Dienst läuft bis zum Ende des bereits bezahlten Zeitraums weiter und wird danach nicht verlängert.",
          ],
        },
        {
          heading: "Haftung und Änderungen der Bedingungen",
          body: [
            "Soweit gesetzlich zulässig, ist unsere Haftung beschränkt, und wir haften nicht für indirekte oder Folgeschäden.",
            "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren und veröffentlichen die jeweils gültige Fassung auf dieser Seite.",
          ],
        },
        {
          heading: "Anwendbares Recht",
          body: [
            "Diese Bedingungen unterliegen dem Recht des Landes, in dem der Anbieter niedergelassen ist.",
          ],
        },
      ],
      note: "Dies ist eine allgemeine Vorlage, die der Einfachheit halber bereitgestellt wird, und stellt keine Rechtsberatung dar. Lassen Sie sie von einer qualifizierten Anwältin oder einem qualifizierten Anwalt für Ihre Rechtsordnung prüfen, bevor Sie sich darauf verlassen.",
    },
  },
};

export function getLegalContent(locale: Locale, which: LegalKey): LegalContent {
  return LEGAL[locale][which];
}
