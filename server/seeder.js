import dotenv from "dotenv";
import colors from "colors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import users from "./data/users.js";
import data from "./data/data.js";
import User from "./models/User.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";

dotenv.config();

connectDB(process.env.DB_URI);

const clearData = async () => {
  await User.deleteMany();
  await Product.deleteMany();
  await Order.deleteMany();
};

const importData = async () => {
  try {
    await clearData();

    const usersdata = await User.insertMany(users);
    const adminUser = usersdata[0];
    const sampleProduct = data.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProduct);
    console.log(`data imported`.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await clearData();
    console.log(`Data destroyed`.yellow.inverse);
    process.exit();
  } catch (err) {
    console.log(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
