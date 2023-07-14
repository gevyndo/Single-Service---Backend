import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const register = async (req, res) => {
    const { username, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Password and Confirm Password don't match!" });
    }
  
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const user = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
        },
      });
  
      res.json({ msg: "Registration Success!", user });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User Not Found!" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ msg: "Wrong Password!" });
    }

    const userId = user.id;
    const accessToken = jwt.sign({ userId, username }, process.env.ACCESS_TOKEN_SECRET);

    res.json({
      status: "success",
      message: "Login Success",
      data: user,
      token: accessToken,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
