import React from "react";

const Blog = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl xl:text-5xl">
            Latest Insights From Our Electronics Store
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Discover buying guides, product highlights, and expert tips to help you choose 
            the best TVs, speakers, and electronic accessories for your needs.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 mt-12 text-center sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">

          {/* Blog 1 */}
          <div className="p-6 rounded-xl  transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600">
              How to Choose the Perfect 4K TV
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              Learn about display size, resolution, refresh rate, and smart features 
              before investing in your next home entertainment upgrade.
            </p>
            <button className="mt-4 text-sm font-medium underline hover:text-black">
              Read More →
            </button>
          </div>

          {/* Blog 2 */}
          <div className="p-6 rounded-xl  transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600">
              Best Sound Systems for Home & Office
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              Explore powerful speakers, amplifiers, and audio setups that deliver 
              immersive sound quality for music, movies, and meetings.
            </p>
            <button className="mt-4 text-sm font-medium underline hover:text-black">
              Read More →
            </button>
          </div>

          {/* Blog 3 */}
          <div className="p-6 rounded-xl  transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600">
              Essential Accessories You Shouldn’t Ignore
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              From HDMI cables to wall mounts and surge protectors, 
              discover must-have accessories that complete your setup.
            </p>
            <button className="mt-4 text-sm font-medium underline hover:text-black">
              Read More →
            </button>
          </div>

          {/* Blog 4 */}
          <div className="p-6 rounded-xl  transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600">
              Smart Devices for Modern Living
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              Upgrade your lifestyle with smart TVs, streaming devices, 
              and connected gadgets designed for convenience and efficiency.
            </p>
            <button className="mt-4 text-sm font-medium underline hover:text-black">
              Read More →
            </button>
          </div>

          {/* Blog 5 */}
          <div className="p-6 rounded-xl  transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600">
              Gaming Setup Guide for Beginners
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              Build the ultimate gaming experience with high refresh rate monitors, 
              surround sound systems, and optimized connectivity.
            </p>
            <button className="mt-4 text-sm font-medium underline hover:text-black">
              Read More →
            </button>
          </div>

          {/* Blog 6 */}
          <div className="p-6 rounded-xl  transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600">
              Energy-Efficient Electronics Explained
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              Understand power ratings, eco modes, and smart energy-saving 
              features that help reduce electricity bills.
            </p>
            <button className="mt-4 text-sm font-medium underline hover:text-black">
              Read More →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;