import { mailOptions, transporter } from "@/lib/nodemailer";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { studentname, program, universityno, section, mail } =
      await req.json();
    const newPost = await prisma.student.create({
      data: {
        studentname,
        program,
        universityno,
        section,
        mail,
      },
    });
    await transporter.sendMail({
      ...mailOptions,
      to: mail,
      subject: "Your Id & Password University",
      text: "this is a test string",
      html: `<h1>Username ${mail}</h1> <h1>Password ${universityno}</h1>`,
    });
    return NextResponse.json({ newPost }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
