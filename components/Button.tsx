import styles from "@/styles/button.module.css";

export default function Button({ children, type }) {
  return (
    <button className={type === "primary" ? styles.primary : styles.secondary}>
      {children}
    </button>
  );
}
