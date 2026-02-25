import React from "react";

const BigSaving = () => {
  return (
    <section
      id="BestDeal"
      className="bg-white py-8 px-4"
    >
      <div className="max-w-7xl mx-auto">

        <div className="bg-blue-100 rounded-2xl overflow-hidden">
          
          {/* Responsive Flex Layout */}
          <div className="flex flex-col lg:flex-row items-center">

            {/* Text Section */}
            <div className="w-full lg:w-1/2 p-6 sm:p-10">

              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-500">
                Big Savings on Top Devices
              </p>

              <p className="text-sm sm:text-base text-slate-800 mt-4 leading-relaxed">
                Up to 30% OFF on connectors, cables, projectors & display devices.
              </p>

              <a href="/electronics/#electric">
                <button className="mt-6 bg-black text-white px-5 py-2 rounded-lg text-sm sm:text-base hover:opacity-90 transition">
                  SHOP NOW
                </button>
              </a>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-6">
              <img
                src="/images/banner1.png"
                alt="Top Electronic Devices"
                className="max-h-64 sm:max-h-72 md:max-h-80 object-contain"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BigSaving;