import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://muhammadandika:gbWp6i0kPUiH9gvC@crud.ryvs3u4.mongodb.net/?retryWrites=true&w=majority&appName=crud",
      { dbName: "belajar-backend-nodejs" }
    );
    console.log('Database connected')
  } catch (error) {
    console.log(error);
  }
};

export default connect;