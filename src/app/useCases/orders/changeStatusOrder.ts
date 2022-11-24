import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function changeStatusOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const validStatus = ["WAITING", "IN_PRODUCTION", "DONE"];

    if (!validStatus.includes(status)) {
      return res.status(400).json({
        error: "Status should be one of these: WAITING, IN_PRODUCTION, DONE",
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch (err) {
    res.send(err).status(500);
  }
}
