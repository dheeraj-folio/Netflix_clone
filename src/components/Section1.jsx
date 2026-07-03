import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  const images = [
    "/image_1.png",
    "/image_2.png",
    "/image_3.png",
    "/image_4.png",
    "/image_5.png",
    "/image_6.png",
  ];

  return (
    <>
      {/* Top Curve */}
      <section className="w-full relative">
        <div className="absolute -top-6 md:-top-8 left-0 w-full overflow-hidden">
          <div className="w-[140%] h-20 md:h-32 -ml-[20%] bg-[#010926] border-t-4 border-pink-600 rounded-t-[50%]" />
        </div>
      </section>

      {/* Trending Section */}
      <section className="relative bg-black px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            Trending Now
          </h1>

          <div className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-none p-4 snap-x snap-mandatory">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Movie ${index + 1}`}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="
                  snap-center
                  shrink-0
                  rounded-lg
                  object-cover
                  
                  w-32 h-48
                  sm:w-40 sm:h-56
                  md:w-48 md:h-64
                  lg:w-56 lg:h-72
                  
                  cursor-pointer
                "
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;