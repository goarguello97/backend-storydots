import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import db from "./db";

dotenv.config();
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  console.log(`DB CONNECTED`);
  app.listen(PORT, () => console.log(`Server corriendo en el puerto ${PORT}`));
});
