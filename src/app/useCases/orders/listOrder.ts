import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function listOrder(req: Request, res: Response) {
  try {
    const order = await Order.find()
      .sort({ createAt: 1 })
      .populate("products.product");

    res.status(200).json(order);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
