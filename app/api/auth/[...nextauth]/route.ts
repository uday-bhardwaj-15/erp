import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { EMAIL, USERTYPE, PASSWORD } = body;
    // check username already exits
    const existingUsername = await prisma.uSERS_CREDENTIAL.findUnique({
      where: { ID: 4, EMAIL: EMAIL },
    });
    if (existingUsername) {
      return NextResponse.json(
        {
          uSERS_CREDENTIAL: null,
          message: "user with this username already exist",
        },
        {
          status: 409,
        }
      );
    }
    const existingUsertype = await prisma.uSERS_CREDENTIAL.findUnique({
      where: { ID: 8, USERTYPE: USERTYPE },
    });
    if (existingUsertype) {
      return NextResponse.json(
        {
          uSERS_CREDENTIAL: null,
          message: "user with this usertype already exist",
        },
        {
          status: 409,
        }
      );
    }
    const hashedPassword = await hash(PASSWORD, 10);
    const newUser = await prisma.uSERS_CREDENTIAL.create({
      data: {
        USERNAME: 789,
        USERTYPE: "S",
        NAME: "uday",
        PASSWORD: "456454",
        createdAt: "14/54/12",
        updatedAt: "13/05/29",
      },
    });
    return NextResponse.json(
      { USERSCREDENTIALS: newUser, message: "user is created " },
      { status: 201 }
    );

    return NextResponse.json(body);
  } catch (error) {}
}
