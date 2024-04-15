import React from "react";
import CarCard from "@/components/CarCard";
import bg from "@/assets/bg-1.svg";

import ad1 from "@/assets/ad1.png";
import ad2 from "@/assets/ad2.png";

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
    </div>
  );
};

export default HomePage;
