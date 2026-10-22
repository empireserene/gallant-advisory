import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Gallant Advisory | UAE market entry, from incorporation to operations",
    template: "%s | Gallant Advisory",
  },
  description:
    "Gallant Advisory is a Dubai-based consulting firm helping businesses enter the UAE and set up companies, manufacturing, sourcing, finance, and end-to-end operations.",
  metadataBase: new URL("https://gallantadvisory.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <p className="sr-only">
          {site.legalName}, {site.address}, {site.phoneDisplay}
        </p>
      </body>
    </html>
  );
}
