import mongoose from "mongoose";

/* =========================
   REVIEW SCHEMA
========================= */
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "UserModel",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/* =========================
   VARIANT SCHEMA (For TV Sizes)
========================= */
const variantSchema = new mongoose.Schema(
  {
    size: {
      type: String, // 32, 43, 55, 65, 75
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    offerPrice: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

/* =========================
   PRODUCT SCHEMA
========================= */
const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    // ✅ For normal products (connectors, mic, etc.)
    price: {
      type: Number,
      default: 0,
    },

    offerPrice: {
      type: Number,
      default: 0,
    },

    countInStock: {
      type: Number,
      default: 0,
    },

    // ✅ For variant products (TV with sizes)
    variants: {
      type: [variantSchema],
      default: [],
    },

    description: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    section: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    subcategory: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    isTopDeal: {
      type: Boolean,
      default: false,
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    reviews: [reviewSchema],
  },
  {
    timestamps: true,
    collection: "products",
  }
);

const ProductModel = mongoose.model("ProductModel", productSchema);

export default ProductModel;