import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const prisma = new PrismaClient();
    const requestBody = await req.json();

    const { name, email, password, job, university, major } = requestBody;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      name,
      email,
      password: hashedPassword,
      job,
      university,
      major
    };

    const exist = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (exist) {
      throw new Error("User already exists");
    }

    const user = await prisma.user.create({
      data: userData
    });

    return NextResponse.json({ message: "User created", user});
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, {status: 400});
  }
}
