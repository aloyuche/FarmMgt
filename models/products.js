const mongoose = require("mongoose");
const farmer = require("./farmer");

const productSchema = new mongoose.Schema(
  {
    pid: { type: Number, unique: true },
    farmer: { type: mongoose.Types.ObjectId, ref: farmer },
    pname: { type: String, required: true },
    pcategory: { type: String, unique: true, required: true },
    pinfo: { type: String, required: true },
    pImage: { type: String, required: true },
    pPrice: { type: Number, required: true },
    pimgPath: { type: String, required: true },
    imgStatus: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
