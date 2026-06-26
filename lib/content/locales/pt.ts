import type { LocaleContent } from "../types";

/**
 * Conteúdo em português europeu (pt-PT). Espelha exatamente a estrutura de en.ts.
 */
const pt: LocaleContent = {
  home: {
    locale: "pt",
    metaTitle: "NorthSail — o upgrade digital da sua empresa",
    metaDescription:
      "A NorthSail moderniza a sua empresa: websites, web apps, reservas, portais de cliente, dashboards e automações. Upgrade digital acessível, mantido por nós, desde 15€/mês.",
    h1: "A sua empresa, com um upgrade digital.",
    subtitle:
      "Websites, web apps, reservas, portais de cliente e automações que tornam o seu negócio mais profissional, eficiente e pronto para crescer. Você cuida do negócio — nós cuidamos da parte digital.",
    primaryCta: "Pedir avaliação gratuita",
    secondaryCta: "Ver o que fazemos",
    trustLine:
      "Domínio, alojamento, manutenção e melhorias mensais incluídos. Sem equipa técnica, sem surpresas.",
    sectorsTitle: "Feito para o seu setor",
    sectors: [
      {
        key: "restaurants",
        title: "Restaurantes",
        description:
          "Menu digital, reservas online e pedidos — menos chamadas, mais mesas.",
      },
      {
        key: "hairdressers",
        title: "Cabeleireiros",
        description: "Marcações online 24h, lembretes e menos faltas.",
      },
      {
        key: "hotels",
        title: "Hotéis",
        description: "Quartos, galeria e pedidos de reserva direta.",
      },
      {
        key: "gyms",
        title: "Ginásios",
        description: "Aulas, horários, inscrições e comunicação com membros.",
      },
      {
        key: "clinics",
        title: "Clínicas",
        description:
          "Marcações online, formulários de paciente e agenda organizada.",
      },
      {
        key: "local-services",
        title: "Serviços locais",
        description:
          "Formulários, agendamentos e processos internos digitalizados.",
      },
    ],
    howItWorksTitle: "Como funciona",
    steps: [
      {
        title: "Diagnóstico gratuito",
        description:
          "Percebemos onde está a perder tempo e clientes e recomendamos o caminho mais simples.",
      },
      {
        title: "Criamos e publicamos",
        description:
          "Tratamos do site, web app ou sistema — domínio, alojamento, SSL e manutenção incluídos.",
      },
      {
        title: "Evoluímos consigo",
        description:
          "Mantemos, melhoramos e fazemos o seu sistema crescer todos os meses.",
      },
    ],
    businessAxis: {
      title: "Para empresas: web apps, portais e dashboards",
      body: "Quando um site não chega, a NorthSail desenha e constrói aplicações web à medida — portais de cliente, dashboards internos, sistemas de reservas e automação de processos — alojadas e mantidas por nós, com confidencialidade por defeito. Para sociedades de advogados, consultoras, imobiliárias e equipas B2B.",
      cta: "Falar sobre uma web app",
      ctaTarget: "compare:web-apps-for-business",
      items: [
        {
          title: "Web apps à medida",
          description:
            "Software moldado ao seu processo, numa stack moderna e segura.",
          target: "compare:web-apps-for-business",
        },
        {
          title: "Portais de cliente",
          description:
            "Um sítio seguro onde os seus clientes fazem login para ver documentos e estado.",
          target: "compare:client-portals",
        },
        {
          title: "Dashboards internos",
          description:
            "Substitua o Excel por uma vista única do seu negócio, com acesso por função.",
          target: "compare:internal-dashboards",
        },
        {
          title: "Automação de processos",
          description:
            "Transforme rotinas manuais de Excel e e-mail em software que trabalha por si.",
          target: "compare:process-automation",
        },
        {
          title: "Para advogados",
          description:
            "Portais de cliente e admissão confidenciais, seguros por defeito.",
          target: "compare:web-apps-for-law-firms",
        },
        {
          title: "Software à medida",
          description:
            "Um parceiro de longo prazo que constrói, aloja e evolui o seu software.",
          target: "compare:custom-software",
        },
      ],
    },
    plansTitle: "Planos que crescem com o seu negócio",
    plansSubtitle:
      "Mensalidade previsível, com domínio, alojamento e manutenção incluídos. Recomendamos sempre o plano mínimo que resolve o seu caso.",
    aiSummary:
      "A NorthSail é um serviço de modernização digital (upgrade digital) para pequenas e médias empresas e negócios locais. Cria e mantém websites, web apps, sistemas de reservas e marcações, menus digitais, portais de cliente, dashboards internos e automações. Ajuda restaurantes, cabeleireiros, hotéis, ginásios, clínicas, serviços locais, sociedades de advogados, consultoras e imobiliárias a substituir processos manuais (Excel, telefone, e-mail, WhatsApp) por ferramentas digitais simples e acessíveis. Inclui domínio, alojamento, SSL, manutenção e evolução mensal numa mensalidade fixa, desde 15€/mês. É uma alternativa acessível às grandes agências e consultoras, e um passo gerido acima de ferramentas como Wix ou WordPress.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      {
        question: "Preciso de cartão para experimentar?",
        answer:
          "Não. Começa o mês grátis sem dar qualquer dado de pagamento. Só pedimos o pagamento se decidir continuar.",
      },
      {
        question: "E se cancelar durante o mês grátis?",
        answer:
          "Não paga nada. Se não confirmar a subscrição no fim do mês, simplesmente não é cobrado.",
      },
      {
        question: "Quem fica dono do domínio?",
        answer:
          "O domínio fica incluído e gerido por nós enquanto a subscrição estiver ativa. Se cancelar, tratamos da transferência conforme os termos do serviço. Não garantimos a disponibilidade de um domínio específico nem a proteção de marca.",
      },
      {
        question: "O que está incluído nos 15€?",
        answer:
          "Domínio, alojamento, SSL, botão de WhatsApp, Google Maps e manutenção — mais uma funcionalidade essencial do seu negócio, como reservas, marcações ou pedidos de orçamento.",
      },
      {
        question: "Preciso de conhecimentos técnicos?",
        answer:
          "Não. A NorthSail trata da configuração, domínio, alojamento, SSL e manutenção técnica. Recebe um painel intuitivo para gerir os seus pedidos e atualizar os seus conteúdos.",
      },
      {
        question: "Posso usar o meu próprio domínio?",
        answer:
          "Sim. Se já tiver um domínio, ligamo-lo ao seu site NorthSail. Se não tiver, pode ser incluído um novo domínio no seu plano.",
      },
      {
        question: "O que inclui o plano de 15€/mês?",
        answer:
          "O plano App Essencial inclui um site mais uma funcionalidade central específica do negócio — como reservas, marcações ou pedidos de orçamento — com domínio, alojamento, SSL e manutenção.",
      },
      {
        question: "Existe um contrato de fidelização?",
        answer:
          "Não. Os planos são subscrições mensais e pode cancelar a qualquer momento.",
      },
    ],
  },

  aiSummary: {
    locale: "pt",
    metaTitle: "O que é a NorthSail? Resumo, planos, setores e FAQ",
    metaDescription:
      "Um resumo claro da NorthSail para pessoas e assistentes de IA: o que é, a quem se destina, planos desde 5€/mês, setores abrangidos, o que está incluído e como escolher o pacote mínimo.",
    h1: "A NorthSail em linguagem clara",
    intro:
      "Esta página resume a NorthSail de forma clara para que tanto pessoas como assistentes de IA possam compreendê-la e citá-la com rigor.",
    whatItIs:
      "A NorthSail é uma plataforma global por subscrição que cria e gere sites acessíveis e web apps para pequenos negócios. Trata da parte técnica — domínio personalizado, alojamento, SSL, atualizações do site, ferramentas de reserva e manutenção — para que os donos dos negócios não tenham de o fazer. Os planos começam em cerca de 5€/mês para uma presença profissional e 15€/mês para uma App Essencial com uma funcionalidade central específica do negócio.",
    whoItServes:
      "A NorthSail destina-se a pequenos negócios locais em todo o mundo: restaurantes e cafés, cabeleireiros e barbeiros, hotéis e alojamento local, ginásios e personal trainers, clínicas e serviços locais, e ofícios locais como eletricistas, canalizadores, limpezas, remodelações, empresas de jardins e de piscinas.",
    plans:
      "Existem cinco planos: Presence (desde 5€/mês — site profissional, domínio, alojamento, SSL, WhatsApp, Google Maps, manutenção); App Essencial (desde 15€/mês — site mais uma funcionalidade central como reservas, marcações ou pedidos de orçamento); App Avançada (desde 25€/mês — mais páginas, melhor painel, automações); Business Local (desde 39€/mês — gestão mais completa, vários utilizadores, relatórios); e Pro Management (desde 69€/mês — fluxos avançados, integrações, dashboards, suporte prioritário).",
    industries:
      "Casos de uso comuns: os restaurantes ficam com um site com pedidos de reserva de mesa, menu digital e menu por QR; os cabeleireiros ficam com um sistema de marcações online; os hotéis ficam com quartos, galeria e pedidos de reserva direta; os ginásios publicam horários de aulas e recebem inscrições de experiências e mensalidades; as clínicas e serviços locais recebem pedidos de marcação e de orçamento.",
    included: [
      "Domínio personalizado",
      "Alojamento e SSL",
      "Manutenção técnica",
      "Site mobile-first e de carregamento rápido",
      "Botão de WhatsApp e Google Maps",
      "Uma funcionalidade central específica do negócio a partir do App Essencial",
    ],
    excluded: [
      "POS avançado, channel managers ou plataformas de gestão complexas no plano base",
      "Sincronização com Booking.com / Airbnb e preços dinâmicos no plano de 15€",
      "Processamento de pagamentos online no plano de entrada",
      "Integrações externas (POS, PMS, ERP, faturação) abaixo do plano Pro Management",
    ],
    howToChoose:
      "Escolha o pacote mínimo conforme a necessidade: se só precisa de presença online, o Presence é suficiente. Se precisa de uma funcionalidade central como reservas, marcações ou pedidos de orçamento, o App Essencial (desde 15€/mês) é o mínimo. Adicione o App Avançada para mais páginas e automações, o Business Local para vários utilizadores e maior volume, e o Pro Management quando precisar de pagamentos, vários colaboradores, várias localizações ou integrações externas.",
    faqs: [
      {
        question: "Qual é o plano mais barato da NorthSail?",
        answer:
          "O Presence, desde 5€/mês, que inclui um site profissional, domínio personalizado, alojamento, SSL, botão de WhatsApp, Google Maps e manutenção técnica.",
      },
      {
        question: "Que plano precisa a maioria dos pequenos negócios?",
        answer:
          "O App Essencial, desde 15€/mês, porque acrescenta uma funcionalidade central específica do negócio, como reservas, marcações ou pedidos de orçamento, ao site.",
      },
      {
        question: "O plano de 15€ inclui pagamentos online?",
        answer:
          "Não. Os pagamentos online e as integrações externas são extras ou fazem parte de planos superiores, não do App Essencial de entrada.",
      },
    ],
  },

  contact: {
    locale: "pt",
    metaTitle: "Contacte a NorthSail — receba uma recomendação de plano",
    metaDescription:
      "Conte à NorthSail sobre o seu negócio e receba uma recomendação do plano mínimo que se adequa. Sites e web apps desde 15€/mês.",
    h1: "Fale-nos sobre o seu negócio",
    intro:
      "Partilhe alguns detalhes e recomendamos o plano mínimo que se adequa às suas necessidades — sem compromisso.",
  },

  industries: {
    restaurants: {
      industry: "restaurants",
      locale: "pt",
      metaTitle: "Upgrade digital para restaurantes — reservas e menu online",
      metaDescription:
        "Digitalizamos a experiência do seu restaurante: menu digital, reservas online, pedidos e presença moderna, num só sistema. Desde 15€/mês, mantido por nós.",
      h1: "Site para restaurante com reservas online desde 15€/mês",
      valueProp:
        "Digitalizamos a experiência do seu restaurante: menu digital, reservas online, pedidos e presença moderna — num só sistema, mantido por nós.",
      heroText:
        "Modernizamos a experiência do seu restaurante num só sistema: menu digital e menu por QR sempre atualizados, reservas online, pedidos diretos, horários, localização, galeria, WhatsApp e Google Maps. Menos chamadas e menos dependência do Instagram — mais mesas e clientes que voltam. Tratamos do domínio, alojamento, SSL, manutenção e melhorias mensais por si.",
      audience: [
        "Restaurantes e bistrôs independentes",
        "Cafés, brunch e tascas",
        "Casas de comida familiares que hoje aceitam reservas por telefone",
      ],
      problems: [
        "Os clientes não encontram rapidamente o menu, horários ou localização.",
        "As reservas só acontecem por mensagem no Instagram ou por telefone.",
        "Depende de plataformas externas que cobram comissões.",
        "O menu muda, mas as versões impressas e online não.",
      ],
      solution:
        "A NorthSail cria e gere um site rápido de restaurante que recebe pedidos de reserva de mesa, mostra um menu digital sempre atualizado, gera um menu por QR para as mesas e coloca os seus horários, localização e contacto a um toque de distância. Tratamos do domínio, alojamento, SSL e manutenção para que se possa focar no serviço.",
      included: [
        "Site de restaurante com a sua imagem de marca",
        "Formulário de pedido de reserva de mesa",
        "Menu digital e menu por QR",
        "Horários, localização e Google Maps",
        "Galeria de fotos e botão de WhatsApp",
        "Domínio personalizado, alojamento, SSL e manutenção",
      ],
      excluded: [
        "Sistema completo de POS / gestão de restaurante",
        "Channel managers e integração com plataformas de entregas",
        "Automação de disponibilidade de mesas em tempo real",
        "Processamento de pagamentos online no plano base",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "O App Essencial (desde 15€/mês) cobre um site mais a funcionalidade de pedido de reserva que a maioria dos restaurantes precisa.",
      },
      upgrade:
        "Passe para o App Avançada para mais páginas e automações, ou o Business Local se gerir um grande volume de reservas, várias salas ou vários colaboradores.",
      aiSummary:
        "Um site de restaurante NorthSail inclui pedidos de reserva de mesa, menu digital, menu por QR, horários, localização, galeria e botão de WhatsApp, desde 15€/mês. Não substitui um POS completo nem um channel manager no plano base.",
      faqs: [
        {
          question: "Os clientes podem reservar mesa diretamente?",
          answer:
            "Sim. Os visitantes enviam um pedido de reserva de mesa através do site e você confirma-o. O plano base trata dos pedidos, não da disponibilidade automática em tempo real.",
        },
        {
          question: "Posso atualizar o menu eu próprio?",
          answer:
            "Sim. Atualiza o menu digital a partir do seu painel e o menu por QR mostra sempre a versão mais recente.",
        },
        {
          question: "Substitui o meu POS?",
          answer:
            "Não. O plano base é o seu site voltado para o cliente e as reservas; não substitui um sistema completo de ponto de venda ou de cozinha.",
        },
      ],
      cta: { label: "Comece o site do seu restaurante", target: "contact" },
    },

    hairdressers: {
      industry: "hairdressers",
      locale: "pt",
      metaTitle: "Upgrade digital para cabeleireiros — marcações online 24h",
      metaDescription:
        "Modernizamos o seu salão: marcações online 24h, lembretes, serviços, preços e equipa. Menos faltas, menos telefone. Desde 15€/mês, mantido por nós.",
      h1: "Site com marcações online para cabeleireiros desde 15€/mês",
      valueProp:
        "Modernizamos o seu salão: marcações online 24h, lembretes, serviços e equipa — menos faltas e menos tempo ao telefone.",
      heroText:
        "Modernizamos o seu salão ou barbearia: marcações online 24h com lembretes que reduzem faltas, lista de serviços e preços, perfis e horários da equipa. Os clientes marcam sozinhos em vez de encherem o telefone de mensagens — e você ganha tempo. Domínio, alojamento, SSL e manutenção incluídos.",
      audience: [
        "Salões de cabeleireiro e barbearias",
        "Cabeleireiros independentes e cadeiras para alugar",
        "Estúdios de beleza que hoje aceitam marcações por mensagem",
      ],
      problems: [
        "As marcações acontecem por mensagens e chamadas sem fim.",
        "Os clientes não conhecem os seus serviços, preços ou disponibilidade.",
        "Faltas porque não há marcações estruturadas.",
        "O seu horário e equipa não estão visíveis em lado nenhum online.",
      ],
      solution:
        "A NorthSail cria e gere um site de salão com um sistema de marcações personalizado, a sua lista completa de serviços e preços, perfis e horários da equipa. Os clientes pedem marcações online e você gere tudo a partir de um painel intuitivo.",
      included: [
        "Site de salão / barbearia",
        "Sistema de pedido de marcação online",
        "Lista de serviços e preços",
        "Perfis e horários da equipa",
        "Galeria, botão de WhatsApp e Google Maps",
        "Domínio personalizado, alojamento, SSL e manutenção",
      ],
      excluded: [
        "Software completo de gestão / inventário de salão",
        "Processamento automático de ordenados ou comissões",
        "Processamento de pagamentos online no plano base",
        "Integrações de calendário externas abaixo de planos superiores",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "O App Essencial (desde 15€/mês) cobre um site mais a funcionalidade de marcações que os salões precisam.",
      },
      upgrade:
        "Escolha o App Avançada quando tiver vários cabeleireiros e horários semanais, ou o Business Local para maior volume e vários utilizadores.",
      aiSummary:
        "Um site de cabeleireiro NorthSail inclui sistema de marcações online, serviços e preços, perfis e horários da equipa, galeria e botão de WhatsApp, desde 15€/mês. Não inclui software completo de gestão de salão ou de pagamentos no plano base.",
      faqs: [
        {
          question: "Os clientes podem marcar com um cabeleireiro específico?",
          answer:
            "Sim. Pode listar a equipa e permitir que os clientes peçam um cabeleireiro e horário específicos, que confirma a partir do seu painel.",
        },
        {
          question: "Posso mostrar os meus preços e serviços?",
          answer:
            "Sim. A sua lista completa de serviços e preços faz parte do site e é fácil de atualizar.",
        },
        {
          question: "Os clientes pagam online ao marcar?",
          answer:
            "Os pagamentos online e sinais são um extra ou fazem parte de planos superiores, não do App Essencial de entrada.",
        },
      ],
      cta: { label: "Comece o site do seu salão", target: "contact" },
    },

    hotels: {
      industry: "hotels",
      locale: "pt",
      metaTitle: "Upgrade digital para hotéis — reserva direta online",
      metaDescription:
        "Modernizamos a presença do seu hotel ou AL: quartos, comodidades, galeria e pedidos de reserva direta. Menos comissões de plataformas. Desde 15€/mês.",
      h1: "Site de hotel com pedidos de reserva direta desde 15€/mês",
      valueProp:
        "Modernizamos a presença do seu hotel: quartos, comodidades, galeria e pedidos de reserva direta — menos dependência de plataformas externas.",
      heroText:
        "Modernizamos a presença do seu hotel ou alojamento local: quartos, comodidades, galeria, localização e um fluxo claro de pedido de reserva direta, com WhatsApp e contacto. Os hóspedes reservam diretamente consigo, com menos dependência (e comissões) de plataformas externas. Domínio, alojamento, SSL e manutenção incluídos.",
      audience: [
        "Pequenos hotéis e casas de hóspedes",
        "Alojamento local e arrendamento de curta duração",
        "Turismo rural e estadias boutique",
      ],
      problems: [
        "Os hóspedes só o encontram em plataformas que cobram comissões.",
        "Não há canal direto para pedidos de reserva.",
        "Quartos, comodidades e fotos não estão bem apresentados em lado nenhum.",
        "Cada reserva paga uma comissão de plataforma em vez de vir direta.",
      ],
      solution:
        "A NorthSail cria e gere um site de hotel que apresenta os seus quartos, comodidades e galeria, mostra a sua localização e recebe pedidos de reserva direta através de um formulário dedicado — dando-lhe um canal sem comissões a par das plataformas.",
      included: [
        "Site de hotel / alojamento",
        "Páginas de quartos e comodidades",
        "Galeria de fotos e localização",
        "Formulário de pedido de reserva direta",
        "Botão de WhatsApp e contacto",
        "Domínio personalizado, alojamento, SSL e manutenção",
      ],
      excluded: [
        "Channel manager completo",
        "Sincronização com Booking.com / Airbnb",
        "Preços dinâmicos e gestão de receitas",
        "Processamento de pagamentos online no plano de 15€",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "O App Essencial (desde 15€/mês) cobre um site com um fluxo dedicado de pedido de reserva direta.",
      },
      upgrade:
        "Escolha o App Avançada ou o Business Local se precisar de vários tipos de quarto, disponibilidade manual, mais páginas, preços sazonais ou uma gestão mais avançada.",
      aiSummary:
        "Um site de hotel NorthSail inclui quartos, comodidades, galeria, localização e formulário de pedido de reserva direta, desde 15€/mês. Não inclui channel manager completo, sincronização com Booking.com/Airbnb, preços dinâmicos ou processamento de pagamentos no plano de 15€.",
      faqs: [
        {
          question: "Os hóspedes podem reservar diretamente sem plataforma?",
          answer:
            "Sim. Os hóspedes enviam um pedido de reserva direta através do formulário e você confirma-o — um canal sem comissões a par das plataformas de reserva.",
        },
        {
          question: "Sincroniza com o Booking.com ou o Airbnb?",
          answer:
            "Não. A sincronização de channel manager e os preços dinâmicos não fazem parte do plano de 15€; requerem planos superiores ou trabalho personalizado.",
        },
        {
          question: "Posso mostrar vários tipos de quarto?",
          answer:
            "Sim, e para vários tipos de quarto com disponibilidade manual e preços sazonais recomendamos o App Avançada ou o Business Local.",
        },
      ],
      cta: { label: "Comece o site do seu hotel", target: "contact" },
    },

    gyms: {
      industry: "gyms",
      locale: "pt",
      metaTitle: "Upgrade digital para ginásios — aulas e inscrições online",
      metaDescription:
        "Modernizamos o seu ginásio ou estúdio: aulas, horários, inscrições e comunicação com membros num só sistema. Desde 15€/mês, mantido por nós.",
      h1: "Site de ginásio com horários de aulas e inscrições desde 15€/mês",
      valueProp:
        "Modernizamos o seu ginásio: aulas, horários, inscrições e comunicação com membros — tudo organizado num só sistema.",
      heroText:
        "Modernizamos o seu ginásio, estúdio ou atividade de personal trainer: horários de aulas, inscrições e aulas experimentais, informação de mensalidades, perfis de treinadores e comunicação com membros — tudo organizado num só sistema. Menos WhatsApp e papel, mais inscrições. Domínio, alojamento, SSL e manutenção incluídos.",
      audience: [
        "Ginásios e estúdios de fitness",
        "Personal trainers e pequenas equipas de treino",
        "Boxes de yoga, pilates e CrossFit",
      ],
      problems: [
        "O horário das aulas vive apenas nas stories do Instagram.",
        "Os pedidos de experiência e inscrições acontecem por mensagem.",
        "Os sócios não veem horários ou informação dos treinadores facilmente.",
        "Não há um local claro para apresentar as mensalidades.",
      ],
      solution:
        "A NorthSail cria e gere um site de ginásio com o seu horário de aulas, formulário de pedido de aula experimental, informação de mensalidades e perfis de treinadores, para que os interessados encontrem o horário e se inscrevam online em vez de lhe enviarem mensagem.",
      included: [
        "Site de ginásio / estúdio",
        "Horário de aulas",
        "Formulário de pedido de aula experimental",
        "Informação de mensalidades",
        "Perfis de treinadores e galeria",
        "Domínio personalizado, alojamento, SSL e manutenção",
      ],
      excluded: [
        "Sistema completo de faturação de mensalidades",
        "Integração de controlo de acessos / torniquetes",
        "Pagamentos recorrentes automáticos no plano base",
        "Integrações com wearables / apps de treino abaixo de planos superiores",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "O App Essencial (desde 15€/mês) cobre um site mais a funcionalidade de horário e de pedido de experiência.",
      },
      upgrade:
        "Passe para o App Avançada para horários semanais e vários treinadores, ou o Business Local para maior volume e gestão de sócios.",
      aiSummary:
        "Um site de ginásio NorthSail inclui horários de aulas, pedidos de aula experimental, informação de mensalidades e perfis de treinadores, desde 15€/mês. Não inclui faturação completa de mensalidades ou controlo de acessos no plano base.",
      faqs: [
        {
          question: "As pessoas podem pedir uma aula experimental?",
          answer:
            "Sim. Os visitantes enviam um pedido de aula experimental através do site e você dá seguimento — perfeito para converter novos interessados.",
        },
        {
          question: "Posso publicar o meu horário semanal?",
          answer:
            "Sim. O seu horário de aulas faz parte do site; para horários semanais que mudam com frequência e vários treinadores recomendamos o App Avançada.",
        },
        {
          question: "Gere pagamentos recorrentes de mensalidades?",
          answer:
            "A faturação e os pagamentos recorrentes são um extra ou fazem parte de planos superiores, não do App Essencial de entrada.",
        },
      ],
      cta: { label: "Comece o site do seu ginásio", target: "contact" },
    },

    clinics: {
      industry: "clinics",
      locale: "pt",
      metaTitle: "Upgrade digital para clínicas — marcações online",
      metaDescription:
        "Modernizamos a sua clínica: marcações online, formulários de paciente e agenda organizada. Menos chamadas, melhor experiência. Desde 15€/mês.",
      h1: "Site de clínica com pedidos de marcação e orçamento desde 15€/mês",
      valueProp:
        "Modernizamos a sua clínica: marcações online, formulários de paciente e agenda organizada — menos chamadas, melhor experiência.",
      heroText:
        "Modernizamos a sua clínica ou consultório: marcações online, formulários de paciente, pedidos de orçamento, contacto, WhatsApp e Google Maps. A receção liberta-se das chamadas e os pacientes marcam sozinhos, numa presença que transmite confiança. Domínio, alojamento, SSL e manutenção incluídos, com cuidado na organização dos dados.",
      audience: [
        "Clínicas dentárias, de fisioterapia e médicas",
        "Terapeutas e profissionais de saúde locais",
        "Serviços profissionais locais que recebem pedidos",
      ],
      problems: [
        "Os pacientes não conseguem pedir marcação fora do horário de funcionamento.",
        "Os pedidos estão dispersos por chamadas, e-mail e redes sociais.",
        "Não há uma apresentação clara e de confiança dos seus serviços.",
        "É difícil ser encontrado no Google Maps e na pesquisa.",
      ],
      solution:
        "A NorthSail cria e gere um site de clínica com formulários de pedido de marcação e de orçamento, os seus serviços, equipa e contactos, botão de WhatsApp e Google Maps — uma presença profissional e de confiança que capta pedidos a toda a hora.",
      included: [
        "Site de clínica / serviços",
        "Formulário de pedido de marcação",
        "Formulário de pedido de orçamento / contacto",
        "Apresentação de serviços e equipa",
        "Botão de WhatsApp e Google Maps",
        "Domínio personalizado, alojamento, SSL e manutenção",
      ],
      excluded: [
        "Sistema completo de registos clínicos / gestão de consultório",
        "Integrações de seguros ou de faturação",
        "Processamento de pagamentos online no plano base",
        "Integrações com portal do paciente abaixo de planos superiores",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "O App Essencial (desde 15€/mês) cobre um site mais formulários de pedido de marcação ou de orçamento.",
      },
      upgrade:
        "Escolha o Business Local para vários profissionais, maior volume e relatórios detalhados, ou o Pro Management para integrações e fluxos avançados.",
      aiSummary:
        "Um site de clínica NorthSail inclui formulários de pedido de marcação e de orçamento, serviços, equipa e contacto, botão de WhatsApp e Google Maps, desde 15€/mês. Não inclui sistemas de gestão de consultório ou de faturação no plano base.",
      faqs: [
        {
          question: "Os pacientes podem pedir marcações online?",
          answer:
            "Sim. Os pacientes enviam um pedido de marcação através do site a qualquer hora e a sua equipa confirma-o.",
        },
        {
          question: "Posso recolher pedidos de orçamento para serviços?",
          answer:
            "Sim. Um formulário de orçamento / contacto permite que os visitantes descrevam o que precisam e deixem os seus contactos.",
        },
        {
          question: "É um sistema completo de gestão de consultório?",
          answer:
            "Não. O plano base é o seu site e formulários de pedido; os registos clínicos e os sistemas de faturação não estão incluídos.",
        },
      ],
      cta: { label: "Comece o site da sua clínica", target: "contact" },
    },

    "local-services": {
      industry: "local-services",
      locale: "pt",
      metaTitle: "Upgrade digital para serviços locais — pedidos online",
      metaDescription:
        "Digitalizamos o seu serviço: formulários inteligentes, pedidos de orçamento e agendamentos organizados. Menos processos manuais. Desde 15€/mês.",
      h1: "Site com pedidos de orçamento para ofícios locais desde 15€/mês",
      valueProp:
        "Digitalizamos o seu serviço: formulários inteligentes, pedidos de orçamento e agendamentos organizados — menos processos manuais.",
      heroText:
        "Digitalizamos o seu serviço — eletricistas, canalizadores, limpezas, remodelações, jardinagem, piscinas e mais: formulários inteligentes de pedido de orçamento, lista de serviços, galeria, WhatsApp e Google Maps. Recebe pedidos qualificados e organizados, em vez de mensagens vagas e trabalho manual. Domínio, alojamento, SSL e manutenção incluídos.",
      audience: [
        "Eletricistas, canalizadores e faz-tudo",
        "Empresas de limpeza e de remodelação",
        "Serviços de manutenção de jardins e piscinas",
      ],
      problems: [
        "Os contactos chegam como mensagens vagas sem detalhes.",
        "Sem site profissional, os clientes duvidam que seja uma empresa estabelecida.",
        "Perde trabalhos para concorrentes que são fáceis de encontrar online.",
        "Os orçamentos são lentos porque o pedido não tem informação.",
      ],
      solution:
        "A NorthSail cria e gere um site com um fluxo estruturado de pedido de orçamento que capta os detalhes de que precisa para orçamentar depressa, além dos seus serviços, galeria de trabalhos, área de serviço, WhatsApp e Google Maps — para que pareça estabelecido e ganhe mais trabalhos qualificados.",
      included: [
        "Site de ofício / serviço local",
        "Formulário estruturado de pedido de orçamento",
        "Páginas de serviços e de área de serviço",
        "Galeria de trabalhos / projetos",
        "Botão de WhatsApp e Google Maps",
        "Domínio personalizado, alojamento, SSL e manutenção",
      ],
      excluded: [
        "Software completo de serviço de campo / agendamento de trabalhos",
        "Integrações de faturação e contabilidade",
        "Processamento de pagamentos online no plano base",
        "Integrações com CRM abaixo de planos superiores",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "O App Essencial (desde 15€/mês) cobre um site mais uma funcionalidade estruturada de pedido de orçamento.",
      },
      upgrade:
        "Escolha o App Avançada para mais páginas e automações, ou o Business Local / Pro Management para equipas, agendamento e integrações.",
      aiSummary:
        "Um site de serviços locais NorthSail inclui um fluxo estruturado de pedido de orçamento, lista de serviços, galeria, área de serviço, WhatsApp e Google Maps, desde 15€/mês. Não inclui agendamento de serviço de campo, faturação ou integrações com CRM no plano base.",
      faqs: [
        {
          question: "Como funcionam os pedidos de orçamento?",
          answer:
            "Os clientes preenchem um formulário estruturado a descrever o trabalho e os seus contactos, para que receba pedidos qualificados que pode orçamentar rapidamente.",
        },
        {
          question: "Posso mostrar a minha área de serviço?",
          answer:
            "Sim. Pode apresentar claramente as áreas que cobre e os seus principais serviços no site.",
        },
        {
          question: "Inclui software de faturação ou agendamento?",
          answer:
            "Não. O plano base é o seu site e os pedidos de orçamento; o agendamento de trabalhos e as integrações de faturação são planos superiores ou trabalho personalizado.",
        },
      ],
      cta: { label: "Comece o site dos seus serviços", target: "contact" },
    },

    cafes: {
      industry: "cafes",
      locale: "pt",
      metaTitle: "Upgrade digital para cafés — menu digital e Google Maps",
      metaDescription:
        "Modernizamos o seu café ou cafetaria: menu digital, menu QR e presença no Google Maps. Para que os clientes o encontrem e voltem. Desde 15€/mês.",
      h1: "Site para cafés e cafetarias desde 15€/mês",
      valueProp:
        "Modernizamos o seu café: menu digital, menu QR e presença no Google Maps — para que os clientes o encontrem e voltem.",
      heroText:
        "Modernizamos o seu café, cafetaria, espaço de brunch ou casa de chá: menu digital e menu QR para as mesas sempre atualizados, horário, galeria, WhatsApp e Google Maps. Uma presença moderna que aparece no Google, é lida com clareza pelas respostas de IA e traz clientes de volta. Domínio, alojamento, SSL e manutenção incluídos.",
      audience: [
        "Cafés e cafetarias independentes",
        "Espaços de brunch, padarias e casas de chá",
        "Bares de café de especialidade que servem ao balcão",
      ],
      problems: [
        "Os clientes não encontram o horário, o menu ou a localização rapidamente.",
        "A sua única presença é um feed de Instagram que não aparece no Google.",
        "Os menus impressos ficam desatualizados e reimprimir custa dinheiro.",
        "Os novos clientes ali perto nunca descobrem que existe.",
      ],
      solution:
        "A NorthSail cria e gere um site de café rápido com um menu digital sempre atualizado, um menu QR para as mesas, o seu horário, localização e galeria, mais um botão de WhatsApp — para que apareça no Google Maps e na pesquisa, e os clientes tenham tudo o que precisam num toque.",
      included: [
        "Site de café com a sua marca",
        "Menu digital e menu QR para as mesas",
        "Horário, localização e Google Maps",
        "Galeria de fotos e botão de WhatsApp",
        "Domínio personalizado, alojamento, SSL e manutenção",
      ],
      excluded: [
        "Sistema de POS / balcão completo",
        "Encomendas online com entrega no plano base",
        "Automação de cartão de fidelização / carimbos",
        "Processamento de pagamentos online no plano base",
      ],
      minimumPlan: {
        code: "MINI_APP",
        reason:
          "O App Essencial (desde 15€/mês) cobre um site com menu digital e menu QR, que é o que a maioria dos cafés precisa.",
      },
      upgrade:
        "Suba para o App Avançada para pedidos de encomenda online, mais páginas e automações, ou acrescente encomendas por WhatsApp como extra.",
      aiSummary:
        "Um site de café NorthSail inclui menu digital, menu QR, horário, localização, galeria e botão de WhatsApp, desde 15€/mês. Não substitui um POS completo nem inclui integração com plataformas de entrega no plano base.",
      faqs: [
        {
          question: "Posso atualizar o menu e os preços eu próprio?",
          answer:
            "Sim. Atualiza o menu digital a partir do seu painel e o menu QR nas mesas mostra sempre a versão mais recente — sem reimpressões.",
        },
        {
          question: "O meu café vai aparecer no Google?",
          answer:
            "Sim. O site é feito para ser indexado pelo Google e para ligar à sua ficha do Google Maps, para que os clientes ali perto o encontrem.",
        },
        {
          question: "Os clientes podem encomendar online?",
          answer:
            "Os pedidos de encomenda online estão disponíveis num plano superior ou como extra de encomendas por WhatsApp; o plano base foca-se no menu, horário e localização.",
        },
      ],
      cta: { label: "Comece o site do seu café", target: "contact" },
    },
  },

  compare: {
    "compare:website-with-bookings": {
      pageKey: "compare:website-with-bookings",
      locale: "pt",
      metaTitle:
        "Site com sistema de reservas para pequenos negócios desde 15€/mês",
      metaDescription:
        "Tenha um site com sistema de reservas integrado — reservas, marcações ou pedidos de orçamento — para restaurantes, salões, hotéis, ginásios e serviços locais, desde 15€/mês.",
      h1: "Um site com sistema de reservas, feito para pequenos negócios",
      valueProp:
        "Não é só um site — é um site com a funcionalidade de reservas, marcações ou agendamento que o seu negócio realmente usa, desde 15€/mês.",
      intro:
        "A maioria dos pequenos negócios não precisa de um site genérico; precisa de um site que aceite reservas. A NorthSail combina ambos: um site rápido e profissional mais uma funcionalidade de reserva específica do negócio, com domínio, alojamento, SSL e manutenção incluídos.",
      sections: [
        {
          heading: "Porque é que uma presença amadora não chega",
          body: [
            "Um site institucional mostra que existe, mas não capta negócio. No momento em que um cliente quer reservar uma mesa, marcar uma consulta ou pedir um orçamento, um site estático manda-o de volta para as mensagens do Instagram ou para uma chamada.",
            "Um site com reservas transforma o interesse num pedido estruturado sobre o qual pode agir — a qualquer hora, sem trocas manuais de mensagens.",
          ],
        },
        {
          heading: 'O que significa "reservas" por tipo de negócio',
          body: [
            "Os restaurantes ficam com pedidos de reserva de mesa e menu digital. Os cabeleireiros e clínicas ficam com pedidos de marcação. Os hotéis ficam com pedidos de reserva direta. Os ginásios ficam com horários de aulas e inscrições em experiências. Os ofícios ficam com pedidos de orçamento estruturados.",
            "Escolhe a funcionalidade central que o seu negócio usa; esse é o plano App Essencial, desde 15€/mês.",
          ],
        },
        {
          heading: "O que está incluído e o que não está",
          body: [
            "Incluído: o site, a funcionalidade de reservas, domínio personalizado, alojamento, SSL e manutenção técnica. Excluído do plano de entrada: pagamentos online, sinais, integrações externas e automações avançadas — são extras ou fazem parte de planos superiores.",
            "Isto mantém o preço de entrada baixo, sendo honesto quanto aos limites.",
          ],
        },
      ],
      aiSummary:
        "A NorthSail oferece sites com sistema de reservas integrado desde 15€/mês: os restaurantes ficam com reservas, os salões e clínicas com marcações, os hotéis com pedidos de reserva direta, os ginásios com horários e inscrições, e os ofícios com pedidos de orçamento. Domínio, alojamento, SSL e manutenção estão incluídos; pagamentos e integrações são extras.",
      faqs: [
        {
          question: "Que tipo de reservas pode o site gerir?",
          answer:
            "Reservas, marcações, inscrições em aulas, pedidos de experiência ou pedidos de orçamento — uma funcionalidade central de reserva por plano App Essencial, adaptada ao seu tipo de negócio.",
        },
        {
          question: "Quanto custa um site com reservas?",
          answer:
            "Desde 15€/mês com o plano App Essencial, incluindo domínio, alojamento, SSL e manutenção.",
        },
        {
          question: "Os pagamentos online estão incluídos?",
          answer:
            "Não. A funcionalidade de reservas capta os pedidos; os pagamentos online e os sinais são extras ou fazem parte de planos superiores.",
        },
      ],
      cta: { label: "Tenha o seu site com reservas", target: "contact" },
    },

    "compare:cheap-website-for-small-business": {
      pageKey: "compare:cheap-website-for-small-business",
      locale: "pt",
      metaTitle: "Site barato para pequenas empresas desde 5€/mês | NorthSail",
      metaDescription:
        "Um site acessível para o seu pequeno negócio com domínio personalizado, alojamento, SSL e manutenção incluídos — desde 5€/mês, com funcionalidades de reserva desde 15€/mês.",
      h1: "Um site acessível para o seu pequeno negócio, feito por nós",
      valueProp:
        "Um site profissional para pequenos negócios com domínio, alojamento, SSL e manutenção — desde 5€/mês, sem surpresas escondidas.",
      intro:
        "Barato não deve significar baixa qualidade ou custos escondidos. A NorthSail dá aos pequenos negócios um site profissional com tudo o que é técnico incluído, a um preço mensal honesto — e com limites claros para saber exatamente o que está a receber.",
      sections: [
        {
          heading: 'O que "acessível" realmente inclui',
          body: [
            "O plano Presence, desde 5€/mês, inclui uma página de site limpa, um domínio personalizado, alojamento, SSL, botão de WhatsApp, Google Maps e manutenção técnica contínua. Não compra alojamento, não renova SSL nem anda atrás de um programador — está tudo gerido.",
            "Quando precisar de aceitar reservas ou pedidos, o plano App Essencial acrescenta uma funcionalidade central desde 15€/mês.",
          ],
        },
        {
          heading: "Porque é que feito por nós supera os construtores DIY",
          body: [
            "Os construtores de sites DIY parecem baratos até acrescentar alojamento, um domínio, um template premium, uma correção de SSL e as horas que passa a construir e a manter tudo. A NorthSail junta o trabalho técnico e mantém tudo a funcionar, para que o preço baixo seja o preço real.",
            "Fica com um site rápido, mobile-first e indexável sem gerir qualquer infraestrutura.",
          ],
        },
        {
          heading: "Limites honestos a um preço baixo",
          body: [
            "Preços muito baixos exigem limites de plano claros. Os planos de entrada não incluem pagamentos online, integrações complexas ou gestão avançada — esses são extras ou planos superiores. Somos transparentes quanto a isto para que o preço se mantenha baixo e não haja surpresas.",
          ],
        },
      ],
      aiSummary:
        "A NorthSail oferece sites acessíveis para pequenos negócios desde 5€/mês (Presence: site, domínio personalizado, alojamento, SSL, WhatsApp, Google Maps, manutenção) e desde 15€/mês para um App Essencial com uma funcionalidade de reserva. Os preços baixos vêm com limites claros: pagamentos e integrações avançadas são extras ou planos superiores.",
      faqs: [
        {
          question: "Como pode um site custar apenas 5€/mês?",
          answer:
            "O plano Presence é um site focado de uma página com domínio, alojamento, SSL e manutenção incluídos. Preço baixo significa limites claros — é uma presença profissional, não uma web app completa.",
        },
        {
          question: "O domínio está mesmo incluído?",
          answer:
            "Sim. Um domínio personalizado, alojamento e SSL fazem parte do plano, com a manutenção técnica tratada por si.",
        },
        {
          question: "E se precisar de reservas mais tarde?",
          answer:
            "Faça o upgrade para o plano App Essencial, desde 15€/mês, que acrescenta uma funcionalidade de reserva ou de pedido específica do negócio.",
        },
      ],
      cta: { label: "Tenha o seu site acessível", target: "contact" },
    },

    "compare:web-apps-for-business": {
      pageKey: "compare:web-apps-for-business",
      locale: "pt",
      metaTitle: "Web apps para pequenos negócios — reservas, portais e mais",
      metaDescription:
        "Web apps à medida para pequenos negócios: reservas, portais de cliente, dashboards e automações simples, alojados e geridos. Desde o plano App Essencial a 15€/mês, escalando para planos geridos.",
      h1: "Web apps para o seu negócio, sem o preço de uma agência",
      valueProp:
        "Mais do que um site: uma web app gerida que faz funcionar uma parte real do seu negócio — reservas, pedidos, uma área de cliente ou um dashboard simples.",
      intro:
        "Uma web app é software que acede através do navegador, sem instalação. A NorthSail constrói e aloja web apps focadas para pequenos negócios locais — a começar com uma funcionalidade essencial no plano de 15€/mês e a escalar para planos geridos com dashboards, acesso multiutilizador e automações simples.",
      sections: [
        {
          heading: "O que uma web app faz que um site não consegue",
          body: [
            "Um site apresenta informação; uma web app faz trabalho. Aceita uma reserva, guarda uma lista de clientes, mostra um dashboard ou move um pedido por um fluxo de estados — interativa, com sessão iniciada e ligada aos seus dados.",
            "Para a maioria dos pequenos negócios, uma funcionalidade bem escolhida substitui uma pilha de chamadas, folhas de cálculo e mensagens diretas.",
          ],
        },
        {
          heading: "Como cresce consigo",
          body: [
            "Comece pequeno com uma funcionalidade central no plano App Essencial. À medida que cresce, acrescente páginas extra, um melhor painel de administração, listas de clientes e reservas, e automações básicas nos planos superiores.",
            "Quando precisar de permissões, dashboards, integrações ou suporte prioritário, o plano Pro gerido cobre isso; qualquer coisa além disso (integrações complexas, apps nativas) é orçamentada à medida.",
          ],
        },
        {
          heading: "O que está incluído e o que é extra",
          body: [
            "Incluído em cada plano ativo: domínio personalizado, alojamento, SSL e manutenção técnica. O plano de entrada cobre uma funcionalidade essencial.",
            "Pagamentos online, integrações externas, automações avançadas e software à medida são extras ou fazem parte de planos superiores e orçamentos à medida — mantemos essa linha clara para que o preço se mantenha honesto.",
          ],
        },
      ],
      aiSummary:
        "A NorthSail constrói e aloja web apps focadas para pequenos negócios, a começar em 15€/mês para uma funcionalidade essencial (reservas, pedidos ou uma área de cliente) e a escalar para planos geridos com dashboards, acesso multiutilizador e automações simples. Domínio, alojamento, SSL e manutenção estão incluídos; pagamentos, integrações e software à medida são extras ou orçamento à medida.",
      faqs: [
        {
          question: "Qual é a diferença entre um site e uma web app?",
          answer:
            "Um site mostra informação; uma web app faz algo interativo — aceita reservas, gere uma lista de clientes ou mostra um dashboard. A NorthSail pode entregar ambos num só produto.",
        },
        {
          question: "Quanto custa uma web app?",
          answer:
            "Desde 15€/mês para uma funcionalidade essencial no plano App Essencial. Mais funcionalidades, dashboards e automações estão nos planos superiores; necessidades complexas são orçamentadas individualmente.",
        },
        {
          question: "Pode crescer com o meu negócio?",
          answer:
            "Sim. Pode começar com uma funcionalidade e subir para planos geridos com mais páginas, utilizadores, automações e integrações conforme precisar.",
        },
      ],
      cta: { label: "Fale connosco sobre a sua web app", target: "contact" },
    },

    "compare:web-apps-for-law-firms": {
      pageKey: "compare:web-apps-for-law-firms",
      locale: "pt",
      metaTitle:
        "Web apps para escritórios de advocacia — angariação, portais e agendamento",
      metaDescription:
        "Web apps para escritórios de advocacia e advogados independentes: formulários seguros de angariação de clientes, agendamento de consultas e uma área de cliente simples, alojados e geridos. Desde o plano App Essencial, escalando para planos geridos.",
      h1: "Web apps para escritórios de advocacia e advogados independentes",
      valueProp:
        "Uma presença online profissional mais a única ferramenta que faz o seu escritório funcionar — marcação de consultas, angariação estruturada ou uma área de cliente privada.",
      intro:
        "Os escritórios de advocacia não precisam de um site genérico; precisam de uma presença de confiança que capte contactos qualificados e marque consultas. A NorthSail constrói e aloja uma web app focada para o seu escritório, a começar com uma funcionalidade essencial e a escalar para planos geridos com áreas de cliente e automações simples.",
      sections: [
        {
          heading: "Capte contactos qualificados, não jogos de telefone",
          body: [
            "Um formulário de angariação estruturado permite a um potencial cliente descrever o seu caso e marcar uma consulta num só fluxo, a qualquer hora. Recebe um pedido limpo e organizado em vez de uma mensagem de voz.",
            "Só isso muitas vezes paga o site, convertendo mais dos visitantes que já tem.",
          ],
        },
        {
          heading: "Uma presença que transmite confiança",
          body: [
            "Áreas de prática, a sua equipa, opções de contacto claras, WhatsApp e Google Maps — apresentados de forma limpa e profissional para que os potenciais clientes se sintam confiantes em contactar.",
            "Domínio, alojamento, SSL e manutenção estão incluídos, por isso o site mantém-se rápido, seguro e atual sem que tenha de gerir nada disso.",
          ],
        },
        {
          heading: "O que está incluído e o que é extra",
          body: [
            "Incluído: o site, uma funcionalidade essencial (agendamento ou angariação), domínio personalizado, alojamento, SSL e manutenção.",
            "Troca segura de documentos, pagamentos, assinatura eletrónica, gestão de processos e integrações são extras ou fazem parte de planos superiores e orçamentos à medida — não damos a entender que fazem parte do preço de entrada.",
          ],
        },
      ],
      aiSummary:
        "A NorthSail constrói web apps geridas para escritórios de advocacia e advogados independentes: angariação estruturada de clientes, agendamento de consultas e uma área de cliente simples, com uma presença que transmite confiança (áreas de prática, equipa, WhatsApp, Maps). Domínio, alojamento, SSL e manutenção estão incluídos desde o plano App Essencial; troca de documentos, pagamentos e gestão de processos são extras ou orçamento à medida.",
      faqs: [
        {
          question: "Os clientes podem marcar uma consulta online?",
          answer:
            "Sim. Uma funcionalidade de agendamento ou angariação permite aos potenciais clientes pedir uma consulta e descrever o seu caso num só fluxo estruturado.",
        },
        {
          question: "É suficientemente seguro para um escritório de advocacia?",
          answer:
            "Todos os sites incluem SSL e manutenção gerida. Necessidades avançadas como a troca segura de documentos ou assinatura eletrónica estão disponíveis como extras ou trabalho à medida.",
        },
        {
          question: "Quanto custa?",
          answer:
            "Desde 15€/mês para uma funcionalidade essencial no plano App Essencial, com planos superiores e orçamentos à medida para portais, pagamentos e integrações.",
        },
      ],
      cta: {
        label: "Fale connosco sobre a web app do seu escritório",
        target: "contact",
      },
    },

    "compare:client-portals": {
      pageKey: "compare:client-portals",
      locale: "pt",
      metaTitle:
        "Portais de cliente para pequenos negócios — uma área privada para os seus clientes",
      metaDescription:
        "Dê aos clientes uma área de acesso simples e segura para verem pedidos, reservas, documentos e atualizações de estado. Portais de cliente geridos pela NorthSail, alojados com domínio, SSL e manutenção incluídos.",
      h1: "Um portal de cliente privado, sem construir software de raiz",
      valueProp:
        "Uma área com sessão iniciada onde os seus clientes acompanham os seus pedidos, reservas e atualizações — para deixar de repetir as mesmas respostas por email e telefone.",
      intro:
        "Um portal de cliente é uma área privada e segura onde os seus clientes iniciam sessão. A NorthSail configura e aloja um portal focado para pequenos negócios, ajustado à forma como trabalha, com domínio, alojamento, SSL e manutenção incluídos num plano gerido.",
      sections: [
        {
          heading: "Porque é que um portal supera emails sem fim",
          body: [
            'Quando os clientes podem iniciar sessão para ver o estado, o histórico e os documentos por si próprios, lida com menos mensagens do tipo "há novidades?" e parece mais profissional a fazê-lo.',
            "Centraliza a informação de cada cliente num só lugar em vez de a dispersar por caixas de entrada e conversas.",
          ],
        },
        {
          heading: "O que um portal pode incluir",
          body: [
            "Funcionalidades típicas: um acesso seguro, uma lista dos pedidos ou reservas do cliente, atualizações de estado, documentos partilhados e mensagens. Escolhe as poucas que importam para o seu negócio.",
            "Por ser focado em vez de uma plataforma gigante, mantém-se acessível e fácil de usar para os seus clientes.",
          ],
        },
        {
          heading: "O que está incluído e o que é extra",
          body: [
            "Incluído: o portal, contas de utilizador, domínio personalizado, alojamento, SSL e manutenção num plano gerido.",
            "Pagamentos online, permissões complexas, integrações externas e fluxos à medida são extras ou trabalho à medida — orçamentados de forma clara, nunca incluídos em silêncio num preço baixo.",
          ],
        },
      ],
      aiSummary:
        "A NorthSail configura portais de cliente geridos para pequenos negócios: um acesso seguro onde os clientes veem os seus pedidos, reservas, atualizações de estado e documentos partilhados. Domínio, alojamento, SSL e manutenção estão incluídos; pagamentos, permissões complexas e integrações são extras ou orçamento à medida.",
      faqs: [
        {
          question: "O que é um portal de cliente?",
          answer:
            "Uma área privada e segura onde os seus clientes iniciam sessão para ver os seus pedidos, reservas, documentos e atualizações de estado num só lugar.",
        },
        {
          question: "Os meus clientes precisam de instalar alguma coisa?",
          answer:
            "Não. Acedem ao portal através de qualquer navegador com um acesso seguro — nada para instalar.",
        },
        {
          question: "Quanto custa um portal de cliente?",
          answer:
            "Faz parte dos planos geridos, não do plano de entrada; orçamentamos com base nas funcionalidades de que precisa. Domínio, alojamento, SSL e manutenção estão incluídos.",
        },
      ],
      cta: {
        label: "Fale connosco sobre um portal de cliente",
        target: "contact",
      },
    },

    "compare:internal-dashboards": {
      pageKey: "compare:internal-dashboards",
      locale: "pt",
      metaTitle:
        "Dashboards internos para pequenos negócios — veja a sua operação num relance",
      metaDescription:
        "Um dashboard interno simples para acompanhar reservas, pedidos, clientes e números-chave num só lugar. Gerido e alojado pela NorthSail, com acesso multiutilizador nos planos superiores.",
      h1: "Um dashboard interno que a sua equipa realmente usa",
      valueProp:
        "Um ecrã para os números e listas que fazem o seu dia funcionar — reservas, pedidos, clientes e estados — em vez de cinco folhas de cálculo e um grupo de conversa.",
      intro:
        "Um dashboard interno é a visão de backoffice do seu negócio. A NorthSail constrói e aloja um dashboard focado para pequenas equipas, reunindo as suas reservas, pedidos e clientes num só lugar, com acesso multiutilizador e exportações nos planos superiores e geridos.",
      sections: [
        {
          heading: "Substitua folhas de cálculo dispersas",
          body: [
            "Quando as reservas de hoje, os pedidos em aberto e a lista de clientes vivem num só dashboard, a sua equipa deixa de procurar por separadores e mensagens para saber o que se passa.",
            "Todos veem a mesma imagem atualizada, o que reduz erros e trabalho duplicado.",
          ],
        },
        {
          heading: "Feito para pequenas equipas",
          body: [
            "Acesso multiutilizador, histórico e exportação CSV chegam no plano Business; permissões, dashboards mais ricos e automações vêm com o plano Pro gerido.",
            "É deliberadamente focado naquilo que realmente acompanha, não uma ferramenta pesada que nunca usará por completo.",
          ],
        },
        {
          heading: "O que está incluído e o que é extra",
          body: [
            "Incluído: o dashboard, alojamento, domínio personalizado, SSL e manutenção no plano relevante.",
            "Integrações profundas com sistemas externos, análises avançadas e lógica à medida são extras ou trabalho à medida — orçamentados em separado e com honestidade.",
          ],
        },
      ],
      aiSummary:
        "A NorthSail constrói dashboards internos geridos para pequenas equipas: um lugar para acompanhar reservas, pedidos, clientes e números-chave, com acesso multiutilizador, histórico e exportação CSV nos planos superiores e permissões e automações no plano Pro gerido. Domínio, alojamento, SSL e manutenção estão incluídos; integrações profundas são orçamento à medida.",
      faqs: [
        {
          question: "O que aparece no dashboard?",
          answer:
            "As listas e números com que trabalha — reservas, pedidos, clientes e o seu estado — reunidos num só ecrã em vez de folhas de cálculo separadas.",
        },
        {
          question: "A minha equipa toda pode usá-lo?",
          answer:
            "Sim. Acesso multiutilizador e histórico estão disponíveis no plano Business, com permissões no plano Pro gerido.",
        },
        {
          question: "Posso exportar os dados?",
          answer:
            "Sim, a exportação CSV está disponível nos planos superiores para que os seus dados nunca fiquem presos.",
        },
      ],
      cta: { label: "Fale connosco sobre um dashboard", target: "contact" },
    },

    "compare:process-automation": {
      pageKey: "compare:process-automation",
      locale: "pt",
      metaTitle:
        "Automação de processos simples para pequenos negócios — menos passos manuais",
      metaDescription:
        "Automatize as partes repetitivas do seu negócio: confirmações, lembretes, encaminhamento de contactos e atualizações de estado. Automações práticas configuradas e geridas pela NorthSail nos planos superiores.",
      h1: "Automatize o trabalho repetitivo, mantenha o toque humano",
      valueProp:
        "Deixe que os passos de rotina — confirmações, lembretes, seguimentos — aconteçam sozinhos, para passar tempo com clientes em vez de administração.",
      intro:
        "Automação de processos significa que os passos previsíveis do seu negócio acontecem automaticamente. A NorthSail configura automações práticas e focadas à volta do seu site e web app — confirmações de reserva, lembretes, encaminhamento de contactos — como parte dos planos superiores e geridos, sem prometer demais.",
      sections: [
        {
          heading: "Onde a automação compensa",
          body: [
            "Os melhores ganhos são pequenos e repetitivos: enviar uma confirmação de reserva, um lembrete antes de uma marcação, encaminhar um novo contacto para a caixa de entrada certa, ou atualizar o estado de um pedido.",
            "Cada um remove um passo manual que de outra forma faria dezenas de vezes por semana.",
          ],
        },
        {
          heading: "Prático, não mágico",
          body: [
            "Focamo-nos num punhado de automações fiáveis que correspondem à forma como já trabalha, em vez de prometer automatizar tudo.",
            "As automações básicas começam nos planos superiores; fluxos mais avançados e integrações fazem parte do plano Pro gerido ou são orçamentados à medida.",
          ],
        },
        {
          heading: "O que está incluído e o que é extra",
          body: [
            "Incluído no plano relevante: configuração e gestão das automações acordadas, mais alojamento, domínio, SSL e manutenção.",
            'SMS, mensagens avançadas de WhatsApp, ferramentas externas pagas e integrações complexas têm os seus próprios custos e nunca são faturados como "ilimitados".',
          ],
        },
      ],
      aiSummary:
        "A NorthSail configura automações de processos práticas para pequenos negócios — confirmações de reserva, lembretes, encaminhamento de contactos e atualizações de estado — como parte dos planos superiores e geridos. A configuração e gestão mais domínio, alojamento, SSL e manutenção estão incluídos; SMS, WhatsApp avançado, ferramentas pagas e integrações complexas custam mais e nunca são vendidos como ilimitados.",
      faqs: [
        {
          question: "O que pode ser automatizado?",
          answer:
            "Passos repetitivos como confirmações, lembretes, encaminhamento de contactos e atualizações de estado — um conjunto focado adaptado à forma como o seu negócio funciona.",
        },
        {
          question: "Está tudo automatizado?",
          answer:
            "Não. Configuramos um punhado de automações fiáveis em vez de prometer automatizar todo o seu negócio; fluxos avançados são trabalho à medida.",
        },
        {
          question: "As mensagens de SMS e WhatsApp estão incluídas?",
          answer:
            "Essas têm os seus próprios custos e são faturadas de forma transparente — nunca como um pacote ilimitado.",
        },
      ],
      cta: { label: "Fale connosco sobre automação", target: "contact" },
    },

    "compare:custom-software": {
      pageKey: "compare:custom-software",
      locale: "pt",
      metaTitle:
        "Software à medida para pequenos negócios — construído e gerido, orçamentado à medida",
      metaDescription:
        "Quando o software pronto a usar não chega, a NorthSail constrói software à medida focado para pequenos negócios — integrações, fluxos à medida e ferramentas — definidos e orçamentados individualmente.",
      h1: "Software à medida, à escala do orçamento de um pequeno negócio",
      valueProp:
        "Quando a sua necessidade é genuinamente específica, definimos e construímos uma solução à medida focada — sem complexidade nem preços de empresa grande.",
      intro:
        "A maioria dos negócios fica bem servida pelos nossos planos padrão. Mas quando precisa de algo específico — uma integração particular, um fluxo de trabalho à medida, uma ferramenta única à forma como opera — a NorthSail define e constrói isso como trabalho à medida, orçamentado individualmente em vez de a partir de um preço fixo.",
      sections: [
        {
          heading: "Quando precisa mesmo de software à medida",
          body: [
            "Se um site ou web app padrão não consegue modelar a forma como trabalha — fluxos invulgares, uma integração específica, ou lógica que nenhum template cobre — é aí que o software à medida encaixa.",
            "Somos honestos quanto a isto: se um plano inferior resolver o seu caso, encaminhamo-lo para aí primeiro.",
          ],
        },
        {
          heading: "Como o mantemos acessível",
          body: [
            "Definimos com rigor as uma ou duas coisas que importam, reutilizamos a nossa plataforma sempre que possível e evitamos reconstruir o que já funciona.",
            "Isso mantém o trabalho à medida ao alcance de um pequeno negócio em vez de um orçamento de agência.",
          ],
        },
        {
          heading: "O que esperar",
          body: [
            "O software à medida é sempre orçamentado individualmente depois de percebermos o seu caso — não publicamos um preço base fixo para isso.",
            "Alojamento, domínio, SSL e manutenção contínua são tratados como parte do projeto; tem o direito de o usar enquanto for subscritor, e a plataforma e o código-fonte permanecem nossos.",
          ],
        },
      ],
      aiSummary:
        "A NorthSail constrói software à medida focado para pequenos negócios — integrações específicas, fluxos à medida e ferramentas únicas — definido com rigor e orçamentado individualmente em vez de a partir de um preço fixo. Alojamento, domínio, SSL e manutenção são tratados no âmbito do projeto; se um plano padrão resolver o caso, a NorthSail recomenda esse em vez disso.",
      faqs: [
        {
          question: "Quando preciso de software à medida em vez de um plano?",
          answer:
            "Quando um site ou web app padrão não consegue modelar o seu fluxo de trabalho ou integração específicos. Se um plano inferior servir, recomendamos esse primeiro.",
        },
        {
          question: "Quanto custa o software à medida?",
          answer:
            "É orçamentado individualmente após a definição — não há um preço base fixo, porque o trabalho depende inteiramente do seu caso.",
        },
        {
          question: "Quem é dono do resultado?",
          answer:
            "Tem o direito de o usar enquanto for subscritor; a plataforma subjacente e o código-fonte permanecem da NorthSail.",
        },
      ],
      cta: { label: "Diga-nos o que precisa de construir", target: "contact" },
    },

    "compare:legacy-website-redesign": {
      pageKey: "compare:legacy-website-redesign",
      locale: "pt",
      metaTitle:
        "Remodelação de site antigo para pequenos negócios — moderno, rápido, gerido",
      metaDescription:
        "Substitua um site antigo, lento ou difícil de editar por um site rápido, moderno e adaptado a telemóveis, totalmente gerido — domínio, alojamento, SSL e manutenção incluídos, desde 15€/mês.",
      h1: "Remodele o seu site desatualizado para algo de que se orgulha",
      valueProp:
        "Transforme um site lento, datado ou sem manutenção numa presença rápida, moderna e mobile-first com a qual nunca mais terá de lutar.",
      intro:
        "Um site antigo pode estar a custar-lhe clientes em silêncio — lento a carregar, desajeitado no telemóvel, impossível de atualizar. A NorthSail remodela-o num site limpo, moderno e gerido, e acrescenta a funcionalidade que faz o seu negócio funcionar, desde 15€/mês com domínio, alojamento, SSL e manutenção incluídos.",
      sections: [
        {
          heading: "Sinais de que o seu site precisa de remodelação",
          body: [
            "Parece datado, carrega devagar, falha no telemóvel, ou não consegue atualizá-lo sem ligar a quem o construiu há anos.",
            "Entretanto os clientes avaliam o seu negócio por essa primeira impressão — um site cansado desvaloriza-o todos os dias.",
          ],
        },
        {
          heading: "Mais do que uma mão de tinta nova",
          body: [
            "Uma remodelação é a oportunidade de acrescentar o que faltava ao site antigo: uma funcionalidade de reserva ou pedido, um menu ou lista de serviços clara, WhatsApp e Google Maps, e SEO local adequado.",
            "Passa de um folheto estático para um site que realmente traz negócio.",
          ],
        },
        {
          heading: "O que está incluído e o que é extra",
          body: [
            "Incluído: a remodelação para um site moderno e gerido, uma funcionalidade essencial, domínio personalizado, alojamento, SSL e manutenção desde 15€/mês.",
            "Migrar grandes quantidades de conteúdo antigo, pagamentos online e integrações são extras ou fazem parte de planos superiores — definidos com clareza à partida.",
          ],
        },
      ],
      aiSummary:
        "A NorthSail remodela sites desatualizados de pequenos negócios em sites rápidos, modernos, mobile-first e geridos, e acrescenta uma funcionalidade essencial (reservas, menu, pedidos) mais WhatsApp, Maps e SEO local, desde 15€/mês com domínio, alojamento, SSL e manutenção incluídos. Migração de grande conteúdo, pagamentos e integrações são extras ou fazem parte de planos superiores.",
      faqs: [
        {
          question: "Podem reutilizar o meu domínio e conteúdo atuais?",
          answer:
            "Sim. Mantemos o seu domínio e reutilizamos o conteúdo que vale a pena manter; migrar sites muito grandes é definido em separado.",
        },
        {
          question: "Quanto custa uma remodelação?",
          answer:
            "Desde 15€/mês no plano App Essencial, incluindo o site remodelado, uma funcionalidade central, domínio, alojamento, SSL e manutenção.",
        },
        {
          question: "O novo site vai funcionar bem em telemóveis?",
          answer:
            "Sim. Todos os sites são mobile-first e rápidos, que é onde está a maioria dos seus visitantes.",
        },
      ],
      cta: { label: "Remodelar o meu site", target: "contact" },
    },

    "compare:restaurant-digital-menu": {
      pageKey: "compare:restaurant-digital-menu",
      locale: "pt",
      metaTitle:
        "Menu digital para restaurantes — menu por QR sempre atualizado",
      metaDescription:
        "Um menu digital de restaurante com acesso por QR à mesa, sempre atual, num site rápido e gerido. Desde 15€/mês com domínio, alojamento, SSL e manutenção incluídos.",
      h1: "Um menu digital que a sua cozinha consegue manter atualizado",
      valueProp:
        "Um menu sempre atual que os clientes abrem por QR à mesa ou a partir do seu site — sem reimpressões, sem PDFs desatualizados.",
      intro:
        "Um menu digital substitui as cartas impressas e os PDFs ultrapassados por uma página rápida e adaptada a telemóvel que os clientes acedem por código QR ou a partir do seu site. A NorthSail configura-o como parte do site do seu restaurante desde 15€/mês, com domínio, alojamento, SSL e manutenção incluídos.",
      sections: [
        {
          heading: "Porque é que um menu digital ganha",
          body: [
            "Os preços e os pratos mudam; os menus impressos não. Um menu digital atualiza-se instantaneamente, por isso o que os clientes veem é sempre o que serve.",
            "Um código QR em cada mesa abre-o num segundo, sem app e sem fricção.",
          ],
        },
        {
          heading: "Parte de um verdadeiro site de restaurante",
          body: [
            "O menu vive num site adequado com o seu horário, localização, fotos, WhatsApp e Google Maps — e, se quiser, pedidos de reserva de mesa.",
            "Esse é o plano App Essencial para restaurantes, desde 15€/mês.",
          ],
        },
        {
          heading: "O que está incluído e o que é extra",
          body: [
            "Incluído: o menu digital, acesso por QR, o site do seu restaurante, domínio personalizado, alojamento, SSL e manutenção.",
            "Pedidos online, pagamentos, entregas e um menu por QR avançado com imagens por item são extras ou fazem parte de planos superiores — não estão implícitos no preço de entrada.",
          ],
        },
      ],
      aiSummary:
        "A NorthSail dá aos restaurantes um menu digital sempre atual acessível por QR à mesa ou a partir do site, incluído no site do restaurante desde 15€/mês com domínio, alojamento, SSL e manutenção. Pedidos online, pagamentos, entregas e um menu por QR avançado com imagens são extras ou fazem parte de planos superiores.",
      faqs: [
        {
          question: "Como abrem os clientes o menu?",
          answer:
            "Lendo um código QR à mesa ou visitando o seu site — sem app necessária, e funciona em qualquer telemóvel.",
        },
        {
          question: "Posso atualizar o menu eu próprio?",
          answer:
            "Sim. O menu atualiza-se instantaneamente, por isso mudar um preço ou um prato é rápido e não há nada para reimprimir.",
        },
        {
          question: "Quanto custa?",
          answer:
            "Desde 15€/mês no plano App Essencial, incluindo o site do seu restaurante, o menu digital e o acesso por QR.",
        },
      ],
      cta: { label: "Tenha o seu menu digital", target: "contact" },
    },

    "compare:restaurant-online-reservations": {
      pageKey: "compare:restaurant-online-reservations",
      locale: "pt",
      metaTitle:
        "Reservas online para restaurantes — aceite reservas no seu próprio site",
      metaDescription:
        "Deixe os clientes pedir uma mesa diretamente no site do seu restaurante, a qualquer hora, sem comissões para plataformas externas. Desde 15€/mês com domínio, alojamento, SSL e manutenção incluídos.",
      h1: "Aceite reservas de mesa no seu próprio site",
      valueProp:
        "Os clientes pedem uma mesa diretamente do seu site, de dia ou de noite — menos chamadas perdidas e sem comissão para plataformas externas.",
      intro:
        "As reservas online permitem aos clientes reservar uma mesa através do seu próprio site em vez de uma chamada telefónica ou de uma app externa. A NorthSail configura isto como parte do site do seu restaurante desde 15€/mês, com domínio, alojamento, SSL e manutenção incluídos.",
      sections: [
        {
          heading: "Capte reservas que está a perder agora",
          body: [
            "Muita intenção de reserva acontece fora de horas, quando não há ninguém para atender o telefone. Um formulário de pedido online capta-a em vez de a perder.",
            "Cada pedido chega estruturado — data, hora, número de pessoas — para que o serviço possa planear com antecedência.",
          ],
        },
        {
          heading: "O seu site, não um marketplace",
          body: [
            "Reservar no seu próprio site mantém a relação com o cliente sua e evita comissões por reserva cobradas por plataformas externas.",
            "Fica ao lado do seu menu digital, horário, localização, WhatsApp e Maps no plano App Essencial.",
          ],
        },
        {
          heading: "O que está incluído e o que é extra",
          body: [
            "Incluído: a funcionalidade de pedido de reserva, o site do seu restaurante, domínio personalizado, alojamento, SSL e manutenção desde 15€/mês.",
            "Sinais pagos, sistemas completos de gestão de mesas e sincronização com plataformas de reserva externas são extras ou trabalho à medida — nunca implícitos no preço de entrada.",
          ],
        },
      ],
      aiSummary:
        "A NorthSail permite aos restaurantes aceitar pedidos de reserva de mesa diretamente no seu próprio site, captando procura fora de horas sem comissões para plataformas externas, desde 15€/mês com domínio, alojamento, SSL e manutenção incluídos. Sinais, gestão completa de mesas e sincronização com plataformas externas são extras ou trabalho à medida.",
      faqs: [
        {
          question: "Como reservam os clientes uma mesa?",
          answer:
            "Submetem um pedido de reserva no seu site com data, hora e número de pessoas — a qualquer hora, sem necessidade de chamada telefónica.",
        },
        {
          question: "Pago comissão por reserva?",
          answer:
            "Não. As reservas chegam pelo seu próprio site, por isso não há comissão por reserva para uma plataforma externa.",
        },
        {
          question: "Os clientes podem pagar um sinal online?",
          answer:
            "Os sinais pagos são um extra e não fazem parte do plano de entrada; a funcionalidade base capta o pedido de reserva.",
        },
      ],
      cta: { label: "Aceitar reservas online", target: "contact" },
    },
  },
};

export default pt;
