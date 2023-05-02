import Image from "next/image";
import Section from "@/components/Section";

import "@/styles/globals.css";
import spinner from "@/public/images/spinner_redirect.svg";
import styles from "@/styles/redirect_layout.module.css";
import Link from "next/link";

export const metadata = {
  title: "Redirecting | cclick Link Shortener",
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
        <div className={styles.loading_container}>
          <Image src="/logo.svg" alt="cclick logo" width={100} height={100} />

          <Image src="/images/spinner_redirect.svg" width={200} height={200} />

          <div className={styles.text}>
            <h1>Please wait</h1>
            <h3>Redirecting you to the target site...</h3>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
