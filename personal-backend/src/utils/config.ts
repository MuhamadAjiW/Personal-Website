require('dotenv').config();

export const SERVER_PORT: number = process.env.SERVER_PORT? +process.env.SERVER_PORT : 5174;
export const DATABASE_URI: string = process.env.DATABASE_URI? process.env.DATABASE_URI : "mongodb://localhost:27017/personal";
export const FE_TOKEN: string = process.env.FE_TOKEN? process.env.FE_TOKEN : "none";
export const DASH_TOKEN: string = process.env.DASH_TOKEN? process.env.DASH_TOKEN : "none";