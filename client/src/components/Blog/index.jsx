import React from 'react'

const Blog = () => {
  return (
    <section class="py-12 bg-white sm:py-16 lg:py-20">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

    <div class="text-center">
      <h2 class="text-3xl font-bold leading-tight text-[#00000] sm:text-4xl xl:text-5xl">
        Experience Next-Gen Display Technology
      </h2>
      <p class="text-xs leading-7 text-gray-600 sm:mt-8">
        PRIZOR TVs & Monitors deliver crystal-clear visuals, immersive sound, and premium build quality.
      </p>
    </div>

    <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 gap-y-12 md:grid-cols-3 xl:mt-24">

      {/* <!-- 4K Resolution --> */}
      <div class="md:p-8 lg:p-14">
        <h3 class="mt-6 text-xl font-bold text-indigo-500">4K Ultra HD Display</h3>
        <p class="mt-4 text-base text-gray-600">
          Enjoy lifelike clarity with 1080P & 4K resolution support. 
          10-bit image processing ensures vibrant colors and stunning detail.
        </p>
      </div>

      {/* <!-- Dolby Audio --> */}
      <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200">
        <h3 class="mt-6 text-xl font-bold text-indigo-500">Dolby & DTS Audio</h3>
        <p class="mt-4 text-base text-gray-600">
          Built-in 12W speakers with Dolby Audio & DTS Virtual X 
          provide immersive cinematic sound experience.
        </p>
      </div>

      {/* <!-- Connectivity --> */}
      <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200">
        <h3 class="mt-6 text-xl font-bold text-indigo-500">Multiple Connectivity</h3>
        <p class="mt-4 text-base text-gray-600">
          Equipped with HDMI, VGA & USB ports for seamless 
          connection to gaming consoles, laptops & streaming devices.
        </p>
      </div>

      {/* <!-- Frameless Design --> */}
      <div class="md:p-8 lg:p-14  md:border-gray-200">
        <h3 class="mt-6 text-xl font-bold text-indigo-500">Frameless Premium Design</h3>
        <p class="mt-4 text-base text-gray-600">
          Elegant frameless panels deliver wider viewing angles 
          and modern aesthetics for homes & offices.
        </p>
      </div>

      {/* <!-- Industrial Performance --> */}
      <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 ">
        <h3 class="mt-6 text-xl font-bold text-indigo-500">Industrial Grade Performance</h3>
        <p class="mt-4 text-base text-gray-600">
          Designed for 24×365 uninterrupted operation with 
          high brightness, high contrast and durable components.
        </p>
      </div>

      {/* <!-- Energy Efficient --> */}
      <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 ">
        <h3 class="mt-6 text-xl font-bold text-indigo-500">Energy Efficient & Eye Safe</h3>
        <p class="mt-4 text-base text-gray-600">
          Low energy consumption, zero radiation technology 
          ensures safe and comfortable viewing experience.
        </p>
      </div>

    </div>
  </div>
</section>


  )
}

export default Blog