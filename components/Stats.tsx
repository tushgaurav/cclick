import styles from "@/styles/stats.module.css";

export default function Stats() {
  return (
    <div className="stats">
      <h1>Stats</h1>
      <div className={styles.card_container}>
        <div className={styles.stat_card}>
          <h1 className="number">340</h1>
          <p>Pastes</p>
        </div>

        <div className={styles.stat_card}>
          <h1 className="number">340</h1>
          <p>Pastes</p>
        </div>

        <div className={styles.stat_card}>
          <h1 className="number">340</h1>
          <p>Pastes</p>
        </div>
      </div>
    </div>
  );
}
