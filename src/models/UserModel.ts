import { model, Schema } from "mongoose";

export interface UserSchemaProps {
  id: String;
  name: String;
  password: String;
  email: String;
}

const userSchema = new Schema<UserSchemaProps>({
  id: String,
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true }
});

export const UserModel = model<UserSchemaProps>("User", userSchema);
