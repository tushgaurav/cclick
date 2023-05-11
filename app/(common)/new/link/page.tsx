import { WithUser } from "@clerk/nextjs";
import LinkForm from "@/components/LinkForm";
import { currentUser } from "@clerk/nextjs/app-beta";
import ShortLink from "@/components/ShortLink";

export const metadata = {
  title: "Shorten Links | cclick",
  opengraph: {
    title: "Shorten Links on cclick",
  },
};

export default async function CreateLink() {
  let user = await currentUser();

  if (!user) {
    user = {
      userName: "Guest",
      id: "69",
    };
  }

  return (
    <div className="container">
      <LinkForm userName={user.userName} userId={user.id} />
    </div>
  );
}
