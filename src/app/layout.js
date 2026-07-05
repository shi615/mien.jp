import { Noto_Serif_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://mien.jp";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "中華美食 味縁｜愛知県安城市の中華料理店",
    template: "%s｜中華美食 味縁",
  },
  description:
    "味で縁を結ぶ中華料理店。愛知県安城市東新町の本格中華「味縁」。ランチ・定食から食べ放題・飲み放題、テイクアウトまで。年中無休 11:00〜14:00 / 17:00〜23:30。",
  keywords: ["中華料理", "安城市", "ランチ", "定食", "食べ放題", "テイクアウト", "味縁"],
  openGraph: {
    title: "中華美食 味縁｜愛知県安城市の中華料理店",
    description:
      "味で縁を結ぶ中華料理店。ランチ・定食から食べ放題・飲み放題、テイクアウトまで。年中無休で営業中!",
    url: "/",
    siteName: "中華美食 味縁",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "中華美食 味縁の宴会料理",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "中華美食 味縁",
  url: SITE_URL,
  image: `${SITE_URL}/ogp.jpg`,
  telephone: "+81-566-77-4665",
  servesCuisine: "中華料理",
  address: {
    "@type": "PostalAddress",
    postalCode: "446-0018",
    addressRegion: "愛知県",
    addressLocality: "安城市",
    streetAddress: "東新町8-8",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.957115,
    longitude: 137.095817,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "23:30",
    },
  ],
  hasMenu: `${SITE_URL}/menu/tanpin`,
  acceptsReservations: "True",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
