import Link from "next/link";

import styles from "@/styles/footer.module.css";

import logo from "../public/logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_col}>
            <Link href="/">
              <Image src={logo} alt="" className={styles.footer_logo} />
            </Link>
            <h2 className={styles.h2}>
              A <span>Prokits Digital Services</span> Product
            </h2>
            <p className={styles.p}>
              cclick is a online tool that helps you to paste and share it with
              people.
            </p>
          </div>
          <div className={styles.footer_col}>
            <ul className={styles.ul}>
              <li className={styles.ul_li}>
                <Link href="/paste/public">Public Pastes</Link>
              </li>
              <li className={styles.ul_li}>
                <Link href="/about">About Us</Link>
              </li>
              <li className={styles.ul_li}>Social</li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <ul className={styles.ul}>
              <li className={styles.ul_li}>Request a Feature</li>
              <li className={styles.ul_li}>Support the Development</li>
              <li className={styles.ul_li}>Code of Conduct</li>
              <li className={styles.ul_li}>Pricing</li>
              <li className={styles.ul_li}>
                <Link href={"https://cclick.instatus.com/"}>System Status</Link>
              </li>
              <li className={styles.ul_li}>Report Abuse</li>
            </ul>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.footer_bottom}>
          <p className={styles.bottom_p}>
            &copy; cclick 2023 | Designed by Prokits Digital Services
          </p>
          <div className={styles.bottom_div}>
            <p className={styles.bottom_p}>
              <Link href="/terms">terms of use</Link>
            </p>
            <p className={styles.bottom_p}>
              <Link href="/privacy">privacy policy</Link>
            </p>
          </div>
        </div>
        <div id="footer-sections"></div>
      </footer>
    </div>
  );
}
