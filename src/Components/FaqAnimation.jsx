import React from "react";
import Lottie from "lottie-react";
import animationData from "..//../public/faqs.json";

const FaqAnimation = () => {
  return (
    <div className="w-80 h-80">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default FaqAnimation;
