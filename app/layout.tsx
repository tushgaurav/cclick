import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { Analytics } from "@vercel/analytics/react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "cclick | Free Public Pastebin",
  description:
    "cclick is a platform for sharing text snippets online. We offer free public pastes with an optional password protection.",
  icons: {
    icon: "/images/icons/favicon.ico",
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
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
