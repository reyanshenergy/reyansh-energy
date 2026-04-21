import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, phone, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "reyanshenergy1@gmail.com",
      pass: "Rhythm@2026", 
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Lead" <reyanshenergy1@gmail.com>`,
      to: "reyanshenergy1@gmail.com",
      subject: "New Solar Inquiry",
      text: `
        Name: ${name}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
  console.log(err);
  return NextResponse.json({ success: false });
}
}