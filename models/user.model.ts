import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: "string",
    required: [true, "First Name is required"],
    minlength: [3, "First name must be at least 3 characters"],
    maxlength: [5, "Last name must be at least 5 characters"],
    trim: true,
  },
});

// const User = mongoose.model.users || mongoose.model("User", userSchema);
