import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const ProductRouter = express.Router();

ProductRouter.get("/",verifyToken, getProducts);
ProductRouter.get("/:id", verifyToken, getProductById);
ProductRouter.post("/", verifyToken, createProduct);
ProductRouter.patch("/:id", verifyToken, updateProduct);
ProductRouter.delete("/:id", verifyToken, deleteProduct);


export default ProductRouter;
