import Image from "next/image";
import getRandomQuote from "../lib/loading";

import spinner from "../public/images/spinner.svg";
import styles from "../styles/loading.module.css";

export default function Loading() {
  const quote = getRandomQuote();
  return (
    <div className={styles.loading_container}>
      <div className="main-content">
        <Image className="center" src={spinner} alt="loading..." />
        <h3 className={styles.quote}>{quote}</h3>
      </div>
    </div>
  );
}
