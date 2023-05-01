import { NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("POST REQUEST BODY:");
  console.log(body);

  // check if backhalf is available
  const backhalf = await db.link.findUnique({
    where: {
      backhalf: body.backhalf,
    },
  });

  if (backhalf != null) {
    // if backhalf is taken
    console.log("backhalf is taken");
    return new Response("backhalf is taken", {
      status: 409,
    });
  } else {
    // if backhalf is available
    console.log("backhalf is available");
    return new Response("backhalf is available", {
      status: 200,
    });
  }
}
