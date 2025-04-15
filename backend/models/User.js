const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    profileImageUrl: { type: String, default: null },
    role: { type: String, enum: ["admin", "user"], default: "member" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
