import { NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log(body);

  try {
    // add paste to database

    if (body.anonymous === "on") body.ownerId = null;
    if (body.anonymous === "on") body.ownerName = null;
    const post = await db.paste.create({
      data: {
        name: body.title,
        content: body.content,
        ownerId: body.ownerId,
        visiblity: body.visiblity,
        slug: body.slug,
        ownerId: body.ownerId ? body.ownerId : "Anonymous",
        ownerName: body.ownerId ? body.ownerName : "Anonymous",
      },
    });
  } catch {
    // if failded to add to database
    return new Response("Failed to add paste to database", {
      status: 500,
    });
  } finally {
    return new Response("Paste added to database", {
      status: 200,
    });
  }
}
