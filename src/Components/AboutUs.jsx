// src/Components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
   <div className="min-h-screen flex items-center justify-center bg-slate-200 pb-12 pt-4 px-4">
     <div className="max-w-6xl  w-full mx-auto flex justify-center items-center overflow-hidden bg-white rounded-2xl shadow-xl py-12 px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        
        {/* Short Description */}
        <p className="text-gray-700 text-md mb-8">
          At Foodie, we serve fresh, delicious, and high-quality fast food that satisfies every craving. <br />
          From classic favorites to innovative creations, we make every meal memorable!
        </p>

        {/* Full Business Description */}
        <div className="bg-green-50 p-6 rounded-xl shadow-md text-gray-800 text-justify text-md ">
          <p>
            <span className="font-semibold text-green-400">PetPujar Dokan</span> is a premier fast food destination committed to bringing joy and flavor to every bite. Established with the goal of serving fresh and tasty meals, we focus on quality ingredients, innovative recipes, and exceptional customer service. Our menu is carefully curated to include a variety of options, from classic burgers, crispy fries, and mouthwatering sandwiches to unique specialties that cater to every taste bud.
          </p>
          <p className="mt-4">
            We understand that fast food should not only be quick but also delicious and satisfying. That's why at <span className="font-semibold text-green-400">PetPujar Dokan</span>, every dish is prepared with care, using fresh produce, premium meats, and house-made sauces. Our chefs bring creativity and consistency to the kitchen, ensuring every order meets our high standards. Beyond just food, we aim to create a welcoming environment where friends, families, and individuals can enjoy a relaxed, enjoyable dining experience.
          </p>
          <p className="mt-4">
            Over the years, <span className="font-semibold text-green-400">PetPujar Dokan</span> has grown into more than just a fast food restaurant. We have become a community hub where people gather, share meals, and create memorable moments. Our commitment to quality, taste, and service has earned us loyal customers who trust us to deliver not only great food but also a warm and friendly atmosphere. Join us at <span className="font-semibold text-green-400">PetPujar Dokan</span> and experience the perfect blend of taste, speed, and hospitality—making every visit a delightful experience!
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default AboutUs;
