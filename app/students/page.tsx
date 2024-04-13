import Login from "@/components/login";
import React from "react";
import { Payment, columns } from "./ui/payments/columns";
import { DataTable } from "./ui/payments/data-table";
import AddStudent from "./ui/AddStudent";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed7752f",
      section: "D",
      program: "B-COM",
      addnum: "CU23278973",
      studentName: "Vishu badmash Bhardwaj",
    },
    {
      id: "728e55d52f",
      section: "F",
      program: "BCA",
      addnum: "CU23271597",
      studentName: "Krishna Don Bhardwaj",
    },
    {
      id: "728ed5442f",
      section: "E",
      program: "BBA",
      addnum: "CU23254696",
      studentName: "Dhruv paan Bhardwaj",
    },
    {
      id: "728ed556f",
      section: "A",
      program: "BSC",
      addnum: "CU23270096",
      studentName: "Uday Bhardwaj",
    },
  ];
}
const page = async () => {
  const data = await getData();
  return (
    <div>
      <div className="text-4xl font-bold  ml-4 mt-5">Students</div>

      <div className="container mx-auto py-10">
        <AddStudent />
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default page;
