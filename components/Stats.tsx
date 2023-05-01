import { db } from "@/lib/db";
import { clerkClient } from "@clerk/nextjs/server";
import styles from "@/styles/stats.module.css";

async function pasteCount() {
  return await db.paste.count();
}

async function totalViews() {
  const aggregations = await db.paste.aggregate({
    _sum: {
      views: true,
    },
  });

  return aggregations._sum.views;
}

async function linkShortned() {
  return await db.link.count();
}

async function linkViews() {
  const aggregations = await db.link.aggregate({
    _sum: {
      views: true,
    },
  });

  return aggregations._sum.views;
}

export default async function Stats() {
  const paste_count = await pasteCount();
  const total_views = await totalViews();
  const user_count = await clerkClient.users.getCount();
  const link_shortned = await linkShortned();
  const link_views = await linkViews();

  return (
    <div className="stats">
      <h1>Stats</h1>
      <div className={styles.card_container}>
        <div className={styles.stat_card}>
          <h1 className="number">{paste_count}</h1>
          <p>Pastes</p>
        </div>

        <div className={styles.stat_card}>
          <h1 className="number">{total_views}</h1>
          <p>Paste Views</p>
        </div>

        <div className={styles.stat_card}>
          <h1 className="number">{user_count}</h1>
          <p>Users</p>
        </div>

        <div className={styles.stat_card}>
          <h1 className="number">{link_shortned}</h1>
          <p>Links Shortned</p>
        </div>

        <div className={styles.stat_card}>
          <h1 className="number">{link_views}</h1>
          <p>Links Views</p>
        </div>
      </div>
    </div>
  );
}
