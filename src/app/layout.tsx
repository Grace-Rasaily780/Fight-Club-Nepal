import type { Metadata } from "next";
import "./globals.css";
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.tsx"

const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  headings: { fontFamily: 'Finger Paint, sans-serif' },
});

export const metadata: Metadata = {
  title: "Fight Club Nepal",
  description: "Unleash your inner fighter",
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
