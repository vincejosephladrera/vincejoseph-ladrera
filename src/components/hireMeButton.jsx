import { Button } from "@material-tailwind/react";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Day01() {
  return (
    <div>
      <Button
        variant="gradient"
        className="flex items-center gap-3 bg-rose-300 px-3 py-2 hover:bg-yellow-200"
      >
        <BsFillPersonLinesFill size={30} className="text-black" />
        <p className="text-black">DOWNLOAD RESUME</p>
      </Button>
    </div>
  );
}
