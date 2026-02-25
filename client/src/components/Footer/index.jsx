import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-gray-300 mt-16">
      
      {/* Top Back To Top */}
      <div className="bg-[#37475A] text-center py-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm hover:underline"
        >
          Back to top
        </button>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

        <div>
          <h3 className="text-white font-semibold mb-4">Get to Know Us</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Sort By</h3>
          <ul className="space-y-2">
            <li><Link to="/shop" className="hover:underline">Bestseller</Link></li>
            <li><Link to="/shop" className="hover:underline">Top Rated</Link></li>
            <li><Link to="/shop" className="hover:underline">Under 999</Link></li>
            <li><Link to="/shop" className="hover:underline">Gadget</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Let Us Help You</h3>
          <ul className="space-y-2">
            <li><Link to="/profile" className="hover:underline">Your Account</Link></li>
            <li><Link to="/orders" className="hover:underline">Your Orders</Link></li>
            <li><Link to="/Cart" className="hover:underline">Your Cart</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Amazon. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;