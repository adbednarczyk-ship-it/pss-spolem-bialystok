import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "PSS Społem Białystok — sklepy, produkcja własna i bary",
    template: "%s | PSS Społem Białystok",
  },
  description:
    "Sieć sklepów Społem w Białymstoku, pieczywo i wędliny z własnych zakładów, bary drive, e-sklep i karta klienta.",
  metadataBase: new URL("https://pss-spolem-bialystok.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <a className="skip" href="#tresc">
          Przejdź do treści
        </a>
        <Header />
        <main id="tresc">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
