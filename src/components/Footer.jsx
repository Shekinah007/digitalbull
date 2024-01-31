import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-black py-16 text-gray-300 flex flex-col md:flex-row  gap-10 justify-around items-center">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl text-red-500 font-bold">DIGITALBULL</h2>
                <p className="text-xs text-gray-500">digitalbull@gmail.com</p>
            </div>
            <div className="flex flex-col md:flex-row  items-center gap-2 text-sm">
                <div className="max-w-[80vw] md:w-[400px] flex flex-col gap-5">
                    <p>
                        If you are interested in one of our packages and obtaining your own copy of the stock
                        price visualization tool.

                    </p>
                    <p>
                        A Q/A session will be held withing 2 weeks of receiving the tool to address
                        question on tool use and functionality
                    </p>
                </div>
                <div className='self-start mt-[5px] flex gap-3 items-center'>
                    <span>👉</span>
                    <a href="mailto:digitabull@gmail.com" className="p-2 rounded-md bg-red-500 text-white">Send us an email</a>
                </div>

            </div>
        </footer>
    )
}