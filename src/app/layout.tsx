import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/BackgroundBeams";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'McMaster GPA Calculator',
  description: "Upload your McMaster transcript to calculate your GPA on a 4.00 scale.",
  keywords: 'McMaster, GPA, CGPA, pdf, transcript, calculator, McMaster University, McMaster GPA Calculator, McMaster GPA, McMaster CGPA',
  openGraph: {
    title: 'McMaster GPA Calculator',
    description: "Upload your McMaster transcript to calculate your GPA on a 4.00 scale.",
    url: 'https://pdfgpa.vercel.app',
    images: {
      url: '',
      alt: 'McMaster GPA Calculator'
    },
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://pdfgpa.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${nunito.className}`}>
        <BackgroundBeams />
        {children}
      </body>
    </html>
  );
}
