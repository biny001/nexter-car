import React from "react";
import CarCard from "@/components/CarCard";
import CarItem from "@/components/CarItem";
import { TbTransferVertical } from "react-icons/tb";

import bg from "@/assets/bg-1.svg";

import ad1 from "@/assets/ad1.png";
import ad2 from "@/assets/ad2.png";
import Pickup from "@/components/Pickup";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="  px-4  py-6   min-h-screen mx-auto   max-w-[1200px]     ">
      {" "}
      <div className=" justify-center   flex gap-9  w-full  ">
        <CarCard
          image={bg}
          car={ad1}
          title={"The Best Platform for Car Rental"}
        />
        <div className=" hidden  sm:block ">
          <CarCard
            image={bg}
            car={ad2}
            title={"The Best Platform for Car Rental"}
          />
        </div>
      </div>
      <div className=" md:flex-row md:gap-6  flex-col w-full  text-sm  relative      flex   mt-14           items-center  px-4    ">
        <Pickup type={"Pick-Up"} />
        <div className=" relative  py-3      ">
          <Button className="text-white bg-blue-700  hover:bg-blue-500 z-50 absolute md:relative  md:top-auto md:left-auto   md:transform-none  top-1/2 left-1/4  transform -translate-x-1/4  -translate-y-1/2 px-2">
            <TbTransferVertical className="w-6 h-6" />
          </Button>
        </div>
        <Pickup type={"Drop-Off"} />
      </div>
    </div>
  );
};

export default HomePage;
