import express from "express";
import { UserModel } from "./models/userModel";

export const routes = express.Router();

routes.post("/users", async (req, res) => {
  const { email, name, password } = req.body;

  const user = new UserModel({
    email,
    name,
    password
  });

  await user.save();

  res.status(201).json({ data: user });
});
