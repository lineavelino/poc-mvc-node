import "dotenv/config";
import { connect } from "mongoose";

export async function runDb() {
  await connect(process.env.DB_URL!);
}
