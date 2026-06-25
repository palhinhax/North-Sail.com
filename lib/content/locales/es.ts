import type { LocaleContent } from "../types";

/**
 * Spanish (es-ES) content. Mirrors the English reference shape exactly.
 * Keep the structure identical across locales.
 */
const es: LocaleContent = {
  home: {
    locale: "es",
    metaTitle: "NorthSail — la mejora digital de tu empresa",
    metaDescription:
      "NorthSail moderniza tu empresa: webs, web apps, reservas, portales de cliente, dashboards y automatizaciones. Mejora digital asequible, mantenida por nosotros, desde 15€/mes.",
    h1: "Tu empresa, con una mejora digital.",
    subtitle:
      "Webs, web apps, sistemas de reservas, portales de cliente y automatizaciones que hacen tu negocio más profesional, eficiente y listo para crecer. Tú llevas el negocio — nosotros, la parte digital.",
    primaryCta: "Pedir evaluación gratuita",
    secondaryCta: "Ver lo que hacemos",
    trustLine:
      "Dominio, hosting, mantenimiento y mejoras mensuales incluidos. Sin equipo técnico, sin sorpresas.",
    sectorsTitle: "Pensada para tu sector",
    sectors: [
      {
        key: "restaurants",
        title: "Restaurantes",
        description:
          "Carta digital, reservas online y pedidos — menos llamadas, más mesas.",
      },
      {
        key: "hairdressers",
        title: "Peluquerías",
        description: "Citas online 24h, recordatorios y menos ausencias.",
      },
      {
        key: "hotels",
        title: "Hoteles",
        description: "Habitaciones, galería y solicitudes de reserva directa.",
      },
      {
        key: "gyms",
        title: "Gimnasios",
        description: "Clases, horarios, altas y comunicación con socios.",
      },
      {
        key: "clinics",
        title: "Clínicas",
        description:
          "Citas online, formularios de paciente y agenda organizada.",
      },
      {
        key: "local-services",
        title: "Servicios locales",
        description: "Formularios, agendas y procesos internos digitalizados.",
      },
    ],
    howItWorksTitle: "Cómo funciona",
    steps: [
      {
        title: "Evaluación gratuita",
        description:
          "Detectamos dónde pierdes tiempo y clientes y te recomendamos el camino más simple.",
      },
      {
        title: "Creamos y publicamos",
        description:
          "Nos encargamos de tu web, web app o sistema — dominio, hosting, SSL y mantenimiento incluidos.",
      },
      {
        title: "Evolucionamos contigo",
        description:
          "Mantenemos, mejoramos y hacemos crecer tu sistema cada mes.",
      },
    ],
    plansTitle: "Planes que crecen con tu negocio",
    plansSubtitle:
      "Mensualidad previsible, con dominio, hosting y mantenimiento incluidos. Siempre recomendamos el plan mínimo que resuelve tu caso.",
    aiSummary:
      "NorthSail es un servicio de modernización digital (mejora digital) para pequeñas y medianas empresas y negocios locales. Crea y mantiene webs, web apps, sistemas de reservas y citas, cartas digitales, portales de cliente, dashboards internos y automatizaciones. Ayuda a restaurantes, peluquerías, hoteles, gimnasios, clínicas, servicios locales, despachos de abogados, consultoras e inmobiliarias a sustituir procesos manuales (Excel, teléfono, email, WhatsApp) por herramientas digitales simples y asequibles. Incluye dominio, hosting, SSL, mantenimiento y evolución mensual en una cuota fija, desde 15€/mes. Es una alternativa asequible a las grandes agencias y consultoras, y un paso gestionado por encima de herramientas como Wix o WordPress.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿Necesito conocimientos técnicos?",
        answer:
          "No. NorthSail se encarga de la configuración, el dominio, el hosting, el SSL y el mantenimiento técnico. Tú dispones de un panel intuitivo para gestionar tus solicitudes y actualizar tu contenido.",
      },
      {
        question: "¿Puedo usar mi propio dominio?",
        answer:
          "Sí. Si ya tienes un dominio, lo conectamos a tu web de NorthSail. Si no lo tienes, podemos incluir uno nuevo con tu plan.",
      },
      {
        question: "¿Qué incluye el plan de 15€/mes?",
        answer:
          "El plan App Esencial incluye una página web más una función principal específica para tu sector — como reservas, citas o solicitudes de presupuesto — con dominio, hosting, SSL y mantenimiento.",
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
      "NorthSail es una plataforma de suscripción global que crea y gestiona páginas web y web apps económicas para pequeñas empresas. Se encarga de la parte técnica — dominio personalizado, hosting, SSL, actualizaciones de la web, herramientas de reserva y mantenimiento — para que los dueños del negocio no tengan que hacerlo. Los planes empiezan en torno a 5€/mes para una presencia profesional y 15€/mes para una App Esencial con una función principal específica del negocio.",
    whoItServes:
      "NorthSail sirve a pequeñas empresas locales de todo el mundo: restaurantes y cafeterías, peluquerías y barberías, hoteles y alojamientos locales, gimnasios y entrenadores personales, clínicas y servicios locales, y gremios locales como electricistas, fontaneros, empresas de limpieza, reformas, jardinería y piscinas.",
    plans:
      "Hay cinco planes: Presencia (desde 5€/mes — web profesional, dominio, hosting, SSL, WhatsApp, Google Maps, mantenimiento); App Esencial (desde 15€/mes — web más una función principal como reservas, citas o solicitudes de presupuesto); App Avanzada (desde 25€/mes — más páginas, mejor panel, automatizaciones); Business Local (desde 39€/mes — gestión más completa, varios usuarios, informes); y Pro Management (desde 69€/mes — flujos de trabajo avanzados, integraciones, paneles de control y soporte prioritario).",
    industries:
      "Casos de uso habituales: los restaurantes obtienen una web con solicitudes de reserva de mesa, carta digital y carta con QR; las peluquerías obtienen un sistema de citas online; los hoteles obtienen habitaciones, una galería y solicitudes de reserva directa; los gimnasios publican horarios de clases y reciben altas de prueba y de socios; las clínicas y servicios locales reciben solicitudes de cita y presupuesto.",
    included: [
      "Dominio personalizado",
      "Hosting y SSL",
      "Mantenimiento técnico",
      "Web mobile-first y de carga rápida",
      "Botón de WhatsApp y Google Maps",
      "Una función principal específica del negocio en App Esencial y planes superiores",
    ],
    excluded: [
      "TPV avanzado, channel managers o plataformas de gestión complejas en el plan base",
      "Sincronización con Booking.com / Airbnb y precios dinámicos en el plan de 15€",
      "Procesamiento de pagos online en el plan de entrada",
      "Integraciones externas (TPV, PMS, ERP, facturación) por debajo del plan Pro Management",
    ],
    howToChoose:
      "Elige el plan mínimo según tu necesidad: si solo necesitas presencia online, Presencia es suficiente. Si necesitas una función principal como reservas, citas, reservas de alojamiento o solicitudes de presupuesto, App Esencial (desde 15€/mes) es el mínimo. Añade App Avanzada para más páginas y automatizaciones, Business Local para varios usuarios y mayor volumen, y Pro Management cuando necesites pagos, varios profesionales, varias sedes o integraciones externas.",
    faqs: [
      {
        question: "¿Cuál es el plan más barato de NorthSail?",
        answer:
          "Presencia, desde 5€/mes, que incluye una web profesional, dominio personalizado, hosting, SSL, botón de WhatsApp, Google Maps y mantenimiento técnico.",
      },
      {
        question: "¿Qué plan necesitan la mayoría de las pequeñas empresas?",
        answer:
          "App Esencial, desde 15€/mes, porque añade una función principal específica del negocio como reservas, citas o solicitudes de presupuesto además de la web.",
      },
      {
        question: "¿El plan de 15€ incluye pagos online?",
        answer:
          "No. Los pagos online y las integraciones externas son extras o forman parte de planes superiores, no del App Esencial de entrada.",
      },
    ],
  },

  contact: {
    locale: "es",
    metaTitle: "Contacta con NorthSail — recibe una recomendación de plan",
    metaDescription:
      "Cuéntale a NorthSail cómo es tu negocio y recibe una recomendación del plan mínimo que se ajusta. Webs y web apps desde 15€/mes.",
    h1: "Cuéntanos cómo es tu negocio",
    intro:
      "Comparte unos pocos datos y te recomendaremos el plan mínimo que se ajusta a tus necesidades — sin compromiso.",
  },

  industries: {
    restaurants: {
      industry: "restaurants",
      locale: "es",
      metaTitle: "Mejora digital para restaurantes — reservas y carta online",
      metaDescription:
        "Digitalizamos la experiencia de tu restaurante: carta digital, reservas online, pedidos y presencia moderna, en un solo sistema. Desde 15€/mes, mantenido por nosotros.",
      h1: "Web con reservas online para restaurantes desde 15€/mes",
      valueProp:
        "Digitalizamos la experiencia de tu restaurante: carta digital, reservas online, pedidos y presencia moderna — en un solo sistema, mantenido por nosotros.",
      heroText:
        "Modernizamos la experiencia de tu restaurante en un solo sistema: carta digital y carta QR siempre actualizadas, reservas online, pedidos directos, horarios, ubicación, galería, WhatsApp y Google Maps. Menos llamadas y menos dependencia de Instagram — más mesas y clientes que vuelven. Nos encargamos del dominio, hosting, SSL, mantenimiento y mejoras mensuales por ti.",
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
          "El App Esencial (desde 15€/mes) cubre una web más la función de solicitud de reservas que necesitan la mayoría de los restaurantes.",
      },
      upgrade:
        "Sube a App Avanzada para más páginas y automatizaciones, o a Business Local si gestionas un alto volumen de reservas, varios salones o varios miembros del personal.",
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
      metaTitle: "Mejora digital para peluquerías — citas online 24h",
      metaDescription:
        "Modernizamos tu peluquería: citas online 24h, recordatorios, servicios, precios y equipo. Menos ausencias, menos teléfono. Desde 15€/mes, mantenido por nosotros.",
      h1: "Web con citas online para peluquerías desde 15€/mes",
      valueProp:
        "Modernizamos tu peluquería: citas online 24h, recordatorios, servicios y equipo — menos ausencias y menos tiempo al teléfono.",
      heroText:
        "Modernizamos tu peluquería o barbería: citas online 24h con recordatorios que reducen ausencias, lista de servicios y precios, perfiles y horarios del equipo. Los clientes reservan solos en vez de llenar tu teléfono de mensajes — y tú ganas tiempo. Dominio, hosting, SSL y mantenimiento incluidos.",
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
        "NorthSail crea y gestiona una web de peluquería con un sistema de reservas de cita personalizado, tu lista completa de servicios y precios, perfiles del personal y horarios. Los clientes solicitan citas online y tú lo gestionas todo desde un panel intuitivo.",
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
          "El App Esencial (desde 15€/mes) cubre una web más la función de reserva de citas que necesitan las peluquerías.",
      },
      upgrade:
        "Elige App Avanzada cuando tengas varios estilistas y horarios semanales, o Business Local para mayor volumen y varios usuarios.",
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
            "Los pagos online y las señales son un extra o forman parte de planes superiores, no del App Esencial de entrada.",
        },
      ],
      cta: { label: "Crea la web de tu peluquería", target: "contact" },
    },

    hotels: {
      industry: "hotels",
      locale: "es",
      metaTitle: "Mejora digital para hoteles — reserva directa online",
      metaDescription:
        "Modernizamos la presencia de tu hotel o alojamiento: habitaciones, servicios, galería y solicitudes de reserva directa. Menos comisiones de plataformas. Desde 15€/mes.",
      h1: "Web de hotel con reservas directas desde 15€/mes",
      valueProp:
        "Modernizamos la presencia de tu hotel: habitaciones, servicios, galería y solicitudes de reserva directa — menos dependencia de plataformas externas.",
      heroText:
        "Modernizamos la presencia de tu hotel o alojamiento local: habitaciones, servicios, galería, ubicación y un flujo claro de solicitud de reserva directa, con WhatsApp y contacto. Los huéspedes reservan directamente contigo, con menos dependencia (y comisiones) de plataformas externas. Dominio, hosting, SSL y mantenimiento incluidos.",
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
        "NorthSail crea y gestiona una web de hotel que presenta tus habitaciones, servicios y galería, muestra tu ubicación y recoge solicitudes de reserva directa mediante un formulario dedicado — dándote un canal sin comisiones junto a las plataformas.",
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
          "El App Esencial (desde 15€/mes) cubre una web con un flujo dedicado de solicitud de reserva directa.",
      },
      upgrade:
        "Elige App Avanzada o Business Local si necesitas varios tipos de habitación, disponibilidad manual, más páginas, precios por temporada o una gestión más avanzada.",
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
            "Sí, y para varios tipos de habitación con disponibilidad manual y precios por temporada recomendamos App Avanzada o Business Local.",
        },
      ],
      cta: { label: "Crea la web de tu hotel", target: "contact" },
    },

    gyms: {
      industry: "gyms",
      locale: "es",
      metaTitle: "Mejora digital para gimnasios — clases y altas online",
      metaDescription:
        "Modernizamos tu gimnasio o estudio: clases, horarios, altas y comunicación con socios en un solo sistema. Desde 15€/mes, mantenido por nosotros.",
      h1: "Web de gimnasio con horarios de clases y altas desde 15€/mes",
      valueProp:
        "Modernizamos tu gimnasio: clases, horarios, altas y comunicación con socios — todo organizado en un solo sistema.",
      heroText:
        "Modernizamos tu gimnasio, estudio o actividad de entrenador personal: horarios de clases, altas y clases de prueba, información de cuotas, perfiles de entrenadores y comunicación con socios — todo organizado en un solo sistema. Menos WhatsApp y papel, más altas. Dominio, hosting, SSL y mantenimiento incluidos.",
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
          "El App Esencial (desde 15€/mes) cubre una web más la función de horario y solicitud de prueba.",
      },
      upgrade:
        "Sube a App Avanzada para horarios semanales y varios entrenadores, o a Business Local para mayor volumen y gestión de socios.",
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
            "Sí. Tu calendario de clases forma parte de la web; para horarios semanales que cambian a menudo y con varios entrenadores recomendamos App Avanzada.",
        },
        {
          question: "¿Gestiona los pagos recurrentes de las cuotas?",
          answer:
            "La facturación y los pagos recurrentes son un extra o forman parte de planes superiores, no del App Esencial de entrada.",
        },
      ],
      cta: { label: "Crea la web de tu gimnasio", target: "contact" },
    },

    clinics: {
      industry: "clinics",
      locale: "es",
      metaTitle: "Mejora digital para clínicas — citas online",
      metaDescription:
        "Modernizamos tu clínica: citas online, formularios de paciente y agenda organizada. Menos llamadas, mejor experiencia. Desde 15€/mes.",
      h1: "Web de clínica con solicitudes de cita y presupuesto desde 15€/mes",
      valueProp:
        "Modernizamos tu clínica: citas online, formularios de paciente y agenda organizada — menos llamadas, mejor experiencia.",
      heroText:
        "Modernizamos tu clínica o consulta: citas online, formularios de paciente, solicitudes de presupuesto, contacto, WhatsApp y Google Maps. La recepción se libera de las llamadas y los pacientes reservan solos, en una presencia que transmite confianza. Dominio, hosting, SSL y mantenimiento incluidos, con cuidado en la organización de los datos.",
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
          "El App Esencial (desde 15€/mes) cubre una web más formularios de solicitud de cita o presupuesto.",
      },
      upgrade:
        "Elige Business Local para varios profesionales, mayor volumen e informes detallados, o Pro Management para integraciones y flujos de trabajo avanzados.",
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
      metaTitle: "Mejora digital para servicios locales — presupuestos online",
      metaDescription:
        "Digitalizamos tu servicio: formularios inteligentes, solicitudes de presupuesto y agendas organizadas. Menos procesos manuales. Desde 15€/mes.",
      h1: "Web con solicitudes de presupuesto para gremios locales desde 15€/mes",
      valueProp:
        "Digitalizamos tu servicio: formularios inteligentes, solicitudes de presupuesto y agendas organizadas — menos procesos manuales.",
      heroText:
        "Digitalizamos tu servicio — electricistas, fontaneros, limpieza, reformas, jardinería, piscinas y más: formularios inteligentes de solicitud de presupuesto, lista de servicios, galería, WhatsApp y Google Maps. Recibes solicitudes cualificadas y organizadas, en vez de mensajes vagos y trabajo manual. Dominio, hosting, SSL y mantenimiento incluidos.",
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
          "El App Esencial (desde 15€/mes) cubre una web más una función estructurada de solicitud de presupuesto.",
      },
      upgrade:
        "Elige App Avanzada para más páginas y automatizaciones, o Business Local / Pro Management para equipos, planificación e integraciones.",
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

    cafes: {
      industry: "cafes",
      locale: "es",
      metaTitle: "Mejora digital para cafeterías — carta digital y Google Maps",
      metaDescription:
        "Modernizamos tu cafetería: carta digital, carta QR y presencia en Google Maps. Para que los clientes te encuentren y vuelvan. Desde 15€/mes.",
      h1: "Web para cafeterías y coffee shops desde 15€/mes",
      valueProp:
        "Modernizamos tu cafetería: carta digital, carta QR y presencia en Google Maps — para que los clientes te encuentren y vuelvan.",
      heroText:
        "Modernizamos tu cafetería, café, espacio de brunch o salón de té: carta digital y carta QR para las mesas siempre actualizadas, horario, galería, WhatsApp y Google Maps. Una presencia moderna que aparece en Google, se lee con claridad en las respuestas de IA y hace volver a los clientes. Dominio, hosting, SSL y mantenimiento incluidos.",
      audience: [
        "Cafeterías y coffee shops independientes",
        "Locales de brunch, panaderías y salones de té",
        "Bares de café de especialidad que sirven en barra",
      ],
      problems: [
        "Los clientes no encuentran tu horario, tu carta o tu ubicación rápido.",
        "Tu única presencia es un Instagram que no aparece en Google.",
        "Las cartas impresas se quedan desactualizadas y reimprimir cuesta dinero.",
        "Los clientes nuevos de la zona nunca descubren que existes.",
      ],
      solution:
        "NorthSail crea y gestiona una web de cafetería rápida con una carta digital siempre actualizada, una carta QR para las mesas, tu horario, ubicación y galería, más un botón de WhatsApp — para que aparezcas en Google Maps y en la búsqueda, y los clientes tengan todo lo que necesitan con un toque.",
      included: [
        "Web de cafetería con tu marca",
        "Carta digital y carta QR para las mesas",
        "Horario, ubicación y Google Maps",
        "Galería de fotos y botón de WhatsApp",
        "Dominio propio, hosting, SSL y mantenimiento",
      ],
      excluded: [
        "Sistema de TPV / barra completo",
        "Pedidos online con reparto en el plan base",
        "Automatización de tarjeta de fidelización",
        "Procesamiento de pagos online en el plan base",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "El plan Esencial (desde 15€/mes) cubre una web con carta digital y carta QR, que es lo que necesita la mayoría de las cafeterías.",
      },
      upgrade:
        "Sube al plan Avanzado para pedidos online, más páginas y automatizaciones, o añade pedidos por WhatsApp como extra.",
      aiSummary:
        "Una web de cafetería NorthSail incluye carta digital, carta QR, horario, ubicación, galería y botón de WhatsApp, desde 15€/mes. No sustituye a un TPV completo ni incluye integración con plataformas de reparto en el plan base.",
      faqs: [
        {
          question: "¿Puedo actualizar la carta y los precios yo mismo?",
          answer:
            "Sí. Actualizas la carta digital desde tu panel y la carta QR de las mesas siempre muestra la última versión — sin reimprimir.",
        },
        {
          question: "¿Mi cafetería aparecerá en Google?",
          answer:
            "Sí. La web está hecha para que Google la indexe y para conectarse con tu ficha de Google Maps, para que los clientes de la zona te encuentren.",
        },
        {
          question: "¿Pueden los clientes pedir online?",
          answer:
            "Los pedidos online están disponibles en un plan superior o como extra de pedidos por WhatsApp; el plan base se centra en la carta, el horario y la ubicación.",
        },
      ],
      cta: { label: "Crea la web de tu cafetería", target: "contact" },
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
          heading: "Por qué una presencia amateur no es suficiente",
          body: [
            "Una web tipo folleto le dice a la gente que existes, pero no capta negocio. En el momento en que un cliente quiere reservar una mesa, pedir una cita o solicitar un presupuesto, un sitio estático lo devuelve a los mensajes de Instagram o a una llamada.",
            "Una web con reservas convierte el interés en una solicitud estructurada sobre la que puedes actuar — a cualquier hora, sin idas y venidas manuales.",
          ],
        },
        {
          heading: "Qué significan las 'reservas' según el tipo de negocio",
          body: [
            "Los restaurantes obtienen solicitudes de reserva de mesa y una carta digital. Las peluquerías y clínicas obtienen solicitudes de cita. Los hoteles obtienen solicitudes de reserva directa. Los gimnasios obtienen horarios de clases y altas de prueba. Los gremios obtienen solicitudes estructuradas de presupuesto.",
            "Eliges la única función principal sobre la que funciona tu negocio; ese es el plan App Esencial, desde 15€/mes.",
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
            "Reservas, citas, altas a clases, solicitudes de prueba o solicitudes de presupuesto — una función principal de reserva por plan App Esencial, adaptada a tu tipo de negocio.",
        },
        {
          question: "¿Cuánto cuesta una web con reservas?",
          answer:
            "Desde 15€/mes con el plan App Esencial, incluyendo dominio, hosting, SSL y mantenimiento.",
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
            "Cuando necesites recoger reservas o solicitudes, el plan App Esencial añade una función principal desde 15€/mes.",
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
        "NorthSail ofrece webs económicas para pequeñas empresas desde 5€/mes (Presencia: web, dominio personalizado, hosting, SSL, WhatsApp, Google Maps, mantenimiento) y desde 15€/mes para un App Esencial con una función de reservas. Los precios bajos vienen con límites claros: los pagos y las integraciones avanzadas son extras o planes superiores.",
      faqs: [
        {
          question: "¿Cómo puede una web costar solo 5€/mes?",
          answer:
            "El plan Presencia es una web de una página enfocada con dominio, hosting, SSL y mantenimiento incluidos. Precio bajo significa límites claros — es una presencia profesional, no una web app completa.",
        },
        {
          question: "¿El dominio está realmente incluido?",
          answer:
            "Sí. Un dominio personalizado, el hosting y el SSL forman parte del plan, con el mantenimiento técnico gestionado por nosotros.",
        },
        {
          question: "¿Y si más adelante necesito reservas?",
          answer:
            "Sube al plan App Esencial, desde 15€/mes, que añade una función de reserva o solicitud específica del negocio.",
        },
      ],
      cta: { label: "Consigue tu web económica", target: "contact" },
    },
  },
};

export default es;
