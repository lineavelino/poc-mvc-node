import "dotenv/config";
import { connect } from "mongoose";
import { UserModel } from "../models/userModel";

export async function runDb() {
  await connect(process.env.DB_URL!);

  const user = new UserModel({
    email: "aline@teste.com",
    name: "Aline Avelino Rocha",
    password: "pass123456"
  });

  await user.save();

  console.log(user);
}
