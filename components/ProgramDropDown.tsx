import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "./ui/label";
const ProgramDropDown = ({ setProgramId, programId }) => {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/programs`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          const data = await response.json();
          setPrograms(data);
          console.log({ data });
        } else {
          console.error("Failed to fetch programs");
        }
      } catch (error) {
        console.error("An error occurred while fetching programs:", error);
      }
    };

    fetchPrograms();
  }, []);
  const handleClick = (program) => {
    setProgramId(program.pId);
    setSelectedProgram(program);
  };

  return (
    <div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right ">Program</Label>
        <DropdownMenu>
          <DropdownMenuTrigger className="form-control  px-3 py-2 rounded-md border col-span-3 text-left text-sm">
            {" "}
            {selectedProgram
              ? `${selectedProgram.course}- ${selectedProgram.specialization}`
              : "Select"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {programs.map((program) => {
              return (
                <>
                  {" "}
                  <DropdownMenuItem onClick={() => handleClick(program)}>
                    {program.course}-{program.specialization}
                  </DropdownMenuItem>
                </>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ProgramDropDown;
