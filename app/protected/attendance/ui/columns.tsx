"use client";
import React from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import AddStatus from "./AddStatus";

export type AttendanceDetails = {
  uNo: string;
  section: string;
  status: string;
  classId;
  name: string;
  Id;
};

export const columns: ColumnDef<AttendanceDetails>[] = [
  {
    accessorKey: "classId",
    header: "Class ID",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const studentDetails = row.original;
      const handleStatusChange = (newStatus) => {
        // Handle status change here, possibly update the state or make an API call
        console.log(
          `Status for student ${studentDetails.name} changed to ${newStatus}`
        );
      };
      return (
        <AddStatus
          initialStatus={studentDetails.status}
          onStatusChange={handleStatusChange}
          uNo={studentDetails.uNo}
        />
      );
    },
  },
  {
    accessorKey: "uNo",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        CU-NO.
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const studentDetails = row.original;

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
              onClick={() => navigator.clipboard.writeText(studentDetails.Id)}
            >
              Copy Student ID
            </DropdownMenuItem>

            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "section",
    header: "Section",
  },
];
