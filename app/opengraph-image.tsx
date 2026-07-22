import { ImageResponse } from "next/og";

export const alt = "Universo de las Mascotas";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f1e3d 0%, #1f4fc4 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 130,
              height: 130,
              borderRadius: 65,
              background: "white",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 64,
            }}
          >
            🐾
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 56, fontWeight: 800, color: "white" }}>
              Universo de
            </span>
            <span style={{ fontSize: 56, fontWeight: 800, color: "#8fb0ff" }}>
              Mascotas
            </span>
          </div>
        </div>
        <p
          style={{
            marginTop: 36,
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Todo para cuidar a tu mascota
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
