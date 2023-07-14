import bcrypt from "bcrypt";
import { NextRequest, NextResponse} from 'next/server';
import dbConnect from "../../lib/dbConnect.ts";
import User from "../../models/User.ts";



export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const requestBody = await req.json();
    const { name, email, password, job, university, major } = requestBody;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      job,
      university,
      major
    });
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}