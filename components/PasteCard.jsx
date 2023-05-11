// PasteCard component (LAST CHANGED: 11-05-2023)
// Props : title, description, author, date, slug
// Purpose: Display a paste card with the given props

import styles from "@/styles/pastecard.module.css";
import Link from "next/link";

export default function PasteCard({ title, description, author, date, slug }) {
  return (
    <Link href={"/paste/" + slug}>
      <div className={styles.grid_item}>
        <h3 className={styles.h3}>{title}</h3>
        <p>{description}</p>
        <div className={styles.metadata}>
          <span className={styles.user}>{author}</span>
          <span className="time">{date}</span>
        </div>
      </div>
    </Link>
  );
}
