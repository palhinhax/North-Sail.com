import { recommendPlan } from "@/features/plans/lib/recommend";
import { Sector } from "@prisma/client";

describe("recommendPlan", () => {
  it("only presence → PRESENCA", () => {
    const r = recommendPlan({ sector: Sector.LOCAL_SERVICES });
    expect(r.planCode).toBe("PRESENCA");
    expect(r.quoteOnly).toBe(false);
  });

  it("bookings only → MINI_APP", () => {
    const r = recommendPlan({ sector: Sector.HAIR_SALON, needsBookings: true });
    expect(r.planCode).toBe("MINI_APP");
  });

  it("gym with weekly schedule → MINI_APP_PLUS", () => {
    const r = recommendPlan({
      sector: Sector.GYM,
      needsBookings: true,
      weeklySchedule: true,
    });
    expect(r.planCode).toBe("MINI_APP_PLUS");
  });

  it("salon with multiple staff → MINI_APP_PLUS", () => {
    const r = recommendPlan({
      sector: Sector.HAIR_SALON,
      needsBookings: true,
      multipleStaff: true,
    });
    expect(r.planCode).toBe("MINI_APP_PLUS");
  });

  it("hotel with multiple rooms → BUSINESS_LOCAL", () => {
    const r = recommendPlan({
      sector: Sector.HOTEL,
      multipleLocationsOrRooms: true,
    });
    expect(r.planCode).toBe("BUSINESS_LOCAL");
  });

  it("payments required → PRO_GESTAO", () => {
    const r = recommendPlan({ sector: Sector.RESTAURANT, payments: true });
    expect(r.planCode).toBe("PRO_GESTAO");
  });

  it("external integrations → PRO_GESTAO + quoteOnly", () => {
    const r = recommendPlan({
      sector: Sector.HOTEL,
      externalIntegrations: true,
    });
    expect(r.planCode).toBe("PRO_GESTAO");
    expect(r.quoteOnly).toBe(true);
  });
});
