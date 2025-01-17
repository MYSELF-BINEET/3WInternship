const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    socialHandle: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        type: String, 
        required: true,
      },
    ],
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the User model
const User = mongoose.model("User", userSchema);
module.exports = User;
