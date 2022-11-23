import path from "node:path";

import express, { json } from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connect success");
    const app = express();

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(json());
    app.use(router);

    const port = 3001;
    app.listen(port, () => {
      console.log(`🚀 server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log("err connect"));
