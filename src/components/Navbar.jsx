import { Sling as Hamburger } from 'hamburger-react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'


// import Hamburger from 'hamburger-react'


export const Navbar = ({ handleSideBar, sideBar, darkMode, handleDarkMode }) => {
  return (
    <nav
      className="h-[60px] z-50 fixed top-0 left-0 right-0 bg-white bg-gradient-to-t from-white to-gray-300 flex flex-row justify-between items-center px-5 text-black
      dark:bg-gradient-to-t dark:from-black dark:to-black dark:text-white
    ">
      <div className="flex gap-5 items-center">
        <div>
          <a href="#top" className="nav-head font-bold text-xl md:text-xl text-red-400">DIGITAL BULL</a>
          {/* <div className="underline"></div> */}
        </div>
        <div className="gap-5 hidden md:flex">
          <a href="#about" className="nav-link font-semibold text-gray-300">About</a>
          <a href="#learning-goals" className="nav-link font-semibold text-gray-300">What you will learn</a>
          <a href="#course-outline" className="nav-link font-semibold text-gray-300">Course Outline</a>
        </div>
      </div>
      <a href="mailto:digitalbull@gmail.com"
        className="hidden md:block rounded-md border-2 border-gray-400 
        p-1 px-2 contact hover:border-white contact-btn">
        Contact Us
      </a>

      <div className="fixed bottom-[70px] right-[30px]">
        <DarkModeSwitch
          // style={{ position: 'fixed', bottom: "0" }}
          checked={darkMode}
          onChange={handleDarkMode}
          size={45}
        />
      </div>

      <div className="md:hidden">
        <Hamburger toggle={handleSideBar} toggled={sideBar} />
      </div>

    </nav>
  )
}
