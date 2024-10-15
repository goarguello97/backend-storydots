import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config({ path: ".env" });
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env as {
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_NAME: string;
};
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  port: 5432,
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
  dialectOptions: { ssl: false },
  ssl: false,
  logging: false,
});

export default db;
