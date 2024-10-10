import React from "react";
import logo from "../assets/page2Logo.svg";
import hamburger from "../assets/menu.svg";
import pic from "../assets/page4pic.jpeg";
import text from "../assets/page4Text.svg";
import { motion } from "framer-motion";

const Page4 = ({ currentPage }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#212D2D] flex flex-col">
      <header className="relative z-10 h-[12%] w-full flex justify-center items-center">
        <div className="md:hidden flex justify-start items-center absolute left-0">
          <img src={hamburger} className="ml-8" alt="Hamburger menu" />
        </div>
        <div className="h-full flex justify-center items-center">
          <img src={logo} alt="Logo image" />
        </div>
      </header>
      <section className="w-full h-[80%] z-10 flex justify-center items-center flex-col mt-3">
        <div className="h-1/2 flex justify-center items-center">
          <img src={text} alt="Text image" />
        </div>
        <div>
          <motion.div
            className="h-1/2 flex flex-col justify-around gap-10 items-center"
            initial={{ y: 0, width: "260px" }}
            animate={
              currentPage === 4
                ? { y: "-80%", width: "100%" }
                : { y: 0, width: "260px" }
            }
            transition={{ duration: 0.6 }}
          >
            <img className=" rounded-3xl" src={pic} alt="Page 4 image" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page4;
