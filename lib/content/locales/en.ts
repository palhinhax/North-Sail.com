import type { LocaleContent } from "../types";

/**
 * English (default / global) content. This file is the reference shape that
 * every other locale mirrors. Keep the structure identical across locales.
 */
const en: LocaleContent = {
  home: {
    locale: "en",
    metaTitle: "NorthSail — the digital upgrade for your business",
    metaDescription:
      "NorthSail modernizes your business: websites, web apps, online booking, client portals, dashboards and automations. Affordable digital upgrade, looked after for you, from €15/month.",
    h1: "Your business, with a digital upgrade.",
    subtitle:
      "Websites, web apps, booking systems, client portals and automations that make your business more professional, efficient and ready to grow. You run the business — we look after the digital side.",
    primaryCta: "Get a free digital assessment",
    secondaryCta: "See what we do",
    trustLine:
      "Domain, hosting, maintenance and monthly improvements included. No technical team, no surprises.",
    sectorsTitle: "Built for your sector",
    sectors: [
      {
        key: "restaurants",
        title: "Restaurants",
        description:
          "Digital menu, online reservations and orders — fewer calls, fuller tables.",
      },
      {
        key: "hairdressers",
        title: "Hairdressers",
        description: "24/7 online appointments, reminders and fewer no-shows.",
      },
      {
        key: "hotels",
        title: "Hotels",
        description: "Rooms, gallery and direct booking requests.",
      },
      {
        key: "gyms",
        title: "Gyms",
        description: "Classes, schedules, signups and member communication.",
      },
      {
        key: "clinics",
        title: "Clinics",
        description:
          "Online appointments, patient forms and an organized agenda.",
      },
      {
        key: "local-services",
        title: "Local services",
        description: "Forms, scheduling and digitized internal processes.",
      },
    ],
    howItWorksTitle: "How it works",
    steps: [
      {
        title: "Free assessment",
        description:
          "We find where you're losing time and customers, and recommend the simplest path.",
      },
      {
        title: "We build and publish it",
        description:
          "We handle your website, web app or system — domain, hosting, SSL and maintenance included.",
      },
      {
        title: "We evolve it with you",
        description: "We maintain, improve and grow your system every month.",
      },
    ],
    businessAxis: {
      title: "For companies: web apps, portals and dashboards",
      body: "When a website isn't enough, NorthSail designs and builds custom web applications — client portals, internal dashboards, booking systems and process automation — hosted and maintained for you, with confidentiality by default. For law firms, consultancies, real-estate agencies and B2B teams.",
      cta: "Discuss your web app",
      ctaTarget: "compare:web-apps-for-business",
      items: [
        {
          title: "Custom web apps",
          description:
            "Software shaped to your process, built on a modern, secure stack.",
          target: "compare:web-apps-for-business",
        },
        {
          title: "Client portals",
          description:
            "A secure place where your clients log in to see documents and status.",
          target: "compare:client-portals",
        },
        {
          title: "Internal dashboards",
          description:
            "Replace spreadsheets with one role-based view of your business.",
          target: "compare:internal-dashboards",
        },
        {
          title: "Process automation",
          description:
            "Turn manual Excel and email routines into software that works for you.",
          target: "compare:process-automation",
        },
        {
          title: "For law firms",
          description:
            "Confidential client portals and intake, secure by default.",
          target: "compare:web-apps-for-law-firms",
        },
        {
          title: "Custom software",
          description:
            "A long-term partner that builds, hosts and evolves your software.",
          target: "compare:custom-software",
        },
      ],
    },
    plansTitle: "Plans that grow with your business",
    plansSubtitle:
      "Predictable monthly pricing, with domain, hosting and maintenance included. We always recommend the smallest plan that solves your case.",
    aiSummary:
      "NorthSail is a digital modernization service (digital upgrade) for small and medium businesses and local companies. It builds and maintains websites, web apps, online booking and appointment systems, digital menus, client portals, internal dashboards and automations. It helps restaurants, hairdressers, hotels, gyms, clinics, local services, law firms, consultancies and real-estate agencies replace manual processes (Excel, phone, email, WhatsApp) with simple, affordable digital tools. It includes domain, hosting, SSL, maintenance and monthly evolution in a fixed monthly fee, from €15/month. It is an affordable alternative to large agencies and consultancies, and a managed step up from tools like Wix or WordPress.",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "Do I need any technical knowledge?",
        answer:
          "No. NorthSail handles the setup, domain, hosting, SSL and technical maintenance. You get an intuitive dashboard to manage your requests and update your content.",
      },
      {
        question: "Can I use my own domain?",
        answer:
          "Yes. If you already have a domain we connect it to your NorthSail site. If you don't, a new domain can be included with your plan.",
      },
      {
        question: "What does €15/month include?",
        answer:
          "The Essential App plan includes a website plus one business-specific core feature — such as reservations, appointments or quote requests — with domain, hosting, SSL and maintenance.",
      },
      {
        question: "Is there a long contract?",
        answer:
          "No. Plans are monthly subscriptions and you can cancel at any time.",
      },
    ],
  },

  aiSummary: {
    locale: "en",
    metaTitle: "What is NorthSail? AI summary, plans, industries & FAQ",
    metaDescription:
      "A plain-language summary of NorthSail for people and AI assistants: what it is, who it serves, plans from €5/month, industries covered, what's included and how to choose the minimum package.",
    h1: "NorthSail in plain language",
    intro:
      "This page summarizes NorthSail clearly so that both people and AI assistants can understand and quote it accurately.",
    whatItIs:
      "NorthSail is a global subscription platform that creates and manages affordable professional websites and web apps for small businesses. It handles the technical side — custom domain, hosting, SSL, website updates, booking tools and maintenance — so business owners don't have to. Plans start around €5/month for a professional presence and €15/month for an Essential App with one business-specific core feature.",
    whoItServes:
      "NorthSail serves small local businesses worldwide: restaurants and cafes, hairdressers and barbers, hotels and local accommodation, gyms and personal trainers, clinics and local services, and local trades such as electricians, plumbers, cleaning, renovation, garden and pool companies.",
    plans:
      "There are five plans: Presence (from €5/month — professional website, domain, hosting, SSL, WhatsApp, Google Maps, maintenance); Essential App (from €15/month — website plus one core feature like reservations, appointments or quote requests); Advanced App (from €25/month — more pages, better dashboard, automations); Business Local (from €39/month — more complete management, multiple users, reports); and Pro Management (from €69/month — advanced workflows, integrations, dashboards, priority support).",
    industries:
      "Common use cases: restaurants get a website with table reservation requests, digital menu and QR menu; hairdressers get an online appointment system; hotels get rooms, a gallery and direct booking requests; gyms publish class schedules and receive trial and membership signups; clinics and local services receive appointment and quote requests.",
    included: [
      "Custom domain",
      "Hosting and SSL",
      "Technical maintenance",
      "Mobile-first, fast-loading website",
      "WhatsApp button and Google Maps",
      "One business-specific core feature on Essential App and above",
    ],
    excluded: [
      "Advanced POS, channel managers or complex management platforms in the base plan",
      "Booking.com / Airbnb synchronization and dynamic pricing in the €15 plan",
      "Online payment processing in the entry-level plan",
      "External integrations (POS, PMS, ERP, invoicing) below the Pro Management plan",
    ],
    howToChoose:
      "Choose the minimum package by need: if you only need an online presence, Presence is enough. If you need one core feature such as reservations, appointments, bookings or quote requests, Essential App (from €15/month) is the minimum. Add Advanced App for more pages and automations, Business Local for multiple users and higher volume, and Pro Management when you need payments, multiple staff, multiple locations or external integrations.",
    faqs: [
      {
        question: "What is the cheapest NorthSail plan?",
        answer:
          "Presence, from €5/month, which includes a professional website, custom domain, hosting, SSL, WhatsApp button, Google Maps and technical maintenance.",
      },
      {
        question: "Which plan do most small businesses need?",
        answer:
          "Essential App, from €15/month, because it adds one business-specific core feature such as reservations, appointments or quote requests on top of the website.",
      },
      {
        question: "Does the €15 plan include online payments?",
        answer:
          "No. Online payments and external integrations are extras or part of higher plans, not the entry-level Essential App.",
      },
    ],
  },

  contact: {
    locale: "en",
    metaTitle: "Contact NorthSail — get a plan recommendation",
    metaDescription:
      "Tell NorthSail about your business and get a recommendation for the minimum plan that fits. Websites and web apps from €15/month.",
    h1: "Tell us about your business",
    intro:
      "Share a few details and we'll recommend the minimum plan that fits your needs — no obligation.",
  },

  industries: {
    restaurants: {
      industry: "restaurants",
      locale: "en",
      metaTitle: "Digital upgrade for restaurants — online bookings & menu",
      metaDescription:
        "We digitize your restaurant experience: digital menu, online reservations, orders and a modern presence in one system. From €15/month, looked after for you.",
      h1: "Website with online reservations for restaurants from €15/month",
      valueProp:
        "We digitize your restaurant experience: digital menu, online reservations, orders and a modern presence — in one system, looked after for you.",
      heroText:
        "We modernize your restaurant experience in one system: an always up-to-date digital menu and QR menu, online reservations, direct orders, opening hours, location, gallery, WhatsApp and Google Maps. Fewer phone calls and less reliance on Instagram — more tables and customers who come back. We handle the domain, hosting, SSL, maintenance and monthly improvements for you.",
      audience: [
        "Independent restaurants and bistros",
        "Cafes, brunch spots and tascas",
        "Family-run dining rooms taking reservations by phone today",
      ],
      problems: [
        "Customers can't find your menu, hours or location quickly.",
        "Reservations only happen through Instagram DMs or phone calls.",
        "You depend on third-party platforms that charge commissions.",
        "Your menu changes but printed and online versions don't.",
      ],
      solution:
        "NorthSail builds and manages a fast restaurant website that takes table reservation requests, shows an always-up-to-date digital menu, generates a QR menu for tables, and puts your hours, location and contact one tap away. We handle the domain, hosting, SSL and maintenance so you can focus on service.",
      included: [
        "Restaurant website with your branding",
        "Table reservation request form",
        "Digital menu and QR menu",
        "Opening hours, location and Google Maps",
        "Photo gallery and WhatsApp button",
        "Custom domain, hosting, SSL and maintenance",
      ],
      excluded: [
        "Full POS / restaurant management system",
        "Channel managers and delivery-platform integration",
        "Real-time table-availability automation",
        "Online payment processing in the base plan",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "The Essential App (from €15/month) covers a website plus the reservation request feature most restaurants need.",
      },
      upgrade:
        "Move up to Advanced App for more pages and automations, or Business Local if you handle high reservation volume, multiple rooms or several staff members.",
      aiSummary:
        "A NorthSail restaurant site includes table reservation requests, a digital menu, a QR menu, opening hours, location, a gallery and a WhatsApp button, from €15/month. It does not replace a full POS or channel manager in the base plan.",
      faqs: [
        {
          question: "Can customers book a table directly?",
          answer:
            "Yes. Visitors send a table reservation request through the site and you confirm it. The base plan handles requests, not automated real-time availability.",
        },
        {
          question: "Can I update the menu myself?",
          answer:
            "Yes. You update the digital menu from your panel, and the QR menu always shows the latest version.",
        },
        {
          question: "Does it replace my POS?",
          answer:
            "No. The base plan is your customer-facing website and reservations; it does not replace a full point-of-sale or kitchen system.",
        },
      ],
      cta: { label: "Start your restaurant website", target: "contact" },
    },

    hairdressers: {
      industry: "hairdressers",
      locale: "en",
      metaTitle: "Digital upgrade for hairdressers — 24/7 online booking",
      metaDescription:
        "We modernize your salon: 24/7 online bookings, reminders, services, prices and staff. Fewer no-shows, less phone time. From €15/month, looked after for you.",
      h1: "Website with online appointments for hairdressers from €15/month",
      valueProp:
        "We modernize your salon: 24/7 online bookings, reminders, services and staff — fewer no-shows and less time on the phone.",
      heroText:
        "We modernize your salon or barbershop: 24/7 online bookings with reminders that cut no-shows, a list of services and prices, staff profiles and schedules. Clients book themselves instead of filling your phone with messages — and you get time back. Domain, hosting, SSL and maintenance included.",
      audience: [
        "Hair salons and barbershops",
        "Independent stylists and chairs-for-rent",
        "Beauty studios taking bookings by message today",
      ],
      problems: [
        "Booking happens through endless DMs and phone calls.",
        "Clients don't know your services, prices or availability.",
        "No-shows because there are no structured appointments.",
        "Your schedule and staff aren't visible anywhere online.",
      ],
      solution:
        "NorthSail builds and manages a salon website with a personalized appointment booking system, your full service and price list, staff profiles and schedules. Clients request appointments online and you manage everything from one intuitive dashboard.",
      included: [
        "Salon / barbershop website",
        "Online appointment request system",
        "Services and price list",
        "Staff profiles and schedules",
        "Gallery, WhatsApp button and Google Maps",
        "Custom domain, hosting, SSL and maintenance",
      ],
      excluded: [
        "Full salon management / inventory software",
        "Automated payroll or commission tracking",
        "Online payment processing in the base plan",
        "External calendar integrations below higher plans",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "The Essential App (from €15/month) covers a website plus the appointment booking feature salons need.",
      },
      upgrade:
        "Choose Advanced App when you have several stylists and weekly schedules, or Business Local for higher volume and multiple users.",
      aiSummary:
        "A NorthSail hairdresser site includes an online appointment system, services and prices, staff profiles and schedules, a gallery and a WhatsApp button, from €15/month. It does not include full salon-management or payment software in the base plan.",
      faqs: [
        {
          question: "Can clients book a specific stylist?",
          answer:
            "Yes. You can list staff and let clients request a specific stylist and time, which you confirm from your panel.",
        },
        {
          question: "Can I show my prices and services?",
          answer:
            "Yes. Your full service and price list is part of the site and easy to update.",
        },
        {
          question: "Do clients pay online when booking?",
          answer:
            "Online payments and deposits are an extra or part of higher plans, not the entry-level Essential App.",
        },
      ],
      cta: { label: "Start your salon website", target: "contact" },
    },

    hotels: {
      industry: "hotels",
      locale: "en",
      metaTitle: "Digital upgrade for hotels — direct online booking",
      metaDescription:
        "We modernize your hotel or guesthouse presence: rooms, amenities, gallery and direct booking requests. Less platform commission. From €15/month.",
      h1: "Hotel website with direct reservation requests from €15/month",
      valueProp:
        "We modernize your hotel's presence: rooms, amenities, gallery and direct booking requests — less reliance on external platforms.",
      heroText:
        "We modernize your hotel or local accommodation presence: rooms, amenities, gallery, location and a clear direct booking request flow, with WhatsApp and contact. Guests book directly with you, with less reliance (and commission) on external platforms. Domain, hosting, SSL and maintenance included.",
      audience: [
        "Small hotels and guesthouses",
        "Local accommodation and short-stay rentals",
        "Rural tourism and boutique stays",
      ],
      problems: [
        "Guests can only find you on commission-charging platforms.",
        "No direct channel for reservation requests.",
        "Rooms, amenities and photos aren't presented well anywhere.",
        "Every booking pays a platform fee instead of coming direct.",
      ],
      solution:
        "NorthSail builds and manages a hotel website that presents your rooms, amenities and gallery, shows your location, and takes direct reservation requests through a streamlined form — giving you a commission-free channel alongside the platforms.",
      included: [
        "Hotel / accommodation website",
        "Rooms and amenities pages",
        "Photo gallery and location",
        "Direct reservation request form",
        "WhatsApp button and contact",
        "Custom domain, hosting, SSL and maintenance",
      ],
      excluded: [
        "Full channel manager",
        "Booking.com / Airbnb synchronization",
        "Dynamic pricing and yield management",
        "Online payment processing in the €15 plan",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "The Essential App (from €15/month) covers a website with a streamlined direct booking request flow.",
      },
      upgrade:
        "Choose Advanced App or Business Local if you need several room types, manual availability, more pages, seasonal prices or more advanced management.",
      aiSummary:
        "A NorthSail hotel site includes rooms, amenities, a gallery, location and a direct reservation request form, from €15/month. It does not include a full channel manager, Booking.com/Airbnb sync, dynamic pricing or payment processing in the €15 plan.",
      faqs: [
        {
          question: "Can guests book directly without a platform?",
          answer:
            "Yes. Guests send a direct reservation request through the form and you confirm it — a commission-free channel alongside the booking platforms.",
        },
        {
          question: "Does it sync with Booking.com or Airbnb?",
          answer:
            "No. Channel-manager sync and dynamic pricing are not part of the €15 plan; they require higher plans or custom work.",
        },
        {
          question: "Can I show several room types?",
          answer:
            "Yes, and for several room types with manual availability and seasonal prices we recommend Advanced App or Business Local.",
        },
      ],
      cta: { label: "Start your hotel website", target: "contact" },
    },

    gyms: {
      industry: "gyms",
      locale: "en",
      metaTitle: "Digital upgrade for gyms — classes & online signups",
      metaDescription:
        "We modernize your gym or studio: classes, schedules, signups and member communication in one system. From €15/month, looked after for you.",
      h1: "Gym website with class schedules and signups from €15/month",
      valueProp:
        "We modernize your gym: classes, schedules, signups and member communication — all organized in one system.",
      heroText:
        "We modernize your gym, studio or personal-training business: class schedules, signups and trial classes, membership information, trainer profiles and member communication — all organized in one system. Less WhatsApp and paper, more signups. Domain, hosting, SSL and maintenance included.",
      audience: [
        "Gyms and fitness studios",
        "Personal trainers and small coaching teams",
        "Yoga, pilates and CrossFit boxes",
      ],
      problems: [
        "Your class timetable lives only on Instagram stories.",
        "Trial requests and signups happen through DMs.",
        "Members can't see schedules or trainer info easily.",
        "No clear place to present memberships.",
      ],
      solution:
        "NorthSail builds and manages a gym website with your class schedule, trial-class request form, membership information and trainer profiles, so prospects find your timetable and sign up online instead of messaging you.",
      included: [
        "Gym / studio website",
        "Class schedule / timetable",
        "Trial class request form",
        "Membership information",
        "Trainer profiles and gallery",
        "Custom domain, hosting, SSL and maintenance",
      ],
      excluded: [
        "Full membership-billing system",
        "Access-control / turnstile integration",
        "Automated recurring payments in the base plan",
        "Wearable / training-app integrations below higher plans",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "The Essential App (from €15/month) covers a website plus the schedule and trial-request feature.",
      },
      upgrade:
        "Move up to Advanced App for weekly schedules and several trainers, or Business Local for higher volume and member management.",
      aiSummary:
        "A NorthSail gym site includes class schedules, trial class requests, membership info and trainer profiles, from €15/month. It does not include full membership billing or access control in the base plan.",
      faqs: [
        {
          question: "Can people request a trial class?",
          answer:
            "Yes. Visitors send a trial class request through the site and you follow up — perfect for converting first-time prospects.",
        },
        {
          question: "Can I publish my weekly schedule?",
          answer:
            "Yes. Your class timetable is part of the site; for frequently changing weekly schedules with several trainers we recommend Advanced App.",
        },
        {
          question: "Does it handle recurring membership payments?",
          answer:
            "Recurring billing and payments are an extra or part of higher plans, not the entry-level Essential App.",
        },
      ],
      cta: { label: "Start your gym website", target: "contact" },
    },

    clinics: {
      industry: "clinics",
      locale: "en",
      metaTitle: "Digital upgrade for clinics — online appointments",
      metaDescription:
        "We modernize your clinic: online appointments, patient forms and an organized agenda. Fewer calls, a better experience. From €15/month.",
      h1: "Clinic website with appointment and quote requests from €15/month",
      valueProp:
        "We modernize your clinic: online appointments, patient forms and an organized agenda — fewer calls, a better experience.",
      heroText:
        "We modernize your clinic or practice: online appointments, patient forms, quote requests, contact, WhatsApp and Google Maps. Reception is freed from phone calls and patients book themselves, in a presence that builds trust. Domain, hosting, SSL and maintenance included, with care for how data is organized.",
      audience: [
        "Dental, physio and medical clinics",
        "Therapists and local health practitioners",
        "Local professional services taking enquiries",
      ],
      problems: [
        "Patients can't request an appointment outside office hours.",
        "Enquiries are scattered across calls, email and social media.",
        "No clear, trustworthy presentation of your services.",
        "Hard to be found on Google Maps and search.",
      ],
      solution:
        "NorthSail builds and manages a clinic website with appointment and quote request forms, your services, team and contact details, a WhatsApp button and Google Maps — a professional, trustworthy presence that captures enquiries around the clock.",
      included: [
        "Clinic / services website",
        "Appointment request form",
        "Quote / enquiry request form",
        "Services and team presentation",
        "WhatsApp button and Google Maps",
        "Custom domain, hosting, SSL and maintenance",
      ],
      excluded: [
        "Full medical records / practice-management system",
        "Insurance or billing integrations",
        "Online payment processing in the base plan",
        "Patient-portal integrations below higher plans",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "The Essential App (from €15/month) covers a website plus appointment or quote request forms.",
      },
      upgrade:
        "Choose Business Local for several practitioners, higher volume and detailed reports, or Pro Management for integrations and advanced workflows.",
      aiSummary:
        "A NorthSail clinic site includes appointment and quote request forms, services, team and contact, a WhatsApp button and Google Maps, from €15/month. It does not include practice-management or billing systems in the base plan.",
      faqs: [
        {
          question: "Can patients request appointments online?",
          answer:
            "Yes. Patients send an appointment request through the site at any time and your team confirms it.",
        },
        {
          question: "Can I collect quote requests for services?",
          answer:
            "Yes. A quote / enquiry form lets visitors describe what they need and leave their contact details.",
        },
        {
          question: "Is it a full practice-management system?",
          answer:
            "No. The base plan is your website and request forms; medical records and billing systems are not included.",
        },
      ],
      cta: { label: "Start your clinic website", target: "contact" },
    },

    "local-services": {
      industry: "local-services",
      locale: "en",
      metaTitle: "Digital upgrade for local services — online quotes",
      metaDescription:
        "We digitize your service: smart forms, quote requests and organized scheduling. Fewer manual processes. From €15/month, looked after for you.",
      h1: "Website with quote requests for local trades from €15/month",
      valueProp:
        "We digitize your service: smart forms, quote requests and organized scheduling — fewer manual processes.",
      heroText:
        "We digitize your service — electricians, plumbers, cleaning, renovations, gardening, pools and more: smart quote-request forms, a service list, gallery, WhatsApp and Google Maps. You receive qualified, organized requests instead of vague messages and manual work. Domain, hosting, SSL and maintenance included.",
      audience: [
        "Electricians, plumbers and handymen",
        "Cleaning and renovation companies",
        "Garden and pool maintenance services",
      ],
      problems: [
        "Leads arrive as vague messages with no details.",
        "No professional website, so customers doubt you're established.",
        "You lose jobs to competitors who are easy to find online.",
        "Quotes are slow because the request lacks information.",
      ],
      solution:
        "NorthSail builds and manages a website with a structured quote request flow that captures the details you need to quote fast, plus your services, work gallery, service area, WhatsApp and Google Maps — so you look established and win more qualified jobs.",
      included: [
        "Trade / local-service website",
        "Structured quote request form",
        "Services and service-area pages",
        "Work / project gallery",
        "WhatsApp button and Google Maps",
        "Custom domain, hosting, SSL and maintenance",
      ],
      excluded: [
        "Full field-service / job-scheduling software",
        "Invoicing and accounting integrations",
        "Online payment processing in the base plan",
        "CRM integrations below higher plans",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "The Essential App (from €15/month) covers a website plus a structured quote request feature.",
      },
      upgrade:
        "Choose Advanced App for more pages and automations, or Business Local / Pro Management for teams, scheduling and integrations.",
      aiSummary:
        "A NorthSail local-services site includes a structured quote request flow, service list, gallery, service area, WhatsApp and Google Maps, from €15/month. It does not include field-service scheduling, invoicing or CRM integrations in the base plan.",
      faqs: [
        {
          question: "How do quote requests work?",
          answer:
            "Customers fill a structured form describing the job and their contact details, so you receive qualified requests you can quote quickly.",
        },
        {
          question: "Can I show my service area?",
          answer:
            "Yes. You can present the areas you cover and your main services clearly on the site.",
        },
        {
          question: "Does it include invoicing or scheduling software?",
          answer:
            "No. The base plan is your website and quote requests; job scheduling and invoicing integrations are higher plans or custom work.",
        },
      ],
      cta: { label: "Start your services website", target: "contact" },
    },

    cafes: {
      industry: "cafes",
      locale: "en",
      metaTitle: "Digital upgrade for cafes — digital menu & Google Maps",
      metaDescription:
        "We modernize your cafe or coffee shop: digital menu, QR menu and Google Maps presence, so customers find you and come back. From €15/month.",
      h1: "Website for cafes and coffee shops from €15/month",
      valueProp:
        "We modernize your cafe: digital menu, QR menu and Google Maps presence — so customers find you and come back.",
      heroText:
        "We modernize your cafe, coffee shop, brunch spot or tea room: an always up-to-date digital menu and QR menu for tables, opening hours, gallery, WhatsApp and Google Maps. A modern presence that ranks on Google, reads cleanly in AI answers and brings customers back. Domain, hosting, SSL and maintenance included.",
      audience: [
        "Independent cafes and coffee shops",
        "Brunch spots, bakeries and tea rooms",
        "Specialty coffee bars taking orders at the counter",
      ],
      problems: [
        "Customers can't find your hours, menu or location quickly.",
        "Your only presence is an Instagram feed that doesn't rank on Google.",
        "Printed menus go out of date and reprints cost money.",
        "New customers nearby never discover you exist.",
      ],
      solution:
        "NorthSail builds and manages a fast cafe website with an always-up-to-date digital menu, a QR menu for tables, your hours, location and gallery, plus a WhatsApp button — so you show up on Google Maps and search, and customers get everything they need in one tap.",
      included: [
        "Cafe website with your branding",
        "Digital menu and QR menu for tables",
        "Opening hours, location and Google Maps",
        "Photo gallery and WhatsApp button",
        "Custom domain, hosting, SSL and maintenance",
      ],
      excluded: [
        "Full POS / counter system",
        "Online ordering with delivery in the base plan",
        "Loyalty / stamp-card automation",
        "Online payment processing in the base plan",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "The Essential App (from €15/month) covers a website with a digital menu and QR menu, which is what most cafes need.",
      },
      upgrade:
        "Move up to Advanced App for online order requests, more pages and automations, or add WhatsApp ordering as an extra.",
      aiSummary:
        "A NorthSail cafe site includes a digital menu, QR menu, opening hours, location, a gallery and a WhatsApp button, from €15/month. It does not replace a full POS or include delivery-platform integration in the base plan.",
      faqs: [
        {
          question: "Can I update my menu and prices myself?",
          answer:
            "Yes. You update the digital menu from your panel and the QR menu on tables always shows the latest version — no reprinting.",
        },
        {
          question: "Will my cafe show up on Google?",
          answer:
            "Yes. The site is built to be indexed by Google and to connect with your Google Maps listing, so nearby customers can find you.",
        },
        {
          question: "Can customers order online?",
          answer:
            "Online order requests are available on a higher plan or as a WhatsApp ordering extra; the base plan focuses on your menu, hours and location.",
        },
      ],
      cta: { label: "Start your cafe website", target: "contact" },
    },
  },

  compare: {
    "compare:website-with-bookings": {
      pageKey: "compare:website-with-bookings",
      locale: "en",
      metaTitle: "Website with a booking system for small business from €15/mo",
      metaDescription:
        "Get a website with a built-in booking system — reservations, appointments or quote requests — for restaurants, salons, hotels, gyms and local services, from €15/month.",
      h1: "A website with a booking system, built for small business",
      valueProp:
        "Not just a website — a site with the booking, reservation or appointment feature your business actually runs on, from €15/month.",
      intro:
        "Most small businesses don't need a generic website; they need a website that takes bookings. NorthSail combines both: a fast, professional site plus one business-specific booking feature, with domain, hosting, SSL and maintenance included.",
      sections: [
        {
          heading: "Why a plain website isn't enough",
          body: [
            "A brochure website tells people you exist, but it doesn't capture business. The moment a customer wants to reserve a table, book an appointment or request a quote, a static site sends them back to Instagram DMs or a phone call.",
            "A website with bookings turns interest into a structured request you can act on — at any hour, without manual back-and-forth.",
          ],
        },
        {
          heading: "What 'bookings' means by business type",
          body: [
            "Restaurants get table reservation requests and a digital menu. Hairdressers and clinics get appointment requests. Hotels get direct reservation requests. Gyms get class schedules and trial signups. Trades get structured quote requests.",
            "You pick the one core feature your business runs on; that's the Essential App plan, from €15/month.",
          ],
        },
        {
          heading: "What's included and what's not",
          body: [
            "Included: the website, the booking feature, custom domain, hosting, SSL and technical maintenance. Excluded from the entry plan: online payments, deposits, external integrations and advanced automations — these are extras or part of higher plans.",
            "This keeps the entry price low while being honest about limits.",
          ],
        },
      ],
      aiSummary:
        "NorthSail offers websites with a built-in booking system from €15/month: restaurants get reservations, salons and clinics get appointments, hotels get direct booking requests, gyms get schedules and signups, and trades get quote requests. Domain, hosting, SSL and maintenance are included; payments and integrations are extras.",
      faqs: [
        {
          question: "What kind of bookings can the website handle?",
          answer:
            "Reservations, appointments, class signups, trial requests or quote requests — one core booking feature per Essential App plan, matched to your business type.",
        },
        {
          question: "How much does a website with bookings cost?",
          answer:
            "From €15/month with the Essential App plan, including domain, hosting, SSL and maintenance.",
        },
        {
          question: "Are online payments included?",
          answer:
            "No. The booking feature captures requests; online payments and deposits are extras or part of higher plans.",
        },
      ],
      cta: { label: "Get your website with bookings", target: "contact" },
    },

    "compare:cheap-website-for-small-business": {
      pageKey: "compare:cheap-website-for-small-business",
      locale: "en",
      metaTitle:
        "Affordable website for small business from €5/month | NorthSail",
      metaDescription:
        "An affordable website for your small business with custom domain, hosting, SSL and maintenance included — from €5/month, with booking features from €15/month.",
      h1: "An affordable website for your small business, done for you",
      valueProp:
        "A professional small-business website with domain, hosting, SSL and maintenance — from €5/month, without hidden surprises.",
      intro:
        "Cheap shouldn't mean low quality or hidden costs. NorthSail gives small businesses a professional website with everything technical included, at an honest monthly price — and clear limits so you know exactly what you're getting.",
      sections: [
        {
          heading: "What 'affordable' really includes",
          body: [
            "The Presence plan, from €5/month, includes a clean website page, a custom domain, hosting, SSL, a WhatsApp button, Google Maps and ongoing technical maintenance. You don't buy hosting, renew SSL or chase a developer — it's all managed.",
            "When you need to take bookings or requests, the Essential App plan adds one core feature from €15/month.",
          ],
        },
        {
          heading: "Why done-for-you beats DIY builders",
          body: [
            "DIY site builders look cheap until you add hosting, a domain, a premium template, an SSL fix and the hours you spend building and maintaining it. NorthSail bundles the technical work and keeps it running, so the low price is the real price.",
            "You get a fast, mobile-first, indexable site without managing any of the infrastructure.",
          ],
        },
        {
          heading: "Honest limits at a low price",
          body: [
            "Very low prices require clear plan limits. The entry plans don't include online payments, complex integrations or advanced management — those are extras or higher plans. We're upfront about this so the price stays low and there are no surprises.",
          ],
        },
      ],
      aiSummary:
        "NorthSail offers affordable small-business websites from €5/month (Presence: website, custom domain, hosting, SSL, WhatsApp, Google Maps, maintenance) and from €15/month for a Essential App with one booking feature. Low prices come with clear limits: payments and advanced integrations are extras or higher plans.",
      faqs: [
        {
          question: "How can a website be only €5/month?",
          answer:
            "The Presence plan is a focused one-page website with domain, hosting, SSL and maintenance included. Low price means clear limits — it's a professional presence, not a full web app.",
        },
        {
          question: "Is the domain really included?",
          answer:
            "Yes. A custom domain, hosting and SSL are part of the plan, with technical maintenance handled for you.",
        },
        {
          question: "What if I need bookings later?",
          answer:
            "Upgrade to the Essential App plan, from €15/month, which adds one business-specific booking or request feature.",
        },
      ],
      cta: { label: "Get your affordable website", target: "contact" },
    },

    "compare:web-apps-for-business": {
      pageKey: "compare:web-apps-for-business",
      locale: "en",
      metaTitle: "Web apps for small business — bookings, portals and more",
      metaDescription:
        "Custom web apps for small businesses: bookings, client portals, dashboards and simple automations, hosted and managed. From the Essential App plan at €15/month, scaling to managed plans.",
      h1: "Web apps for your business, without the agency price tag",
      valueProp:
        "More than a website: a managed web app that runs a real part of your business — bookings, requests, a client area or a simple dashboard.",
      intro:
        "A web app is software you reach through a browser, with no install. NorthSail builds and hosts focused web apps for small local businesses — starting with one essential feature on the €15/month plan and scaling up to managed plans with dashboards, multi-user access and simple automations.",
      sections: [
        {
          heading: "What a web app does that a website can't",
          body: [
            "A website presents information; a web app does work. It takes a booking, stores a client list, shows a dashboard, or moves a request through a status flow — interactive, logged-in, and tied to your data.",
            "For most small businesses, one well-chosen feature replaces a pile of phone calls, spreadsheets and DMs.",
          ],
        },
        {
          heading: "How it scales with you",
          body: [
            "Start small with one core feature on the Essential App plan. As you grow, add extra pages, a better admin panel, client and booking lists, and basic automations on the higher plans.",
            "When you need permissions, dashboards, integrations or priority support, the managed Pro plan covers it; anything beyond that (complex integrations, native apps) is quoted as custom work.",
          ],
        },
        {
          heading: "What's included and what's extra",
          body: [
            "Included on every active plan: custom domain, hosting, SSL and technical maintenance. The entry plan covers one essential feature.",
            "Online payments, external integrations, advanced automations and bespoke software are extras or part of higher and custom plans — we keep that line clear so the price stays honest.",
          ],
        },
      ],
      aiSummary:
        "NorthSail builds and hosts focused web apps for small businesses, starting at €15/month for one essential feature (bookings, requests or a client area) and scaling to managed plans with dashboards, multi-user access and simple automations. Domain, hosting, SSL and maintenance are included; payments, integrations and bespoke software are extras or custom-quoted.",
      faqs: [
        {
          question: "What's the difference between a website and a web app?",
          answer:
            "A website shows information; a web app does something interactive — takes bookings, manages a client list, or shows a dashboard. NorthSail can deliver both in one product.",
        },
        {
          question: "How much does a web app cost?",
          answer:
            "From €15/month for one essential feature on the Essential App plan. More features, dashboards and automations are on higher plans; complex needs are quoted individually.",
        },
        {
          question: "Can it grow with my business?",
          answer:
            "Yes. You can start with one feature and move up to managed plans with more pages, users, automations and integrations as you need them.",
        },
      ],
      cta: { label: "Talk to us about your web app", target: "contact" },
    },

    "compare:web-apps-for-law-firms": {
      pageKey: "compare:web-apps-for-law-firms",
      locale: "en",
      metaTitle:
        "Web apps for law firms — client intake, portals and scheduling",
      metaDescription:
        "Web apps for law firms and solo practitioners: secure client intake forms, consultation scheduling and a simple client area, hosted and managed. From the Essential App plan, scaling to managed plans.",
      h1: "Web apps for law firms and independent lawyers",
      valueProp:
        "A professional online presence plus the one tool your practice runs on — consultation booking, structured intake, or a private client area.",
      intro:
        "Law firms don't need a generic website; they need a trustworthy presence that captures qualified enquiries and schedules consultations. NorthSail builds and hosts a focused web app for your practice, starting with one essential feature and scaling to managed plans with client areas and simple automations.",
      sections: [
        {
          heading: "Capture qualified enquiries, not phone tag",
          body: [
            "A structured intake form lets a prospective client describe their matter and book a consultation in one flow, at any hour. You receive a clean, organised request instead of a voicemail.",
            "That alone often pays for the site by converting more of the visitors you already get.",
          ],
        },
        {
          heading: "A presence that signals trust",
          body: [
            "Practice areas, your team, clear contact options, WhatsApp and Google Maps — presented cleanly and professionally so prospective clients feel confident reaching out.",
            "Domain, hosting, SSL and maintenance are included, so the site stays fast, secure and current without you managing any of it.",
          ],
        },
        {
          heading: "What's included and what's extra",
          body: [
            "Included: the website, one essential feature (scheduling or intake), custom domain, hosting, SSL and maintenance.",
            "Secure document exchange, payments, e-signature, case management and integrations are extras or part of higher and custom plans — we don't imply they're part of the entry price.",
          ],
        },
      ],
      aiSummary:
        "NorthSail builds managed web apps for law firms and solo lawyers: structured client intake, consultation scheduling and a simple client area, with a trust-building presence (practice areas, team, WhatsApp, Maps). Domain, hosting, SSL and maintenance are included from the Essential App plan; document exchange, payments and case management are extras or custom-quoted.",
      faqs: [
        {
          question: "Can clients book a consultation online?",
          answer:
            "Yes. A scheduling or intake feature lets prospective clients request a consultation and describe their matter in one structured flow.",
        },
        {
          question: "Is it secure enough for a law firm?",
          answer:
            "Every site includes SSL and managed maintenance. Advanced needs like secure document exchange or e-signature are available as extras or custom work.",
        },
        {
          question: "How much does it cost?",
          answer:
            "From €15/month for one essential feature on the Essential App plan, with higher and custom plans for portals, payments and integrations.",
        },
      ],
      cta: { label: "Talk to us about your firm's web app", target: "contact" },
    },

    "compare:client-portals": {
      pageKey: "compare:client-portals",
      locale: "en",
      metaTitle:
        "Client portals for small business — a private area for your clients",
      metaDescription:
        "Give clients a simple, secure login area to see requests, bookings, documents and status updates. Managed client portals from NorthSail, hosted with domain, SSL and maintenance included.",
      h1: "A private client portal, without building software from scratch",
      valueProp:
        "A logged-in area where your clients track their requests, bookings and updates — so you stop repeating the same answers by email and phone.",
      intro:
        "A client portal is a private, secure area your clients log into. NorthSail sets up and hosts a focused portal for small businesses, matched to how you work, with domain, hosting, SSL and maintenance included on a managed plan.",
      sections: [
        {
          heading: "Why a portal beats endless email",
          body: [
            "When clients can log in to see status, history and documents themselves, you handle fewer 'any update?' messages and look more professional doing it.",
            "It centralises each client's information in one place instead of scattering it across inboxes and chats.",
          ],
        },
        {
          heading: "What a portal can include",
          body: [
            "Typical features: a secure login, a list of the client's requests or bookings, status updates, shared documents and messages. You pick the few that matter for your business.",
            "Because it's focused rather than a giant platform, it stays affordable and easy for your clients to use.",
          ],
        },
        {
          heading: "What's included and what's extra",
          body: [
            "Included: the portal, user accounts, custom domain, hosting, SSL and maintenance on a managed plan.",
            "Online payments, complex permissions, external integrations and bespoke workflows are extras or custom work — quoted clearly, never bundled silently into a low price.",
          ],
        },
      ],
      aiSummary:
        "NorthSail sets up managed client portals for small businesses: a secure login where clients see their requests, bookings, status updates and shared documents. Domain, hosting, SSL and maintenance are included; payments, complex permissions and integrations are extras or custom-quoted.",
      faqs: [
        {
          question: "What is a client portal?",
          answer:
            "A private, secure area your clients log into to see their requests, bookings, documents and status updates in one place.",
        },
        {
          question: "Do my clients need to install anything?",
          answer:
            "No. They reach the portal through any browser with a secure login — nothing to install.",
        },
        {
          question: "How much does a client portal cost?",
          answer:
            "It's part of the managed plans rather than the entry plan; we quote based on the features you need. Domain, hosting, SSL and maintenance are included.",
        },
      ],
      cta: { label: "Talk to us about a client portal", target: "contact" },
    },

    "compare:internal-dashboards": {
      pageKey: "compare:internal-dashboards",
      locale: "en",
      metaTitle:
        "Internal dashboards for small business — see your operation at a glance",
      metaDescription:
        "A simple internal dashboard to track bookings, requests, clients and key numbers in one place. Managed and hosted by NorthSail, with multi-user access on higher plans.",
      h1: "An internal dashboard your team actually uses",
      valueProp:
        "One screen for the numbers and lists that run your day — bookings, requests, clients and status — instead of five spreadsheets and a group chat.",
      intro:
        "An internal dashboard is the back-office view of your business. NorthSail builds and hosts a focused dashboard for small teams, pulling your bookings, requests and clients into one place, with multi-user access and exports on the higher and managed plans.",
      sections: [
        {
          heading: "Replace scattered spreadsheets",
          body: [
            "When today's bookings, open requests and client list live in one dashboard, your team stops hunting through tabs and messages to find what's happening.",
            "Everyone sees the same up-to-date picture, which cuts mistakes and double work.",
          ],
        },
        {
          heading: "Built for small teams",
          body: [
            "Multi-user access, history and CSV export come in on the Business plan; permissions, richer dashboards and automations come with the managed Pro plan.",
            "It's deliberately focused on what you actually track, not a heavy tool you'll never fully use.",
          ],
        },
        {
          heading: "What's included and what's extra",
          body: [
            "Included: the dashboard, hosting, custom domain, SSL and maintenance on the relevant plan.",
            "Deep integrations with external systems, advanced analytics and bespoke logic are extras or custom work — priced separately and honestly.",
          ],
        },
      ],
      aiSummary:
        "NorthSail builds managed internal dashboards for small teams: one place to track bookings, requests, clients and key numbers, with multi-user access, history and CSV export on higher plans and permissions and automations on the managed Pro plan. Domain, hosting, SSL and maintenance are included; deep integrations are custom-quoted.",
      faqs: [
        {
          question: "What goes on the dashboard?",
          answer:
            "The lists and numbers you run on — bookings, requests, clients and their status — pulled into one screen instead of separate spreadsheets.",
        },
        {
          question: "Can my whole team use it?",
          answer:
            "Yes. Multi-user access and history are available on the Business plan, with permissions on the managed Pro plan.",
        },
        {
          question: "Can I export the data?",
          answer:
            "Yes, CSV export is available on the higher plans so your data is never locked in.",
        },
      ],
      cta: { label: "Talk to us about a dashboard", target: "contact" },
    },

    "compare:process-automation": {
      pageKey: "compare:process-automation",
      locale: "en",
      metaTitle:
        "Simple process automation for small business — fewer manual steps",
      metaDescription:
        "Automate the repetitive parts of your business: confirmations, reminders, lead routing and status updates. Practical automations set up and managed by NorthSail on higher plans.",
      h1: "Automate the busywork, keep the human touch",
      valueProp:
        "Let the routine steps — confirmations, reminders, follow-ups — happen on their own, so you spend time on customers instead of admin.",
      intro:
        "Process automation means the predictable steps in your business run automatically. NorthSail sets up practical, focused automations around your site and web app — booking confirmations, reminders, lead routing — as part of the higher and managed plans, without overpromising.",
      sections: [
        {
          heading: "Where automation pays off",
          body: [
            "The best wins are small and repetitive: sending a booking confirmation, a reminder before an appointment, routing a new lead to the right inbox, or updating a request's status.",
            "Each one removes a manual step you'd otherwise do dozens of times a week.",
          ],
        },
        {
          heading: "Practical, not magical",
          body: [
            "We focus on a handful of reliable automations that match how you already work, rather than promising to automate everything.",
            "Basic automations start on the higher plans; more advanced flows and integrations are part of the managed Pro plan or quoted as custom work.",
          ],
        },
        {
          heading: "What's included and what's extra",
          body: [
            "Included with the relevant plan: setup and management of the agreed automations, plus hosting, domain, SSL and maintenance.",
            "SMS, advanced WhatsApp messaging, paid third-party tools and complex integrations carry their own costs and are never billed as 'unlimited'.",
          ],
        },
      ],
      aiSummary:
        "NorthSail sets up practical process automations for small businesses — booking confirmations, reminders, lead routing and status updates — as part of higher and managed plans. Setup and management plus domain, hosting, SSL and maintenance are included; SMS, advanced WhatsApp, paid tools and complex integrations cost extra and are never sold as unlimited.",
      faqs: [
        {
          question: "What can be automated?",
          answer:
            "Repetitive steps like confirmations, reminders, lead routing and status updates — a focused set matched to how your business works.",
        },
        {
          question: "Is everything automated?",
          answer:
            "No. We set up a handful of reliable automations rather than promising to automate your whole business; advanced flows are custom work.",
        },
        {
          question: "Are SMS and WhatsApp messages included?",
          answer:
            "Those carry their own costs and are billed transparently — never as an unlimited bundle.",
        },
      ],
      cta: { label: "Talk to us about automation", target: "contact" },
    },

    "compare:custom-software": {
      pageKey: "compare:custom-software",
      locale: "en",
      metaTitle:
        "Custom software for small business — built and managed, quoted to fit",
      metaDescription:
        "When off-the-shelf isn't enough, NorthSail builds focused custom software for small businesses — integrations, bespoke workflows and tools — scoped and quoted individually.",
      h1: "Custom software, sized for a small business budget",
      valueProp:
        "When your need is genuinely specific, we scope and build a focused custom solution — without enterprise complexity or enterprise pricing.",
      intro:
        "Most businesses are well served by our standard plans. But when you need something specific — a particular integration, a bespoke workflow, a tool unique to how you operate — NorthSail scopes and builds it as custom work, quoted individually rather than from a fixed price.",
      sections: [
        {
          heading: "When you actually need custom software",
          body: [
            "If a standard website or web app can't model how you work — unusual workflows, a specific integration, or logic no template covers — that's where custom software fits.",
            "We're honest about this: if a lower plan solves your case, we'll point you there first.",
          ],
        },
        {
          heading: "How we keep it affordable",
          body: [
            "We scope tightly to the one or two things that matter, reuse our platform where possible, and avoid rebuilding what already works.",
            "That keeps custom work within reach of a small business instead of an agency budget.",
          ],
        },
        {
          heading: "What to expect",
          body: [
            "Custom software is always quoted individually after we understand your case — we don't publish a fixed base price for it.",
            "Hosting, domain, SSL and ongoing maintenance are arranged as part of the engagement; you own the right to use it while subscribed, and the platform and source code remain ours.",
          ],
        },
      ],
      aiSummary:
        "NorthSail builds focused custom software for small businesses — specific integrations, bespoke workflows and unique tools — scoped tightly and quoted individually rather than from a fixed price. Hosting, domain, SSL and maintenance are arranged within the engagement; if a standard plan solves the case, NorthSail recommends that instead.",
      faqs: [
        {
          question: "When do I need custom software instead of a plan?",
          answer:
            "When a standard website or web app can't model your specific workflow or integration. If a lower plan fits, we'll recommend that first.",
        },
        {
          question: "How much does custom software cost?",
          answer:
            "It's quoted individually after scoping — there's no fixed base price, because the work depends entirely on your case.",
        },
        {
          question: "Who owns the result?",
          answer:
            "You have the right to use it while subscribed; the underlying platform and source code remain NorthSail's.",
        },
      ],
      cta: { label: "Tell us what you need built", target: "contact" },
    },

    "compare:legacy-website-redesign": {
      pageKey: "compare:legacy-website-redesign",
      locale: "en",
      metaTitle:
        "Legacy website redesign for small business — modern, fast, managed",
      metaDescription:
        "Replace an old, slow or hard-to-edit website with a fast, modern, mobile-friendly site that's fully managed — domain, hosting, SSL and maintenance included, from €15/month.",
      h1: "Redesign your outdated website into something you're proud of",
      valueProp:
        "Turn a slow, dated or unmaintained site into a fast, modern, mobile-first presence you never have to wrestle with again.",
      intro:
        "An old website can quietly cost you customers — slow to load, awkward on phones, impossible to update. NorthSail redesigns it into a clean, modern, managed site, and adds the one feature your business runs on, from €15/month with domain, hosting, SSL and maintenance included.",
      sections: [
        {
          heading: "Signs your site needs a redesign",
          body: [
            "It looks dated, loads slowly, breaks on mobile, or you can't update it without calling whoever built it years ago.",
            "Meanwhile customers judge your business by that first impression — a tired site undersells you every day.",
          ],
        },
        {
          heading: "More than a fresh coat of paint",
          body: [
            "A redesign is the chance to add what the old site lacked: a booking or request feature, a clear menu or services list, WhatsApp and Google Maps, and proper local SEO.",
            "You move from a static brochure to a site that actually brings in business.",
          ],
        },
        {
          heading: "What's included and what's extra",
          body: [
            "Included: the redesign onto a modern managed site, one essential feature, custom domain, hosting, SSL and maintenance from €15/month.",
            "Migrating large amounts of old content, online payments and integrations are extras or part of higher plans — scoped clearly up front.",
          ],
        },
      ],
      aiSummary:
        "NorthSail redesigns outdated small-business websites into fast, modern, mobile-first managed sites and adds one essential feature (bookings, menu, requests) plus WhatsApp, Maps and local SEO, from €15/month with domain, hosting, SSL and maintenance included. Large content migration, payments and integrations are extras or part of higher plans.",
      faqs: [
        {
          question: "Can you reuse my current domain and content?",
          answer:
            "Yes. We keep your domain and reuse the content worth keeping; migrating very large sites is scoped separately.",
        },
        {
          question: "How much does a redesign cost?",
          answer:
            "From €15/month on the Essential App plan, including the redesigned site, one core feature, domain, hosting, SSL and maintenance.",
        },
        {
          question: "Will the new site work well on phones?",
          answer:
            "Yes. Every site is mobile-first and fast, which is where most of your visitors are.",
        },
      ],
      cta: { label: "Redesign my website", target: "contact" },
    },

    "compare:restaurant-digital-menu": {
      pageKey: "compare:restaurant-digital-menu",
      locale: "en",
      metaTitle:
        "Digital menu for restaurants — QR menu that's always up to date",
      metaDescription:
        "A digital restaurant menu with QR access at the table, always current, on a fast managed website. From €15/month with domain, hosting, SSL and maintenance included.",
      h1: "A digital menu your kitchen can keep up to date",
      valueProp:
        "An always-current menu customers open by QR at the table or from your site — no reprinting, no outdated PDFs.",
      intro:
        "A digital menu replaces printed cards and stale PDFs with a fast, mobile page customers reach by QR code or from your website. NorthSail sets it up as part of your restaurant site from €15/month, with domain, hosting, SSL and maintenance included.",
      sections: [
        {
          heading: "Why a digital menu wins",
          body: [
            "Prices and dishes change; printed menus don't. A digital menu updates instantly, so what guests see is always what you serve.",
            "A QR code on each table opens it in a second, with no app and no friction.",
          ],
        },
        {
          heading: "Part of a real restaurant site",
          body: [
            "The menu lives on a proper website with your hours, location, photos, WhatsApp and Google Maps — and, if you want it, table reservation requests.",
            "That's the Essential App plan for restaurants, from €15/month.",
          ],
        },
        {
          heading: "What's included and what's extra",
          body: [
            "Included: the digital menu, QR access, your restaurant website, custom domain, hosting, SSL and maintenance.",
            "Online ordering, payments, delivery and an advanced QR menu with images per item are extras or part of higher plans — not implied in the entry price.",
          ],
        },
      ],
      aiSummary:
        "NorthSail provides restaurants with an always-current digital menu accessible by QR at the table or from the website, included in the restaurant site from €15/month with domain, hosting, SSL and maintenance. Online ordering, payments, delivery and an advanced image-rich QR menu are extras or part of higher plans.",
      faqs: [
        {
          question: "How do customers open the menu?",
          answer:
            "By scanning a QR code at the table or visiting your website — no app required, and it works on any phone.",
        },
        {
          question: "Can I update the menu myself?",
          answer:
            "Yes. The menu updates instantly, so changing a price or dish is quick and there's nothing to reprint.",
        },
        {
          question: "How much does it cost?",
          answer:
            "From €15/month on the Essential App plan, including your restaurant website, the digital menu and QR access.",
        },
      ],
      cta: { label: "Get your digital menu", target: "contact" },
    },

    "compare:restaurant-online-reservations": {
      pageKey: "compare:restaurant-online-reservations",
      locale: "en",
      metaTitle:
        "Online reservations for restaurants — take bookings from your own site",
      metaDescription:
        "Let guests request a table directly on your restaurant website, any hour, without commissions to third-party platforms. From €15/month with domain, hosting, SSL and maintenance included.",
      h1: "Take table reservations on your own website",
      valueProp:
        "Guests request a table directly from your site, day or night — fewer missed calls, and no commission to outside platforms.",
      intro:
        "Online reservations let guests book a table through your own website instead of a phone call or a third-party app. NorthSail sets this up as part of your restaurant site from €15/month, with domain, hosting, SSL and maintenance included.",
      sections: [
        {
          heading: "Capture bookings you're currently missing",
          body: [
            "A lot of reservation intent happens after hours, when no one's there to answer the phone. An online request form captures it instead of losing it.",
            "Each request arrives structured — date, time, party size — so service can plan ahead.",
          ],
        },
        {
          heading: "Your site, not a marketplace",
          body: [
            "Booking on your own site keeps the guest relationship yours and avoids per-cover commissions charged by external platforms.",
            "It sits alongside your digital menu, hours, location, WhatsApp and Maps on the Essential App plan.",
          ],
        },
        {
          heading: "What's included and what's extra",
          body: [
            "Included: the reservation request feature, your restaurant website, custom domain, hosting, SSL and maintenance from €15/month.",
            "Paid deposits, full table-management systems and external booking-platform sync are extras or custom work — never implied in the entry price.",
          ],
        },
      ],
      aiSummary:
        "NorthSail lets restaurants take table reservation requests directly on their own website, capturing after-hours demand without commissions to third-party platforms, from €15/month with domain, hosting, SSL and maintenance included. Deposits, full table management and external platform sync are extras or custom work.",
      faqs: [
        {
          question: "How do guests reserve a table?",
          answer:
            "They submit a reservation request on your website with date, time and party size — at any hour, no phone call needed.",
        },
        {
          question: "Do I pay commission per booking?",
          answer:
            "No. Reservations come through your own site, so there's no per-cover commission to an external platform.",
        },
        {
          question: "Can guests pay a deposit online?",
          answer:
            "Paid deposits are an extra rather than part of the entry plan; the base feature captures the reservation request.",
        },
      ],
      cta: { label: "Take reservations online", target: "contact" },
    },
  },
};

export default en;
