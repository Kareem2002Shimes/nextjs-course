import mongoose, { models } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlenght: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = models.Product || mongoose.model("Product", ProductSchema);

export default Product;
