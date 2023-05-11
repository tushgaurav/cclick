// Navbar component (LAST CHANGED: 11-05-2023)
// Fully responsive navbar with links to all pages and user button

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import styles from "@/styles/nav.module.css";

export default async function Nav() {
  return (
    <div className={styles.nav_container}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <input
          type="checkbox"
          id="menu-toggle"
          className={styles.menu_toggle}
        />
        <label htmlFor="menu-toggle" className={styles.menu_icon}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className={styles.nav_ul}>
          {/* Nav links */}

          <SignedIn>
            <li>
              <Link className={styles.nav_a} href="/my">
                Your Content
              </Link>
            </li>
          </SignedIn>

          <li>
            <Link className={styles.nav_a} href="/new/paste">
              Paste
            </Link>
          </li>
          <li>
            <a className={styles.nav_a} href="/new/link">
              Link
            </a>
          </li>
          <li>
            <Link className={styles.nav_a} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.nav_a} href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link className="login-btn" href="/login">
                Register
              </Link>
            </SignedOut>
          </li>
        </ul>
      </nav>
    </div>
  );
}
