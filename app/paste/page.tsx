import PasteForm from "@/components/PasteForm";
import { currentUser } from "@clerk/nextjs/app-beta";
import { Suspense } from "react";

export const metadata = {
  title: "Create new Paste | cclick.click",
  openGraph: {
    title: "Blog",
  },
};

export default async function Paste() {
  const user = await currentUser();

  return (
    <div className="container">
      <h1>Create New Paste</h1>
      <h4>Create a new paste as {user?.firstName}😁</h4>

      <Suspense fallback={<div>Loading...</div>}>
        <PasteForm userId={user.id} />
      </Suspense>
    </div>
  );
}
