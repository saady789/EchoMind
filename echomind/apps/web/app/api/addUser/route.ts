import { prisma } from "db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { user } = await req.json();

    if (!user?.id) {
      return NextResponse.json(
        { error: "No user id provided" },
        { status: 400 }
      );
    }

    // check if user already exists
    const existing = await prisma.user.findUnique({
      where: { id: user.id },
    });

    // create only if missing
    if (!existing) {
      await prisma.user.create({
        data: {
          id: user.id,
        },
      });

      //console.log("User created:", user.id);

      return NextResponse.json({ created: true }, { status: 201 });
    }

    //console.log("User already exists:", user.id);

    return NextResponse.json({ created: false }, { status: 200 });
  } catch (err) {
    //console.error("Error creating user:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
