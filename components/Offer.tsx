import Image from "next/image";
import CountDownComponent from "./CountDownComponent";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fries
        </h1>
        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          fugiat, dolorum totam sapiente vel velit officia excepturi architecto
          explicabo?
        </p>
        <CountDownComponent />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>

      {/* IMG CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" fill className="object-contain" alt="" />
      </div>
    </div>
  );
};

export default Offer;
