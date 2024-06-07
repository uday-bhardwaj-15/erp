import DeleteStudent from "@/app/components/DeleteStudent";
import prisma from "@/lib/prisma";
import { Student } from "@prisma/client";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

const DashboardPage = async (res: NextResponse) => {
  const students: Student[] = await prisma.student.findMany();

  return (
    <div>
      This is the dashboard!
      <h1>Students</h1>
    </div>
  );
};

export default DashboardPage;
