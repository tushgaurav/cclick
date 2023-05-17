import Section from "@/components/Section";
import LinkCard from "@/components/LinkCard";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "@/styles/paste.module.css";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/app-beta";

async function getLinks(userId) {
  const links = await db.link.findMany({
    where: {
      userId: userId,
    },
    orderBy: [
      {
        time: "desc",
      },
    ],
  });
  console.log(links);

  return links;
}

function NoLinks() {
  return (
    <Section>
      <div>
        <h1>No links yet!</h1>
        <p>
          You haven't created any links yet. Click the button below to get
          started.
        </p>
        <Link href="/new/link">
          <Button>Create Link</Button>
        </Link>
      </div>
    </Section>
  );
}

export default async function MyLinks() {
  const user = await currentUser();
  const links = await getLinks(user?.id);

  return (
    <div className="container">
      <main>
        <h1>Welcome, {user?.firstName}!</h1>
      </main>
      <div className={styles.paste_container}>
        {!links.length && NoLinks()}
        {links.map((link) => (
          <LinkCard
            key={link.id}
            title={link.title}
            user={link.userName}
            time={link.time}
            backhalf={link.backhalf}
            views={link.views}
          />
        ))}
      </div>
    </div>
  );
}
