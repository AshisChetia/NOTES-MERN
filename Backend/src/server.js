import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import notesRoutes from "./Routes/notesRoutes.js";
import {connectDb} from "./config/db.js";
import rateLimiter from "./middlewares/ratelimiter.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001


//Middlewares
app.use(cors({
  origin: "http://localhost:5173",
}))
app.use(rateLimiter);
app.use(express.json()); //This middleware is purse JSON bodies: req.body


app.use("/api/notes", notesRoutes);

connectDb().then(() => {
  app.listen(PORT, () => {
  console.log("server is started on PORT:", PORT);
});
})


