import bcrypt from "bcrypt";
import mongoose from "mongoose";

import { USER_ROLES } from "@/config/USER_ROLES";

const userSchema = new mongoose.Schema({
  firstName: {
    type: "string",
    required: [true, "First Name is required"],
    minlength: [3, "First name must be at least 3 characters"],
    maxlength: [20, "First name cannot be more than 20 characters"],
    trim: true,
  },
  lastName: {
    type: "string",
    required: [true, "Last Name is required"],
    minlength: [3, "Last name must be at least 3 characters"],
    maxlength: [20, "Last name cannot be more than 20 characters"],
    trim: true,
  },
  email: {
    type: "string",
    required: [true, "Email is required"],
    minlength: [3, "Email must be at least 3 characters"],
    maxlength: [50, "Email cannot be more than 50 characters"],
    trim: true,
    unique: true,
  },
  password: {
    type: "string",
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [50, "Password cannot be more than 50 characters"],
    trim: true,
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  role: {
    type: Number,
    enum: [USER_ROLES.ADMIN, USER_ROLES.USER],
    default: USER_ROLES.USER,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

userSchema.index({ email: 1 }, { background: true });

const User = mongoose.model.users ?? mongoose.model("User", userSchema);

export default User;
