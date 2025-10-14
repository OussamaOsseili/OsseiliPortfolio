import type { Metadata } from "next";
import "./globals.css"; // ✅ MUST be here so Tailwind styles load

export const metadata: Metadata = {
  title: "Oussama Osseili",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
