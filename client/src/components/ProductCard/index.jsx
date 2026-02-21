import { Link } from "react-router-dom";
import CardImage from "./CardImage";
import Rating from "./Rating";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl border border-black/5  transition-all duration-300 overflow-hidden">
      
      {/* Image Section */}
      <Link to={`/product/${product._id}`} className="block overflow-hidden">
        <div className="relative bg-white">
          <CardImage name={product.name} image={product.image} />

          {/* Subtle hover overlay */}
          <div className="absolute inset-0 bg-black/0 transition duration-300"></div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 space-y-3">
        
        {/* Product Name */}
        <Link to={`/product/${product._id}`}>
          <h3 className="text-base font-semibold text-black transition">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <Rating
          value={product.rating}
          text={`${product.numReviews} reviews`}
        />

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-2">
          
          {/* Price (30% Black focus) */}
          <p className="text-lg font-bold text-black">
            ₹ {product.price.toLocaleString()}
          </p>

          {/* Accent Button (10% Indigo) */}
          <Link to={`/product/${product._id}`}>
            <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition">
              <MdOutlineShoppingCart size={18} />
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
