import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  // if (session.user.role !== "TEACHER") {
  //   return <div>you are not a TEACHER</div>;
  // }
  return <div>This is an extra page for teacher only</div>;
};

export default page;
