import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const Navbar = ({ handleSideBar, sideBar }) => {
  return (
    <div className="h-[60px] fixed top-0 left-0 right-0 bg-white bg-gradient-to-t from-white to-gray-300 flex flex-row justify-between items-center px-5 text-black">
      <div className="flex gap-5 items-center">
        <div>
          <a href="#top" className="border-b-2 border-red-400 font-bold md:text-xl">DIGITAL <span className="red">BULL</span></a>
          <div className="underline"></div>
        </div>
        <div className="gap-5 hidden md:flex">
          <a href="#learning-goals">What you will learn</a>
          <a href="#">Training Results</a>
          <a href="#course-outline">Course Outline</a>
        </div>
      </div>
      <a href="mailto:digitalbull@gmail.com" className="hidden md:block rounded-md border-2 border-gray-400 p-1 px-2 contact hover:border-white">Contact Us</a>

      <button className="md:hidden" onClick={() => {
        handleSideBar(prevState => !prevState)
      }}>
        {
          !sideBar ? <HiMenuAlt3 size="30px" /> : <IoIosCloseCircleOutline size="30px" />
        }
      </button>
    </div>
  )
}
