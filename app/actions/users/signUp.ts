"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const signUp = async (username: string, passwordhash: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (user) {
    return "User with that credentials already exists.";
  }

  const password = bcrypt.hashSync(passwordhash, 10);

  await prisma.user.create({
    data: {
      username,
      password,
    },
  });

  return "Successfully created new user!";
};
