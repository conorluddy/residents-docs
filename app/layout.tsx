/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Settings } from "@/lib/meta";
import "./globals.css";

declare global {
  interface window {
    dataLayer: any[];
  }
}

const baseUrl = Settings.metadataBase;

export const metadata: Metadata = {
  title: Settings.title,
  metadataBase: new URL(baseUrl),
  description: Settings.description,
  keywords: Settings.keywords,
  openGraph: {
    type: Settings.openGraph.type,
    url: baseUrl,
    title: Settings.openGraph.title,
    description: Settings.openGraph.description,
    siteName: Settings.openGraph.siteName,
    images: Settings.openGraph.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* // eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VJECV8B3GN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (window) {
              window.dataLayer = window.dataLayer || []; 
              function gtag() {window.dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'G-VJECV8B3GN');
            }
          `,
          }}
        ></script>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/cdi3nei.css"
        ></link>
        {Settings.gtmconnected && <GoogleTagManager gtmId={Settings.gtm} />}
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="px-5 sm:px-8 h-auto">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

/* https://fonts.adobe.com/fonts/stratum#fonts-section */
