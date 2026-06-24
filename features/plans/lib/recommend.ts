import { Sector } from "@prisma/client";
import type { PlanCode, Recommendation } from "../schemas";

export interface RecommendArgs {
  sector: Sector;
  needsBookings?: boolean;
  multipleStaff?: boolean;
  weeklySchedule?: boolean;
  multipleLocationsOrRooms?: boolean;
  teamUsers?: boolean;
  payments?: boolean;
  externalIntegrations?: boolean;
  description?: string;
}

export function recommendPlan(input: RecommendArgs): Recommendation {
  const {
    needsBookings,
    multipleStaff,
    weeklySchedule,
    multipleLocationsOrRooms,
    teamUsers,
    payments,
    externalIntegrations,
  } = input;

  if (externalIntegrations) {
    return {
      planCode: "PRO_GESTAO",
      reason:
        "Integrações externas (Booking, POS, PMS, ERP, faturação, etc.) — recomendamos PRO Gestão como base. Pode exigir orçamento.",
      quoteOnly: true,
    };
  }

  if (payments || teamUsers) {
    return {
      planCode: "PRO_GESTAO",
      reason:
        "Automações, pagamentos ou múltiplos utilizadores na equipa — encaixa no plano PRO Gestão.",
      quoteOnly: false,
    };
  }

  if (multipleLocationsOrRooms) {
    return {
      planCode: "BUSINESS_LOCAL",
      reason:
        "Vários espaços/salas/membros — recomendamos Business Local com mais módulos.",
      quoteOnly: false,
    };
  }

  if (multipleStaff || weeklySchedule) {
    return {
      planCode: "MINI_APP_PLUS",
      reason:
        "Vários profissionais ou horários semanais/calendário — App Avançada cobre.",
      quoteOnly: false,
    };
  }

  if (needsBookings) {
    return {
      planCode: "MINI_APP",
      reason:
        "Uma funcionalidade essencial (reservas / marcações / pedidos / aulas) — App Essencial.",
      quoteOnly: false,
    };
  }

  return {
    planCode: "PRESENCA",
    reason: "Só presença online, contactos e WhatsApp.",
    quoteOnly: false,
  };
}

export function planCodeRank(code: PlanCode): number {
  const order: Record<PlanCode, number> = {
    PRESENCA: 1,
    MINI_APP: 2,
    MINI_APP_PLUS: 3,
    BUSINESS_LOCAL: 4,
    PRO_GESTAO: 5,
  };
  return order[code];
}
