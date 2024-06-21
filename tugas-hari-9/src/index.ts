require('dotenv').config()
import express from "express";
import db from "./config/database"
import route from "./routes"
import bodyParser from 'body-parser';

const app = express();

db();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(route)

app.listen(3000, () => {
    console.log(`Server is running at 3000`)
})