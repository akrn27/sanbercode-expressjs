import mongoose from "mongoose";
import { DATABASE_URL } from "../utils/env";

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "belajar-backend-nodejs",
      connectTimeoutMS: 10000,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
