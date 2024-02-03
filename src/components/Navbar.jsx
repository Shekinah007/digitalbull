import { Sling as Hamburger } from 'hamburger-react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'


// import Hamburger from 'hamburger-react'


export const Navbar = ({ handleSideBar, sideBar, darkMode, handleDarkMode }) => {

  return (
    <nav
      className={`
      h-[60px] z-50 fixed top-0 left-0 right-0 flex flex-row justify-between items-center px-5 
      bg-white  text-black shadow duration-100
      ${darkMode && "dark:bg-black text-white"}

    `}>

      <div className="absolute top-[58px] left-0 w-full bg-black rounded-full h-1 mb-4 dark:bg-black/0">
        <div id="myBar" className="bg-blue-500 h-1 rounded-full dark:bg-red-500 myBar" style={{ width: "0%" }} ></div>
      </div>

      <div className="flex gap-5 items-center">
        <div>
          <a href="#top" className="nav-head font-bold text-xl md:text-xl text-red-500">DIGITAL BULL</a>
          {/* <div className="underline"></div> */}
        </div>
        <div className="gap-5 hidden md:flex text-lg">
          <a href="#about" className="nav-link font-semibold ">About</a>
          <a href="#learning-goals" className="nav-link font-semibold">Learning Goals</a>
          <a href="#course-outline" className="nav-link font-semibold ">Course Outline</a>
          <a href="#plans" className="nav-link font-semibold ">Plans</a>
        </div>
      </div>

      <div className="flex gap-5">

        <a href="mailto:digitalbull@gmail.com"
          className="hidden md:block rounded-md border-2 border-gray-400
          p-1 px-2 contact hover:border-white contact-btn">
          Contact Us
        </a>

        <div className="hidden md:block z-10">
          <DarkModeSwitch
            // style={{ position: 'fixed', bottom: "0" }}
            checked={darkMode}
            onChange={handleDarkMode}
            size={35}
          />
        </div>

      </div>


      <div className="md:hidden">
        <Hamburger toggle={handleSideBar} toggled={sideBar} />
      </div>

    </nav>
  )
}
