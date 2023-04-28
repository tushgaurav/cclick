import { SignIn, SignUp, currentUser } from "@clerk/nextjs/app-beta";
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
        <ul className={styles.nav_ul}>
          <li>
            <Link className={styles.nav_a} href="/new/paste">
              Paste
            </Link>
          </li>
          <li>
            <Link className={styles.nav_a} href="/about">
              About
            </Link>
          </li>
          <li>
            <a className={styles.nav_a} href="#">
              Services
            </a>
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
