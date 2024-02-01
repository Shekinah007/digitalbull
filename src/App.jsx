
import { useEffect, useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar'
import Sidebar from './components/Sidebar';


import { FaArrowAltCircleUp } from "react-icons/fa";


import graphImg from "./assets/images/graph-3078539_1920.png"
import excelImg1 from "./assets/images/6296676_excel_microsoft_office_office365_icon.png"
import excelImg2 from "./assets/images/excel-3873854_1280.png"

import Benefits from './components/Benefits';
import { Plans } from './components/Plans';
import { Footer } from './components/Footer';


// bg-gradient-to-b from-black to-red-950 text-white

function App() {

  const [sideBar, handleSideBar] = useState(false)

  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    let classes = document.querySelectorAll(".animate, .left, .fade, .card")

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log("INTERSECTING")
          entry.target.classList.add("entrance")
          // setIsIntersecting(false)
        }
        else {
          // console.log("Not Intersecting")
          // setIsIntersecting(true)

          entry.target.classList.remove("entrance")
        }
      })
    }, { rootMargin: "20px" })

    for (let i = 0; i < classes.length; i++) {
      const elements = classes[i];

      observer.observe(elements);
    }


    // ////////////////////////////////////////
    let midPoint = document.getElementsByClassName("mid-point");
    let topButton = document.getElementById("top-button");
    console.log("TopBUTTON", topButton.classList)

    topButton.classList.add("show-top-btn");



    const topObserver = new IntersectionObserver((entry) => {
      console.log("Entry:", entry)
      if (entry.isIntersecting) {
        topButton.classList.toggle("show-top-btn");
        console.log("Intersectionlsfnnwewewe")
        console.log("TopBUTTON", topButton)
      }
      else {
        console.log("NOt top button niterakjfelnji")
        topButton.classList.remove("show-top-btn");
      }
    })

    topObserver.observe(midPoint[0])


  }, [isIntersecting])



  return (
    <div className=" bg-black min-h-screen mt-[60px] w-full text-black">
      <button onClick={() => {
        window.scrollTo(0, 0)
      }} id="top-button" className={` fixed bottom-[30px] right-[30px] to-top`}>
        <FaArrowAltCircleUp size="50px" color="#686868da" />
      </button>
      <Navbar handleSideBar={handleSideBar} sideBar={sideBar} />
      <Sidebar sideBar={sideBar} />
      <div id="top"
        className={`
          p-3 md:p-0  bg-gradient-to-b from-white to-gray-300 text-black min-h-[calc(100vh-60px)] 
          flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20
          dark:bg-gradient-to-b dark:from-black dark:to-red-950 dark:text-white
        `}>
        <div className="md:w-[500px] flex flex-col gap-5">
          <h1 className="text-4xl font-bold self-start">TRADE WITH CONFIDENCE</h1>
          <p> Digital bull provides unique training on stock price data analysis and give you the tools to explore the
            stock market, gain insights and make informed trading decisions.
          </p>
          <a href="#plans" className="text-white sign-btn self-start bg-red-500 font-semibold p-2 rounded-md">Sign Up For a Course</a>
        </div>
        <img src={graphImg} alt="graph image" className="w-[500px] " />
      </div>

      <div className="
      bg-gradient-to-t from-white to-gray-300 text-gray-600 flex flex-col gap-10 md:gap-48 md:py-20
      dark:bg-gradient-to-t dark:from-black dark:to-red-950 dark:text-white
      ">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 md:px-20 ">
          <img src={excelImg1} className="h-[300px] left" />
          <p className="w-[600px] animate flex flex-col gap-5 max-w-[80vw]">
            <p className="animate">
              Digital Bull, a dedicated team of analysts, is diligently harnessing the
              power of Microsoft Excel to craft a groundbreaking software tool named
              Stock Price Visualization Tool (S.P.V.T). This innovative tool is poised
              to revolutionize the world of stock trading by providing insightful
              visualizations of stock price trends, empowering investors to make informed
              decisions.
            </p>
            <p className="animate">
              The team’s commitment to excellence is evident in their meticulous use of
              Microsoft Excel, a versatile spreadsheet software, to develop the intricate
              algorithms and formulas that underpin the S.P.V.T. Excel’s robust
              computational capabilities enable Digital Bull to process vast amounts
              of historical stock data swiftly, extracting meaningful patterns and
              trends.
            </p>
            <p className="animate">
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
          </p>

        </div>
        <div className=" flex flex-col md:flex-row items-center justify-center md:gap-20 md:px-20 ">
          <div className="w-[600px] left flex flex-col gap-5  max-w-[80vw]" >
            <h2 className="text-3xl font-semibold ">User Interface</h2>
            <p className="left">
              DigitalBull’s Stock Price Visualization Tool (S.P.V.T) boasts a user-friendly
              interface that effortlessly bridges complexity with simplicity. Navigating
              through intricate stock data becomes a seamless experience, thanks to the
              intuitive design crafted on the robust foundation of Microsoft Excel.
              The tool offers a harmonious blend of functionality and accessibility,
              ensuring both novice and seasoned investors can effortlessly harness its
              power. With sleek visuals, interactive charts, and streamlined controls,
              users can grasp intricate stock price trends at a glance.
              DigitalBull’s commitment to a friendly user interface propels the S.P.V.T
              to the forefront, empowering investors with a powerful yet approachable
              tool for making well-informed decisions in the dynamic world of stock trading.
            </p>
          </div>
          <img src={graphImg} className="h-[300px] animate" />

        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 md:px-20 ">
          <img src={graphImg} className="h-[300px] left" />
          <div className="w-[600px] animate flex flex-col gap-5  max-w-[80vw]">
            <h2 className="text-3xl font-semibold">User Manual</h2>
            <p className="animate">
              DIGITAL BULL’s commitment to user empowerment extends beyond software
              design to an exceptional user manual accompanying
              the Stock Price Visualization Tool (S.P.V.T). Meticulously curated,
              the manual serves as a comprehensive guide, unraveling the intricate
              features of the tool with clarity and precision.
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
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 md:px-20 ">
          <div className="w-[600px] animate flex flex-col gap-5  max-w-[80vw]">
            <h2 className="text-3xl font-semibold">Q/A Session</h2>
            <p className="animate">
              DIGITAL BULL’s commitment to user empowerment extends beyond software
              design to an exceptional user manual accompanying
              the Stock Price Visualization Tool (S.P.V.T). Meticulously curated,
              the manual serves as a comprehensive guide, unraveling the intricate
              features of the tool with clarity and precision.
              From step-by-step setup instructions to in-depth explanations of
              advanced functionalities, users are ushered into a realm of
              understanding. Digital Bull’s user manual is more than a guide;
              it’s a strategic companion, fostering a seamless learning curve.
              As investors embark on harnessing the full potential of S.P.V.T,
              this well-crafted manual stands as a beacon, ensuring mastery and
              confidence in navigating the complexities of stock analysis.
            </p>
          </div>
          <img src={excelImg2} className="h-[300px] left" />

        </div>
      </div>

      <Benefits isIntersecting={isIntersecting} />
      <Plans isIntersecting={isIntersecting} />
      {/* <div className="min-h-screen bg-black contain">
        <div class="parent">
          <div class="child"></div>
        </div>
      </div> */}

      <Footer />

    </div>
  )
}

export default App;
