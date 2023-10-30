import React from "react";

const Calories = () => {
  return (
    <div className="absolute top-[314px] left-[1088px] w-[166px] h-[223px] text-21xl">
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-white w-[166px] h-[98px] opacity-[0.1]" />
      <div className="absolute top-[118px] left-[0px] rounded-xl bg-white w-[166px] h-[105px] opacity-[0.1]" />
      <div className="absolute top-[20px] left-[30px] tracking-[1px] leading-[40px] font-semibold text-gold">
        38:14
      </div>
      <div className="absolute top-[65px] left-[30px] text-smi tracking-[1px] leading-[13px]">
        TIME
      </div>
      <div className="absolute top-[138px] left-[30px] tracking-[1px] leading-[40px] font-semibold text-crimson">
        165
      </div>
      <div className="absolute top-[183px] left-[30px] text-smi tracking-[1px] leading-[20px]">
        EST CALORIES
      </div>
    </div>
  );
};

export default Calories;
