import Link from "next/link";
import styles from "@/styles/pagination.module.css";

export default function Pagination({ current, total }) {
  const PER_PAGE = 9;
  const last_page = Math.ceil(total / PER_PAGE);

  const links = [];
  for (let i = 1; i <= last_page; i++) {
    links.push(
      <li key={i}>
        <Link
          href={{ pathname: "/paste/public/", query: { page: i } }}
          className={styles.modal_a}
        >
          <span className={i === current ? styles.active : ""}>{i}</span>
        </Link>
      </li>
    );
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles.modal}>
        <li>
          <Link href="#" className="prev">
            &laquo;
          </Link>
        </li>
        {links}
        <li>
          <Link href="#" className="next">
            &raquo;
          </Link>
        </li>
      </ul>
    </div>
  );
}
