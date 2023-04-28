import { db } from "@/lib/db";
import { verifyUserById } from "@/lib/verified";
import PasteNotFound from "@/components/PasteNotFound";
import QRCode from "@/components/QRCode";
import Section from "@/components/Section";
import { clerkClient } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEye } from "@fortawesome/free-solid-svg-icons";

const styles = {
  flex_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: "0.8rem",
    flexWrap: "wrap",
  },

  group: {
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
  },

  fa_icon: {
    width: "1em",
    display: "flex",
    alignItems: "center",
    color: "#efabab",
  },
};

export async function getPaste(slug: string) {
  const paste = await db.paste.findUnique({
    where: {
      slug: slug,
    },
  });

  await db.paste.update({
    where: {
      slug: slug,
    },
    data: {
      views: paste.views + 1,
    },
  });

  return paste;
}

// Generate the page title based on the paste name and owner name
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = params;
  const paste = await getPaste(slug);
  return { title: `${paste.name} by ${paste?.ownerName} | cclick` };
}

export default async function PasteView({ params }) {
  const { slug } = params;
  let user: any;
  let verified = false;

  let paste = null;
  try {
    paste = await getPaste(slug);
    user = await clerkClient.users.getUser(paste?.ownerId);

    if (verifyUserById(user.id)) {
      verified = true;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <div>
        {paste == null ? (
          <PasteNotFound />
        ) : (
          <div className="container">
            <main>
              <div className="main-content">
                <h1>{paste.name}</h1>
                <div style={styles.flex_container}>
                  <div style={styles.group}>
                    by {user?.firstName ? user.firstName : "Unknown"}{" "}
                    {user?.lastName ? user.lastName : null}
                    {verified ? (
                      <div style={styles.fa_icon}>
                        <FontAwesomeIcon icon={faCheckCircle} size="2xs" />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div style={styles.group}>
                    <div style={styles.fa_icon}>
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ color: "black" }}
                      />{" "}
                    </div>{" "}
                    {paste.views} views
                  </div>
                  {paste.visiblity === "PRIVATE" ? (
                    <span className="private">Private</span>
                  ) : null}
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
