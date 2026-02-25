import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useGetProductsQuery,
  useGetTopDealsQuery,
  useGetTopRatedProductsQuery,
  useGetProductsByCategoryQuery,
} from "@slices/productApiSlice";
import { addToCart } from "@slices/cartSlice";
import Loader from "@components/Loader";
import Alert from "@components/Alert";

const ShopPage = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [quickFilter, setQuickFilter] = useState("");

  const { data, isLoading, isError, error } =
    useGetProductsQuery({ keyword: "", pageNumber: 1 });

  const { data: topDeals } = useGetTopDealsQuery();
  const { data: topRated } = useGetTopRatedProductsQuery();
  const { data: categoryProducts } =
    useGetProductsByCategoryQuery(selectedCategory, {
      skip: !selectedCategory,
    });

  let products = data?.products || [];

  if (selectedCategory && categoryProducts) {
    products = categoryProducts;
  }

  if (quickFilter === "deals" && topDeals) {
    products = topDeals;
  }

  if (quickFilter === "rated" && topRated) {
    products = topRated;
  }

  if (priceRange) {
    const [min, max] = priceRange.split("-").map(Number);
    products = products.filter((product) => {
      const hasVariants = product.variants?.length > 0;
      const price = hasVariants
        ? product.variants[0].offerPrice
        : product.offerPrice;

      return price >= min && price <= max;
    });
  }

  const clearFilters = () => {
    setSelectedCategory("");
    setPriceRange("");
    setQuickFilter("");
  };

  const addToCartHandler = (product) => {
    const hasVariants = product.variants?.length > 0;

    const displayPrice = hasVariants
      ? product.variants[0].offerPrice
      : product.offerPrice;

    const stock = hasVariants
      ? product.variants[0].countInStock
      : product.countInStock;

    dispatch(
      addToCart({
        ...product,
        qty: 1,
        price: displayPrice,
        countInStock: stock,
      })
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <div className="text-sm mb-6 text-gray-600">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>{" "}
          / <span className="text-black font-medium">Shop</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-xs text-blue-600 hover:underline"
              >
                Clear All
              </button>
            </div>

            {/* Category */}
            <div className="mb-6 border-b pb-4">
              <h4 className="font-medium mb-3 text-gray-700">Category</h4>
              {["Display", "Audio", "Accessories"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setQuickFilter("");
                  }}
                  className={`block w-full text-left px-2 py-1 rounded text-sm mb-1 transition
                    ${
                      selectedCategory === cat
                        ? "bg-gray-200 font-medium"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6 border-b pb-4">
              <h4 className="font-medium mb-3 text-gray-700">Price</h4>
              {[
                { label: "Under ₹1000", value: "0-1000" },
                { label: "₹1000 - ₹5000", value: "1000-5000" },
                { label: "₹5000 - ₹20000", value: "5000-20000" },
                { label: "Above ₹20000", value: "20000-100000" },
              ].map((range) => (
                <button
                  key={range.value}
                  onClick={() => setPriceRange(range.value)}
                  className={`block w-full text-left px-2 py-1 rounded text-sm mb-1 transition
                    ${
                      priceRange === range.value
                        ? "bg-gray-200 font-medium"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {range.label}
                </button>
              ))}
            </div>

            {/* Quick Filters */}
            <div>
              <h4 className="font-medium mb-3 text-gray-700">
                Quick Filters
              </h4>

              <button
                onClick={() => {
                  setQuickFilter("deals");
                  setSelectedCategory("");
                }}
                className={`block w-full text-slate-900 text-left px-2 py-1 rounded text-sm mb-1 transition
                  ${
                    quickFilter === "deals"
                      ? "bg-gray-200 font-medium"
                      : "hover:bg-gray-100"
                  }`}
              >
                Top Deals
              </button>

               <button
                onClick={() => {
                  setQuickFilter("rated");
                  setSelectedCategory("");
                }}
                className={`block w-full text-slate-900 text-left px-2 py-1 rounded text-sm mb-1 transition
                  ${
                    quickFilter === "rated"
                      ? "bg-gray-200 font-medium"
                      : "hover:bg-gray-100"
                  }`}
              >
                Bestseller
              </button>

            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <Alert type="error">
                {error?.data?.message || error?.error}
              </Alert>
            ) : (
              <>
                <div className="mb-6 text-sm text-gray-600">
                  Showing {products.length} products
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {products.map((product) => {
                    const hasVariants = product.variants?.length > 0;

                    const displayPrice = hasVariants
                      ? product.variants[0].offerPrice
                      : product.offerPrice;

                    const originalPrice = hasVariants
                      ? product.variants[0].price
                      : product.price;

                    // ✅ DISCOUNT CALCULATION
                    const discountPercentage =
                      originalPrice > displayPrice
                        ? Math.round(
                            ((originalPrice - displayPrice) /
                              originalPrice) *
                              100
                          )
                        : 0;

                    return (
                      <Link key={product._id} to={`/product/${product._id}`}>
                        <div className="relative bg-white rounded-lg p-4 shadow transition flex flex-col">

                          {/* Discount Badge */}
                          {discountPercentage > 0 && (
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold">
                              {discountPercentage}% OFF
                            </span>
                          )}

                          {/* Image */}
                          <div className="h-48 flex items-center justify-center mb-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full object-contain"
                            />
                          </div>

                          {/* Name */}
                          <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 min-h-[40px]">
                            {product.name}
                          </h3>

                          {/* Price */}
                          <div className="mb-4">
                            {originalPrice > displayPrice ? (
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-semibold">
                                  ₹{displayPrice}
                                </span>
                                <span className="text-sm line-through text-gray-400">
                                  ₹{originalPrice}
                                </span>
                              </div>
                            ) : (
                              <span className="text-lg font-semibold">
                                ₹{displayPrice}
                              </span>
                            )}
                          </div>

                          {/* Add to Cart */}
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addToCartHandler(product);
                            }}
                            className="mt-auto bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 rounded transition"
                          >
                            Add to Cart
                          </button>

                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopPage;