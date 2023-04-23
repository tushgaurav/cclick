import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import styles from "@/styles/nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav_container}>
      <nav className={styles.nav}>
        <Image src={logo} alt="" />
        <ul className={styles.nav_ul}>
          <li>
            <Link className={styles.nav_a} href="/paste">
              Paste
            </Link>
          </li>
          <li>
            <a className={styles.nav_a} href="#">
              About
            </a>
          </li>
          <li>
            <a className={styles.nav_a} href="#">
              Services
            </a>
          </li>
          <li>
            <a className={styles.nav_a} href="#">
              Contact
            </a>
          </li>
          <li id="install-btn">Install</li>
        </ul>
      </nav>
    </div>
  );
}
