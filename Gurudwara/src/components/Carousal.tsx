import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import CarousalDetails from "./CarousalDetails";

type CarousalProps = {
  imageUrl: string[];
};

export default function Carousal({ imageUrl }: CarousalProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const translateClass = `translate-y-[${-100 * imageIndex}px]`;

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrl.length - 1) return 0;

      return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrl.length - 1;
      return index - 1;
    });
  }
  return (
    <div className=" w-full h-full relative">
      <div className=" w-full h-full flex overflow-hidden">
        {imageUrl.map((url) => (
          <img
            key={url}
            className=" brightness-50 bg-cover w-full h-full block flex-shrink-0 flex-grow-0 ease-in-out duration-300"
            src={url}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className=" block top-0 bottom-0 absolute cursor-pointer left-0 text-white p-10 z-20"
        onClick={showPrevImage}
      >
        <ArrowBigLeft size={30} />
      </button>

      <CarousalDetails />

      <button
        className=" block top-0 bottom-0 absolute cursor-pointer right-0 p-10 text-white p-10 z-20"
        onClick={showNextImage}
      >
        <ArrowBigRight size={30} />
      </button>
    </div>
  );
}
