import express from "express";
import notesRoutes from "./Routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("server is started on PORT: 5001");
});
