import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_ATLUS);
    console.log("Database connected");
  } catch (err) {
    console.log("Database error:\n", err);
  }
};

export default dbConnect;
