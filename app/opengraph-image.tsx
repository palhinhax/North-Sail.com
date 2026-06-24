import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo/site";

/**
 * Branded default Open Graph / Twitter card, generated at the edge. Applies to
 * every route via the Next.js file convention unless a page passes an explicit
 * `image` to `buildMetadata`. 1200×630 is the standard social card size.
 */
export const runtime = "edge";
export const alt =
  "NorthSail — affordable websites & mini web apps for small business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: "#000f22",
        backgroundImage:
          "radial-gradient(circle at 80% 0%, #0a2540 0%, #000f22 55%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            backgroundColor: "#004fda",
          }}
        />
        <span style={{ fontSize: "40px", fontWeight: 700 }}>{SITE_NAME}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <span style={{ fontSize: "68px", fontWeight: 700, lineHeight: 1.1 }}>
          Affordable websites &amp; mini web apps for small business
        </span>
        <span style={{ fontSize: "34px", color: "#c4c6ce" }}>
          Domain · hosting · SSL · bookings · maintenance — from €15/month
        </span>
      </div>

      <span style={{ fontSize: "30px", color: "#2b69fd", fontWeight: 600 }}>
        www.north-sail.com
      </span>
    </div>,
    { ...size }
  );
}
