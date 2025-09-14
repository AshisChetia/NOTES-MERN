import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'

import notesRoutes from "./Routes/notesRoutes.js";
import {connectDb} from "./config/db.js";
import rateLimiter from "./middlewares/ratelimiter.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()


//Middlewares
if(process.env.NODE_ENV !== "production") {
    app.use(cors({
    origin: "http://localhost:5173",
  }))
}


app.use(rateLimiter);
app.use(express.json()); //This middleware is purse JSON bodies: req.body


app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

connectDb().then(() => {
  app.listen(PORT, () => {
  console.log("server is started on PORT:", PORT);
});
})


