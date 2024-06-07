import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface contextProps {
  params: {
    studentsId: string;
  };
}
export async function DELETE(req: Request, context: contextProps) {
  try {
    console.log("hello world");
    const { params } = context;
    await prisma.student.delete({
      where: {
        id: params.studentsId,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong! could not delete Student " },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, context: contextProps) {
  try {
    const { studentname, program, universityno, section } = await req.json();

    const { params } = context;
    await prisma.student.update({
      where: {
        id: params.studentsId,
      },
      data: {
        studentname,
        program,
        universityno,
        section,
      },
    });
    return NextResponse.json({ message: "Updated Student " }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong! could not delete Student " },
      { status: 500 }
    );
  }
}
