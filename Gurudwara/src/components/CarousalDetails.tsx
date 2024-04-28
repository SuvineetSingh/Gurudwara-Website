import React from "react";
import { Play } from "lucide-react";

export default function CarousalDetails() {
  return (
    <div className=" absolute inset-0 flex items-center justify-center z-10">
      <div className=" text-center">
        <p className="text-white text-4xl text-center shadow-md">
          Welcome to Sant Sagar Gurudwara
        </p>
        <div className="flex justify-center text-center mt-10 gap-20">
          <button className=" flex bg-white text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 hover:text-black hover:scale-110 hover:ease-in-out">
            <Play className=" mt-0.5 mr-1" size={20} />
            Watch live video
          </button>
          <button className=" bg-white  border border-white text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 hover:text-black hover:scale-110 hover:ease-in-out ">
            Get directions
          </button>
        </div>
      </div>
    </div>
  );
}
