import * as React from "react";
import { MarketingNav } from "./marketing-nav";
import { MarketingFooter } from "./marketing-footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
  /**
   * Hide the footer (e.g. focused conversion pages like onboarding).
   */
  hideFooter?: boolean;
}

export function MarketingLayout({
  children,
  hideFooter = false,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MarketingNav />
      <main className="flex-1 pt-16">{children}</main>
      {!hideFooter && <MarketingFooter />}
    </div>
  );
}
