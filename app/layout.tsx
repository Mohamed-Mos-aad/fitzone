import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// ** Components
import NavBar from "@/presentation/components/navigation/NavBar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "FitZone | Build Your Stronger Self",
    template: "%s | FitZone Gym",
  },
  description:
    "Join FitZone, the premier modern and energetic gym in town. Discover our membership plans, expert trainers, class schedules, and start your fitness journey today.",
  keywords: [
    "gym",
    "fitness",
    "FitZone",
    "workout",
    "CrossFit",
    "Yoga",
    "HIIT",
    "boxing",
    "gym memberships",
    "personal training",
  ],
  icons: {
    icon: "/app/favicon.ico",
    shortcut: "/app/favicon.ico",
    apple: "/app/favicon.ico",
  },
  authors: [{ name: "FitZone Team" }],
  creator: "FitZone",
  publisher: "FitZone",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fitzone-ebon.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FitZone | Build Your Stronger Self",
    description:
      "Transform your body and mind at FitZone. Explore our classes, elite trainers, and premium membership plans.",
    url: "https://fitzone-ebon.vercel.app/",
    siteName: "FitZone Gym",
    images: [
      {
        url: "../app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "FitZone Gym - Build Your Stronger Self",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitZone | Build Your Stronger Self",
    description:
      "Transform your body and mind at FitZone. Explore our classes, elite trainers, and premium membership plans.",
    images: ["../app/favicon.ico"],
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
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <NavBar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}