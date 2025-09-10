import express from "express";
import notesRoutes from "./Routes/notesRoutes.js";
import {connectDb} from "./config/db.js";
import dotenv from 'dotenv';
import rateLimiter from "./middlewares/ratelimiter.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001



app.use(express.json()); //This middleware is purse JSON bodies: req.body
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDb().then(() => {
  app.listen(PORT, () => {
  console.log("server is started on PORT:", PORT);
});
})


