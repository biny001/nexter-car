"use client";

import Image from "next/image";
import { CiSearch } from "react-icons/ci";

import { GoBellFill, GoHeartFill } from "react-icons/go";
import profile from "@/assets/Image.png";

const NavBar = () => {
  return (
    <div className=" bg-white flex  w-full  items-center px-8 py-5 justify-between ">
      <div className=" hidden sm:flex  justify-between    h-full space-x-2    items-center   flex-grow-[0.25]      ">
        <h1 className=" text-4xl  text-blue-600   tracking-wide    ">Nexter</h1>
        <div className=" border rounded-2xl flex px-3 py-1 items-center space-x-1 justify-center  text-gray-500 relative     flex-grow-[0.35]">
          <input
            className="  w-full outline-none  text-sm "
            placeholder="search car"
          />{" "}
          <button>
            <CiSearch className=" size-6  " />
          </button>
        </div>
      </div>
      {/* icons - profile */}
      <div className="hidden   space-x-4 sm:flex px-1 items-center justify-center">
        <div className=" rounded-full p-1/2">
          <GoHeartFill className=" size-6 fill-slate-600" />
        </div>
        <div className=" rounded-full p-1/2">
          <GoBellFill className=" size-6 fill-slate-600" />
        </div>
        <div>
          <Image
            src={profile}
            alt="profile"
          />
        </div>
      </div>

      {/* mobile navbar */}
      <div className=" sm:hidden w-full flex flex-col gap-y-6 items-center justify-center  ">
        <div className=" flex items-center justify-between w-full ">
          <h1 className=" text-4xl  text-blue-600   tracking-wide    ">
            Nexter
          </h1>
          <Image src={profile} />
        </div>
        <div className=" border flex justify-between px-1  py-2  rounded-xl  w-[300px]   ">
          <input
            className="   text-gray-600    outline-none  text-sm "
            placeholder="search car"
          />{" "}
          <button>
            <CiSearch className=" size-6  fill-slate-600 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
