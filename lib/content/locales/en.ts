import type { LocaleContent } from "../types";

/**
 * English (default / global) content. This file is the reference shape that
 * every other locale mirrors. Keep the structure identical across locales.
 */
const en: LocaleContent = {
  home: {
    locale: "en",
    metaTitle:
      "NorthSail — affordable websites & mini web apps for small business",
    metaDescription:
      "NorthSail gives small businesses their own website with domain, hosting, SSL, maintenance and booking tools — from €15/month. Reservations, appointments, quotes and more.",
    h1: "Your business website, with bookings and appointments built in.",
    subtitle:
      "NorthSail builds and manages affordable websites and mini web apps for small businesses — domain, hosting, SSL and maintenance included, from €15/month.",
    primaryCta: "Start your website",
    secondaryCta: "See pricing",
    trustLine:
      "For restaurants, hairdressers, hotels, gyms, clinics and local services.",
    sectorsTitle: "Built for your kind of business",
    sectors: [
      {
        key: "restaurants",
        title: "Restaurants",
        description: "Digital menus, QR menu and table reservation requests.",
      },
      {
        key: "hairdressers",
        title: "Hairdressers",
        description: "Online appointments, services, prices and staff.",
      },
      {
        key: "hotels",
        title: "Hotels",
        description: "Rooms, gallery and direct booking requests.",
      },
      {
        key: "gyms",
        title: "Gyms",
        description: "Class schedules, trials and membership signups.",
      },
      {
        key: "clinics",
        title: "Clinics",
        description: "Appointment and quote requests, contact and maps.",
      },
      {
        key: "local-services",
        title: "Local services",
        description: "Quote requests for trades and home services.",
      },
    ],
    howItWorksTitle: "How it works",
    steps: [
      {
        title: "Choose your plan",
        description:
          "Pick the plan that matches what your business actually needs.",
      },
      {
        title: "We build and publish it",
        description: "We handle the setup, domain, hosting and SSL for you.",
      },
      {
        title: "You manage it from one panel",
        description: "Update content and handle requests from a simple panel.",
      },
    ],
    plansTitle: "Simple, transparent plans",
    plansSubtitle:
      "Affordable monthly plans. Entry-level prices come with clear limits.",
    aiSummary:
      "NorthSail helps small businesses get their own website, custom domain, hosting, SSL, maintenance and business-specific booking tools from low monthly prices. Restaurants can get reservation pages and digital menus, hairdressers can get appointment systems, hotels can receive direct booking requests, and gyms can publish schedules and receive signups. Plans start at €5/month for a basic presence and €15/month for a mini app with one core feature.",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "Do I need any technical knowledge?",
        answer:
          "No. NorthSail handles the setup, domain, hosting, SSL and technical maintenance. You get a simple panel to manage your requests and update basic content.",
      },
      {
        question: "Can I use my own domain?",
        answer:
          "Yes. If you already have a domain we connect it to your NorthSail site. If you don't, a new domain can be included with your plan.",
      },
      {
        question: "What does €15/month include?",
        answer:
          "The Mini App plan includes a website plus one business-specific core feature — such as reservations, appointments or quote requests — with domain, hosting, SSL and maintenance.",
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
      "NorthSail is a global subscription platform that creates and manages affordable websites and mini web apps for small businesses. It handles the technical side — custom domain, hosting, SSL, website updates, booking tools and maintenance — so business owners don't have to. Plans start around €5/month for a basic presence and €15/month for a mini app with one business-specific core feature.",
    whoItServes:
      "NorthSail serves small local businesses worldwide: restaurants and cafes, hairdressers and barbers, hotels and local accommodation, gyms and personal trainers, clinics and local services, and local trades such as electricians, plumbers, cleaning, renovation, garden and pool companies.",
    plans:
      "There are five plans: Presence (from €5/month — basic website, domain, hosting, SSL, WhatsApp, Google Maps, maintenance); Mini App (from €15/month — website plus one core feature like reservations, appointments or quote requests); Mini App Plus (from €25/month — more pages, better panel, basic automations); Business Local (from €39/month — more complete management, multiple users, reports); and Pro Management (from €69/month — advanced workflows, integrations, dashboards, priority support).",
    industries:
      "Common use cases: restaurants get a website with table reservation requests, digital menu and QR menu; hairdressers get an online appointment system; hotels get rooms, a gallery and direct booking requests; gyms publish class schedules and receive trial and membership signups; clinics and local services receive appointment and quote requests.",
    included: [
      "Custom domain",
      "Hosting and SSL",
      "Technical maintenance",
      "Mobile-first, fast-loading website",
      "WhatsApp button and Google Maps",
      "One business-specific core feature on Mini App and above",
    ],
    excluded: [
      "Advanced POS, channel managers or complex management platforms in the base plan",
      "Booking.com / Airbnb synchronization and dynamic pricing in the €15 plan",
      "Online payment processing in the entry-level plan",
      "External integrations (POS, PMS, ERP, invoicing) below the Pro Management plan",
    ],
    howToChoose:
      "Choose the minimum package by need: if you only need an online presence, Presence is enough. If you need one core feature such as reservations, appointments, bookings or quote requests, Mini App (from €15/month) is the minimum. Add Mini App Plus for more pages and automations, Business Local for multiple users and higher volume, and Pro Management when you need payments, multiple staff, multiple locations or external integrations.",
    faqs: [
      {
        question: "What is the cheapest NorthSail plan?",
        answer:
          "Presence, from €5/month, which includes a simple website, custom domain, hosting, SSL, WhatsApp button, Google Maps and technical maintenance.",
      },
      {
        question: "Which plan do most small businesses need?",
        answer:
          "Mini App, from €15/month, because it adds one business-specific core feature such as reservations, appointments or quote requests on top of the website.",
      },
      {
        question: "Does the €15 plan include online payments?",
        answer:
          "No. Online payments and external integrations are extras or part of higher plans, not the entry-level Mini App.",
      },
    ],
  },

  contact: {
    locale: "en",
    metaTitle: "Contact NorthSail — get a plan recommendation",
    metaDescription:
      "Tell NorthSail about your business and get a recommendation for the minimum plan that fits. Websites and mini web apps from €15/month.",
    h1: "Tell us about your business",
    intro:
      "Share a few details and we'll recommend the minimum plan that fits your needs — no obligation.",
  },

  industries: {
    restaurants: {
      industry: "restaurants",
      locale: "en",
      metaTitle:
        "Website with online reservations for restaurants from €15/month",
      metaDescription:
        "Give your restaurant its own website with table reservation requests, digital menu, QR menu, opening hours, gallery, WhatsApp and Google Maps — from €15/month with NorthSail.",
      h1: "Website with online reservations for restaurants from €15/month",
      valueProp:
        "Your own restaurant website with table reservation requests, a digital menu and a QR menu — not just an Instagram page.",
      heroText:
        "Restaurants can get their own website with table reservation requests, a digital menu, QR menu, opening hours, location, gallery, a WhatsApp button, Google Maps and direct customer requests — without depending only on Instagram or third-party platforms.",
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
          "The Mini App (from €15/month) covers a website plus the reservation request feature most restaurants need.",
      },
      upgrade:
        "Move up to Mini App Plus for more pages and automations, or Business Local if you handle high reservation volume, multiple rooms or several staff members.",
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
      metaTitle:
        "Website with appointment booking for hairdressers from €15/month",
      metaDescription:
        "Give your salon or barbershop its own website with an online appointment system, services, prices, staff and schedules — from €15/month with NorthSail.",
      h1: "Website with online appointments for hairdressers from €15/month",
      valueProp:
        "Your own salon website with a personalized booking system, services, prices and staff schedules.",
      heroText:
        "Hairdressers and barbers can get their own website with a personalized booking system, a list of services and prices, staff profiles and schedules — so clients book online instead of filling your phone with messages.",
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
        "NorthSail builds and manages a salon website with a personalized appointment booking system, your full service and price list, staff profiles and schedules. Clients request appointments online and you manage everything from one simple panel.",
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
          "The Mini App (from €15/month) covers a website plus the appointment booking feature salons need.",
      },
      upgrade:
        "Choose Mini App Plus when you have several stylists and weekly schedules, or Business Local for higher volume and multiple users.",
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
            "Online payments and deposits are an extra or part of higher plans, not the entry-level Mini App.",
        },
      ],
      cta: { label: "Start your salon website", target: "contact" },
    },

    hotels: {
      industry: "hotels",
      locale: "en",
      metaTitle:
        "Hotel website with direct reservation requests from €15/month",
      metaDescription:
        "Give your hotel or local accommodation its own website with rooms, amenities, gallery, location and a direct booking request form — from €15/month with NorthSail.",
      h1: "Hotel website with direct reservation requests from €15/month",
      valueProp:
        "Your own hotel website with rooms, amenities, gallery and a direct reservation request form.",
      heroText:
        "Hotels and local accommodations can have their own website with rooms, amenities, gallery, location, a direct reservation request form, WhatsApp, contact and a basic availability/request flow — so guests can reach you directly.",
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
        "NorthSail builds and manages a hotel website that presents your rooms, amenities and gallery, shows your location, and takes direct reservation requests through a simple form — giving you a commission-free channel alongside the platforms.",
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
          "The Mini App (from €15/month) covers a website with a simple direct booking request flow.",
      },
      upgrade:
        "Choose Mini App Plus or Business Local if you need several room types, manual availability, more pages, seasonal prices or more advanced management.",
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
            "Yes, and for several room types with manual availability and seasonal prices we recommend Mini App Plus or Business Local.",
        },
      ],
      cta: { label: "Start your hotel website", target: "contact" },
    },

    gyms: {
      industry: "gyms",
      locale: "en",
      metaTitle:
        "Gym website with class schedules and trial requests from €15/month",
      metaDescription:
        "Give your gym or studio its own website with class schedules, trial class requests, memberships and trainer profiles — from €15/month with NorthSail.",
      h1: "Gym website with class schedules and signups from €15/month",
      valueProp:
        "Your own gym website with class schedules, trial class requests and trainer profiles.",
      heroText:
        "Gyms, studios and personal trainers can get their own website with class schedules, trial class requests, membership information and trainer profiles — so prospects can see your timetable and sign up online.",
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
          "The Mini App (from €15/month) covers a website plus the schedule and trial-request feature.",
      },
      upgrade:
        "Move up to Mini App Plus for weekly schedules and several trainers, or Business Local for higher volume and member management.",
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
            "Yes. Your class timetable is part of the site; for frequently changing weekly schedules with several trainers we recommend Mini App Plus.",
        },
        {
          question: "Does it handle recurring membership payments?",
          answer:
            "Recurring billing and payments are an extra or part of higher plans, not the entry-level Mini App.",
        },
      ],
      cta: { label: "Start your gym website", target: "contact" },
    },

    clinics: {
      industry: "clinics",
      locale: "en",
      metaTitle:
        "Clinic website with appointment & quote requests from €15/month",
      metaDescription:
        "Give your clinic or local service its own website with appointment requests, quote requests, contact forms, WhatsApp and Google Maps — from €15/month with NorthSail.",
      h1: "Clinic website with appointment and quote requests from €15/month",
      valueProp:
        "Your own clinic website with appointment requests, quote requests and clear contact options.",
      heroText:
        "Clinics and local services can get their own website with appointment requests, quote requests, contact forms, a WhatsApp button and Google Maps — a trustworthy online home that turns visitors into booked appointments.",
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
          "The Mini App (from €15/month) covers a website plus appointment or quote request forms.",
      },
      upgrade:
        "Choose Business Local for several practitioners, higher volume and basic reports, or Pro Management for integrations and advanced workflows.",
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
      metaTitle:
        "Website with quote requests for local services from €15/month",
      metaDescription:
        "Electricians, plumbers, cleaning and renovation companies, gardeners and pool services: get your own website with quote request flows — from €15/month with NorthSail.",
      h1: "Website with quote requests for local trades from €15/month",
      valueProp:
        "Your own website with a clear quote request flow for trades and home services.",
      heroText:
        "Local trades — electricians, plumbers, cleaning companies, renovation companies, gardeners and pool services — can get their own website with a structured quote request flow, service list, gallery, WhatsApp and Google Maps, so customers send qualified requests instead of vague messages.",
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
          "The Mini App (from €15/month) covers a website plus a structured quote request feature.",
      },
      upgrade:
        "Choose Mini App Plus for more pages and automations, or Business Local / Pro Management for teams, scheduling and integrations.",
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
            "You pick the one core feature your business runs on; that's the Mini App plan, from €15/month.",
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
            "Reservations, appointments, class signups, trial requests or quote requests — one core booking feature per Mini App plan, matched to your business type.",
        },
        {
          question: "How much does a website with bookings cost?",
          answer:
            "From €15/month with the Mini App plan, including domain, hosting, SSL and maintenance.",
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
            "When you need to take bookings or requests, the Mini App plan adds one core feature from €15/month.",
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
        "NorthSail offers affordable small-business websites from €5/month (Presence: website, custom domain, hosting, SSL, WhatsApp, Google Maps, maintenance) and from €15/month for a Mini App with one booking feature. Low prices come with clear limits: payments and advanced integrations are extras or higher plans.",
      faqs: [
        {
          question: "How can a website be only €5/month?",
          answer:
            "The Presence plan is a focused one-page website with domain, hosting, SSL and maintenance included. Low price means clear limits — it's a basic presence, not a complex app.",
        },
        {
          question: "Is the domain really included?",
          answer:
            "Yes. A custom domain, hosting and SSL are part of the plan, with technical maintenance handled for you.",
        },
        {
          question: "What if I need bookings later?",
          answer:
            "Upgrade to the Mini App plan, from €15/month, which adds one business-specific booking or request feature.",
        },
      ],
      cta: { label: "Get your affordable website", target: "contact" },
    },
  },
};

export default en;
