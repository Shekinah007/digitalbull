import React from 'react'

export default function Sidebar({ sideBar }) {
    return (
        <div
            className={`
             z-10 w-[230px] overflow-hidden md:hidden bg-black  min-h-[calc(100vh-60px)]
             fixed top-min-h-[calc(100vh-60px)] flex flex-col items-start gap-6 p-5
             bg-gradient-to-t from-gray-300 to-white
             ${!sideBar && "-translate-x-[300px]"}
             `}>
            <a href="#learning-goals">What you will learn</a>
            <a href="#">Training Results</a>
            <a href="#course-outline">Course Outline</a>
            <a href="mailto:digitalbull@gmail.com" className="rounded-md border-2 border-red-300 p-2 contact">Contact Us</a>
        </div>
    )
}
