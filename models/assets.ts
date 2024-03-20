import mongoose from "mongoose";

const AssetSchema = new mongoose.Schema(
  {
    name: String,
    src: String,
    type: String,
  },
  { timestamps: true }
);

const Assets = mongoose.models.Assets || mongoose.model("Assets", AssetSchema);

export default Assets;
