import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Publidash — Encontre o creator certo em segundos",
  description:
    "Marketplace de Creator Economy com IA matchmaking, pagamento garantido e NF-e automatica. Para marcas que querem resultados, nao burocracia.",
  openGraph: {
    title: "Publidash — Encontre o creator certo em segundos",
    description:
      "Marketplace de Creator Economy com IA matchmaking, pagamento garantido e NF-e automatica.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300..800&family=Geist+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
