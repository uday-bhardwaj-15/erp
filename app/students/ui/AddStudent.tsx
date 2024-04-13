"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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

const AddStudent = () => {
  const [title, setTitle] = useState("");
  const [professor, setProfessor] = useState("");
  const [course, setCourse] = useState("");
  const [section, setSection] = useState("");

  const handleSaveChanges = () => {
    // Create a new class object
    const newClass = {
      subject: title,
      professor: professor,
      course: course,
      section: section,
    };
    // Do something with the new class object, e.g., add it to an array
    console.log("New Class:", newClass);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Student</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Student</DialogTitle>
          <DialogDescription>Add Student Details</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Name</Label>
            <Input
              placeholder="Student Name"
              className="col-span-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Program</Label>
            <Input
              placeholder="Program Name"
              className="col-span-3"
              value={professor}
              onChange={(e) => setProfessor(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">UniversityNo.</Label>
            <Input
              placeholder="University Number"
              className="col-span-3"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Section</Label>
            <Input
              placeholder="Section"
              className="col-span-3"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSaveChanges}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudent;
