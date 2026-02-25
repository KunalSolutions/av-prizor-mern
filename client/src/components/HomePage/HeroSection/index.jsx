import React, { useState, useEffect } from "react";
import HomeCards from "../HomeCard";

const images = [
  "/images/0.png",
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full h-[650px] relative overflow-hidden mt-0">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`w-full h-full object-cover absolute left-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="relative top-20">
        <HomeCards />
      </div>
    </div>
  );
}

export default HeroSection;
