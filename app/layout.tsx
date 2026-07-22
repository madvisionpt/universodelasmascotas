import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://universodelasmascotas.vercel.app";
const title = "Universo de las Mascotas";
const description =
  "Consejos y guías prácticas para mejorar la salud, el bienestar y la felicidad de tu compañero.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "mascotas",
    "perros",
    "gatos",
    "cuidado de mascotas",
    "salud animal",
    "consejos para mascotas",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1e3d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-soft">{children}</body>
    </html>
  );
}
