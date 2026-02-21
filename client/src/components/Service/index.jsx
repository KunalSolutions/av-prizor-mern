import React from "react";
import { Truck, Headphones, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: Truck,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: Headphones,
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: ShieldCheck,
  },
];

const ServiceSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 "
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-500 text-white shadow-md">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-black text-sm tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm max-w-xs">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
