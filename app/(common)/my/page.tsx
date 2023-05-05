import Section from "@/components/Section";
import PasteCard from "@/components/PasteCard";
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
    take: 2,
  });
  console.log(pastes);

  return pastes;
}

export default function MyContent() {
  const pastes = getPastes();

  return (
    <div className="container">
      <main>
        <h1 className="title">View your content here!</h1>
      </main>
      <Section>
        <h2>Your Pastes</h2>
        <div>
          <p>Here is a list of your pastes.</p>
          {typeof pastes}
        </div>

        <div className="grid">{}</div>
      </Section>
    </div>
  );
}
