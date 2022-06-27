import express from "express";
import { UserModel } from "./models/userModel";
import { runDb } from "./services/connection";

const app = express();
const port = 8080;

app.use(express.json());

app.post("/users", async (req, res) => {
  const { email, name, password } = req.body;

  const user = new UserModel({
    email,
    name,
    password
  });

  await user.save();

  res.status(201).json({ data: user });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

runDb().catch((err) => console.log(err));
