import React from "react";

const SearchButton = () => {
  return (
    <div className="absolute top-[192px] left-[54px] w-[329px] h-9 text-[10px]">
      <div className="absolute top-[0px] left-[0px] rounded-181xl bg-white w-[329px] h-9 opacity-[0.1]" />
      <div className="absolute top-[5px] left-[5px] rounded-181xl bg-mediumseagreen w-[46px] h-[26px]" />
      <div className="absolute top-[9px] left-[15px] tracking-[1.5px] leading-[18px] font-semibold">
        NEW
      </div>
      <div className="absolute top-[9px] left-[66px] text-xs tracking-[0.5px] leading-[18px] opacity-[0.8]">
        High Intensity workout to burn calories
      </div>
    </div>
  );
};

export default SearchButton;
