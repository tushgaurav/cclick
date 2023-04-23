import PasteForm from "@/components/PasteForm";
import { currentUser } from "@clerk/nextjs/app-beta";
// import { delay } from "@/lib/async";
import { db } from "@/lib/db";

// const getPastes = async () => {
//   await delay(1000);

//   const pastes = await db.paste.findFirst({});
//   console.log(pastes);

//   return { pastes };
// };

export const metadata = {
  title: "Create new Paste | cclick.click",
  openGraph: {
    title: "Blog",
  },
};

export default async function Paste() {
  const user = await currentUser();
  console.log(user);

  return (
    <div className="container">
      <h1>Create New Paste</h1>
      <h4>Create a new paste as {user?.firstName}😁</h4>

      <PasteForm />
    </div>
  );
}
