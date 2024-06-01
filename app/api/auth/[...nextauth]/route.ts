import { Account, Profile, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import NextAuth, { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import { Role } from "@prisma/client";
import Email from "next-auth/providers/email";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "yourusername",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        const { username, password } = credentials;
        const user = await prisma.user.findUnique({
          where: {
            username,
          },
        });
        console.log("uday", user);
        if (!user) {
          return null;
        }

        const userPassword = user.password;

        const isValidPassword = bcrypt.compareSync(password, userPassword);

        console.log({ password });
        if (!isValidPassword) {
          return null;
        }

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          image: user.image, // Assuming the user has an image field
          role: user.role || "STUDENT", // Default role if not provided
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signIn",
    signOut: "/auth/signout",
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    async encode({ secret, token }) {
      if (!token) {
        throw new Error("No token to encode");
      }
      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      if (!token) {
        throw new Error("No token to decode");
      }
      const decodedToken = jwt.verify(token, secret);
      if (typeof decodedToken === "string") {
        return JSON.parse(decodedToken);
      } else {
        return decodedToken;
      }
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image; // Add image to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.image; // Add image to the session
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
