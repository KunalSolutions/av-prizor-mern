import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-12 bg-[#fff] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-bold leading-tight text-[#000] sm:text-4xl lg:text-5xl">
          Upgrade Your Display & Security Today
        </h2>

        <p className="mt-4 text-lg text-black/80 sm:text-xl">
          Premium Monitors • HD CCTV Cameras • Reliable Surveillance Systems
        </p>

        <div className="flex flex-col items-center justify-center mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          
          {/* Shop Now Button */}
          <Link
            to="/product"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-500 rounded-md hover:opacity-80"
          >
            Shop Now
          </Link>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all duration-200 border border-black rounded-md hover:opacity-80"
          >
            Contact Sales
          </Link>

        </div>

        <p className="mt-8 text-sm text-black/80">
          Trusted by 3,000+ customers across India for quality display & security solutions.
        </p>

      </div>
    </section>
  );
};

export default CTA;
