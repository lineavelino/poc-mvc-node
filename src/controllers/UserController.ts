import { Request, Response } from "express";
import { UserService } from "../services/UserService";

class UserController {
  async create(req: Request, res: Response) {
    const { name, password, email } = req.body;
    const service = new UserService();
    const user = await service.execute(name, password, email);

    await user.save();

    return res.status(201).json({ data: user });
  }
}

export { UserController };
