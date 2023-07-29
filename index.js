import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ProductRouter from "./routes/ProductRoute.js";
import UserRouter from "./routes/UserRoute.js";
import PerusahaanRouter from "./routes/PerusahaanRoute.js";

dotenv.config();

const app = express();
const corsConfig = {
  origin: '',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))
app.use(express.json());
app.use('/products', ProductRouter); 
app.use('/', UserRouter); 
app.use('/perusahaan', PerusahaanRouter); 

app.listen(process.env.APP_PORT, () => {
  console.log("Server running at port 5000");
});
