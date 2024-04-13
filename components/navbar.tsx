"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { ModeToggle } from "./modetoggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
      {" "}
      <nav className="bg-[#8ecae6] text-[#023047] flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <div className="block lg:hidden">
            {/* Mobile dropdown */}
            <Sheet>
              <SheetTrigger
                className="text-xl focus:outline-none"
                onClick={toggleDropdown}
              >
                {" "}
                &#9776;
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex flex-col ">
                      <Link href="/" className="font-bold text-xl block mt-4">
                        Dashboard
                      </Link>
                      <Link href="/students" className="block mt-2">
                        Students
                      </Link>
                      <Link href="/classes" className="block mt-2">
                        Classes
                      </Link>
                      <Link href="/fees" className="block mt-2">
                        Fees
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex items-center">
            <Link href="/" className="font-bold text-xl">
              Dashboard
            </Link>
            <Link href="/students" className="ml-4">
              Students
            </Link>
            <Link href="/classes" className="ml-4">
              Classes
            </Link>
            <Link href="/fees" className="ml-4">
              Fees
            </Link>
          </div>
        </div>

        <div className="w-32 flex justify-evenly items-center">
          <div>
            <ModeToggle />
          </div>{" "}
          <Image
            src="/next.svg"
            width={50}
            height={50}
            className="rounded-full"
            alt="Picture of the author"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
