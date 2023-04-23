import { ClerkProvider } from "@clerk/nextjs/app-beta";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "cclick | Free Public Pastebin",
  description: "cclick is a free and open source public paste bin service",
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
        </body>
      </html>
    </ClerkProvider>
  );
}
