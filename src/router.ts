import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategory } from "./app/useCases/categories/listCategory";
import { createProducts } from "./app/useCases/products/createProduct";
import { listProduct } from "./app/useCases/products/listProducts";
import { listProductByCategory } from "./app/useCases/categories/listProductsByCategory";
import { listOrder } from "./app/useCases/orders/listOrder";
import { creatOrder } from "./app/useCases/orders/createOrder";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },

    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List Categories
router.get("/categories", listCategory);

// Create Category
router.post("/categories", createCategory);

// List Products
router.get("/products", listProduct);

// Create Product
router.post("/products", upload.single("image"), createProducts);

// Get Products by Category
router.get("/categories/:categoryId/products", listProductByCategory);

// List Orders
router.get("/orders", listOrder);

// Create Order
router.post("/orders", creatOrder);

//Change Status Order
router.patch("/orders/:orderId", (req, res) => {
  res.send("OK");
});

// Deleter/Cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("OK");
});
