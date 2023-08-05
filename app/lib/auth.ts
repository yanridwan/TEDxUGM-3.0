import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import prisma from "./prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authConfig: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "mail@example.org",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Please enter email and password!");
        }
        const user = await prisma.User.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user?.password) {
          throw new Error("User not found!");
        }
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isMatch) {
          throw new Error("Invalid password!");
        }
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // async session({ session, token }) {
    //   session.user = token.user;
    //   return session;
    // },
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.user = user;
    //   }
    //   return token;
    // },
  },
  debug: process.env.NODE_ENV === "development",
};
