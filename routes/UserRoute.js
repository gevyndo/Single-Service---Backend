import express from "express";
import { register, login,  getUsers } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

const UserRouter = express.Router();

UserRouter.get('/users', getUsers);
UserRouter.post('/register', register);
UserRouter.post('/login', login);
// UserRouter.get('/token', refreshToken);

export default UserRouter;