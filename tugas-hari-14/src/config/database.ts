import { DATABASE_URL } from "../utils/env";
import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      DATABASE_URL,
      { dbName: "belajar-backend-nodejs" }
    );
    console.log('Database connected')
  } catch (error) {
    console.log(error);
  }
};

export default connect;