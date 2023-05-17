import styles from "@/styles/my.module.css";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/app-beta";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";

async function pasteCount(userId) {
  return await db.paste.count({
    where: {
      ownerId: userId,
    },
  });
}

async function totalPasteViews(userId) {
  const aggregations = await db.paste.aggregate({
    _sum: {
      views: true,
    },
    where: {
      ownerId: userId,
    },
  });

  return aggregations._sum.views;
}

async function linkShortned(userId) {
  return await db.link.count({
    where: {
      userId: userId,
    },
  });
}

async function linkViews(userId) {
  const aggregations = await db.link.aggregate({
    _sum: {
      views: true,
    },
    where: {
      userId: userId,
    },
  });

  return aggregations._sum.views;
}

async function topPaste(userId) {
  return await db.paste.findFirst({
    where: {
      ownerId: userId,
    },
    orderBy: {
      views: "desc",
    },
  });
}

async function topLink(userId) {
  return await db.link.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      views: "desc",
    },
  });
}

export default async function My() {
  const user = await currentUser();
  const paste_count = await pasteCount(user.id);
  const paste_views = await totalPasteViews(user.id);
  const links = await linkShortned(user.id);
  const link_views = await linkViews(user.id);
  const top_paste = await topPaste(user.id);
  const top_link = await topLink(user.id);

  return (
    <div className="container">
      <h1>
        Welcome, {user?.firstName} {user?.lastName}!
      </h1>

      <p>View the pastes and links that you have created in the past.</p>

      <Section>
        <div>
          <h2>Your Top Paste</h2>

          <Link href={`/paste/${top_paste?.slug}`}>
            <div>
              <h3>{top_paste?.name}</h3>
              <p>{top_paste?.views} views</p>
              <p>{top_paste?.content}</p>
            </div>
          </Link>
        </div>
      </Section>

      <h3>View all your content</h3>

      <div className="button-container">
        <Button>
          <Link href="/my/pastes">View Pastes</Link>
        </Button>

        <Button>
          <Link href="/my/links">View Links</Link>
        </Button>
      </div>

      <div className="stats">
        <h2>Stats</h2>
        <p>See how your pastes and links are performing.</p>
        <div className={styles.card_container}>
          <div className={styles.stat_card}>
            <h1 className="number">{paste_count}</h1>
            <p>Pastes</p>
          </div>

          <div className={styles.stat_card}>
            <h1 className="number">{paste_views}</h1>
            <p>Paste Views</p>
          </div>

          <div className={styles.stat_card}>
            <h1 className="number">{links}</h1>
            <p>Links</p>
          </div>

          <div className={styles.stat_card}>
            <h1 className="number">{link_views}</h1>
            <p>Link Views</p>
          </div>
        </div>
      </div>
    </div>
  );
}
