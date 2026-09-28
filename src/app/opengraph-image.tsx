import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 65, background: "#f1f1f3", color: "#111116", fontFamily: "Arial, sans-serif" }}><div style={{ display: "flex", fontSize: 38, fontWeight: 800, letterSpacing: -2 }}>{site.companyName.toLowerCase()}.</div><div style={{ display: "flex", fontSize: 82, fontWeight: 700, lineHeight: 1.05, letterSpacing: -5, maxWidth: 1050 }}>Digital products built to move business forward.</div><div style={{ display: "flex", fontSize: 20 }}>{site.positioning}</div></div>, size);
}
