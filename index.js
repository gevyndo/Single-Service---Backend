import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import UserRouter from "./routes/UserRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(ProductRoute);


app.listen(process.env.APP_PORT, ()=>{
    console.log("Server running at port 5000");
});
