// import Login from "@/components/login";
import React from "react";
import { columns } from "./ui/payments/columns";
import { DataTable } from "./ui/payments/data-table";
import AddStudent from "./ui/AddStudent";

import { PrismaClient, Student } from "@prisma/client";

const page = async () => {
  const prisma = new PrismaClient();

  const students: Student[] = await prisma.student.findMany();

  return (
    <div>
      <div className="text-4xl font-bold  ml-4 mt-5">Students</div>

      <div className="container mx-auto py-10">
        <AddStudent />
        <DataTable columns={columns} data={students} />
      </div>
    </div>
  );
};

export default page;
