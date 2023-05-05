import Link from "next/link";
import styles from "@/styles/shortlink.module.css";
import Section from "@/components/Section";
import ClipboardButton from "./ClipboardButton";
import QRCode from "@/components/QRCode";

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

          <div className={styles.link_bg}>
            <Link href={`/link/${backhalf}`} target="blank">
              <div className={styles.full_link}>
                <span className={styles.cclick}>
                  www.cclick.click/link/{backhalf}
                </span>
              </div>
            </Link>
            <ClipboardButton
              text={`${link}/link/${backhalf}`}
            ></ClipboardButton>
          </div>
        </div>
      </Section>

      <Section>
        <div>
          <p>The shorted link redirects to this URL: </p>
          <div className={styles.full_link}>{fullLink}</div>
        </div>
      </Section>

      <Section>
        <QRCode qrdata={`${link}/link/${backhalf}`} />
      </Section>
    </div>
  );
}
