import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";
import { UserService } from "../services/UserService";

class UserController {
  async create(req: Request, res: Response) {
    const { name, password, email } = req.body;
    const service = new UserService();
    const user = await service.execute(name, password, email);

    await user.save();

    return res.status(201).json({ data: user });
  }

  async listAllUsers(req: Request, res: Response) {
    try {
      const allUsers = await UserModel.find();
      return res.status(200).json({ data: allUsers });
    } catch (error) {
      res.status(500).send({ message: `${error} - falha na busca.` });
    }
  }
}

export { UserController };
