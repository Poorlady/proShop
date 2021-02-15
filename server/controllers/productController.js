import Product from "../models/Product.js";

export const fetchProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
};

export const fetchProductById = async (req, res) => {
  const _id = req.params.id;

  const product = await Product.findOne({ _id });

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
};
