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

// Raw smtp transport
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

// With mailgun http relay, far more reliable
export const sendMailgun = async (subject: string, text: string): Promise<boolean> => {  
  const mailgunApiUrl = `https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`;

  const body = new URLSearchParams({
    'from': env.MAIL_SENDER,
    'to': env.MAIL_RECEIVER,
    'subject': subject,
    'text': text
  });

  const credentials = Buffer.from(`api:${env.MAILGUN_API_KEY}`).toString('base64');
  const headers = {
    'Authorization': `Basic ${credentials}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  try {
    const response = await fetch(mailgunApiUrl, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    if (response.ok) { // response.ok is true if status is 200-299
      console.log("Notification email sent successfully via Mailgun API.");
      return true;
    } else {
      // Log the error response from Mailgun for better debugging
      const errorBody = await response.json();
      console.error(`Mailgun API returned status ${response.status}:`, errorBody);
      return false;
    }
  } catch (error) {
    console.error("Failed to send notification email via Mailgun API:", error);
    return false;
  }
};