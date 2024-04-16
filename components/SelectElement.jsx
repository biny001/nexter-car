import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectElement = ({ title }) => {
  return (
    <div className=" flex  flex-col     space-y-2 ">
      <h1 className="  text-center text-base         font-medium "> {title}</h1>
      <Select className="   ">
        <SelectTrigger className="  h-full text-xs   ">
          <SelectValue
            className=" text-xs"
            placeholder={` ${title}`}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-xs">
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectElement;
