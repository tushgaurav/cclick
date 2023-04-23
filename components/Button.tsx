import styles from "@/styles/button.module.css";

export default function Button({ children, type }) {
  return (
    <button className={type === "primary" ? styles.btn : ""}>{children}</button>
  );
}
