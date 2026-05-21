import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Publidash para Marcas — Encontre Creators com IA em Segundos",
  description:
    "Descreva o que precisa e a IA Lia encontra os creators certos. Contrato automático, pagamento protegido e NF-e. Sem agência, sem burocracia.",
  openGraph: {
    title: "Publidash para Marcas — Encontre Creators com IA em Segundos",
    description:
      "Descreva o que precisa e a IA Lia encontra os creators certos. Contrato automático, pagamento protegido e NF-e. Sem agência, sem burocracia.",
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
      <body className="font-sans antialiased bg-background text-text-primary min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
