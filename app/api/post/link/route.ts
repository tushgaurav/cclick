import { NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Data recieved");
  console.log(body);

  try {
    const post = await db.link.create({
      data: {
        name: body.title,
        link: body.link,
        description: "body.description",
        backhalf: body.backhalf,
      },
    });

    const res = JSON.stringify(post);
    return new Response(res, {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    console.log("Failed to add link to database");
  }
}
