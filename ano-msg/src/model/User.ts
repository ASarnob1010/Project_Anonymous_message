import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMsg: boolean; // Changed from Boolean to boolean
  message: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String, // Changed from string to String
    required: [true, "Email is required"],
    unique: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address"], // Fixed regex match format
  },
  password: {
    type: String, // Changed from string to String
    required: [true, "Password is required"], // Changed message to "Password is required"
  },
  verifyCode: {
    type: String, // Changed from string to String
    required: [true, "Verification code is required"], // Changed message to "Verification code is required"
  },
  verifyCodeExpiry: {
    type: Date, // Changed from string to Date
    required: [true, "Verification code expiry is required"], // Changed message to "Verification code expiry is required"
  },
  isVerified: {
    type: Boolean, // Changed from boolean to Boolean
    required: [true, "Verification status is required"], // Changed message to "Verification status is required"
  },
  isAcceptingMsg: {
    type: Boolean, // Changed from boolean to Boolean
    default: true,
  },
  message: {
    type: [MessageSchema],
  },
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;
