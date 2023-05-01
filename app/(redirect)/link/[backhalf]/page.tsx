import { notFound, redirect } from "next/navigation";
import { db } from "@/lib/db";

export default async function BackHalf({ params }) {
  const { backhalf } = params;

  const originalUrl = await db.link.findUnique({
    where: {
      backhalf: backhalf,
    },
  });

  if (originalUrl) {
    await db.link.update({
      where: {
        backhalf: backhalf,
      },
      data: {
        views: originalUrl.views + 1,
      },
    });
    redirect(originalUrl.link);
  }
  notFound();

  return <div></div>;
}
