// import Login from "@/components/login";
import React, { useEffect, useState } from "react";
import { columns } from "./ui/payments/columns";
import { DataTable } from "./ui/payments/data-table";
import AddStudent from "./ui/AddStudent";
import prisma from "@/lib/prisma";

const page = async () => {
  const students = await prisma.student.findMany({
    include: {
      program: true,
    },
  });

  const studentProgram = students.map((student) => ({
    programCourse: `${student.program.course}-${student.program.specialization}`,
    uNo: student.uNo,
    section: student.section,
    name: student.name,
    mail: student.mail,
  }));

  return (
    <div>
      <div className="text-4xl font-bold  ml-4 mt-5">Students</div>

      <div className="container mx-auto py-10">
        <AddStudent />
        <DataTable columns={columns} data={studentProgram} />
      </div>
    </div>
  );
};

export default page;
