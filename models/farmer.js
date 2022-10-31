const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    fusername: { type: String, unique: true, required: true },
    fpassword: { type: String, required: true },
    femail: { type: String, required: true },
    fphone: { type: Number, required: true },
    faddress: { type: String, required: true },
    fimgPath: { type: String, required: true },
    frating: { type: Number },
    factive: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("farmer", farmerSchema);
