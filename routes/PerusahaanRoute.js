import express from "express";

import {
  getPerusahaan,
  getPerusahaanById,
  createPerusahaan,
  updatePerusahaan,
  deletePerusahaan,
} from "../controllers/ProductController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const PerusahaanRouter = express.Router();

// Company routes
PerusahaanRouter.get("/", verifyToken, getPerusahaan);
PerusahaanRouter.get("/:id", verifyToken, getPerusahaanById);
PerusahaanRouter.post("/", verifyToken, createPerusahaan);
PerusahaanRouter.patch("/:id", verifyToken, updatePerusahaan);
PerusahaanRouter.delete("/:id", verifyToken, deletePerusahaan);

export default PerusahaanRouter;
