import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import FooterPage from "./components/footer";
import { Suspense } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home | Digital Transformation & ServiceNow Solutions | Mana'o Pili, LLC",
  description: "Achieve Digital Transformation with Mana’o Pili. Optimize operations with AI-powered cloud solutions. Streamline IT, empower teams, and elevate customer service.",
  openGraph: {
    title: "Achieve Digital Transformation with Mana’o Pili",
    description: "Optimize your operations with AI-powered cloud solutions and elevate customer service. Start your digital transformation today with Mana’o Pili.",
    url: "https://manaopili.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#141414]`}
      >
        <Suspense>
          <div className="">
            {children}
          </div>
          <FooterPage />
        </Suspense>
        <Header />     
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`}/>
      </body>
    </html>
  );
}
