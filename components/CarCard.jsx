import React from "react";

import Image from "next/image";

const CarCard = ({ image, car, title }) => {
  return (
    <div className="relative h-full py-1 shadow-2xl drop-shadow-xl">
      {/* Background SVG image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={image}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Container for content 
      
      w-[350px] sm:w-[275px] md:w-[400px]
      w-[350px] sm:w-[200px] 
       w-[250px] sm:w-[210px]
      */}
      <div className="relative z-10 w-full  space-y-4 flex flex-col    pt-4    px-8   h-full  text-yellow-100      ">
        {/* Header */}
        <div className="  flex flex-col  relative    gap-y-2 px-4 py-5 pb-0 items-start     ">
          <h1 className=" text-xl sm:text-2xl  ">{title}</h1>
          <p className=" text-base  sm:text-base   ">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.{" "}
          </p>
          <button className=" text-xs sm:text-sm w-max mt-2    bg-blue-800 hover:bg-blue-700 text-white   py-2 px-4 rounded">
            Rental Car
          </button>
        </div>

        <div className=" flex w-full justify-center items-center">
          <Image
            height={0}
            width={0}
            src={car}
            className=" "
          />
        </div>

        {/* Additional elements can be added here */}
        {/* Example: Button */}
      </div>
    </div>
  );
};

export default CarCard;
