import { db } from "@/lib/db";
import PasteNotFound from "@/components/PasteNotFound";
import { clerkClient } from "@clerk/nextjs/server";

export default async function PasteView({ params }) {
  const { slug } = params;

  const paste = await db.paste.findUnique({
    where: {
      slug: slug,
    },
  });

  const user = await clerkClient.users.getUser(paste?.ownerId);

  return (
    <div>
      {paste == null ? (
        <PasteNotFound />
      ) : (
        <div className="container">
          <main>
            <div className="main-content">
              <h1>{paste.name}</h1>
              <div>
                by {user.firstName} {user.lastName}
              </div>
              <div className="line"></div>
              <h1>Content</h1>
              <p>{paste.content}</p>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
