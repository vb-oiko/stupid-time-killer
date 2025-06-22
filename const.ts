import dotenv from "dotenv";
dotenv.config();

export const SALT_ROUNDS = 10;

export const COOKIE_PARSER_SECRET = process.env.COOKIE_PARSER_SECRET;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
