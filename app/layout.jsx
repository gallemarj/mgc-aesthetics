import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessengerChat from "@/components/MessengerChat";
import AnnouncementBar from "@/components/AnnouncementBar";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        <SplashScreen />
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MessengerChat />
      </body>
    </html>
  );
}
