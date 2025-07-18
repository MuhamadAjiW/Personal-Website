import * as nodemailer from "nodemailer";
import { env } from "./config";

export const mailTransporter = nodemailer.createTransport({
  host: env.MAIL_HOST,
  port: env.MAIL_PORT,
  secure: env.MAIL_SECURE,
  debug: true,
  logger: true,
  tls: {
    rejectUnauthorized: false,
  }
})

export const sendMail = async (subject: string, html: string) => {
  try {
    await mailTransporter.sendMail({
      from: env.MAIL_SENDER,
      to: env.MAIL_RECEIVER,
      subject: subject,
      html: html
    });
    console.log(`Email sent to ${env.MAIL_RECEIVER} with subject: ${subject}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};