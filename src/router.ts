import { Router } from "express";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategory } from "./app/useCases/categories/listCategory";

export const router = Router();

// List Categories
router.get("/categories", listCategory);

// Create Category
router.post("/categories", createCategory);

// List Products
router.get("/products", (req, res) => {
  res.send("OK");
});

// Create Product
router.post("/products", (req, res) => {
  res.send("OK");
});

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
