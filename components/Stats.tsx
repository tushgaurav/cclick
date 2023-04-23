import { db } from "@/lib/db";

import styles from "@/styles/stats.module.css";

export default async function Stats() {
  const paste_count = await db.paste.count();
  const user_count = await db.user.count();

  return (
    <div className="stats">
      <h1>Stats</h1>
      <div className={styles.card_container}>
        <div className={styles.stat_card}>
          <h1 className="number">{paste_count}</h1>
          <p>Pastes</p>
        </div>

        <div className={styles.stat_card}>
          <h1 className="number">340</h1>
          <p>Paste Views</p>
        </div>

        <div className={styles.stat_card}>
          <h1 className="number">{user_count}</h1>
          <p>Users</p>
        </div>
      </div>
    </div>
  );
}
