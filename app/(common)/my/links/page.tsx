import Section from "@/components/Section";
import LinkCard from "@/components/LinkCard";
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

export default async function MyLinks() {
  const user = await currentUser();
  const links = await getLinks(user?.id);

  return (
    <div className="container">
      <main>
        <h1>Welcome, {user?.firstName}!</h1>
      </main>
      <div className={styles.paste_container}>
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
