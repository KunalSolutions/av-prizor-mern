import React from "react";

const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Heading */}
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600">
              3,240+ customers trust our display & security products
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
              What our customers say about our monitors & cameras
            </h2>
          </div>


          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">

              {/* Review 1 - Monitor */}
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <blockquote className="flex-1">
                    <p className="text-lg leading-relaxed text-gray-900">
                      “The 24-inch Full HD monitor display is incredibly sharp and vibrant. The colors are accurate and the slim design fits perfectly on my desk. Perfect for both work and entertainment.”
                    </p>
                  </blockquote>

                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-[#FB461F]">
                        Rohit Sharma
                      </p>
                      <p className="mt-0.5 text-sm text-gray-600">
                        IT Professional
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 2 - Security Camera */}
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <blockquote className="flex-1">
                    <p className="text-lg leading-relaxed text-gray-900">
                      “The security camera provides crystal-clear night vision and wide-angle coverage. Installation was simple and the mobile app monitoring works flawlessly. Highly recommended!”
                    </p>
                  </blockquote>

                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-[#FB461F]">
                        Ankit Verma
                      </p>
                      <p className="mt-0.5 text-sm text-gray-600">
                        Business Owner
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 3 - Display + Camera Combo */}
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <blockquote className="flex-1">
                    <p className="text-lg leading-relaxed text-gray-900">
                      “I purchased both the monitor and CCTV camera system for my office. The display quality is stunning and the camera security gives complete peace of mind. Excellent build quality.”
                    </p>
                  </blockquote>

                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-[#FB461F]">
                        Priya Mehta
                      </p>
                      <p className="mt-0.5 text-sm text-gray-600">
                        Store Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;
