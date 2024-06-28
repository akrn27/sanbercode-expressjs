import { Schema } from "mongoose";
import mongoose from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

productSchema.pre("save", function (next) {
  const product = this;

  if (!product.slug) {
    product.slug = product.name.toLowerCase().split(" ").join("-");
  }
  next();
});

const productsModel = mongoose.model("Products", productSchema);

export default productsModel;
