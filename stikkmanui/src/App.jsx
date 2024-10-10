import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import ScrollWheelHandler from "react-scroll-wheel-handler";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import button from "./assets/Button CTA.svg";
import buttonTransformed from "./assets/Button CTA-2.svg";
import button3 from "./assets/Button CTA-3.svg";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isButtonTransformed, setIsButtonTransformed] = useState(false);
  const totalPages = 5;
  const isAnimating = useRef(false);

  const handleScrollDown = useCallback(() => {
    if (!isAnimating.current && currentPage < totalPages - 1) {
      isAnimating.current = true;
      setCurrentPage((prevPage) => {
        if (prevPage === 1) {
          setIsButtonTransformed(true);
        }
        return prevPage + 1;
      });
      setTimeout(() => {
        isAnimating.current = false;
      }, 500);
    }
  }, [currentPage, totalPages]);

  const handleScrollUp = useCallback(() => {
    if (!isAnimating.current && currentPage > 0) {
      isAnimating.current = true;
      setCurrentPage((prevPage) => {
        if (prevPage === 2) {
          setIsButtonTransformed(false);
        }
        return prevPage - 1;
      });
      setTimeout(() => {
        isAnimating.current = false;
      }, 500);
    }
  }, [currentPage]);

  return (
    <ScrollWheelHandler
      upHandler={handleScrollUp}
      downHandler={handleScrollDown}
      timeout={700}
    >
      <div className="relative h-screen overflow-hidden bg-[#212D2D]">
        {/* Page 1 */}
        <motion.section
          key="page-1"
          className="w-full h-screen flex justify-center items-center absolute z-50 shadow-2xl"
          initial={{ y: 0, opacity: 1 }}
          animate={
            currentPage === 0
              ? { y: 0, opacity: 1 }
              : { y: "-100%", opacity: 0 }
          }
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Page1 />
        </motion.section>

        {/* Page 2 */}
        <motion.section
          key="page-2"
          className="w-screen h-screen flex justify-center items-center absolute z-40"
          initial={{ opacity: 1 }}
          animate={currentPage === 1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Page2 currentPage={currentPage} />
        </motion.section>

        <motion.button
          className="w-screen absolute left-[22%] z-50"
          style={{
            bottom: currentPage === 0 ? "200px" : "100px",
            transition: "opacity 0.6s ease-in-out, bottom 0.6s ease-in-out",
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={
            isButtonTransformed
              ? { opacity: 0, scale: 0.5 }
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.8 }}
        >
          <img src={button} alt="Button CTA" />
        </motion.button>

        <motion.button
          className="absolute z-50 bottom-24"
          style={{ visibility: currentPage === 2 ? "visible" : "hidden" }}
          initial={{ opacity: 0.5, scale: 1.5, right: "25%" }}
          animate={
            isButtonTransformed
              ? { opacity: 1, scale: 1, right: "10%" }
              : { opacity: 0, scale: 1.5 }
          }
          transition={{ duration: 0.7 }}
        >
          <img src={buttonTransformed} alt="Transformed Button" />
        </motion.button>
        <button
          className="absolute z-50 bottom-24 right-[10%]"
          style={{
            visibility:
              currentPage === 3 || currentPage === 4 ? "visible" : "hidden",
          }}
        >
          <img src={button3} alt="Transformed Button" />
        </button>

        {/* Page 3 */}
        <motion.section
          key="page-3"
          className="w-full h-screen flex justify-center items-center absolute z-30"
          initial={{ opacity: 1 }}
          animate={
            currentPage === 2 ? { y: 0, opacity: 1 } : { y: "100%", opacity: 1 }
          }
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Page3 currentPage={currentPage} />
        </motion.section>

        {/* Page 4 */}
        <motion.section
          key="page-4"
          className="w-full h-screen flex justify-center items-center absolute z-20"
          initial={{ opacity: 1 }}
          animate={currentPage === 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Page4 currentPage={currentPage} />
        </motion.section>

        {/* Page 5 */}
        <motion.section
          key="page-5"
          className="w-full h-screen flex justify-center items-center absolute z-10"
          initial={{ opacity: 1 }}
          animate={
            currentPage === 4 ? { y: 0, opacity: 1 } : { y: "100%", opacity: 1 }
          }
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Page5 currentPage={currentPage} />
        </motion.section>
      </div>
    </ScrollWheelHandler>
  );
};

export default App;
