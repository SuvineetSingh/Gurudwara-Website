import Carousal from "./Carousal";
import image1 from "./../assets/gayatri-malhotra-gi6qmAwjvPo-unsplash.jpg";
import image2 from "./../assets/laurentiu-morariu-6pXZZOOFNiM-unsplash.jpg";
import image3 from "./../assets/simarpreet-kaur-QC3YkApoIk8-unsplash.jpg";
import image4 from "./../assets/laurentiu-morariu-rmvKPryg47I-unsplash.jpg";

export default function Home() {
  const Images = [image1, image2, image3, image4];
  return (
    <div className=" w-full m-auto h-[700px]">
      <Carousal imageUrl={Images} />
    </div>
  );
}
