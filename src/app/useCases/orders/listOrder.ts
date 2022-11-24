import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function listOrder(req: Request, res: Response) {
  try {
    const order = await Order.find().populate("products.product");

    res.json(order);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
