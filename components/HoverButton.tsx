import styles from "../styles/hoverbtn.module.css";

export default function HoverButton({ children, disabled }) {
  return (
    <button className={styles.cta} disabled={disabled}>
      <span className={styles.cta_span}>{children}</span>
      <svg
        className={styles.cta_svg}
        width="13px"
        height="10px"
        viewBox="0 0 13 10"
      >
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
}
