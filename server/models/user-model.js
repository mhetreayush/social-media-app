import { Schema, model } from "mongoose";
export const user_model = new Schema({
  name: String,
  email: String,
  password: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});
export const user = model("user", user_model);
