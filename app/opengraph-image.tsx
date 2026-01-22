import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const avatarBuffer = await fetch(
    new URL("../public/avatar-md.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const avatarBase64 = Buffer.from(avatarBuffer).toString("base64");
  const avatarDataUrl = `data:image/png;base64,${avatarBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b1220 0%, #0f172a 55%, #111827 100%)",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle blobs */}
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(103, 99, 148, 0.55)",
            filter: "blur(120px)",
            top: -120,
            left: -120,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(148, 98, 99, 0.45)",
            filter: "blur(120px)",
            bottom: -140,
            right: -160,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 42,
            padding: 80,
          }}
        >
          <img
            src={avatarDataUrl}
            width={260}
            height={260}
            style={{
              borderRadius: 9999,
              border: "10px solid rgba(255,255,255,0.9)",
              boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
              objectFit: "cover",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.05 }}>
              Michał Dziuba
            </div>
            <div style={{ fontSize: 30, opacity: 0.9, lineHeight: 1.25 }}>
              Strony internetowe dla lokalnych firm
            </div>
            <div style={{ fontSize: 26, opacity: 0.85, lineHeight: 1.35 }}>
              Szybkie. Nowoczesne. Nastawione na zapytania.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}

