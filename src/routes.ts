import express from "express";
import { UserController } from "./controllers/UserController";

export const routes = express.Router();

const userController = new UserController();

routes.post("/users", userController.create);
routes.get("/users", userController.listAllUsers);
routes.delete("/users", userController.deleteUser);
