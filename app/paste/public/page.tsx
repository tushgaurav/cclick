import Link from "next/link";
import { db } from "@/lib/db";
import diffTime from "@/lib/time";
import styles from "@/styles/paste.module.css";

function PasteCard({ title, description, author, date, slug }) {
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

export default async function PublicPastes() {
  const pastes = await db.paste.findMany({
    where: {
      visiblity: "PUBLIC",
    },
    take: 6,
  });

  return (
    <div className="container">
      <h1>Public Pastes</h1>
      <h4>View all public pastes</h4>
      <div className="pastes">
        <div className={styles.grid_container}>
          {pastes.map((paste) => (
            <PasteCard
              key={paste.id}
              title={paste.name}
              description={paste.content.substring(0, 100) + "..."}
              author={paste.ownerId}
              date={diffTime(paste.createdAt)}
              slug={paste.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
