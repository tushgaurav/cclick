import Section from "@/components/Section";
import PasteCard from "@/components/PasteCard";
import styles from "@/styles/paste.module.css";
import { db } from "@/lib/db";
import Link from "next/link";
import Button from "@/components/Button";
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

function NoPastes() {
  return (
    <Section>
      <div>
        <h1>No pastes yet!</h1>
        <p>
          You haven't created any pastes yet. Click the button below to get
          started.
        </p>
        <Link href="/new/paste">
          <Button>Create Paste</Button>
        </Link>
      </div>
    </Section>
  );
}

export default async function MyPastes() {
  const user = await currentUser();
  const pastes = await getPastes();

  console.log(pastes);

  return (
    <div className="container">
      <main>
        <h1 className="title">Hello, {user?.firstName}! </h1>
      </main>

      <div className={styles.grid_container}>
        {!pastes.length && NoPastes()}
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
