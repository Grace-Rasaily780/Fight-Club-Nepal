import type { Metadata } from "next";
import "./globals.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Finger Paint, sans-serif" },
});

export const metadata: Metadata = {
  title: "Fight Club Nepal",
  description: "Unleash your inner fighter",
  keywords: [
    "Fight Club",
    "Fight Club Nepal",
    "MMA",
    "Kick Boxing",
    "Boxing",
    "Wushu Sanda",
    "Muay Thai",
    "Martials Arts in Nepal",
    "Boxing training in Nepal",
    "Martials Arts in Nepal",
    "Boxing training in Nepal",
    "FightClub",
    "FightClubNepal",
  ],
  authors: [
    { name: "Grace Rasaily", url: "https://github.com/Grace-Rasaily780" },
  ],
  // url: 'https://fightclubnepal.com/',
  // siteName: "Fight Club Nepal",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: "/logo_full.svg",
    title: "Fight Club Nepal",
    description: "Unleash your inner fighter",
    url: "https://fightclubnepal.com",
    siteName: "Fight Club Nepal",
  },
  // locale: "en_US",
  // type: "website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
