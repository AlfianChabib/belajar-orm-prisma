import express from "express";
import { getProducts } from "../services/products";

const router = express.Router();

router.get("/", getProducts);

export default router;
