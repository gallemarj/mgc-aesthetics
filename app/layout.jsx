import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessengerChat from "@/components/MessengerChat";
import AnnouncementBar from "@/components/AnnouncementBar";
import SplashScreen from "@/components/SplashScreen";
import { featuredServices, serviceCategories } from "@/lib/services";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://mgcaesthetics.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MGC Aesthetics – Beauty & Wellness in Paniqui, Tarlac",
    template: "%s | MGC Aesthetics",
  },
  description:
    "The first Japanese head spa in Paniqui, Tarlac. Premium head spa, facial, massage, waxing, lash and laser services. Book your appointment online or message us on Facebook.",
  applicationName: "MGC Aesthetics",
  keywords: [
    "MGC Aesthetics",
    "beauty salon Paniqui Tarlac",
    "beauty salon Tarlac",
    "spa Paniqui",
    "head spa Paniqui",
    "premium head spa Tarlac",
    "head and shoulder massage",
    "body massage",
    "foot spa",
    "facial Paniqui",
    "basic facial",
    "diamond peel",
    "hydra facial",
    "galvanic facial",
    "BB glow",
    "acne treatment",
    "acne scar treatment",
    "melasma treatment",
    "hyperpigmentation treatment",
    "eyebrow tattoo",
    "lip tattoo",
    "eyelash extension",
    "lash lift",
    "lash extension Paniqui",
    "waxing Paniqui",
    "underarm wax",
    "underarm whitening",
    "hair removal Tarlac",
    "laser removal Tarlac",
    "tattoo removal",
    "mole removal",
    "wart removal",
    "RF arm tightening",
    "tummy cavitation",
    "stretch mark treatment",
    "massage Tarlac",
    "women spa Tarlac",
    "Paniqui Tarlac",
    "Camiling",
    "Moncada",
    "Anao",
    "Ramos",
    "Rosales Pangasinan",
    "Urdaneta",
  ],
  authors: [{ name: "MGC Aesthetics" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "MGC Aesthetics",
    title: "MGC Aesthetics – First Japanese Head Spa in Paniqui, Tarlac",
    description:
      "The first Japanese head spa in Paniqui, Tarlac. Premium head spa, facial, massage, waxing, lash and laser services in Paniqui, Tarlac.",
    locale: "en_PH",
    images: [
      {
        url: `${SITE_URL}/homepic/homepic1.avif`,
        width: 2752,
        height: 1536,
        alt: "MGC Aesthetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MGC Aesthetics – First Japanese Head Spa in Paniqui, Tarlac",
    description:
      "The first Japanese head spa in Paniqui, Tarlac. Premium head spa, facial, massage, waxing, lash and laser services.",
    images: [`${SITE_URL}/homepic/homepic1.avif`],
  },
  robots: {
    index: false,
    follow: false,
  },
  themeColor: "#111111",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const priceToNumber = (price) =>
  parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0;

const hasOfferCatalog = {
  "@type": "OfferCatalog",
  name: "Services & Price List",
  itemListElement: [
    ...featuredServices.map((s) => ({
      "@type": "Offer",
      name: s.title,
      price: priceToNumber(s.price),
      priceCurrency: "PHP",
    })),
    ...serviceCategories.map((cat) => ({
      "@type": "OfferCatalog",
      name: cat.name,
      itemListElement: cat.items.map((item) => ({
        "@type": "Offer",
        name: item.name,
        price: priceToNumber(item.price),
        priceCurrency: "PHP",
      })),
    })),
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "MGC Aesthetics - Paniqui",
  image: `${SITE_URL}/logo.webp`,
  url: SITE_URL,
  telephone: "+639632971024",
  priceRange: "₱₱",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A.V.Y Building, 2nd Floor, Magallanes Street, Poblacion Sur",
    addressLocality: "Paniqui",
    addressRegion: "Tarlac",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.6650741,
    longitude: 120.5799152,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.facebook.com/gtbymgc"],
  hasOfferCatalog,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        ) : null}
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
