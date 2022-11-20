import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connect success");
    const app = express();

    app.listen(3001, () => {
      console.log("🚀 server is running on http://localhost:3001");
    });
  })
  .catch(() => console.log("err connect"));
