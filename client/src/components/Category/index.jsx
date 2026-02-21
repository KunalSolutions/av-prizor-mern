import React from "react";
import {
  Monitor,
  Tv,
  Camera,
  Video,
  HardDrive,
  Plug,
} from "lucide-react";

const categories = [
  { name: "Monitor", icon: Monitor },
  { name: "Television", icon: Tv },
  { name: "Camera", icon: Camera },
  { name: "DVR", icon: Video },
  { name: "NVR", icon: HardDrive },
  { name: "Accessories", icon: Plug },
];

const CategorySection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-black mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <div
                key={index}
                className={`
                  flex flex-col items-center justify-center
                  p-6 cursor-pointer
                  transition duration-300 transform hover:-translate-y-2
                  ${
                    index === 0
                      ? "bg-[#FB461F] text-white"
                      : "bg-white border border-slate-200 text-black"
                  }
                `}
              >
                <Icon size={36} className="mb-3" />
                <p className="font-medium text-sm">{cat.name}</p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default CategorySection;
