import React from "react";
import Navbar from "../Components/Navbar";
import Categories from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food";

const Home = () => {
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Navbar></Navbar>
     
     {/* Category section  */}
      <div className="flex flex-wrap justify-center items-center gap-4 w-full">
        {Categories.map((item) => {
          return (
            <div className="w-[125px] h-[130px] bg-white flex flex-col items-start gap-5 p-5 justify-start  font-semibold text-gray-600 rounded-md shadow-lg hover:bg-green-200 cursor-pointer transition-all duration-200">
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>

      {/* Card Section  */}
      <div className=" w-full flex flex-wrap gap-4 px-5 justify-center items-center p-8">
        { food_items.map((item) =>(
                <Card name={item.food_name} image ={item.food_image} price ={item.price} id ={item.id} type={item.food_type}></Card>
            ))
        }
      </div>
    </div>
  );
};

export default Home;
