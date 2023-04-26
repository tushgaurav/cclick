import Image from "next/image";
import getRandomQuote from "../lib/loading";

import spinner from "../public/images/spinner.svg";
import styles from "../styles/loading.module.css";

export default function Loading() {
  const quote = getRandomQuote();
  return (
    <div className={styles.loading_container}>
      <div className="main-content">
        <Image className={styles.center} src={spinner} alt="loading..." />
        <div className={styles.center_text}>
          <h3 className={styles.shimmer}>{quote}</h3>
        </div>
      </div>
    </div>
  );
}
