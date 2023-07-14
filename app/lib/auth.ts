import { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "../models/User"; 
import bcrypt from "bcrypt";
import Google from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                name: {
                    label: "Name",
                    type: "text",
                    placeholder: "John Smith",
                },
                email: { 
                    label: "Email",
                    type: "text", 
                    placeholder: "jsmith",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }
                const user = await User.findOne({ email: credentials.email });
                const isMatch = await bcrypt.compare(credentials.password, user.password);
                if (isMatch === true) {
                    const  { password, createdAt, id, ...dbUserWithoutPassword } = user;
                    return dbUserWithoutPassword;
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

    ],
}