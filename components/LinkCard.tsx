// LinkCard component (LAST CHANGED: 11-05-2023)
// Props : title, views, description(optional), user, time, backhalf
// Purpose: Display a beautiful card with the link's information

import styles from "@/styles/linkcard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function LinkCard({
  title,
  views,
  description = "No description provided",
  user,
  time,
  backhalf,
}) {
  return (
    <Link href={`/link/${backhalf}`}>
      <div className={styles.grid_item}>
        <h3 className={styles.h3}>{title}</h3>
        <div className={styles.group}>
          <div className={styles.fa_icon}>
            <FontAwesomeIcon icon={faEye} style={{ color: "black" }} />
          </div>
          <p> {views}</p>
        </div>
        <p>{description}</p>
        <div className={styles.metadata}>
          <span className={styles.user}>{user}</span>
          <span className="time">{time}</span>
        </div>
      </div>
    </Link>
  );
}
