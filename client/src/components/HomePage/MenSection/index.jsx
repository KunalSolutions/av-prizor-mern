import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // import Link
import productsData from "../../../data/products.data";

function MenSection() {
  const [products, setProducts] = useState([]);

  const MenProducts = productsData.filter(
    (product) => product.category === "Men's Clothing"
  ) 
  if(!MenProducts) {
    <h2>Product not found!</h2>
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">For Men</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MenProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="shadow rounded-lg p-4 flex flex-col hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.title} 
                className="h-48 w-full object-contain mb-4"
              />
              <h3 className="text-md font-medium text-center mb-2 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-lg font-medium text-center text-black mb-2">
                ${product.price}
              </p>
              <button className="mt-auto bg-indigo-700 text-white py-2 px-2 rounded hover:bg-amber-500 transition">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenSection;
