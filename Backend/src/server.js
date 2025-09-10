import express from "express";
import notesRoutes from "./Routes/notesRoutes.js";
import {connectDb} from "./config/db.js";
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001

connectDb()

app.use(express.json())

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("server is started on PORT:", PORT);
});


