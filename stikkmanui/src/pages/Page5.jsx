import React from "react";
import logo from "../assets/page2Logo.svg";
import hamburger from "../assets/menu.svg";
import { motion } from "framer-motion";
import pic from "../assets/page4pic.jpeg";
import text from "../assets/page5Text.svg"; 

const Page5 = ({ currentPage }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#212D2D] bg-center flex flex-col`}>
      <header className="relative z-20 h-[12%] w-full flex justify-center items-center">
        <div className="md:hidden flex justify-start items-center absolute left-0 z-20">
          <img src={hamburger} className="ml-8" alt="Hamburger menu" />
        </div>
        <div className="h-full flex justify-center items-center">
          <img src={logo} alt="Logo image" />
        </div>
      </header>

      <motion.div
        className="absolute top-[-20px] z-0"
        initial={{
          bottom: 50,
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          opacity: 0,
          marginBottom: 40,
        }}
        animate={
          currentPage === 4 
            ? { width: "100%", opacity: 1, y: "0%" }
            : { opacity: 0 }
        }
        transition={{ duration: 0.5 }}
      >
        <img className="rounded-3xl" src={pic} alt="Page 5 image" />
      </motion.div>

      <section className="w-full h-[80%] z-10 flex justify-end items-center flex-col mt-3">
        <div className="h-[30%] ml-4">
          <img className="h-full" src={text} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Page5;
