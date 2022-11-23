import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategory } from "./app/useCases/categories/listCategory";
import { createProducts } from "./app/useCases/products/createProduct";
import { listProduct } from "./app/useCases/products/listProducts";

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
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("OK");
});

// List Orders
router.get("/orders", (req, res) => {
  res.send("OK");
});

// Create Order
router.post("/orders", (req, res) => {
  res.send("OK");
});

//Change Status Order
router.patch("/orders/:orderId", (req, res) => {
  res.send("OK");
});

// Deleter/Cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("OK");
});
