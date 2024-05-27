import dotenv from "dotenv";
dotenv.config();

export const PORT: number = Number(process.env.PORT) as number;
export const DB_NAME: string = process.env.DB_NAME as string;
export const DB_USER: string = process.env.DB_USER as string;
export const DB_PASSWORD: string = process.env.DB_PASSWORD as string;
export const DB_HOST: string = process.env.DB_HOST as string;
export const DB_PORT: number = Number(process.env.DB_PORT) as number;
export const JWT_SECRET: string = process.env.JWT_SECRET as string;
