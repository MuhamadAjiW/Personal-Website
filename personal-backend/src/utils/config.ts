
import { z } from "zod";
require('dotenv').config();

const envSchema = z.object({
  SERVER_PORT: z.string().default("5174"),
  DATABASE_URI: z.string().default("mongodb://localhost:27017/personal"),
  DASH_API_TOKEN: z.string().default("none"),

  MAIL_HOST: z.string().default("localhost"),
  MAIL_PORT: z.string().default("25"),
  MAIL_SECURE: z.string().default("false").transform((val) => val === "true"),
  MAIL_SENDER: z.string().default("no-reply@localhost"),
  MAIL_RECEIVER: z.string().default(""),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.error("Invalid environment variables:", parsed.error.message);
  throw new Error("Invalid environment variables");
}

export const env = {
  SERVER_PORT: +parsed.data.SERVER_PORT,
  DATABASE_URI: parsed.data.DATABASE_URI,
  DASH_API_TOKEN: parsed.data.DASH_API_TOKEN,
  MAIL_HOST: parsed.data.MAIL_HOST,
  MAIL_PORT: +parsed.data.MAIL_PORT,
  MAIL_SECURE: parsed.data.MAIL_SECURE,
  MAIL_SENDER: parsed.data.MAIL_SENDER,
  MAIL_RECEIVER: parsed.data.MAIL_RECEIVER,
};