import express from "express";
import { register, login } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/register', register);
router.post('/login', login);
// router.get('/token', refreshToken);

export default UserRouter;