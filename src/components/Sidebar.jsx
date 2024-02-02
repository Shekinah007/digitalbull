
export default function Sidebar({ sideBar, darkMode, handleSideBar }) {
    return (
        <div
            className={`
            border-r-2 border-white
             z-50 w-[300px] overflow-hidden md:hidden pt-[50px] text-lg  min-h-[calc(100vh-60px)]
             fixed top-min-h-[calc(100vh-60px)] flex flex-col items-start gap-6 p-5
             bg-white text-black
          ${darkMode && "dark:bg-gradient-to-b dark:from-black dark:to-red-950 dark:text-gray-300"}
            
             ${!sideBar && "-translate-x-[300px]"}
             `}>
            <a href="#learning-goals" onClick={() => handleSideBar(false)}>What you will learn</a>
            <a href="#" onClick={() => handleSideBar(false)}>Training Results</a>
            <a href="#course-outline" onClick={() => handleSideBar(false)}>Course Outline</a>
            <a href="mailto:digitalbull@gmail.com" className="rounded-md border-2 border-red-300 p-2 contact">Contact Us</a>
        </div>
    )
}
