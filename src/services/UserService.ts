import { UserModel } from "../models/UserModel";

class UserService {
  async execute(name: String, password: String, email: String) {
    const user = new UserModel({
      email,
      name,
      password
    });

    return user;
  }
}

export { UserService };
