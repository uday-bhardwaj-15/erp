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
      student: "Uday Bhardwaj",
      subject: "MFCS",
      day: "BSC",
      uno: "B",
      date: "12/06/2024",
      attendence: "Absent",
    },
    {
      student: "Shikhar Badmash",
      subject: "Data Structure Using C",
      day: "BBA",
      uno: "C",
      date: "12/06/2024",
      attendence: "Absent",
    },
    {
      student: "Sahil",
      subject: "CBNST",
      day: "BCA",
      date: "12/06/2024",
      uno: "D",
      attendence: "Absent",
    },
  ];
  return (
    <Table>
      <TableCaption>A list of classes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Day</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>University No.</TableHead>
          <TableHead>Student</TableHead>
          <TableHead>Attendence</TableHead>
          <TableHead className="text-right">Subject</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {classdata.map((classesdata) => (
          <TableRow key={classesdata.uno}>
            <TableCell className="font-medium">{classesdata.day}</TableCell>
            <TableCell className="font-medium">{classesdata.date}</TableCell>
            <TableCell>{classesdata.uno}</TableCell>
            <TableCell>{classesdata.student}</TableCell>
            <TableCell>{classesdata.attendence}</TableCell>
            <TableCell className="text-right">{classesdata.subject}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableClass;
