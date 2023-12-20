import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productsRouter from "./routes/productsRouter";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Express API running on http://localhost:${PORT}`);
});
