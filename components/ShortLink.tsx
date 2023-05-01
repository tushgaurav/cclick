import Link from "next/link";
import styles from "@/styles/ShortLink.module.css";
import Section from "@/components/Section";

export default function ShortLink({
  fullLink,
  backhalf,
  link = "https://cclick.click",
}) {
  return (
    <div className={styles.shortlink}>
      <h1>Short Link</h1>

      <Section>
        <div>
          <p>Here is the link that you just shorted: </p>
          <Link href={`/link/${backhalf}`}>
            <div className={styles.full_link}>
              <span className={styles.cclick}>www.cclick.click</span>
              <span className={styles.cclick_seperator}>/link/</span>
              {backhalf}
            </div>
          </Link>
        </div>
      </Section>

      <Section>
        <div>
          <p>Here is the full link: </p>
          <p className={styles.full_link}>{fullLink}</p>
        </div>
      </Section>
    </div>
  );
}
