import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { ContactUs } from "./ContactForm";
import { useState } from "react";

export const Plans = ({ isIntersecting, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="plans"
      className={`min-h-screen md:min-h-[550px] flex flex-col items-center justify-center gap-5 bg-white py-10 text-gray-500
        bg-gradient-to-b from-white to-gray-400 border-y-2 border-white
        ${
          darkMode &&
          "dark:bg-gradient-to-b dark:from-black dark:to-gray-800 text-white"
        }
        `}
    >
      <h2 className="text-3xl font-bold">
        <span className="text-red-500">Flexible</span> Plans
      </h2>
      <p className="text-lg font-semibold">
        Choose a plan that works best for you
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className={`card flex flex-col justify-start gap-5 animate`}
        >
          <div
            className="bg-red-500 h-[140px] w-full flex flex-col gap-1 justify-center
                        items-center text-white font-bold rounded-t-[20px] "
          >
            <h4 className="font-bold text-3xl">1</h4>
            <div className="w-[130px] h-[2px] bg-white rounded-md"></div>
            <p className="text-sm">Year Plan</p>
          </div>
          <div className="h-full text-sm flex flex-col gap-2 justify-around self-center items-start">
            <div className="text-sm flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                <p>S.P.V.T One-year subscription</p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                <p>User Manual</p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                <p>Q/A Session</p>
              </div>
            </div>
            <button className="cursor-pointer bg-green-500 text-lg p-1 w-[150px] rounded-2xl self-center font-bold text-white">
              250<span className="text-red-500 text-sm">USD</span>
            </button>
          </div>
        </div>

        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="card flex flex-col justify-start gap-5 animate"
        >
          <div
            className="bg-red-500 h-[140px] w-full flex flex-col gap-1 justify-center
                        items-center text-white font-bold rounded-t-[20px] "
          >
            <h4 className="font-bold text-3xl">2</h4>
            <div className="w-[130px] h-[2px] bg-white rounded-md"></div>
            <p className="text-sm">Year Plan</p>
          </div>
          <div className="h-full text-sm flex flex-col gap-2 justify-around self-center items-start">
            <div className="text-sm flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                <p>S.P.V.T Two-year subscription</p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                <p>User Manual</p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                <p>Q/A Session</p>
              </div>
            </div>
            <button className="shadow bg-green-500 text-lg p-1 w-[150px] rounded-2xl self-center font-bold text-white">
              400<span className="text-red-500 text-sm ">USD</span>
            </button>
          </div>
        </div>
      </div>

      <ContactUs isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
    // </ParallaxBanner >
  );
};
