import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "@slices/productApiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "@slices/cartSlice";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const { data: product, isLoading, isError, error } =
    useGetProductDetailsQuery(id);

  // If product has variants, select first by default
  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  const currentPrice =
  selectedVariant?.offerPrice ??
  selectedVariant?.price ??
  product?.offerPrice ??
  product?.price ??
  0;

  const currentOriginalPrice =
    selectedVariant?.price ??
    product?.price ??
    0;

  const currentStock =
    selectedVariant?.countInStock ?? product?.countInStock;

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        ...product,
        qty,
        selectedSize: selectedVariant?.size || null,
        price: currentPrice,
        countInStock: currentStock,
      })
    );
  };

  const handleCheckout = () => {
		navigate('/login?redirect=/shipping');
	};

  if (isLoading) return <Loader />;
  if (isError) return <Alert type="error">{error?.data?.message}</Alert>;


return (
  <div className="max-w-7xl mx-auto px-4 py-10">

    {/* BACK BUTTON */}
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6"
    >
      <FaArrowLeft />
      Back
    </button>

    {/* MAIN SECTION */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

      {/* LEFT - IMAGE */}
      <div className="lg:col-span-5">
        <div className="bg-white rounded-xl p-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[480px] object-contain"
          />
        </div>
      </div>

      {/* RIGHT - PRODUCT CONTENT */}
      <div className="lg:col-span-7">

        <h1 className="text-3xl font-bold text-indigo-700 leading-snug">
          {product.name}
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Category: {product.category}
        </p>

        {/* PRICE */}
        <div className="mt-4 flex items-center gap-4">
          <span className="text-3xl font-bold text-slate-800">
            ₹{currentPrice}
          </span>

          {currentOriginalPrice > currentPrice && (
            <span className="text-lg line-through text-gray-400">
              ₹{currentOriginalPrice}
            </span>
          )}
        </div>

        {/* RATING */}
        <div className="mt-3 text-sm text-gray-600">
          ⭐ {product.rating} ({product.numReviews} reviews)
        </div>

        <hr className="my-6" />

        {/* VARIANT SELECTOR - PLUS MINUS STYLE */}
{product.variants?.length > 0 && (
  <div className="mb-6">
    <label className="block mb-3 text-sm font-medium">
      Select Size
    </label>

    <div className="flex items-center gap-4">

      {/* Plus Button */}
      <div className="flex flex-wrap gap-3 mt-4">
  {product.variants.map((variant) => (
        <button
          key={variant._id}
          onClick={() => {
            setSelectedVariant(variant);
            setQty(1);
          }}
          className={`min-w-[40px] h-10 px-4 
                      flex items-center justify-center 
                      border rounded-full 
                      text-sm font-medium
                      transition-all duration-200
                      ${
                        selectedVariant?.size === variant.size
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-800 hover:bg-gray-100"
                      }`}
        >
          {variant.size}
        </button>
      ))}
    </div>
    </div>
  </div>
)}

        {/* STOCK */}
        <div className="mb-6">
          {currentStock > 0 ? (
            <span className="text-green-600 font-medium">
              In Stock
            </span>
          ) : (
            <span className="text-red-500 font-medium">
              Out of Stock
            </span>
          )}
        </div>

        {/* QTY + BUTTONS */}
        {currentStock > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="border rounded-lg p-3 w-32"
            >
              {[...Array(currentStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
              <br />
            <button
              onClick={addToCartHandler}
              className="bg-indigo-700 cursor-pointer text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Add to cart
            </button>
          </div>
        )}

        {/* PRODUCT DETAILS AT BOTTOM */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Product Details
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {product.content && (
            <div className="mt-4 text-gray-600 leading-relaxed">
              {product.content}
            </div>
          )}
        </div>

      </div>
    </div>
  </div>
);
};

export default ProductScreen;