import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        uNo: { label: "Username", type: "text", placeholder: "yourusername" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }
        const { uNo, password } = credentials;
        const user = await prisma.user.findUnique({ where: { uNo } });
        if (!user) {
          return null;
        }
        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) {
          return null;
        }
        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          username: user.uNo,
          image: user.image,
          role: user.role || "STUDENT",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signIn",
    signOut: "/auth/signout",
  },
  secret: process.env.NEXTAUTH_SECRET,
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
        token.username = user.username;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.email = token.email;
        session.user.username = token.username;
        session.user.name = token.name;
        session.user.image = token.image;
      }
      return session;
    },
  },
};
