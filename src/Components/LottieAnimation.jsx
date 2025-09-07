import React from "react";
import Lottie from "lottie-react";
import animationData from "../animationData.json"

const LottieAnimation = () => {
  return (
    <div className="">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;