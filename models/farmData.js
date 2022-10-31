const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema(
  {
    farmUser: { type: String, required: true },
    farmTitle: { type: String, required: true },
    farmContent: { type: String, required: true },
    likes: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("fUser", farmSchema);
