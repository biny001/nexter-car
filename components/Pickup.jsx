import { Separator } from "@/components/ui/separator";
import SelectElement from "@/components/SelectElement";

const Pickup = ({type}) => {
  return (
    <div className="     w-full   px-2   py-2 bg-white   shadow-lg  rounded-lg      ">
      <div className=" space-x-3 flex  items-center py-1 px-3   ">
        <input type="radio" />
        <span className="  font-bold  tracking-wide     "> {type} </span>
      </div>
      <div className="flex    justify-evenly items-center   gap-1    w-full">
        <SelectElement
          title={"Location"}
          lable
        />
        <Separator
          orientation="vertical"
          className="   bg-neutral-300  h-14  "
        />
        <SelectElement title={"Date"} />
        <Separator
          orientation="vertical"
          className="   bg-neutral-300  h-14   "
        />
        <SelectElement title={"Time"} />
      </div>
    </div>
  );
};

export default Pickup;
