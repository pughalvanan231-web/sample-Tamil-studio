import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TAMIL PHOTOGRAPHY | Capturing Your Precious Moments Forever",
  description:
    "Premium wedding, maternity, baby shower, outdoor, family, and event photography services. Professional editing and album design. Based in Tamil Nadu.",
  keywords: [
    "wedding photography",
    "maternity photography",
    "baby shower photography",
    "outdoor photoshoot",
    "family photography",
    "event photography",
    "Tamil photography",
    "album design",
  ],
  openGraph: {
    title: "TAMIL PHOTOGRAPHY | Capturing Your Precious Moments Forever",
    description:
      "Premium wedding, maternity, baby shower, outdoor, family, and event photography services.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
