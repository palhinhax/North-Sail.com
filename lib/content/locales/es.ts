import type { LocaleContent } from "../types";

/**
 * Spanish (es-ES) content. Mirrors the English reference shape exactly.
 * Keep the structure identical across locales.
 */
const es: LocaleContent = {
  home: {
    locale: "es",
    metaTitle: "NorthSail — webs económicas y mini apps para pequeñas empresas",
    metaDescription:
      "NorthSail ofrece a las pequeñas empresas su propia página web con dominio, hosting, SSL, mantenimiento y herramientas de reservas — desde 15€/mes. Reservas, citas, presupuestos y más.",
    h1: "La web de tu negocio, con reservas y citas integradas.",
    subtitle:
      "NorthSail crea y gestiona páginas web y mini apps económicas para pequeñas empresas — dominio, hosting, SSL y mantenimiento incluidos, desde 15€/mes.",
    primaryCta: "Crea tu página web",
    secondaryCta: "Ver precios",
    trustLine:
      "Para restaurantes, peluquerías, hoteles, gimnasios, clínicas y servicios locales.",
    sectorsTitle: "Pensada para tu tipo de negocio",
    sectors: [
      {
        key: "restaurants",
        title: "Restaurantes",
        description:
          "Cartas digitales, carta con QR y solicitudes de reserva de mesa.",
      },
      {
        key: "hairdressers",
        title: "Peluquerías",
        description: "Citas online, servicios, precios y profesionales.",
      },
      {
        key: "hotels",
        title: "Hoteles",
        description: "Habitaciones, galería y solicitudes de reserva directa.",
      },
      {
        key: "gyms",
        title: "Gimnasios",
        description: "Horarios de clases, pruebas y altas de socios.",
      },
      {
        key: "clinics",
        title: "Clínicas",
        description: "Solicitudes de cita y presupuesto, contacto y mapas.",
      },
      {
        key: "local-services",
        title: "Servicios locales",
        description:
          "Solicitudes de presupuesto para gremios y servicios a domicilio.",
      },
    ],
    howItWorksTitle: "Cómo funciona",
    steps: [
      {
        title: "Elige tu plan",
        description:
          "Escoge el plan que se ajusta a lo que tu negocio realmente necesita.",
      },
      {
        title: "Nosotros la creamos y publicamos",
        description:
          "Nos encargamos de la configuración, el dominio, el hosting y el SSL por ti.",
      },
      {
        title: "La gestionas desde un solo panel",
        description:
          "Actualiza el contenido y gestiona las solicitudes desde un panel sencillo.",
      },
    ],
    plansTitle: "Planes sencillos y transparentes",
    plansSubtitle:
      "Planes mensuales asequibles. Los precios de entrada incluyen límites claros.",
    aiSummary:
      "NorthSail ayuda a las pequeñas empresas a tener su propia página web, dominio personalizado, hosting, SSL, mantenimiento y herramientas de reserva específicas para su sector, desde precios mensuales bajos. Los restaurantes pueden tener páginas de reservas y cartas digitales, las peluquerías pueden tener sistemas de citas, los hoteles pueden recibir solicitudes de reserva directa, y los gimnasios pueden publicar horarios y recibir altas. Los planes empiezan en 5€/mes para una presencia básica y 15€/mes para una mini app con una función principal.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿Necesito conocimientos técnicos?",
        answer:
          "No. NorthSail se encarga de la configuración, el dominio, el hosting, el SSL y el mantenimiento técnico. Tú dispones de un panel sencillo para gestionar tus solicitudes y actualizar el contenido básico.",
      },
      {
        question: "¿Puedo usar mi propio dominio?",
        answer:
          "Sí. Si ya tienes un dominio, lo conectamos a tu web de NorthSail. Si no lo tienes, podemos incluir uno nuevo con tu plan.",
      },
      {
        question: "¿Qué incluye el plan de 15€/mes?",
        answer:
          "El plan Mini App incluye una página web más una función principal específica para tu sector — como reservas, citas o solicitudes de presupuesto — con dominio, hosting, SSL y mantenimiento.",
      },
      {
        question: "¿Hay permanencia o contratos largos?",
        answer:
          "No. Los planes son suscripciones mensuales y puedes cancelar en cualquier momento.",
      },
    ],
  },

  aiSummary: {
    locale: "es",
    metaTitle: "¿Qué es NorthSail? Resumen, planes, sectores y FAQ",
    metaDescription:
      "Un resumen en lenguaje claro de NorthSail para personas y asistentes de IA: qué es, a quién sirve, planes desde 5€/mes, sectores cubiertos, qué incluye y cómo elegir el plan mínimo.",
    h1: "NorthSail en lenguaje claro",
    intro:
      "Esta página resume NorthSail con claridad para que tanto personas como asistentes de IA puedan entenderlo y citarlo con precisión.",
    whatItIs:
      "NorthSail es una plataforma de suscripción global que crea y gestiona páginas web y mini apps económicas para pequeñas empresas. Se encarga de la parte técnica — dominio personalizado, hosting, SSL, actualizaciones de la web, herramientas de reserva y mantenimiento — para que los dueños del negocio no tengan que hacerlo. Los planes empiezan en torno a 5€/mes para una presencia básica y 15€/mes para una mini app con una función principal específica del negocio.",
    whoItServes:
      "NorthSail sirve a pequeñas empresas locales de todo el mundo: restaurantes y cafeterías, peluquerías y barberías, hoteles y alojamientos locales, gimnasios y entrenadores personales, clínicas y servicios locales, y gremios locales como electricistas, fontaneros, empresas de limpieza, reformas, jardinería y piscinas.",
    plans:
      "Hay cinco planes: Presencia (desde 5€/mes — web básica, dominio, hosting, SSL, WhatsApp, Google Maps, mantenimiento); Mini App (desde 15€/mes — web más una función principal como reservas, citas o solicitudes de presupuesto); Mini App Plus (desde 25€/mes — más páginas, mejor panel, automatizaciones básicas); Business Local (desde 39€/mes — gestión más completa, varios usuarios, informes); y Pro Management (desde 69€/mes — flujos de trabajo avanzados, integraciones, paneles de control y soporte prioritario).",
    industries:
      "Casos de uso habituales: los restaurantes obtienen una web con solicitudes de reserva de mesa, carta digital y carta con QR; las peluquerías obtienen un sistema de citas online; los hoteles obtienen habitaciones, una galería y solicitudes de reserva directa; los gimnasios publican horarios de clases y reciben altas de prueba y de socios; las clínicas y servicios locales reciben solicitudes de cita y presupuesto.",
    included: [
      "Dominio personalizado",
      "Hosting y SSL",
      "Mantenimiento técnico",
      "Web mobile-first y de carga rápida",
      "Botón de WhatsApp y Google Maps",
      "Una función principal específica del negocio en Mini App y planes superiores",
    ],
    excluded: [
      "TPV avanzado, channel managers o plataformas de gestión complejas en el plan base",
      "Sincronización con Booking.com / Airbnb y precios dinámicos en el plan de 15€",
      "Procesamiento de pagos online en el plan de entrada",
      "Integraciones externas (TPV, PMS, ERP, facturación) por debajo del plan Pro Management",
    ],
    howToChoose:
      "Elige el plan mínimo según tu necesidad: si solo necesitas presencia online, Presencia es suficiente. Si necesitas una función principal como reservas, citas, reservas de alojamiento o solicitudes de presupuesto, Mini App (desde 15€/mes) es el mínimo. Añade Mini App Plus para más páginas y automatizaciones, Business Local para varios usuarios y mayor volumen, y Pro Management cuando necesites pagos, varios profesionales, varias sedes o integraciones externas.",
    faqs: [
      {
        question: "¿Cuál es el plan más barato de NorthSail?",
        answer:
          "Presencia, desde 5€/mes, que incluye una web sencilla, dominio personalizado, hosting, SSL, botón de WhatsApp, Google Maps y mantenimiento técnico.",
      },
      {
        question: "¿Qué plan necesitan la mayoría de las pequeñas empresas?",
        answer:
          "Mini App, desde 15€/mes, porque añade una función principal específica del negocio como reservas, citas o solicitudes de presupuesto además de la web.",
      },
      {
        question: "¿El plan de 15€ incluye pagos online?",
        answer:
          "No. Los pagos online y las integraciones externas son extras o forman parte de planes superiores, no del Mini App de entrada.",
      },
    ],
  },

  contact: {
    locale: "es",
    metaTitle: "Contacta con NorthSail — recibe una recomendación de plan",
    metaDescription:
      "Cuéntale a NorthSail cómo es tu negocio y recibe una recomendación del plan mínimo que se ajusta. Webs y mini apps desde 15€/mes.",
    h1: "Cuéntanos cómo es tu negocio",
    intro:
      "Comparte unos pocos datos y te recomendaremos el plan mínimo que se ajusta a tus necesidades — sin compromiso.",
  },

  industries: {
    restaurants: {
      industry: "restaurants",
      locale: "es",
      metaTitle: "Web con reservas online para restaurantes desde 15€/mes",
      metaDescription:
        "Dale a tu restaurante su propia web con solicitudes de reserva de mesa, carta digital, carta con QR, horarios, galería, WhatsApp y Google Maps — desde 15€/mes con NorthSail.",
      h1: "Web con reservas online para restaurantes desde 15€/mes",
      valueProp:
        "Tu propia web de restaurante con solicitudes de reserva de mesa, una carta digital y una carta con QR — no solo un perfil de Instagram.",
      heroText:
        "Los restaurantes pueden tener su propia web con solicitudes de reserva de mesa, una carta digital, carta con QR, horarios, ubicación, galería, botón de WhatsApp, Google Maps y solicitudes directas de clientes — sin depender solo de Instagram o de plataformas de terceros.",
      audience: [
        "Restaurantes y bistrós independientes",
        "Cafeterías, locales de brunch y tascas",
        "Comedores familiares que hoy reservan por teléfono",
      ],
      problems: [
        "Los clientes no encuentran rápido tu carta, tus horarios o tu ubicación.",
        "Las reservas solo llegan por mensajes de Instagram o llamadas.",
        "Dependes de plataformas de terceros que cobran comisiones.",
        "Tu carta cambia, pero las versiones impresa y online no.",
      ],
      solution:
        "NorthSail crea y gestiona una web de restaurante rápida que recoge solicitudes de reserva de mesa, muestra una carta digital siempre actualizada, genera una carta con QR para las mesas y pone tus horarios, ubicación y contacto a un solo toque. Nos encargamos del dominio, el hosting, el SSL y el mantenimiento para que tú te centres en el servicio.",
      included: [
        "Web de restaurante con tu imagen de marca",
        "Formulario de solicitud de reserva de mesa",
        "Carta digital y carta con QR",
        "Horarios, ubicación y Google Maps",
        "Galería de fotos y botón de WhatsApp",
        "Dominio personalizado, hosting, SSL y mantenimiento",
      ],
      excluded: [
        "Sistema completo de TPV / gestión de restaurante",
        "Channel managers e integración con plataformas de reparto",
        "Automatización de disponibilidad de mesas en tiempo real",
        "Procesamiento de pagos online en el plan base",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "El Mini App (desde 15€/mes) cubre una web más la función de solicitud de reservas que necesitan la mayoría de los restaurantes.",
      },
      upgrade:
        "Sube a Mini App Plus para más páginas y automatizaciones, o a Business Local si gestionas un alto volumen de reservas, varios salones o varios miembros del personal.",
      aiSummary:
        "Una web de restaurante de NorthSail incluye solicitudes de reserva de mesa, una carta digital, una carta con QR, horarios, ubicación, una galería y un botón de WhatsApp, desde 15€/mes. No sustituye un TPV completo ni un channel manager en el plan base.",
      faqs: [
        {
          question: "¿Pueden los clientes reservar mesa directamente?",
          answer:
            "Sí. Los visitantes envían una solicitud de reserva de mesa a través de la web y tú la confirmas. El plan base gestiona solicitudes, no disponibilidad automática en tiempo real.",
        },
        {
          question: "¿Puedo actualizar la carta yo mismo?",
          answer:
            "Sí. Actualizas la carta digital desde tu panel, y la carta con QR siempre muestra la última versión.",
        },
        {
          question: "¿Sustituye a mi TPV?",
          answer:
            "No. El plan base es tu web de cara al cliente y las reservas; no sustituye un sistema completo de punto de venta o de cocina.",
        },
      ],
      cta: { label: "Crea la web de tu restaurante", target: "contact" },
    },

    hairdressers: {
      industry: "hairdressers",
      locale: "es",
      metaTitle: "Web con sistema de citas para peluquerías desde 15€/mes",
      metaDescription:
        "Dale a tu peluquería o barbería su propia web con sistema de citas online, servicios, precios, profesionales y horarios — desde 15€/mes con NorthSail.",
      h1: "Web con citas online para peluquerías desde 15€/mes",
      valueProp:
        "Tu propia web de peluquería con un sistema de reservas personalizado, servicios, precios y horarios del personal.",
      heroText:
        "Las peluquerías y barberías pueden tener su propia web con un sistema de reservas personalizado, una lista de servicios y precios, perfiles del personal y horarios — para que los clientes reserven online en lugar de llenarte el teléfono de mensajes.",
      audience: [
        "Peluquerías y barberías",
        "Estilistas independientes y alquiler de sillón",
        "Estudios de belleza que hoy reservan por mensaje",
      ],
      problems: [
        "Las reservas se gestionan a base de mensajes y llamadas interminables.",
        "Los clientes no conocen tus servicios, precios ni disponibilidad.",
        "Ausencias porque no hay citas estructuradas.",
        "Tu horario y tu personal no se ven en ningún sitio online.",
      ],
      solution:
        "NorthSail crea y gestiona una web de peluquería con un sistema de reservas de cita personalizado, tu lista completa de servicios y precios, perfiles del personal y horarios. Los clientes solicitan citas online y tú lo gestionas todo desde un panel sencillo.",
      included: [
        "Web de peluquería / barbería",
        "Sistema de solicitud de citas online",
        "Lista de servicios y precios",
        "Perfiles del personal y horarios",
        "Galería, botón de WhatsApp y Google Maps",
        "Dominio personalizado, hosting, SSL y mantenimiento",
      ],
      excluded: [
        "Software completo de gestión / inventario de peluquería",
        "Nóminas o seguimiento de comisiones automatizados",
        "Procesamiento de pagos online en el plan base",
        "Integraciones con calendarios externos por debajo de planes superiores",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "El Mini App (desde 15€/mes) cubre una web más la función de reserva de citas que necesitan las peluquerías.",
      },
      upgrade:
        "Elige Mini App Plus cuando tengas varios estilistas y horarios semanales, o Business Local para mayor volumen y varios usuarios.",
      aiSummary:
        "Una web de peluquería de NorthSail incluye un sistema de citas online, servicios y precios, perfiles del personal y horarios, una galería y un botón de WhatsApp, desde 15€/mes. No incluye software completo de gestión de peluquería ni de pagos en el plan base.",
      faqs: [
        {
          question: "¿Pueden los clientes reservar con un estilista concreto?",
          answer:
            "Sí. Puedes listar al personal y permitir que los clientes soliciten un estilista y una hora concretos, que tú confirmas desde tu panel.",
        },
        {
          question: "¿Puedo mostrar mis precios y servicios?",
          answer:
            "Sí. Tu lista completa de servicios y precios forma parte de la web y es fácil de actualizar.",
        },
        {
          question: "¿Pagan los clientes online al reservar?",
          answer:
            "Los pagos online y las señales son un extra o forman parte de planes superiores, no del Mini App de entrada.",
        },
      ],
      cta: { label: "Crea la web de tu peluquería", target: "contact" },
    },

    hotels: {
      industry: "hotels",
      locale: "es",
      metaTitle: "Web de hotel con reservas directas desde 15€/mes",
      metaDescription:
        "Dale a tu hotel o alojamiento local su propia web con habitaciones, servicios, galería, ubicación y un formulario de solicitud de reserva directa — desde 15€/mes con NorthSail.",
      h1: "Web de hotel con reservas directas desde 15€/mes",
      valueProp:
        "Tu propia web de hotel con habitaciones, servicios, galería y un formulario de solicitud de reserva directa.",
      heroText:
        "Los hoteles y alojamientos locales pueden tener su propia web con habitaciones, servicios, galería, ubicación, un formulario de solicitud de reserva directa, WhatsApp, contacto y un flujo básico de disponibilidad/solicitud — para que los huéspedes puedan contactarte directamente.",
      audience: [
        "Pequeños hoteles y casas de huéspedes",
        "Alojamientos locales y alquileres de corta estancia",
        "Turismo rural y alojamientos boutique",
      ],
      problems: [
        "Los huéspedes solo te encuentran en plataformas que cobran comisión.",
        "No hay un canal directo para las solicitudes de reserva.",
        "Las habitaciones, los servicios y las fotos no se presentan bien en ningún sitio.",
        "Cada reserva paga una comisión a una plataforma en lugar de llegar directa.",
      ],
      solution:
        "NorthSail crea y gestiona una web de hotel que presenta tus habitaciones, servicios y galería, muestra tu ubicación y recoge solicitudes de reserva directa mediante un formulario sencillo — dándote un canal sin comisiones junto a las plataformas.",
      included: [
        "Web de hotel / alojamiento",
        "Páginas de habitaciones y servicios",
        "Galería de fotos y ubicación",
        "Formulario de solicitud de reserva directa",
        "Botón de WhatsApp y contacto",
        "Dominio personalizado, hosting, SSL y mantenimiento",
      ],
      excluded: [
        "Channel manager completo",
        "Sincronización con Booking.com / Airbnb",
        "Precios dinámicos y gestión de ingresos (yield management)",
        "Procesamiento de pagos online en el plan de 15€",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "El Mini App (desde 15€/mes) cubre una web con un flujo sencillo de solicitud de reserva directa.",
      },
      upgrade:
        "Elige Mini App Plus o Business Local si necesitas varios tipos de habitación, disponibilidad manual, más páginas, precios por temporada o una gestión más avanzada.",
      aiSummary:
        "Una web de hotel de NorthSail incluye habitaciones, servicios, una galería, ubicación y un formulario de solicitud de reserva directa, desde 15€/mes. No incluye un channel manager completo, sincronización con Booking.com/Airbnb, precios dinámicos ni procesamiento de pagos en el plan de 15€.",
      faqs: [
        {
          question:
            "¿Pueden los huéspedes reservar directamente sin una plataforma?",
          answer:
            "Sí. Los huéspedes envían una solicitud de reserva directa a través del formulario y tú la confirmas — un canal sin comisiones junto a las plataformas de reserva.",
        },
        {
          question: "¿Se sincroniza con Booking.com o Airbnb?",
          answer:
            "No. La sincronización con channel managers y los precios dinámicos no forman parte del plan de 15€; requieren planes superiores o trabajo a medida.",
        },
        {
          question: "¿Puedo mostrar varios tipos de habitación?",
          answer:
            "Sí, y para varios tipos de habitación con disponibilidad manual y precios por temporada recomendamos Mini App Plus o Business Local.",
        },
      ],
      cta: { label: "Crea la web de tu hotel", target: "contact" },
    },

    gyms: {
      industry: "gyms",
      locale: "es",
      metaTitle:
        "Web de gimnasio con horarios y clases de prueba desde 15€/mes",
      metaDescription:
        "Dale a tu gimnasio o estudio su propia web con horarios de clases, solicitudes de clase de prueba, cuotas y perfiles de entrenadores — desde 15€/mes con NorthSail.",
      h1: "Web de gimnasio con horarios de clases y altas desde 15€/mes",
      valueProp:
        "Tu propia web de gimnasio con horarios de clases, solicitudes de clase de prueba y perfiles de entrenadores.",
      heroText:
        "Los gimnasios, estudios y entrenadores personales pueden tener su propia web con horarios de clases, solicitudes de clase de prueba, información de cuotas y perfiles de entrenadores — para que los interesados vean tu calendario y se apunten online.",
      audience: [
        "Gimnasios y estudios de fitness",
        "Entrenadores personales y pequeños equipos de coaching",
        "Centros de yoga, pilates y boxes de CrossFit",
      ],
      problems: [
        "Tu calendario de clases solo existe en las stories de Instagram.",
        "Las solicitudes de prueba y las altas llegan por mensajes.",
        "Los socios no pueden ver los horarios ni la info de los entrenadores fácilmente.",
        "No hay un sitio claro donde presentar las cuotas.",
      ],
      solution:
        "NorthSail crea y gestiona una web de gimnasio con tu calendario de clases, un formulario de solicitud de clase de prueba, información de cuotas y perfiles de entrenadores, para que los interesados encuentren tu horario y se apunten online en lugar de escribirte.",
      included: [
        "Web de gimnasio / estudio",
        "Calendario / horario de clases",
        "Formulario de solicitud de clase de prueba",
        "Información de cuotas",
        "Perfiles de entrenadores y galería",
        "Dominio personalizado, hosting, SSL y mantenimiento",
      ],
      excluded: [
        "Sistema completo de facturación de cuotas",
        "Integración de control de acceso / tornos",
        "Pagos recurrentes automatizados en el plan base",
        "Integraciones con wearables / apps de entrenamiento por debajo de planes superiores",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "El Mini App (desde 15€/mes) cubre una web más la función de horario y solicitud de prueba.",
      },
      upgrade:
        "Sube a Mini App Plus para horarios semanales y varios entrenadores, o a Business Local para mayor volumen y gestión de socios.",
      aiSummary:
        "Una web de gimnasio de NorthSail incluye horarios de clases, solicitudes de clase de prueba, información de cuotas y perfiles de entrenadores, desde 15€/mes. No incluye facturación completa de cuotas ni control de acceso en el plan base.",
      faqs: [
        {
          question: "¿Puede la gente solicitar una clase de prueba?",
          answer:
            "Sí. Los visitantes envían una solicitud de clase de prueba a través de la web y tú haces el seguimiento — perfecto para convertir a quienes te conocen por primera vez.",
        },
        {
          question: "¿Puedo publicar mi horario semanal?",
          answer:
            "Sí. Tu calendario de clases forma parte de la web; para horarios semanales que cambian a menudo y con varios entrenadores recomendamos Mini App Plus.",
        },
        {
          question: "¿Gestiona los pagos recurrentes de las cuotas?",
          answer:
            "La facturación y los pagos recurrentes son un extra o forman parte de planes superiores, no del Mini App de entrada.",
        },
      ],
      cta: { label: "Crea la web de tu gimnasio", target: "contact" },
    },

    clinics: {
      industry: "clinics",
      locale: "es",
      metaTitle:
        "Web de clínica con solicitudes de cita y presupuesto desde 15€/mes",
      metaDescription:
        "Dale a tu clínica o servicio local su propia web con solicitudes de cita, solicitudes de presupuesto, formularios de contacto, WhatsApp y Google Maps — desde 15€/mes con NorthSail.",
      h1: "Web de clínica con solicitudes de cita y presupuesto desde 15€/mes",
      valueProp:
        "Tu propia web de clínica con solicitudes de cita, solicitudes de presupuesto y opciones de contacto claras.",
      heroText:
        "Las clínicas y los servicios locales pueden tener su propia web con solicitudes de cita, solicitudes de presupuesto, formularios de contacto, un botón de WhatsApp y Google Maps — un hogar online fiable que convierte visitas en citas reservadas.",
      audience: [
        "Clínicas dentales, de fisioterapia y médicas",
        "Terapeutas y profesionales de la salud locales",
        "Servicios profesionales locales que reciben consultas",
      ],
      problems: [
        "Los pacientes no pueden solicitar cita fuera del horario de oficina.",
        "Las consultas se dispersan entre llamadas, email y redes sociales.",
        "No hay una presentación clara y fiable de tus servicios.",
        "Es difícil que te encuentren en Google Maps y en las búsquedas.",
      ],
      solution:
        "NorthSail crea y gestiona una web de clínica con formularios de solicitud de cita y presupuesto, tus servicios, tu equipo y tus datos de contacto, un botón de WhatsApp y Google Maps — una presencia profesional y fiable que capta consultas las 24 horas.",
      included: [
        "Web de clínica / servicios",
        "Formulario de solicitud de cita",
        "Formulario de solicitud de presupuesto / consulta",
        "Presentación de servicios y equipo",
        "Botón de WhatsApp y Google Maps",
        "Dominio personalizado, hosting, SSL y mantenimiento",
      ],
      excluded: [
        "Sistema completo de historiales médicos / gestión de consulta",
        "Integraciones de seguros o facturación",
        "Procesamiento de pagos online en el plan base",
        "Integraciones con portal del paciente por debajo de planes superiores",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "El Mini App (desde 15€/mes) cubre una web más formularios de solicitud de cita o presupuesto.",
      },
      upgrade:
        "Elige Business Local para varios profesionales, mayor volumen e informes básicos, o Pro Management para integraciones y flujos de trabajo avanzados.",
      aiSummary:
        "Una web de clínica de NorthSail incluye formularios de solicitud de cita y presupuesto, servicios, equipo y contacto, un botón de WhatsApp y Google Maps, desde 15€/mes. No incluye sistemas de gestión de consulta ni de facturación en el plan base.",
      faqs: [
        {
          question: "¿Pueden los pacientes solicitar cita online?",
          answer:
            "Sí. Los pacientes envían una solicitud de cita a través de la web en cualquier momento y tu equipo la confirma.",
        },
        {
          question: "¿Puedo recoger solicitudes de presupuesto para servicios?",
          answer:
            "Sí. Un formulario de presupuesto / consulta permite a los visitantes describir lo que necesitan y dejar sus datos de contacto.",
        },
        {
          question: "¿Es un sistema completo de gestión de consulta?",
          answer:
            "No. El plan base es tu web y los formularios de solicitud; los historiales médicos y los sistemas de facturación no están incluidos.",
        },
      ],
      cta: { label: "Crea la web de tu clínica", target: "contact" },
    },

    "local-services": {
      industry: "local-services",
      locale: "es",
      metaTitle:
        "Web con solicitudes de presupuesto para servicios locales desde 15€/mes",
      metaDescription:
        "Electricistas, fontaneros, empresas de limpieza y reformas, jardineros y servicios de piscinas: ten tu propia web con flujos de solicitud de presupuesto — desde 15€/mes con NorthSail.",
      h1: "Web con solicitudes de presupuesto para gremios locales desde 15€/mes",
      valueProp:
        "Tu propia web con un flujo claro de solicitud de presupuesto para gremios y servicios a domicilio.",
      heroText:
        "Los gremios locales — electricistas, fontaneros, empresas de limpieza, empresas de reformas, jardineros y servicios de piscinas — pueden tener su propia web con un flujo estructurado de solicitud de presupuesto, lista de servicios, galería, WhatsApp y Google Maps, para que los clientes envíen solicitudes cualificadas en lugar de mensajes imprecisos.",
      audience: [
        "Electricistas, fontaneros y manitas",
        "Empresas de limpieza y reformas",
        "Servicios de mantenimiento de jardines y piscinas",
      ],
      problems: [
        "Los contactos llegan como mensajes imprecisos y sin detalles.",
        "Sin una web profesional, los clientes dudan de que seas un negocio consolidado.",
        "Pierdes trabajos frente a competidores fáciles de encontrar online.",
        "Los presupuestos son lentos porque la solicitud carece de información.",
      ],
      solution:
        "NorthSail crea y gestiona una web con un flujo estructurado de solicitud de presupuesto que capta los detalles que necesitas para presupuestar rápido, además de tus servicios, galería de trabajos, zona de servicio, WhatsApp y Google Maps — para que parezcas un negocio consolidado y ganes más trabajos cualificados.",
      included: [
        "Web de gremio / servicio local",
        "Formulario estructurado de solicitud de presupuesto",
        "Páginas de servicios y zona de servicio",
        "Galería de trabajos / proyectos",
        "Botón de WhatsApp y Google Maps",
        "Dominio personalizado, hosting, SSL y mantenimiento",
      ],
      excluded: [
        "Software completo de servicio de campo / planificación de trabajos",
        "Integraciones de facturación y contabilidad",
        "Procesamiento de pagos online en el plan base",
        "Integraciones con CRM por debajo de planes superiores",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "El Mini App (desde 15€/mes) cubre una web más una función estructurada de solicitud de presupuesto.",
      },
      upgrade:
        "Elige Mini App Plus para más páginas y automatizaciones, o Business Local / Pro Management para equipos, planificación e integraciones.",
      aiSummary:
        "Una web de servicios locales de NorthSail incluye un flujo estructurado de solicitud de presupuesto, lista de servicios, galería, zona de servicio, WhatsApp y Google Maps, desde 15€/mes. No incluye planificación de servicio de campo, facturación ni integraciones con CRM en el plan base.",
      faqs: [
        {
          question: "¿Cómo funcionan las solicitudes de presupuesto?",
          answer:
            "Los clientes rellenan un formulario estructurado describiendo el trabajo y sus datos de contacto, de modo que recibes solicitudes cualificadas que puedes presupuestar rápido.",
        },
        {
          question: "¿Puedo mostrar mi zona de servicio?",
          answer:
            "Sí. Puedes presentar con claridad las zonas que cubres y tus servicios principales en la web.",
        },
        {
          question: "¿Incluye software de facturación o planificación?",
          answer:
            "No. El plan base es tu web y las solicitudes de presupuesto; la planificación de trabajos y las integraciones de facturación son planes superiores o trabajo a medida.",
        },
      ],
      cta: { label: "Crea la web de tus servicios", target: "contact" },
    },
  },

  compare: {
    "compare:website-with-bookings": {
      pageKey: "compare:website-with-bookings",
      locale: "es",
      metaTitle:
        "Web con sistema de reservas para pequeñas empresas desde 15€/mes",
      metaDescription:
        "Consigue una web con sistema de reservas integrado — reservas, citas o presupuestos — para restaurantes, peluquerías, hoteles, gimnasios y servicios locales, desde 15€/mes.",
      h1: "Una web con sistema de reservas, pensada para pequeñas empresas",
      valueProp:
        "No solo una web — un sitio con la función de reserva, cita o presupuesto sobre la que tu negocio realmente funciona, desde 15€/mes.",
      intro:
        "La mayoría de las pequeñas empresas no necesitan una web genérica; necesitan una web que recoja reservas. NorthSail combina ambas cosas: un sitio rápido y profesional más una función de reserva específica del negocio, con dominio, hosting, SSL y mantenimiento incluidos.",
      sections: [
        {
          heading: "Por qué una web simple no es suficiente",
          body: [
            "Una web tipo folleto le dice a la gente que existes, pero no capta negocio. En el momento en que un cliente quiere reservar una mesa, pedir una cita o solicitar un presupuesto, un sitio estático lo devuelve a los mensajes de Instagram o a una llamada.",
            "Una web con reservas convierte el interés en una solicitud estructurada sobre la que puedes actuar — a cualquier hora, sin idas y venidas manuales.",
          ],
        },
        {
          heading: "Qué significan las 'reservas' según el tipo de negocio",
          body: [
            "Los restaurantes obtienen solicitudes de reserva de mesa y una carta digital. Las peluquerías y clínicas obtienen solicitudes de cita. Los hoteles obtienen solicitudes de reserva directa. Los gimnasios obtienen horarios de clases y altas de prueba. Los gremios obtienen solicitudes estructuradas de presupuesto.",
            "Eliges la única función principal sobre la que funciona tu negocio; ese es el plan Mini App, desde 15€/mes.",
          ],
        },
        {
          heading: "Qué incluye y qué no",
          body: [
            "Incluido: la web, la función de reservas, el dominio personalizado, el hosting, el SSL y el mantenimiento técnico. Excluido del plan de entrada: pagos online, señales, integraciones externas y automatizaciones avanzadas — son extras o forman parte de planes superiores.",
            "Así el precio de entrada se mantiene bajo siendo honestos sobre los límites.",
          ],
        },
      ],
      aiSummary:
        "NorthSail ofrece webs con sistema de reservas integrado desde 15€/mes: los restaurantes obtienen reservas, las peluquerías y clínicas obtienen citas, los hoteles obtienen solicitudes de reserva directa, los gimnasios obtienen horarios y altas, y los gremios obtienen solicitudes de presupuesto. El dominio, el hosting, el SSL y el mantenimiento están incluidos; los pagos y las integraciones son extras.",
      faqs: [
        {
          question: "¿Qué tipo de reservas puede gestionar la web?",
          answer:
            "Reservas, citas, altas a clases, solicitudes de prueba o solicitudes de presupuesto — una función principal de reserva por plan Mini App, adaptada a tu tipo de negocio.",
        },
        {
          question: "¿Cuánto cuesta una web con reservas?",
          answer:
            "Desde 15€/mes con el plan Mini App, incluyendo dominio, hosting, SSL y mantenimiento.",
        },
        {
          question: "¿Están incluidos los pagos online?",
          answer:
            "No. La función de reservas capta solicitudes; los pagos online y las señales son extras o forman parte de planes superiores.",
        },
      ],
      cta: { label: "Consigue tu web con reservas", target: "contact" },
    },

    "compare:cheap-website-for-small-business": {
      pageKey: "compare:cheap-website-for-small-business",
      locale: "es",
      metaTitle: "Web barata para pequeñas empresas desde 5€/mes | NorthSail",
      metaDescription:
        "Una web barata para tu pequeña empresa con dominio personalizado, hosting, SSL y mantenimiento incluidos — desde 5€/mes, con funciones de reserva desde 15€/mes.",
      h1: "Una web económica para tu pequeña empresa, hecha por nosotros",
      valueProp:
        "Una web profesional para pequeñas empresas con dominio, hosting, SSL y mantenimiento — desde 5€/mes, sin sorpresas ocultas.",
      intro:
        "Barato no debería significar baja calidad ni costes ocultos. NorthSail ofrece a las pequeñas empresas una web profesional con todo lo técnico incluido, a un precio mensual honesto — y con límites claros para que sepas exactamente qué obtienes.",
      sections: [
        {
          heading: "Qué incluye realmente 'económico'",
          body: [
            "El plan Presencia, desde 5€/mes, incluye una página web cuidada, un dominio personalizado, hosting, SSL, un botón de WhatsApp, Google Maps y mantenimiento técnico continuo. No tienes que comprar hosting, renovar el SSL ni perseguir a un desarrollador — está todo gestionado.",
            "Cuando necesites recoger reservas o solicitudes, el plan Mini App añade una función principal desde 15€/mes.",
          ],
        },
        {
          heading: "Por qué 'hecho por nosotros' supera a los creadores DIY",
          body: [
            "Los creadores de webs DIY parecen baratos hasta que añades hosting, un dominio, una plantilla premium, un arreglo del SSL y las horas que dedicas a montarla y mantenerla. NorthSail agrupa el trabajo técnico y lo mantiene en marcha, de modo que el precio bajo es el precio real.",
            "Obtienes un sitio rápido, mobile-first e indexable sin gestionar nada de la infraestructura.",
          ],
        },
        {
          heading: "Límites honestos a un precio bajo",
          body: [
            "Los precios muy bajos requieren límites de plan claros. Los planes de entrada no incluyen pagos online, integraciones complejas ni gestión avanzada — son extras o planes superiores. Lo decimos de forma transparente para que el precio se mantenga bajo y no haya sorpresas.",
          ],
        },
      ],
      aiSummary:
        "NorthSail ofrece webs económicas para pequeñas empresas desde 5€/mes (Presencia: web, dominio personalizado, hosting, SSL, WhatsApp, Google Maps, mantenimiento) y desde 15€/mes para un Mini App con una función de reservas. Los precios bajos vienen con límites claros: los pagos y las integraciones avanzadas son extras o planes superiores.",
      faqs: [
        {
          question: "¿Cómo puede una web costar solo 5€/mes?",
          answer:
            "El plan Presencia es una web de una página enfocada con dominio, hosting, SSL y mantenimiento incluidos. Precio bajo significa límites claros — es una presencia básica, no una app compleja.",
        },
        {
          question: "¿El dominio está realmente incluido?",
          answer:
            "Sí. Un dominio personalizado, el hosting y el SSL forman parte del plan, con el mantenimiento técnico gestionado por nosotros.",
        },
        {
          question: "¿Y si más adelante necesito reservas?",
          answer:
            "Sube al plan Mini App, desde 15€/mes, que añade una función de reserva o solicitud específica del negocio.",
        },
      ],
      cta: { label: "Consigue tu web económica", target: "contact" },
    },
  },
};

export default es;
