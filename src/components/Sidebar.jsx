import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Sidebar({
  sideBar,
  darkMode,
  handleSideBar,
  handleDarkMode,
}) {
  return (
    <div
      className={`
            border-r-2 border-white 
             z-50 w-[250px] overflow-hidden md:hidden pt-[30px] text-lg  min-h-[calc(100vh-60px)]
             fixed top-min-h-[calc(100vh-60px)] flex flex-col items-start gap-6 p-5
             bg-white text-black font-bold
          ${
            darkMode &&
            "dark:bg-gradient-to-b dark:from-black dark:to-red-950 dark:text-gray-200"
          }
            
             ${!sideBar && "-translate-x-[300px]"}
             `}
    >
      <a href="#about" onClick={() => handleSideBar(false)}>
        About
      </a>
      <a href="#learning-goals" onClick={() => handleSideBar(false)}>
        Learning Goals
      </a>
      {/* <a href="#course-outline" onClick={() => handleSideBar(false)}>Course Outline</a> */}
      <a href="#plans" onClick={() => handleSideBar(false)}>
        Plans
      </a>
      <a href="#learning-goals" className="nav-link font-semibold">
        Refund Policy
      </a>
      <a
        href="mailto:info@digitbull.com"
        className="rounded-md border-2 border-red-300 p-2 contact"
      >
        Contact Us
      </a>

      <div className="fixed bottom-[20px] z-10 left-[125px]">
        <DarkModeSwitch
          // style={{ position: 'fixed', bottom: "0" }}
          checked={darkMode}
          onChange={handleDarkMode}
          size={35}
        />
      </div>
    </div>
  );
}
