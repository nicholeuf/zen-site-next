import type { Metadata } from "next";
import { Inter, Sacramento } from "next/font/google";
import Header from "components/Header";
import Footer from "components/Footer";
import "./globals.css";

// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sacramento",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nichole Frey",
    default: "Nichole Frey", // a default is required when creating a template
  },
  description: "Full-Stack Web Developer located in Central Florida",

  generator: "Next.js",
  applicationName: "Nichole Frey's Portfolio",
  // referrer: 'origin-when-cross-origin',
  keywords: [
    "Full-Stack",
    "Web Developer",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
  ],
  // authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: "Nichole Frey",
  publisher: "Nichole Frey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, sacramento.variable].join(" ")}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
