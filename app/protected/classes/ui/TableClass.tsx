import prisma from "@/lib/prisma";
import React from "react";

const TableClass = async () => {
  const classes = await prisma.classes.findMany({
    include: {
      subject: true,
    },
  });

  return (
    <div className="rounded-t-lg m-5  mx-auto bg-gray-200 text-gray-800">
      <table>
        <thead>
          <tr className="text-left border-b-2 border-gray-300">
            <th className="px-4 py-3">Time</th>
            <th className="px-4 py-3">Day</th>
            <th className="px-4 py-3">Subject</th>
            <th className="px-4 py-3">Teacher</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classdata) => (
            <tr
              key={classdata.classId}
              className="bg-gray-100 border-b border-gray-200"
            >
              <td className="px-4 py-3">{classdata.time}</td>
              <td className="px-4 py-3">{classdata.day}</td>
              <td className="px-4 py-3">
                {classdata.subject.subjectName
                  ? classdata.subject.subjectName
                  : "Loading..."}
              </td>
              <td className="px-4 py-3">{classdata.subject.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableClass;
