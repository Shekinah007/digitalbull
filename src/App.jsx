import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { FaArrowAltCircleUp } from "react-icons/fa";

import { useParallax } from "react-scroll-parallax";

import uiImage from "./assets/images/illustrations/undraw_data_trends_re_2cdy.svg";
import questionsImg from "./assets/images/illustrations/undraw_questions_re_1fy7.svg";
import excelImg1 from "./assets/images/6296676_excel_microsoft_office_office365_icon.png";
import excelImg2 from "./assets/images/excel-3873854_1280.png";
import UIgrapghImg from "./assets/images/UI visual graph.png";
import UIImg from "./assets/images/interface.png";
import honeyImg from "./assets/images/honey-comb.png";
import honeyImg2 from "./assets/images/honey-comb (2).png";

import { Plans } from "./components/Plans";
import { Footer } from "./components/Footer";
import { Courses } from "./components/Courses";
import {
  intesectionHandler,
  scrollProgress,
} from "./helperFunctions/functions";
import Hero from "./components/Hero";
import { ContactUs } from "./components/ContactForm";

function App() {
  const [sideBar, handleSideBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [isIntersecting, setIsIntersecting] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Progress bar function
    scrollProgress();

    //call intersection observer
    intesectionHandler();
  }, [isIntersecting]);

  const parallax = useParallax({
    rotate: [0, 50],
  });

  const parallax2 = useParallax({
    easing: "easeOutQuad",
    rotate: [0, 60],
  });

  const scale = useParallax({
    easing: "easeOutQuad",
    scale: [1, 0.8, "easeInQuad"],
  });
  const scale2 = useParallax({
    easing: "easeOutQuad",
    scale: [1, 0.8, "easeInQuad"],
  });

  return (
    <div className=" bg-black min-h-screen mt-[60px] w-full text-black dark:text-white">
      <ToastContainer autoClose={2000} />

      {/* overlay */}
      <div
        className={`
          overlay z-20 fixed mid:hidden top-0 duration-700 transition-all w-0 h-screen bg-black/70 left-0
          ${sideBar && "w-[700px]"}
      `}
      ></div>

      {/* scroll to top button */}
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        id="top-button"
        className={`to-top z-20`}
      >
        <FaArrowAltCircleUp
          className="h-[35px] w-[35px] md:h-[50px] md:w-[50px]"
          color="#686868da"
        />
      </button>

      <Navbar
        handleSideBar={handleSideBar}
        sideBar={sideBar}
        darkMode={darkMode}
        handleDarkMode={setDarkMode}
      />

      <Sidebar
        sideBar={sideBar}
        darkMode={darkMode}
        handleSideBar={handleSideBar}
        handleDarkMode={setDarkMode}
      />

      <Hero darkMode={darkMode} parallax={parallax} />

      <div
        id="about"
        className={`
      bg-gradient-to-t from-white to-gray-300 text-black flex flex-col gap-10 md:gap-40 md:py-20
      dark:bg-gradient-to-t py-20 overflow-x-hidden
      ${
        darkMode &&
        "dark:bg-gradient-to-b dark:from-black dark:to-red-950 dark:text-white"
      }
    `}
      >
        <div className="flex flex-col-reverse overflow-x-hidden md:flex-row items-center justify-center md:gap-20 py-10 md:px-20 ">
          <img
            src={honeyImg2}
            ref={parallax2.ref}
            alt=""
            className={`absolute  ${
              !darkMode && "invert"
            } dark:opacity-50 md:block w-[600px] rotate-45 -left-[200px]   md:-left-[300px] top-[1000px] pattern-img `}
          />
          <img
            src={excelImg1}
            className="z-10 h-[100px] hidden md:block md:h-[300px] mt-10 md:mt-0 left"
          />
          <div className="relative w-[600px] flex flex-col gap-2 md:text-base max-w-[90vw] md:max-w-[80vw] ">
            <h2 className="z-10 font-bold text-3xl md:text-3xl">About</h2>
            <p className="animate z-10">
              Digitbull, a dedicated team of analysts, has diligently harnessed the power of Microsoft Excel to craft a groundbreaking software tool named Stock Price Visualization Tool (S.P.V.T). This innovative tool reveals the mechanical cycle of stock price movements and provides insightful visualizations of stock price trends, empowering investors to run potential scenarios and make informed decisions.
            </p>
            <img
              src={excelImg1}
              className=" h-[100px] w-[100px] self-center md:hidden left z-30"
            />
            <p className="animate z-10 ">
            The S.P.V.T. is built on the Microsoft Excel platform, a versatile spreadsheet software used to develop the intricate algorithms and formulas that underpin the S.P.V.T. Excel’s robust computational capabilities enables the user to process vast amounts of historical stock data swiftly, extracting meaningful patterns and trends.
            </p>
            <p className="animate z-10">
            Through careful application of trading strategies using the S.P.V.T, entry and exit positions can be chosen to attain a 5% to 10% gain per trade while minimizing risk. 
            </p>
          </div>
        </div>
        <div
          id="learning-goals"
          className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 md:px-20"
        >
          <img
            src={honeyImg}
            ref={scale.ref}
            alt=""
            className={`absolute  md:block w-[800px] ${
              darkMode && "invert"
            } rotate-45 -right-[200px] md:-right-[400px] top-[700px] pattern-img `}
          />
          <img
            src={honeyImg}
            ref={scale2.ref}
            alt=""
            className={`absolute  md:block w-[600px] opacity-60 ${
              darkMode && "invert"
            } invert md:opacity-100  rotate-45 -left-[200px] md:-left-[400px] top-[1300px] pattern-img`}
          />

          <div className="w-[600px] left flex flex-col gap-2 max-w-[90vw] py-10 md:py-5  md:min-h-[80vh]">
            <h2 className="text-3xl font-bold text-red-500">User Interface</h2>
            <div className="left flex flex-col gap-4">
              <p>
                Digitbull’s Stock Price Visualization Tool (S.P.V.T) boasts a
                user-friendly interface that effortlessly bridges complexity
                with simplicity. Navigating through intricate stock data becomes
                a seamless experience, thanks to the intuitive design crafted on
                the robust foundation of Microsoft Excel. The tool offers a
                harmonious blend of functionality and accessibility, ensuring
                both novice and seasoned investors can effortlessly harness its
                power.
              </p>
              <img
                src={uiImage}
                className="h-[170px] md:hidden md:h-[300px] "
              />
            </div>
          </div>
          <img
            src={uiImage}
            className="h-[170px] md:h-[300px] hidden md:block self-end animate"
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 pt-[70px] md:gap-20 md:px-20 ">
          {/* <img
            src={UIgrapghImg}
            className=" w-[80vw] md:h-[200px] md:w-[400px] left"
          /> */}
          {/* <div className="w-[600px] animate flex flex-col gap-1  max-w-[90vw]">
            <h2 className="text-3xl font-bold text-red-500">
              User Interface: Stock Profile Graphs
            </h2>
            <p className="animate">
              Easily generate stock profile graphs from Raw stock data to
              visualize historical stock price movements.
            </p>
          </div> */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-20  ">
            <div className="w-[600px] animate flex flex-col gap-2  max-w-[90vw]">
              <h2 className="text-3xl font-bold text-red-500 md:mb-8">
                User Interface: Threshold Tables
              </h2>
              <p className="animate">
                Visualize support and resistance with prediction tables and get
                historical perspective on breaches of support and resistance
                thresholds.
              </p>
            </div>
            {/* <img
            src={UIImg}
            className="w-[80vw] md:h-[200px] md:w-[400px] left"
          /> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center py-10 md:py-5 md:gap-20 md:px-20 ">
          <img
            src={excelImg2}
            className="h-[150px] md:h-[300px] self-end md:self-start mr-[30px] md:mr-[0] left"
          />
          <div className="w-[600px] animate flex flex-col gap-2 max-w-[90vw]  md:min-h-[60vh] md:justify-end ">
            <h2 className="text-3xl font-bold  text-green-500">User Manual</h2>
            <div className="animate flex flex-col gap-4">
              <p>
                Digitbull’s commitment to user empowerment extends beyond
                software design to an exceptional user manual accompanying the
                Stock Price Visualization Tool (S.P.V.T). Meticulously curated,
                the manual serves as a comprehensive guide, unraveling the
                intricate features of the tool with clarity and precision.
              </p>
              {/* <p>
                From step-by-step setup instructions to in-depth explanations of
                advanced functionalities, users are ushered into a realm of
                understanding. Digitbull’s user manual is more than a guide;
                it’s a strategic companion, fostering a seamless learning curve.
                As investors embark on harnessing the full potential of S.P.V.T,
                this well-crafted manual stands as a beacon, ensuring mastery
                and confidence in navigating the complexities of stock analysis.
              </p> */}
            </div>
          </div>
        </div>

        <div className="flex relative overflow-x-hidden flex-col md:flex-row items-center justify-center md:gap-20 md:px-20 ">
          <div className="w-[600px] animate flex flex-col gap-2 py-10 md:py-5  max-w-[90vw]">
            <h2 className="text-3xl font-semibold text-red-500">Why use S.P.V.T</h2>
            <div className="flex flex-col gap-4">
              <p className="animate">
                {/* <p className="animate">
                  Digitbull's commitment to user proficiency extends to a
                  dynamic
                </p>

                <p className="animate">
                  online Q/A session delivered via Zoom, where investors can
                  seamlessly
                </p>
                <p className="animate">
                  connect with experts. This interactive session serves as a
                  personalized
                </p>
                <p className="animate">
                  guide, addressing user queries and unlocking the nuances of
                  the
                </p> */}
                <ul>
                  <li style={{marginBottom: 10}}>Instantly generate stock profile graphs and other visuals which describe the mechanical behaviour of stock price movements.</li>
                  <li style={{marginBottom: 10}}>Use these visuals to make well timed decisions for entry and exit on trades through stock profile visualization.</li>
                  <li style={{marginBottom: 10}}>Run scenarios to visualize the positions of potential entry and exit prices on the stock profile visuals.</li>
                  <li style={{marginBottom: 10}}>Analyze up to 5years worth of historical data in an instant. Information displayed in one clear, concise visual profile.</li>
                  <li style={{marginBottom: 10}}>S.P.V.T. User manual is available to aid users in understanding the full capabilities and functionalities of the S.P.V.T.</li>
                  <li style={{marginBottom: 10}}>Demo version is free. Try it out.</li>
                </ul>

                {/* <img src={dotImg} alt="" className={`absolute md:block w-[600px] opacity-60 ${!darkMode && "invert"}  md:opacity-100  rotate-45 top-[1000px] -right-[200px] md:-right-[400px] md:top-[600px]`} /> */}

                {/* <p className="animate">
                  Stock Price Visualization Tool (S.P.V.T).
                </p> */}
              </p>
              <img
                src={questionsImg}
                className="h-[150px] animate md:hidden left"
              />
              {/* <p className="animate">
                Led by able instructors, participants gain firsthand insights
                into navigating the tool's features, interpreting
                visualizations, and optimizing its potential for informed
                decision-making. The Zoom instructor-led class transforms the
                learning experience into a collaborative journey, ensuring users
                grasp the intricacies of the tool while fostering a supportive
                community of investors ready to harness the power of S.P.V.T.
              </p> */}
            </div>
          </div>
          <img src={questionsImg} className="h-[300px] hidden md:block left" />
        </div>
      </div>

      <div id="mid-point" className="flex flex-col">
        {/* <Courses /> */}
        <Plans darkMode={darkMode} isIntersecting={isIntersecting} />
        <Footer />
        <p className="self-center  border-t border-white w-full text-center pt-2 pb-2">
          Digitbull is propriety property of MOKH DATA INC
        </p>
      </div>
    </div>
  );
}

export default App;
