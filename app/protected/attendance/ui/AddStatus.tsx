"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

const AddStatus = ({ initialStatus, onStatusChange, uNo }) => {
  const [status, setStatus] = useState(initialStatus);
  const router = useRouter();
  const handleStatusChange = (checked) => {
    const newStatus = checked ? "PRESENT" : "ABSENT";
    setStatus(newStatus);
    onStatusChange(newStatus);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:3000/api/attendance`,

      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Status: status, uNo }),
      }
    );
    console.log({ res });
    if (res.ok) {
      // Redirect or refresh the page\
      router.refresh();
    } else {
      console.error("Failed to create attendance");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {initialStatus ? (
        <span>{status}</span>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <Checkbox
            checked={status === "PRESENT"}
            onCheckedChange={(checked) => handleStatusChange(checked)}
          />
          <span>{status}</span>
          <button
            type="submit"
            className=" px-2  py-1 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default AddStatus;
