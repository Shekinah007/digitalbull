
import { useEffect, useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar'
import Sidebar from './components/Sidebar';


import { FaArrowAltCircleUp } from "react-icons/fa";


import graphImg from "./assets/images/graph-3078539_1920.png"
import Benefits from './components/Benefits';
import { Plans } from './components/Plans';
import { Footer } from './components/Footer';


// bg-gradient-to-b from-black to-red-950 text-white

function App() {

  const [sideBar, handleSideBar] = useState(false)

  useEffect(() => {
    let classes = document.querySelectorAll(".animate")



    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("INTERSECTING")
          console.log(entry.target.classList.add("entrance"))
        }
        else {
          console.log("Not Intersecting")
          console.log(entry.target.classList.remove("entrance"))
        }
      })
    }, { rootMargin: "20px" })

    for (let i = 0; i < classes.length; i++) {
      const elements = classes[i];

      observer.observe(elements);
    }


  })

  return (
    <div className="bg-black min-h-screen mt-[60px] w-full text-black">
      <button onClick={()=> {
        window.scrollTo(0,0 )
      }} className={`fixed bottom-[30px] right-[30px]`}>
        <FaArrowAltCircleUp size="50px" color="#686868da"/>
      </button>
      <Navbar handleSideBar={handleSideBar} sideBar={sideBar} />
      <Sidebar sideBar={sideBar} />
      <div id="top" className="p-3 md:p-0   bg-gradient-to-b from-white to-gray-300 text-black min-h-[calc(100vh-60px)]  flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20">
        <div className="md:w-[500px] flex flex-col gap-5">
          <h1 className="text-4xl font-bold self-start">TRADE WITH CONFIDENCE</h1>
          <p> Digital bull provides unique training on stock price data analysis and give you the tools to explore the
            stock market, gain insights and make informed trading decisions.
          </p>
          <a href="#plans" className="text-white sign-btn self-start bg-red-500 font-semibold p-2 rounded-md">Sign Up For a Course</a>
        </div>
        <img src={graphImg} alt="graph image" className="w-[500px] " />
      </div>

      <Benefits />
      <Plans />
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
