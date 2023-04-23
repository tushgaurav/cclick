import PasteForm from "@/components/PasteForm";
import { delay } from "@/lib/async";
import { db } from "@/lib/db";

const getPastes = async () => {
  // await delay(1000);

  const pastes = await db.paste.findFirst({});
  console.log(pastes);

  return { pastes };
};

export default async function Paste() {
  const { pastes } = await getPastes();

  return (
    <div>
      <h1>Public Pastes</h1>
      {pastes.name}

      <PasteForm />
    </div>
  );
}
