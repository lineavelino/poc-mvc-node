import express from "express";
import { runDb } from "./services/connection";
import { routes } from "./routes";

const app = express();
const port = 8080;

app.use(express.json(), routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

runDb().catch((err) => console.log(err));
