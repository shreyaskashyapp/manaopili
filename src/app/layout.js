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
  title: "Mana'o Pili, LLC | Digital Transformation & ServiceNow Solutions",
  description: `Mana'o Pili, LLC is a ServiceNow partner specializing in digital transformation solutions. We help organizations optimize their ServiceNow investment through tailored assessments, roadmaps, and quick wins. Our expertise in AI-driven solutions empowers businesses to streamline operations and enhance customer service.`,
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
