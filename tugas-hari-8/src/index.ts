require('dotenv').config();
import express from "express";
import db from './config/database'
import routes from "./routes";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})