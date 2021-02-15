import express from "express";
import asyncHandler from "express-async-handler";
import {
  fetchProducts,
  fetchProductById,
} from "../controllers/productController.js";

const route = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
route.get("/", asyncHandler(fetchProducts));

// @desc    Fetch single product
// @route   GET /api/products/id
// @access  Public
route.get("/:id", asyncHandler(fetchProductById));

export default route;
