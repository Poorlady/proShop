import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(
      `Server is connected to the database on ${conn.connection.host}`.cyan
        .underline
    );
  } catch (err) {
    console.error(`Error: ${err}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
