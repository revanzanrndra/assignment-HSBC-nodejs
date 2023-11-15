import express from "express";
import cors from "cors";
import BukuRoute from "./routes/BukuRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(BukuRoute);

app.listen(5000, ()=> console.log('Server up and running...'));