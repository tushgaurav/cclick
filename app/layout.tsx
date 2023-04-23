import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "cclick | Free Public Pastebin",
  description: "cclick is a free and open source public paste bin service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
