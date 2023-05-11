import { ClerkProvider } from "@clerk/nextjs/app-beta";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "cclick | Free Public Pastebin",
  description:
    "cclick is a platform for sharing text snippets online. We offer free public pastes with an optional password protection.",
  icons: {
    icon: "/images/icons/favicon.ico",
  },
  openGraph: {
    title: "cclick | Free Public Pastebin",
    description: "cclick is a platform for sharing text snippets online.",
    type: "website",
    url: "https://cclick.cclick",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "cclick | Free Public Pastebin",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
