
import { useEffect, useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar'
import Sidebar from './components/Sidebar';


import { FaArrowAltCircleUp } from "react-icons/fa";

import { TypeAnimation } from 'react-type-animation';
import { useParallax } from "react-scroll-parallax";

import graphImg from "./assets/images/graph-3078539_1920.png"
import uiImage from "./assets/images/illustrations/undraw_data_trends_re_2cdy.svg"
import questionsImg from "./assets/images/illustrations/undraw_questions_re_1fy7.svg"
import climbImg from "./assets/images/climb2.png"
import excelImg1 from "./assets/images/6296676_excel_microsoft_office_office365_icon.png"
import excelImg2 from "./assets/images/excel-3873854_1280.png"
import UIgrapghImg from "./assets/images/UI visual graph.png"
import UIImg from "./assets/images/interface.png"

import heroBgImg from "./assets/images/grid vert.png"
import gridDia from "./assets/images/grid-dia.png"
import honeyImg from "./assets/images/honey-comb.png"
import honeyImg2 from "./assets/images/honey-comb (2).png"
import dotImg from "./assets/images/pattr.png"




import Benefits from './components/Benefits';
import { Plans } from './components/Plans';
import { Footer } from './components/Footer';
import { Courses } from './components/Courses';


// bg-gradient-to-b from-black to-red-950 text-white

function App() {

  const [sideBar, handleSideBar] = useState(false)
  const [darkMode, setDarkMode] = useState(true);

  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {

    // Progress bar function
    window.onscroll = function () { myFunction() };

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";

    }

    let classes = document.querySelectorAll(".animate, .left, .fade, .card, .top-enter")

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("entrance")
        }
        else {
          entry.target.classList.remove("entrance")
        }
      })
    }, { rootMargin: "20px", })

    for (let i = 0; i < classes.length; i++) {
      const elements = classes[i];

      observer.observe(elements);
    }


    // ////////////////////////////////////////
    let midPoint = document.getElementById("mid-point");
    let topButton = document.getElementsByClassName("to-top")[0];

    topButton.classList.add("show-top-btn");

    const topObserver = new IntersectionObserver((entry) => {
      // console.log("Entry:", entry)
      console.log("Entry:", entry)
      console.log("IS entry intersecting? ", entry[0].isIntersecting)
      if (entry[0].isIntersecting) {
        topButton.classList.add("show-top-btn");
        // console.log("Intersectionlsfnnwewewe")
        // console.log("TopBUTTON", topButton)

        console.log("Mid Point intersecting")
      }
      else {
        console.log("midppoint NOT intersecting")
        topButton.classList.remove("show-top-btn");
      }
    })

    topObserver.observe(midPoint)


  }, [isIntersecting])


  const parallax = useParallax({
    rotate: [0, 50],
  })

  const parallax2 = useParallax({
    easing: 'easeOutQuad',
    rotate: [0, 60]
  })

  const scale = useParallax({
    easing: 'easeOutQuad',
    scale: [1, 0.8, 'easeInQuad'],
  });
  const scale2 = useParallax({
    easing: 'easeOutQuad',
    scale: [1, 0.8, 'easeInQuad'],
  });

  return (
    <div className=" bg-black min-h-screen mt-[60px] w-full text-black dark:text-white">
      {/* <div ref={parallax.ref} className="spinner bg-blue-500 h-[300px] w-[300px]">
        <p>Hello world</p>
      </div> */}

      <div className={`
          overlay z-20 fixed mid:hidden top-0 duration-700 transition-all w-0 h-screen bg-black/70 left-0
          ${sideBar && "w-[700px]"}
      `}></div>


      <button onClick={() => {
        window.scrollTo(0, 0)
      }} id="top-button" className={`to-top z-20`}>
        <FaArrowAltCircleUp className="h-[35px] w-[35px] md:h-[50px] md:w-[50px]" color="#686868da" />
      </button>

      <Navbar handleSideBar={handleSideBar} sideBar={sideBar} darkMode={darkMode} handleDarkMode={setDarkMode} />

      <Sidebar sideBar={sideBar} darkMode={darkMode} handleSideBar={handleSideBar} handleDarkMode={setDarkMode} />

      <div id="top"
        className={`relative
          p-3 md:p-0  bg-gradient-to-b from-white to-gray-300 text-black min-h-[calc(100vh-60px)] 
          flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20
          ${darkMode && "dark:bg-gradient-to-b dark:from-black dark:to-red-950 text-white"}
        hero-section overflow-x-hidden
        `}>
        <img ref={parallax.ref} src={heroBgImg} alt="" className="absolute w-[300px] md:w-[600px]  invert -z-1 rotate-45 md:rotate-45 -right-[20px] -top-[200px] pattern-img " />
        {/* <img src={gridDia} alt="" className="absolute w-[600px]  invert -z-1 rotate-12 -right-[20px] -top-[100px] pattern-img " /> */}
        <div className="md:w-[500px] flex flex-col gap-5 z-10">
          {/* <h1 className="text-4xl font-bold self-start animate">TRADE WITH CONFIDENCE</h1> */}
          <h1 id="header-text" className="text-2xl header-text md:text-4xl font-bold self-start animate">
            <TypeAnimation
              cursor={false}
              className={""}
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'TRADE WITH CONFIDENCE',
                1000, // wait 1s before replacing "Mice" WITH "Hamsters"
                'TRADE WITH KNOWLEDGE',
                1000,
                'TRADE SKILLFULLY',
                1000,
                'DIGITAL BULL',
                (el) => {
                  el.classList.add("text-red-500");
                  el.classList.add("scale-125");
                  el.classList.add("translate-x-6")
                },
                1000,
                (el) => {
                  el.classList.remove("text-red-500")
                  el.classList.remove("scale-125")
                  el.classList.remove("translate-x-6")
                },
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />

          </h1>
          <p className="left"> Digital bull provides unique training on stock price data analysis and give you the tools to explore the
            stock market, gain insights and make informed trading decisions.
          </p>
          <a href="#plans" className="text-white sign-btn self-start  font-semibold p-2 rounded-md animate">Sign Up For a Course</a>
        </div>
        <img src={climbImg} alt="graph image" className="w-[500px] z-10 top-enter " />
      </div>


      <div id="about" className={`
      bg-gradient-to-t from-white to-gray-300 text-black flex flex-col gap-10 md:gap-40 md:py-20
      dark:bg-gradient-to-t py-20 overflow-x-hidden
      ${darkMode && "dark:bg-gradient-to-b dark:from-black dark:to-red-950 dark:text-white"}
    `}>
        <div className="flex flex-col-reverse overflow-x-hidden md:flex-row items-center justify-center md:gap-20 py-10 md:px-20 ">
          <img src={honeyImg2} ref={parallax2.ref} alt="" className={`absolute  ${!darkMode && 'invert'} dark:opacity-50 md:block w-[600px] rotate-45 -left-[200px]   md:-left-[300px] top-[1000px] pattern-img `} />
          <img src={excelImg1} className="z-10 h-[100px] hidden md:block md:h-[300px] mt-10 md:mt-0 left" />
          <div className="relative w-[600px] flex flex-col gap-2 md:text-base max-w-[90vw] md:max-w-[80vw] ">
            <h2 className="z-10 font-bold text-3xl md:text-3xl">About</h2>
            <p className="animate z-10">
              Digital Bull, a dedicated team of analysts, is diligently harnessing the
              power of Microsoft Excel to craft a groundbreaking software tool named
              Stock Price Visualization Tool (S.P.V.T). This innovative tool is poised
              to revolutionize the world of stock trading by providing insightful
              visualizations of stock price trends, empowering investors to make informed
              decisions.
            </p>
            <img src={excelImg1} className=" h-[100px] w-[100px] self-center md:hidden left z-30" />
            <p className="animate z-10 ">
              The team’s commitment to excellence is evident in their meticulous use of
              Microsoft Excel, a versatile spreadsheet software, to develop the intricate
              algorithms and formulas that underpin the S.P.V.T. Excel’s robust
              computational capabilities enable Digital Bull to process vast amounts
              of historical stock data swiftly, extracting meaningful patterns and
              trends.
            </p>

            <p className="animate z-10">
              The S.P.V.T aims to offer traders a comprehensive visual
              representation of stock price movements, aiding them in identifying potential
              market trends and making strategic decisions. Through the seamless
              integration of data visualization techniques within Excel,
              Digital Bull strives to enhance user experience, ensuring clarity
              and accessibility in interpreting complex market dynamics.
              In a landscape where real-time decision-making is crucial,
              Digital Bull’s S.P.V.T emerges as a powerful ally for traders,
              bridging the gap between data and actionable insights. By leveraging the
              capabilities of Microsoft Excel, this team of analysts exemplifies how
              dedication and innovation can converge to shape the future of stock trading
              tools.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 md:px-20">
          <img src={honeyImg} ref={scale.ref} alt="" className={`absolute  md:block w-[800px] ${darkMode && "invert"} rotate-45 -right-[200px] md:-right-[400px] top-[700px] pattern-img `} />
          <img src={honeyImg} ref={scale2.ref} alt="" className={`absolute  md:block w-[600px] opacity-60 ${darkMode && "invert"} invert md:opacity-100  rotate-45 -left-[200px] md:-left-[400px] top-[1300px] pattern-img`} />

          <div className="w-[600px] left flex flex-col gap-2 max-w-[90vw] py-10 md:py-5  md:min-h-[80vh]" >
            <h2 className="text-3xl font-bold text-red-500">User Interface</h2>
            <div className="left flex flex-col gap-4">
              <p>
                DigitalBull’s Stock Price Visualization Tool (S.P.V.T) boasts a user-friendly
                interface that effortlessly bridges complexity with simplicity. Navigating
                through intricate stock data becomes a seamless experience, thanks to the
                intuitive design crafted on the robust foundation of Microsoft Excel.
                The tool offers a harmonious blend of functionality and accessibility,
                ensuring both novice and seasoned investors can effortlessly harness its
                power.
              </p>
              <img src={uiImage} className="h-[170px] md:hidden md:h-[300px] " />

              <p>
                With sleek visuals, interactive charts, and streamlined controls,
                users can grasp intricate stock price trends at a glance.
                DigitalBull’s commitment to a friendly user interface propels the S.P.V.T
                to the forefront, empowering investors with a powerful yet approachable
                tool for making well-informed decisions in the dynamic world of stock trading.
              </p>
            </div>
          </div>
          <img src={uiImage} className="h-[170px] md:h-[300px] hidden md:block self-end animate" />

        </div>
        <div className="flex flex-col md:flex-row items-center justify-center py-10 md:py-5 md:gap-20 md:px-20 ">
          <img src={excelImg2} className="h-[150px] md:h-[300px] self-end md:self-start mr-[30px] md:mr-[0] left" />
          <div className="w-[600px] animate flex flex-col gap-2 max-w-[90vw]  md:min-h-[80vh] md:justify-end ">
            <h2 className="text-3xl font-bold  text-green-500">User Manual</h2>
            <div className="animate flex flex-col gap-4">
              <p>
                DIGITAL BULL’s commitment to user empowerment extends beyond software
                design to an exceptional user manual accompanying
                the Stock Price Visualization Tool (S.P.V.T). Meticulously curated,
                the manual serves as a comprehensive guide, unraveling the intricate
                features of the tool with clarity and precision.
              </p>
              <p>
                From step-by-step setup instructions to in-depth explanations of
                advanced functionalities, users are ushered into a realm of
                understanding. Digital Bull’s user manual is more than a guide;
                it’s a strategic companion, fostering a seamless learning curve.
                As investors embark on harnessing the full potential of S.P.V.T,
                this well-crafted manual stands as a beacon, ensuring mastery and
                confidence in navigating the complexities of stock analysis.
              </p>
            </div>
          </div>

        </div>

        <div className="flex relative overflow-x-hidden flex-col md:flex-row items-center justify-center md:gap-20 md:px-20 ">
          <div className="w-[600px] animate flex flex-col gap-2 py-10 md:py-5  max-w-[90vw]">
            <h2 className="text-3xl font-semibold text-red-500">Q/A Session</h2>
            <div className="flex flex-col gap-4">
              <p className="animate">
                <p className="animate">
                  Digital Bull's commitment to user proficiency extends to a dynamic
                </p>

                <p className="animate">online Q/A session delivered via Zoom, where investors can seamlessly</p>
                <p className="animate">
                  connect with experts. This interactive session serves as a personalized
                </p>
                <p className="animate">
                  guide, addressing user queries and unlocking the nuances of the
                </p>

                {/* <img src={dotImg} alt="" className={`absolute md:block w-[600px] opacity-60 ${!darkMode && "invert"}  md:opacity-100  rotate-45 top-[1000px] -right-[200px] md:-right-[400px] md:top-[600px]`} /> */}

                <p className="animate">Stock Price Visualization Tool (S.P.V.T).</p>
              </p>
              <img src={questionsImg} className="h-[150px] animate md:hidden left" />
              <p className="animate">
                Led by CONFIDENCEable instructors, participants gain firsthand insights into
                navigating the tool's features, interpreting visualizations, and optimizing
                its potential for informed decision-making. The Zoom instructor-led class
                transforms the learning experience into a collaborative journey, ensuring users
                grasp the intricacies of the tool while fostering a supportive community
                of investors ready to harness the power of S.P.V.T.
              </p>

            </div>
          </div>
          <img src={questionsImg} className="h-[300px] hidden md:block left" />

        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 pt-[70px] md:gap-20 md:px-20 ">
          <img src={UIgrapghImg} className=" w-[80vw] md:h-[200px] md:w-[400px] left" />
          <div className="w-[600px] animate flex flex-col gap-2  max-w-[90vw]">
            <h2 className="text-3xl font-bold text-red-500">USER INTERFACE: STOCK PROFILE PARAGRAPHS</h2>
            <p className="animate">
              Easily generate stock profile graphs from Raw stock data to visualize
              historical stock price movements
            </p>
          </div>

        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 md:px-20 ">
          <div className="w-[600px] animate flex flex-col gap-2  max-w-[90vw]">
            <h2 className="text-3xl font-bold text-red-500">USER INTERFACE: PREDICTION TABLES</h2>
            <p className="animate">
              Visualize support and resistance with prediction tables and get historical perspective on
              breaks of support and resistance.
            </p>
          </div>
          <img src={UIImg} className="w-[80vw] md:h-[200px] md:w-[400px] left" />

        </div>
      </div>

      <div id="mid-point" className="flex flex-col">

        <Benefits isIntersecting={isIntersecting} darkMode={darkMode} />
        <Courses />
        <Plans darkMode={darkMode} isIntersecting={isIntersecting} />
        <Footer />

      </div>

    </div >
  )
}

export default App;
