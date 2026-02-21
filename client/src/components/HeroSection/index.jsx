import React from "react";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-12 gap-6">

          {/* 30% - Secondary (Light Sidebar) */}
          <div className="hidden lg:block col-span-3 bg-white p-6 ">
            <ul className="space-y-4 text-sm text-gray-700 font-medium">
              {[
                "Network Camera",
                "HD Camera",
                "Network Video Recorder",
                "Digital Video Recorder",
                "Monitor",
                "Television TV",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-black transition"
                >
                  {item}
                  <ChevronRight size={16} className="text-indigo-500" />
                </li>
              ))}
            </ul>
          </div>

          {/* 60% - Primary (Main Indigo Banner) */}
          <div className="col-span-12 shadow lg:col-span-9 bg-[#fff]/90 p-10 flex items-center justify-between relative overflow-hidden">

            {/* LEFT CONTENT */}
            <div className="max-w-md space-y-6">
              {/* <img
              src="../images/AVSI_LOGO.png"
              alt="Logo"
              className="w-40"
            />
 */}

              <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
                Engineered for Peak Performance
              </h1>

              <p className="text-lg text-black">
                Enjoy lightning-fast processing, immersive visuals, and a sleek design 
                tailored for creators and high achievers.
              </p>


              {/* 10% - Accent Color (Orange CTA) */}
              <div className="flex gap-4">
                <a href="/product">
                <button className="bg-indigo-500 text-[#fff] px-6 py-3 rounded-lg font-semibold hover:opacity-90 cursor-pointer transition">
                  Shop Now
                </button>
                </a>

                <a href="/contact">
                <button className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 cursor-pointer transition">
                  Contact US
                </button>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden md:block">
              <img
                src="../images/Hero.png"
                alt="Product"
                className="w-72 lg:w-96 object-contain drop-shadow-2xl"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
