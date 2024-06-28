import dotenv from 'dotenv';
import express from 'express';
import router from './routes';
import bodyParser from 'body-parser';
import db from './config/database';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(router);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

db();

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})