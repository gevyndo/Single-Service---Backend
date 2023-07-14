import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
import {
  getPerusahaan,
  createPerusahaan,
  updatePerusahaan,
  deletePerusahaan,
} from "../controllers/ProductController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get("/products", verifyToken, getProducts);
router.get("/products/:id", verifyToken, getProductById);
router.post("/products", verifyToken, createProduct);
router.patch("/products/:id", verifyToken, updateProduct);
router.delete("/products/:id", verifyToken, deleteProduct);

// Company routes
router.get("/perusahaan", verifyToken, getPerusahaan);
router.get("/perusahaan/:id", verifyToken, getPerusahaanById);
router.post("/perusahaan", verifyToken, createPerusahaan);
router.patch("/perusahaan/:id", verifyToken, updatePerusahaan);
router.delete("/perusahaan/:id", verifyToken, deletePerusahaan);

export default router;
