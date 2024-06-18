import { useEffect, useState } from "react";
import crypto from "crypto";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function MyComponentpage({ params }) {
  const student = await prisma.student.findUnique({
    where: {
      uNo: params.uno,
    },
    include: {
      program: true,
    },
  });
  return (
    <div>
      <h1>{student.name}</h1>
      <h1>{student.mail}</h1>
      <h1>{student.program.course}</h1>
    </div>
  );
}
