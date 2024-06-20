require("dotenv").config();
import express from "express";
import uploadRoute from "./route";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use("/api/", uploadRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
