import express from 'express';
const app = express()
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import url from './routes/urlRoute.js'

app.use(express.json());
dotenv.config();
connectDb();

app.use('/',url)
const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
