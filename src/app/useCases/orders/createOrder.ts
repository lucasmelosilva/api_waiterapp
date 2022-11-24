import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function creatOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = Order.create({
      table,
      products,
    });

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
