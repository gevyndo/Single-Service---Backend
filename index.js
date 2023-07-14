import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/ProductRoute.js";
import UserRoute from "./routes/UserRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', ProductRoute); 
app.use('/api/users', UserRoute); 

app.listen(process.env.APP_PORT, () => {
  console.log("Server running at port 5000");
});
