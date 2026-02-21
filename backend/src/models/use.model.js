import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true, // Extra spaces hata dega
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true, // Email hamesha small letters mein rahega
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      // Yahan min/max ki jagah minlength/maxlength use karein:
      minlength: [5, "Password must be at least 5 characters"],
      maxlength: [100, "Password is too long"], // Hash hone ke baad password lamba ho jata hai
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required"],
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("user", userSchema);
export default userModel;
