import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Headers from "@/components/layouts/Headers";
import { AuthProvider } from "./sessionProvider";
import { siteConfig } from "@/lib/site";
import SideBar from "@/components/layouts/SideBar";
import { ApolloWrapper } from "@/lib/ApolloWrapper";

const instrument_Sans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Pre Launch Metadapp - A Smart trading & Analytics platform.",
  description:
    "Metadapp is a platform that provides on- chain traders, serious investors & Degens with powerful tools to analyze and spot and trade non-obvious opportunities in the crypto markets with improved efficiency and accuracy.",
  keywords: [
    "Analytics",
    "Smart trading",
    "crypto",
    "Degens",
    "Web3",
    "Dex",
    "Swap",
    "Buy crypto",
    "Trading Bots",
  ],
  authors: [
    {
      name: "Metadapp",
      url: siteConfig.url,
    },
  ],
  creator: "Metadapp",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      `${siteConfig.url}/og.jpg`,
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1608410023180263424%2F52VMtT5X_400x400.jpg&tbnid=DomwJQ0qnDEutM&vet=12ahUKEwjDib-d7vyBAxUBrycCHbNtCwEQMygEegQIARBX..i&imgrefurl=https%3A%2F%2Ftwitter.com%2FMetadappHQ&docid=Jqoooejwz5ooYM&w=400&h=400&itg=1&q=metadapp&ved=2ahUKEwjDib-d7vyBAxUBrycCHbNtCwEQMygEegQIARBX",
    ],
    creator: "@MetadappHQ",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background1 text-white ${instrument_Sans.className}`}
      >
        <>
          <SideBar />
          <>
            <AuthProvider>
              <Headers />
              <div className="overflow-y-auto hide-scrollbar">
                {" "}
                <ApolloWrapper>{children}</ApolloWrapper>
              </div>
            </AuthProvider>
          </>
        </>
        <Toaster />
      </body>
    </html>
  );
}
