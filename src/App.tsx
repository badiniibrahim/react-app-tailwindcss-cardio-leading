import React from "react";
import NavBar from "./components/NavBar";
import SearchButton from "./components/SearchButton";
import Calories from "./components/Calories";
import Popular from "./components/Popular";
import Training from "./components/Training";
import Started from "./components/Started";

const App = () => {
  return (
    <div className="relative bg-black w-full h-[4649px] overflow-hidden text-left text-31xl text-white font-poppins">
      <div className="absolute top-[21px] left-[66px] w-[1343px] h-[1170px] text-lg">
        <div className="absolute top-[0px] left-[0px] w-[1343px] h-[1170px] text-[200px]">
          <img
            className="absolute top-[0px] left-[563px] w-[780px] h-[1170px] object-cover"
            alt=""
            src="/image-1@2x.png"
          />
          <div className="absolute top-[245px] left-[0px] w-[871px] h-96">
            <div className="absolute top-[14px] left-[41px] tracking-[-2px] leading-[170px] font-semibold">
              <p className="m-0">{`Cardio `}</p>
              <p className="m-0">Exercise</p>
            </div>
          </div>
        </div>

        <SearchButton />

        <div className="absolute top-[749px] left-[54px] w-[200px] h-[70px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-mediumseagreen w-[200px] h-[70px]" />
          <div className="absolute top-[24px] left-[43px] tracking-[1px] leading-[22px] font-semibold">
            Get Started
          </div>
        </div>
        <div className="absolute top-[749px] left-[284px] w-[200px] h-[70px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[200px] h-[70px] opacity-[0.1]" />
          <div className="absolute top-[24px] left-[61px] tracking-[1px] leading-[22px] font-semibold">
            Preview
          </div>
        </div>
        <div className="absolute top-[641px] left-[54px] text-[16px] tracking-[0.5px] leading-[29px] inline-block w-[600px] opacity-[0.5]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <Calories />
      </div>
      <NavBar />
      <Popular />
      <Started />
      <Training />
    </div>
  );
};

export default App;
