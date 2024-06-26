// import Login from "@/components/login";
import React, { useEffect, useState } from "react";
import prisma from "@/lib/prisma";
import { DataTable } from "./ui/data-table";
import { columns } from "./ui/columns";

import AddStatus from "./ui/AddStatus";
import { Button } from "@/components/ui/button";

const page = async () => {
  const studentsdata = await prisma.student.findMany({
    include: {
      attendences: true,
    },
  });

  const attendanceData = studentsdata.map((studentval) => ({
    uNo: studentval.uNo,
    classId: studentval.attendences?.classId ?? "",
    status: studentval?.attendences?.Status ?? "",
    name: studentval.name,
    Id: studentval.programId ?? "N/A",

    section: studentval.section,
  }));

  // const attendanceData = studentsdata.map((studentval) => ({
  //   uNo: studentval.students.uNo,
  //   classId: studentval.classId ?? "",
  //   Id: studentval?.Id ?? "N/A",
  //   section: studentval.students.section,
  //   name: studentval.students.name,
  //   status: studentval?.Status ?? "",
  // }));

  return (
    <>
      <div className=" ml-4 mr-4 mt-5">
        <div className="text-4xl font-bold mb-5 ">Students</div>
        <DataTable columns={columns} data={attendanceData} />
      </div>
    </>
  );
};

export default page;
