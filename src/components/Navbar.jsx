import { Sling as Hamburger } from 'hamburger-react'


// import Hamburger from 'hamburger-react'


export const Navbar = ({ handleSideBar, sideBar }) => {
  return (
    <nav
      className="h-[60px] z-10 fixed top-0 left-0 right-0 bg-white bg-gradient-to-t from-white to-gray-300 flex flex-row justify-between items-center px-5 text-black
      dark:bg-gradient-to-t dark:from-black dark:to-black dark:text-white
    ">
      <div className="flex gap-5 items-center">
        <div>
          <a href="#top" className="border-b-2 border-red-400 font-bold text-xl md:text-xl">DIGITAL <span className="red">BULL</span></a>
          <div className="underline"></div>
        </div>
        <div className="gap-5 hidden md:flex">
          <a href="#learning-goals">What you will learn</a>
          <a href="#">Training Results</a>
          <a href="#course-outline">Course Outline</a>
        </div>
      </div>
      <a href="mailto:digitalbull@gmail.com" className="hidden md:block rounded-md border-2 border-gray-400 p-1 px-2 contact hover:border-white">Contact Us</a>

      {/* <button onClick={() => { }} >Dark Mode</button> */}
      <div className="md:hidden">
        <Hamburger toggle={handleSideBar} toggled={sideBar} />
      </div>

    </nav>
  )
}
