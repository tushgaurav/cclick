import { db } from "@/lib/db";
import PasteNotFound from "@/components/PasteNotFound";

export default async function PasteView({ params }) {
  const { slug } = params;
  const paste = await db.paste.findUnique({
    where: {
      slug: slug,
    },
    include: {
      owner: true,
    },
  });

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
                by {paste.owner.firstName} {paste.owner.lastName}
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
