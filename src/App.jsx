
import { useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar'
import Sidebar from './components/Sidebar';



import graphImg from "./assets/images/graph-3078539_1920.png"
import Benefits from './components/Benefits';
import { Plans } from './components/Plans';

function App() {

  const [sideBar, handleSideBar] = useState(false)

  return (
    <div className="bg-black min-h-screen mt-[60px] w-full text-black">
      <Navbar handleSideBar={handleSideBar} sideBar={sideBar} />
      <Sidebar sideBar={sideBar} />
      <div id="top" className="p-3 md:p-0 bg-gradient-to-b from-black to-red-950  min-h-[calc(100vh-60px)] text-white flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20">
        <div className="md:w-[500px] flex flex-col gap-5">
          <h1 className="text-4xl font-bold self-start">TRADE WITH CONFIDENCE</h1>
          <p> Digital bull provides unique training on stock price data analysis and give you the tools to explore the
            stock market, gain insights and make informed trading decisions.
          </p>
          <button class="self-start bg-red-400 font-semibold p-2 rounded-md">Sign Up For a Course</button>
        </div>
        <img src={graphImg} alt="graph image" className="w-[500px] " />
      </div>

      <Benefits />
      <Plans />
    </div>
  )
}

export default App;
