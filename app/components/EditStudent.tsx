"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import prisma from "@/lib/prisma";
import { Student } from "@prisma/client";

export default function EditStudent({ studentId }) {
  const [studentname, setStudentname] = useState("");
  const [program, setProgram] = useState("");
  const [universityno, setUniversityno] = useState("");
  const [section, setSection] = useState("");
  const router = useRouter();

  const handleSubmit = async (studentId: string) => {
    // e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/${studentId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentname, program, universityno, section }),
    });

    if (res.ok) {
      toast({
        variant: "default",
        title: "Student Data is Edited",
        description: "Student Data is edited and Saved ",
      });
      setStudentname("");
      setProgram("");
      setUniversityno("");
      setSection("");
      router.refresh();
    } else {
      console.error("Failed to update student");
    }
  };
  const editButtonClick = (
    param: string
  ): React.MouseEventHandler<HTMLButtonElement> => {
    return (event) => {
      handleSubmit(param).catch((error) => {
        console.error("Error handling click:", error);
      });
    };
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Edit Student</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Student</DialogTitle>
          <DialogDescription>Edit Student Details</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Name</Label>
            <Input
              placeholder="Student Name"
              className="col-span-3"
              value={studentname}
              onChange={(e) => setStudentname(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Program</Label>
            <Input
              placeholder="Program Name"
              className="col-span-3"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">UniversityNo.</Label>
            <Input
              placeholder="University Number"
              className="col-span-3"
              value={universityno}
              onChange={(e) => setUniversityno(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Section</Label>
            <Input
              placeholder="Section"
              className="col-span-3"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={editButtonClick(studentId)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
