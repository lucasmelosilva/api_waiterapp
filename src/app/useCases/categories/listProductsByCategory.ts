import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function listProductByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const product = await Product.find().where("category").equals(categoryId);

    res.json(product);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
