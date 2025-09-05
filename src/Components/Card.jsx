import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
const Card = ({ name, image, price, type }) => {
  return (
    // Card Container
    <div className="flex flex-col gap-4 w-[290px] h-[400px] bg-white p-3 rounded-lg shadow-lg">
      {/* Card image section  */}
      <div className="w-[100%] h-[70%] overflow-hidden rounded-lg">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* card name section  */}
      <div className="text-xl font-semibold">{name}</div>
      {/* Price and Category section  */}
      <div className="w-full flex justify-between items-center font-bold text-green-400 text-md ">
        <div className="">Taka {price}/-</div>
        <div className="flex justify-center items-center gap-2">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven></GiChickenOven>}
          <p>{type}</p>
        </div>
      </div>
      <button className="w-full p-2 rounded-md bg-green-200 text-gray-500 hover:bg-green-500 hover:text-black transition-all mt-2">
        Add to dish
      </button>
    </div>
  );
};

export default Card;
