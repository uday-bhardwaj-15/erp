import React from "react";
import AddClass from "./ui/AddClass";
import TableClass from "./ui/TableClass";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-3">
      <h1 className="font-bold   text-4xl text-[#023047] mb-6">Classes</h1>
      <div className="flex items-center justify-center bg-[#8ecae6] rounded-lg p-2">
        <p className="text-black font-medium mr-2">Add New Class</p>
        <AddClass />
      </div>
      <div className="flex mt-8 w-full">
        <TableClass />
      </div>
    </div>
  );
};

export default page;
