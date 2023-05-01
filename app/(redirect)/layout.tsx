import Image from "next/image";
import Section from "@/components/Section";

import "@/styles/globals.css";
import styles from "@/styles/redirect.layout.module.css";
import Link from "next/link";

export const metadata = {
  title: "cclick Link Shortener",
  description: "Link shortener by cclick",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Link href="/">
          <Image
            className="center"
            src="/logo.svg"
            alt="cclick logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="container">
          <Section>
            <h1>Redirecting, please wait</h1>
          </Section>
        </div>

        {children}
      </body>
    </html>
  );
}
