import React from "react";

const NavBar = () => {
  return (
    <div className="absolute top-[60px] left-[120px] w-[1200px] h-[22px] text-xs">
      <div className="absolute top-[0px] left-[0px] text-lg tracking-[1px] leading-[22px] font-semibold">
        WORKOUT
      </div>
      <div className="absolute top-[5px] left-[936px] tracking-[1.5px] leading-[12px] opacity-[0.67]">
        TRAINERS
      </div>
      <div className="absolute top-[5px] left-[1051px] tracking-[1.5px] leading-[12px] opacity-[0.67]">
        PRICING
      </div>
      <div className="absolute top-[5px] left-[1158px] tracking-[1.5px] leading-[12px] opacity-[0.7]">
        LOGIN
      </div>
      <div className="absolute top-[5px] left-[814px] tracking-[1.5px] leading-[12px] opacity-[0.67]">
        EXERCISES
      </div>
    </div>
  );
};

export default NavBar;
