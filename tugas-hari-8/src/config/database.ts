import mongoose from "mongoose";
import {DATABASE_URL} from "../utils/env";

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "belajar-backend-nodejs",
      connectTimeoutMS: 7000,
    });
    console.log("Database connected");
    } catch (error) {
      console.log("Error connecting to database");
    }
  };
  
  export default connect;
