export const SERVER_PORT: number = process.env.SERVER_PORT? +process.env.SERVER_PORT : 5174;
export const DATABASE_URI: string = process.env.DATABASE_URI? process.env.DATABASE_URI : "mongodb://localhost:27017/personal";
