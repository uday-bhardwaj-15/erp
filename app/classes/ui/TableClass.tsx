import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableClass = () => {
  const classdata = [
    {
      teacher: "Uday Bhardwaj",
      subject: "MFCS",
      course: "BSC",
      section: "B",
    },
    {
      teacher: "Vishu Badmash",
      subject: "Data Structure Using C",
      course: "BBA",
      section: "C",
    },
    {
      teacher: "Krishna Don Cj",
      subject: "CBNST",
      course: "BCA",
      section: "D",
    },
  ];
  return (
    <Table>
      <TableCaption>A list of classes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Professor</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Course</TableHead>
          <TableHead className="text-right">Section</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {classdata.map((classesdata) => (
          <TableRow key={classesdata.section}>
            <TableCell className="font-medium">{classesdata.teacher}</TableCell>
            <TableCell>{classesdata.subject}</TableCell>
            <TableCell>{classesdata.course}</TableCell>
            <TableCell className="text-right">{classesdata.section}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableClass;
