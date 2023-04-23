import styles from "@/styles/section.module.css";

export default function Section({ children }) {
  return <section className={styles.section}>{children}</section>;
}
