"use server";

import nodemailer from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

export const sendMail = async (formData: FormData) => {
  try {
    const name = formData.get("sender_name");
    const email = formData.get("sender_email");
    const message = formData.get("sender_message");

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions: Options = {
      from: email?.toString(),
      to: "peterdeclercq1997@outlook.com",
      subject: `Message from ${name}`,
      text: message?.toString(),
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};
