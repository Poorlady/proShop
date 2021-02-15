import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./controllers/errorController.js";

const server = express();

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.json({ message: "Hello from server" });
});

server.use("/api/products", productRoutes);

server.use(notFound);

server.use(errorHandler);

server.listen(PORT, () =>
  console.log(
    `Server is up on ${process.env.NODE_ENV} mode and running in port ${PORT}`
      .yellow.bold
  )
);
