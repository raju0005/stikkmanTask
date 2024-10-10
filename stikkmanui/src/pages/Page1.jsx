import React from "react";
import logo from "../assets/logo.svg";
import backgroundVideo from "../assets/background.mp4";
import text from "../assets/text-1.svg";
import page1 from "../assets/Frame 968.svg";

const Page1 = () => {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col bg-[#212D2D]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <header className="relative z-10 h-[12%] w-full flex justify-center items-center">
        <img src={logo} alt="Logo image" />
      </header>
      <section className="w-full h-[80%] z-10 flex justify-center gap-[100px] items-center flex-col mt-3">
        <div>
          <img src={text} alt="Text image" />
        </div>
        <div>
          <div className="flex flex-col justify-around gap-10 items-center">
            <img src={page1} alt="Page 1 image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page1;