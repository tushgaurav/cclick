// Check if slug is available

import { NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("POST REQUEST BODY:");
  console.log(body);

  // check if slug is available
  const slug = await db.paste.findUnique({
    where: {
      slug: body.slug,
    },
  });

  if (slug != null) {
    // if slug is taken
    console.log("Slug is taken");
    return new Response("Slug is taken", {
      status: 409,
    });
  } else {
    // if slug is available
    console.log("Slug is available");
    return new Response("Slug is available", {
      status: 200,
    });
  }
}
