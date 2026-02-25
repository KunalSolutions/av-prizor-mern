import React from "react";

const UpComing = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">

          {/* Responsive Layout */}
          <div className="flex flex-col-reverse lg:flex-row items-center">

            {/* TEXT SECTION */}
            <div className="w-full lg:w-1/2 p-6 sm:p-10">

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
                Get Exclusive Offer On Electronic Products!
              </h2>

              <p className="text-sm sm:text-base text-gray-700 mt-4 leading-relaxed max-w-xl">
                Huge offers are now live on laptops, refrigerators,
                washing machines, computers, and air conditioners.
                Upgrade your home and office with the latest technology
                at unbeatable prices. Limited time deals are available
                with exclusive discounts on top brands.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <a href="/electronics/#electric">
                  <button className="bg-black text-white px-5 py-2 rounded-lg text-sm sm:text-base hover:opacity-90 transition">
                    Explore More
                  </button>
                </a>

                <a href="/contact">
                  <button className="border border-black text-black px-5 py-2 rounded-lg text-sm sm:text-base hover:bg-black hover:text-white transition">
                    Contact Us
                  </button>
                </a>
              </div>

            </div>

            {/* IMAGE SECTION */}
            <div className="w-full lg:w-1/2 flex justify-center p-6">
              <img
                src="/images/010-1.png"
                alt="Electronic Products Offer"
                className="max-h-64 sm:max-h-72 md:max-h-80 object-contain"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default UpComing;