import React from "react";
import { Link } from "react-router-dom";
import { useGetTopDealsQuery } from "@slices/productApiSlice";
import Loader from "@components/Loader";
import Alert from "@components/Alert";

function ProductSection() {
  const { data: products, isLoading, isError, error } =
    useGetTopDealsQuery();

  return (
    <div className="bg-white mx-auto px-6 py-10">
      <h2 className="font-semibold text-slate-950 text-xl mb-6">
        Top Deals of the Day
      </h2>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Alert type="error">
          {error?.data?.message || error?.error}
        </Alert>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products?.map((product) => {
            const hasVariants = product.variants?.length > 0;

            const displayPrice = hasVariants
              ? product.variants[0].offerPrice
              : product.offerPrice;

            const originalPrice = hasVariants
              ? product.variants[0].price
              : product.price;

            return (
              <Link key={product._id} to={`/product/${product._id}`}>
                <div className="relative shadow bg-white rounded-lg p-4 flex flex-col">

                  {product.isBestSeller && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      Bestseller
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-contain mb-4"
                  />

                  <h3 className="text-md font-medium text-center text-black mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex justify-center gap-4 items-center">

                    {/* ✅ Show starting from if variants */}
                    {hasVariants ? (
                      <div className="text-center">
                        <p className="text-xs text-gray-500">
                          Starting from
                        </p>
                        <p className="text-base font-semibold text-black">
                          ₹{displayPrice}
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className="text-base font-semibold text-black">
                          ₹{displayPrice}
                        </p>

                        {originalPrice > displayPrice && (
                          <p className="text-base line-through text-gray-500">
                            ₹{originalPrice}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductSection;