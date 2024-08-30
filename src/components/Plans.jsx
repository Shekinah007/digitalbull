import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { ContactUs } from "./ContactForm";
import { useState } from "react";
import { Plan } from "./Plan";

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
        <Plan
          handleOpen={setIsOpen}
          items={[
            "S.P.V.T. Trial version. Learn about the full capabilities of the S.P.V.T",
            "Analyze historical data",
          ]}
          price={"Free"}
          type={"Trial"}
          year={"Plan"}
        />

        <Plan
          handleOpen={setIsOpen}
          items={[
            "S.P.V.T One-year subscription + Training Materials",
            "Analyze live data ",
          ]}
          price={"150"}
          type={"1 year"}
          year={"Plan"}
        />
        {/* <Plan
          handleOpen={setIsOpen}
          items={[
            "S.P.V.T Two-year subscription",
            "User Manual",
            "Q/A Session/Training ",
          ]}
          price={"600"}
          type={"2"}
          year={"Year Plan"}
        /> */}
      </div>

      <ContactUs isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
    // </ParallaxBanner >
  );
};
