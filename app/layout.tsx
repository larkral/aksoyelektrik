import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const siteUrl = "https://www.aksoyelektrik.com"
const siteName = "Aksoy Elektrik & Elektronik"
const defaultTitle =
  "Aksoy Elektrik & Elektronik | Profesyonel Elektrik Çözümleri"
const defaultDescription =
  "Afyon Aksoy Elektrik & Elektronik; konut, iş yeri ve kurumsal projeler için elektrik tesisatı, aydınlatma sistemleri, arıza tespiti ve onarım, solar sistemler, kablolama ve güvenlik kamera/alarm çözümleri sunar."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: "%s | Aksoy Elektrik & Elektronik",
  },

  description: defaultDescription,

  keywords: [
    "Aksoy Elektrik",
    "Aksoy Elektrik & Elektronik",
    "elektrikçi",
    "elektrik firması",
    "elektrik tesisatı",
    "aydınlatma sistemleri",
    "elektrik arıza onarım",
    "arıza tespiti",
    "solar sistemler",
    "güneş enerjisi sistemleri",
    "kablolama çözümleri",
    "güvenlik kamerası",
    "alarm sistemleri",
    "Afyon elektrikçi",
    "Afyonkarahisar elektrikçi",
    "kurumsal elektrik hizmetleri",
    "Afyon elektrik",
  ],

  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Elektrik Hizmetleri",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aksoy Elektrik & Elektronik",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logoaksoy.png`,
  image: `${siteUrl}/og-image.jpg`,
  telephone: "+90 543 482 90 62",
  email: "aksoyelektronik03@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Esentepe Mahallesi 314. Sokak No:22",
    addressLocality: "Merkez",
    addressRegion: "Afyonkarahisar",
    addressCountry: "TR",
  },
  areaServed: "Afyonkarahisar",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  description:
    "Konut, iş yeri ve kurumsal projeler için elektrik tesisatı, aydınlatma sistemleri, arıza onarım, solar sistemler, kablolama ve güvenlik kamera/alarm çözümleri sunar.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessSchema),
            }}
          />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}