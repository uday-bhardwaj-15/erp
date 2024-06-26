import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { uNo, Status } = await req.json();
    console.log("hello");
    const attendanceVal = await prisma.attendence.findUnique({
      where: {
        uNo,
      },
    });

    if (attendanceVal) {
      return NextResponse.json(
        { message: "Attendance with that University Number already Marked." },
        { status: 400 }
      );
    }

    const attendancePost = await prisma.attendence.create({
      data: {
        uNo,

        Status,
      },
    });

    return NextResponse.json({ attendancePost }, { status: 200 });
  } catch (error) {
    console.error("Error creating attendance record:", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
