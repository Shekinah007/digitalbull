import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-black  py-10 text-gray-300 flex flex-col md:flex-row gap-10 justify-around items-center">

            <div className="flex flex-col md:flex-row  items-center gap-2 text-sm">
                <div className="max-w-[80vw] md:w-[400px] flex flex-col gap-5 text-center md:text-left">
                    <p>
                        If you are interested in one of our packages and obtaining your own copy of the stock
                        price visualization tool.

                        <div className='self-center md:hidden mt-[5px] flex flex-col gap-3 items-center'>
                            <span>👇</span>
                            <a href="mailto:digitaldrbull@gmail.com" className="p-2 rounded-md bg-red-500 text-white">Send us an email</a>
                        </div>
                    </p>
                    <p>
                        A Q/A session will be held within 2 weeks of receiving the tool to address
                        questions on tool use and functionalities.
                    </p>
                </div>
                <div className='hidden md:flex self-end md:self-start mt-[5px] gap-3 items-center '>
                    <span>👉</span>
                    <a href="mailto:digitaldrbull@gmail.com"
                        className="p-2 rounded-md text-white send-email">Send us an email</a>
                </div>

            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-3xl text-red-500 font-bold">DIGITAL BULL</h2>
                <p className="text-xs text-gray-500">digitaldrbull@gmail.com</p>
            </div>
        </footer>
    )
}
