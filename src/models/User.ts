import mongoose from "mongoose";

export type UserDocument = mongoose.Document & {
  email: string;
  profile: {
    name: string;
  };
};

const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: { type: String, unique: true },
    profile: {
      name: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDocument>("User", userSchema);
