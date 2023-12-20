import { Request, Response } from "express";
import { prisma } from "../../db/prismaClient";
import { HttpStatus } from "../utils/httpStatus";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.status(HttpStatus.OK).json({
      rc: HttpStatus.OK,
      success: true,
      result: products,
    });
  } catch (err) {
    console.log(err);
  }
};
