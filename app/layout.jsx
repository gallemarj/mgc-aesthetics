import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessengerChat from "@/components/MessengerChat";
import AnnouncementBar from "@/components/AnnouncementBar";
import SplashScreen from "@/components/SplashScreen";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
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
