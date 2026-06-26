import { ImageResponse } from "next/og";

/**
 * This file intentionally uses inline styles.
 *
 * Next.js Open Graph image generation with ImageResponse does not use
 * Tailwind classes or external CSS in the same way as regular app components.
 * Inline style objects are the expected and supported approach here.
 */

export const dynamic = "force-static";

export const alt = "Z-TECH Web Developer Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#020617",
        color: "#f8fafc",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "72px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: "40px",
          backgroundColor: "rgba(255,255,255,0.04)",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#22d3ee",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Web Developer Portfolio
          </p>

          <h1
            style={{
              margin: "40px 0 0 0",
              color: "#ffffff",
              fontSize: "82px",
              lineHeight: 1,
              letterSpacing: "-4px",
            }}
          >
            Z-TECH
          </h1>

          <p
            style={{
              margin: "28px 0 0 0",
              maxWidth: "860px",
              color: "#cbd5e1",
              fontSize: "34px",
              lineHeight: 1.25,
            }}
          >
            Z-TECH Piotr Zandecki — Next.js, TypeScript, Tailwind CSS and
            project-based frontend development.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            color: "#cbd5e1",
            fontSize: "26px",
          }}
        >
          <span>Projects</span>
          <span style={{ marginLeft: "18px", marginRight: "18px" }}>•</span>
          <span>Case studies</span>
          <span style={{ marginLeft: "18px", marginRight: "18px" }}>•</span>
          <span>PL / EN</span>
        </div>
      </div>
    </div>,
    size,
  );
}
