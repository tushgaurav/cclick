import { db } from "@/lib/db";
import PasteNotFound from "@/components/PasteNotFound";
import QRCode from "@/components/QRCode";
import Section from "@/components/Section";
import { clerkClient } from "@clerk/nextjs/server";

export default async function PasteView({ params }) {
  const { slug } = params;
  let user: any;

  let paste = null;
  try {
    paste = await db.paste.findUnique({
      where: {
        slug: slug,
      },
    });
    user = await clerkClient.users.getUser(paste?.ownerId);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <head>
        <title>{paste?.name} | cclick</title>
      </head>
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
                <p className="paste_display">{paste.content}</p>
                <div className="line"></div>
              </div>
            </main>

            <Section>
              <QRCode />
            </Section>
          </div>
        )}
      </div>
    </>
  );
}
