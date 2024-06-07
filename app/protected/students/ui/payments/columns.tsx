"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import DeleteStudent from "@/app/components/DeleteStudent";
import EditStudent from "@/app/components/EditStudent";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type StudentDetails = {
  id: string;
  studentname: string;
  program: string;
  universityno: string;
  section: string;
  mail: string;
};

export const columns: ColumnDef<StudentDetails>[] = [
  {
    accessorKey: "program",
    header: "Program",
  },
  {
    accessorKey: "studentname",
    header: "Student Name",
  },
  {
    accessorKey: "universityno",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CU-NO.
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const studentdetails = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(studentdetails.id)}
            >
              Copy Student ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <EditStudent studentId={studentdetails.id} />
            <DropdownMenuItem>
              <DeleteStudent studentId={studentdetails.id} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "section",
    header: "Section",
  },
  {
    accessorKey: "mail",
    header: "Email",
  },
];
