import { NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log(body);

  try {
    // add paste to database
    if (body.anonymous) {
      // if user wants to be anonymous
      body.ownerId = null;
      body.ownerName = null;
    }

    const post = await db.paste.create({
      data: {
        name: body.title,
        content: body.content,
        ownerId: body.ownerId,
        visiblity: body.visiblity,
        slug: body.slug,
        ownerId: body.anonymous ? "Anonymous" : body.ownerId,
        ownerName: body.anonymous ? "Anonymous" : body.ownerName,
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
