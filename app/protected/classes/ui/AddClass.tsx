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

const AddClass = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const handlesubmit = () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Classes</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Classes</DialogTitle>
          <DialogDescription>Add new classes</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Subject</Label>
            <Input
              placeholder="Subject Name"
              className="col-span-3"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Proffesor</Label>
            <Input placeholder="Proffesor Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Course</Label>
            <Input placeholder="Course Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Section</Label>
            <Input placeholder="Section" className="col-span-3" />
          </div> */}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handlesubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddClass;
