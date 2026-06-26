-- CreateEnum
CREATE TYPE "DiscountType" AS ENUM ('FREE_PERIOD', 'PERCENT', 'FIXED', 'FREE_SETUP');

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "isComped" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "setupWaived" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "DiscountCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" "DiscountType" NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "durationMonths" INTEGER,
    "appliesToPlanIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "maxRedemptions" INTEGER,
    "redemptionsUsed" INTEGER NOT NULL DEFAULT 0,
    "perAccountLimit" INTEGER NOT NULL DEFAULT 1,
    "validFrom" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validUntil" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "stripeCouponId" TEXT,
    "stripePromotionCodeId" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiscountCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscountRedemption" (
    "id" TEXT NOT NULL,
    "codeId" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,
    "effectType" "DiscountType" NOT NULL,
    "effectSummary" TEXT NOT NULL,
    "appliedUntil" TIMESTAMP(3),
    "consumed" BOOLEAN NOT NULL DEFAULT false,
    "redeemedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscountRedemption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscountCode_code_key" ON "DiscountCode"("code");

-- CreateIndex
CREATE INDEX "DiscountCode_code_idx" ON "DiscountCode"("code");

-- CreateIndex
CREATE INDEX "DiscountCode_active_idx" ON "DiscountCode"("active");

-- CreateIndex
CREATE INDEX "DiscountRedemption_businessId_idx" ON "DiscountRedemption"("businessId");

-- CreateIndex
CREATE UNIQUE INDEX "DiscountRedemption_codeId_businessId_key" ON "DiscountRedemption"("codeId", "businessId");

-- AddForeignKey
ALTER TABLE "DiscountCode" ADD CONSTRAINT "DiscountCode_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountRedemption" ADD CONSTRAINT "DiscountRedemption_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "DiscountCode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountRedemption" ADD CONSTRAINT "DiscountRedemption_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE CASCADE ON UPDATE CASCADE;

