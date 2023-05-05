import Link from "next/link";
import { db } from "@/lib/db";
import diffTime from "@/lib/time";
import styles from "@/styles/paste.module.css";
import Pagination from "@/components/Pagination";
import PasteCard from "@/components/PasteCard";

// same as in components\Pagination.tsx
const PER_PAGE = 9;

export const metadata = {
  title: "Public Pastes | cclick",
  openGraph: {
    title: "View Public Pastes made on cclick",
  },
};

export default async function PublicPastes(current) {
  const current_page = current.searchParams.page;
  const paste_count = await db.paste.count();

  const skip = (current_page - 1) * PER_PAGE || 0;
  const pastes = await db.paste.findMany({
    where: {
      visiblity: "PUBLIC",
    },
    skip: skip,
    take: PER_PAGE,
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
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
              author={
                paste.ownerId
                  ? paste.ownerName.replace("null", "")
                  : "Anonymous"
              }
              date={diffTime(paste.createdAt)}
              slug={paste.slug}
            />
          ))}
        </div>
      </div>

      <Pagination current={current_page} total={paste_count} />
    </div>
  );
}
