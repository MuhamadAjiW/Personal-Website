require('dotenv').config();

console.log("SERVER_PORT is:");
console.log(process.env.SERVER_PORT);
console.log("DATABASE_URI is:");
console.log(process.env.DATABASE_URI);
console.log("DASH_TOKEN is:");
console.log(process.env.DASH_TOKEN);

export const SERVER_PORT: number = process.env.SERVER_PORT? +process.env.SERVER_PORT : 5174;
export const DATABASE_URI: string = process.env.DATABASE_URI? process.env.DATABASE_URI : "mongodb://localhost:27017/personal";
export const DASH_TOKEN: string = process.env.DASH_API_TOKEN? process.env.DASH_API_TOKEN : "none";