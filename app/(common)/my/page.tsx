import styles from "@/styles/my.module.css";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/app-beta";
import Link from "next/link";

async function pasteCount(userId) {
  return await db.paste.count({
    where: {
      ownerId: userId,
    },
  });
}

async function totalPasteViews(userId) {
  const aggregations = await db.paste.aggregate({
    _sum: {
      views: true,
    },
    where: {
      ownerId: userId,
    },
  });

  return aggregations._sum.views;
}

async function linkShortned(userId) {
  return await db.link.count({
    where: {
      userId: userId,
    },
  });
}

async function linkViews(userId) {
  const aggregations = await db.link.aggregate({
    _sum: {
      views: true,
    },
    where: {
      userId: userId,
    },
  });

  return aggregations._sum.views;
}

export default async function My() {
  const user = await currentUser();
  const paste_count = await pasteCount(user.id);
  const paste_views = await totalPasteViews(user.id);
  const links = await linkShortned(user.id);
  const link_views = await linkViews(user.id);

  return (
    <div>
      <main>There are your contents -</main>
      <p>View the pastes and links that you have created in the past.</p>

      <div className="stats">
        <h1>Stats</h1>
        <div className={styles.card_container}>
          <div className={styles.stat_card}>
            <h1 className="number">{paste_count}</h1>
            <p>Pastes</p>
          </div>

          <div className={styles.stat_card}>
            <h1 className="number">{paste_views}</h1>
            <p>Paste Views</p>
          </div>

          <div className={styles.stat_card}>
            <h1 className="number">{links}</h1>
            <p>Links</p>
          </div>

          <div className={styles.stat_card}>
            <h1 className="number">{link_views}</h1>
            <p>Link Views</p>
          </div>
        </div>
      </div>

      <Link href="/my/pastes">View Pastes</Link>
      <Link href="/my/links">View Links</Link>
    </div>
  );
}
