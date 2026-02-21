import React from "react";

const NewArrival = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <p className="text-[#FB461F] text-sm font-semibold mb-2">
          Featured
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          New Arrival
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT BIG CARD */}
          <div className="relative group overflow-hidden rounded-xl bg-black">
            <img
              src="../images/newarrival-4.jpg"
              alt="CCTV Camera"
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500"
            />

            <div className="absolute bottom-6 left-6 text-[#FB461F]">
              <h3 className="text-xl font-semibold mb-2">
                CCTV Camera
              </h3>
              <p className="text-sm mb-3 text-gray-300">
                Explore our premium CCTV Camera collection.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-rows-2 gap-6">

            {/* TOP RIGHT LARGE CARD */}
            <div className="relative group overflow-hidden rounded-xl bg-black">
              <img
                src="../images/newarrival-3.jpg"
                alt="Laptop"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
              />

              <div className="absolute bottom-6 left-6 text-[#FB461F]">
                <h3 className="text-lg font-semibold mb-2">
                  Laptop
                </h3>
                <p className="text-sm mb-3 text-gray-300">
                  Discover the latest Laptop collection.
                </p>
              </div>
            </div>

            {/* BOTTOM TWO SMALL CARDS */}
            <div className="grid grid-cols-2 gap-6">

              {/* Speakers */}
              <div className="relative group overflow-hidden rounded-xl bg-black">
                <img
                  src="../images/newarrival-1.jpg"
                  alt="Speakers"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
                />

                <div className="absolute bottom-4 left-4 text-[#FB461F]">
                  <h4 className="text-sm font-semibold">
                    Speakers
                  </h4>
                  <p className="text-xs text-gray-300 mb-2">
                    Premium Speakers collection available now.
                  </p>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative group overflow-hidden rounded-xl bg-black">
                <img
                  src="../images/newarrival-2.jpg"
                  alt="Headphone"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
                />

                <div className="absolute bottom-4 left-4 text-[#FB461F]">
                  <h4 className="text-sm font-semibold">
                    Headphone
                  </h4>
                  <p className="text-xs text-gray-300 mb-2">
                    Explore our exclusive Headphone collection.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default NewArrival;
