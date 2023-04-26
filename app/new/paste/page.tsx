import PasteForm from "@/components/PasteForm";
import { currentUser } from "@clerk/nextjs/app-beta";
import randomEmoji from "@/lib/emoji";

export const metadata = {
  title: "Create new Paste | cclick.click",
  openGraph: {
    title: "Blog",
  },
};

export default async function Paste() {
  const user = await currentUser();
  const emojiString =
    randomEmoji() + randomEmoji() + randomEmoji() + randomEmoji();

  return (
    <div className="container">
      <h1>Create New Paste</h1>
      <h4>
        Create a new paste as {user?.firstName} {emojiString}
      </h4>
      <PasteForm
        userId={user.id}
        userName={`${user?.firstName} ${user?.lastName}`}
      />
    </div>
  );
}
