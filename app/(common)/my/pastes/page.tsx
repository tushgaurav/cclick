import Section from "@/components/Section";
import PasteCard from "@/components/PasteCard";
import styles from "@/styles/paste.module.css";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/app-beta";

async function getPastes() {
  const user = await currentUser();
  const pastes = await db.paste.findMany({
    where: {
      ownerId: user?.id,
    },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
  console.log(pastes);

  return pastes;
}

export default async function MyPastes() {
  const user = await currentUser();
  const pastes = await getPastes();

  console.log(pastes);

  return (
    <div className="container">
      <main>
        <div>
          <h1 className="title">Hello, {user?.firstName}! </h1>
          <p>These are the pastes that you have created.</p>
        </div>
      </main>
      <Section>
        <div>
          <h2>Your Pastes</h2>
        </div>
      </Section>

      <div className={styles.grid_container}>
        {pastes.map((paste) => (
          <PasteCard
            key={paste.id}
            title={paste.name}
            description={paste.content.substring(0, 100) + "..."}
            author={paste.ownerName}
            date={paste.createdAt}
            slug={paste.slug}
          />
        ))}
      </div>
    </div>
  );
}
