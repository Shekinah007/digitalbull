import "./table.css"
import CourseList from "../assets/Course Listing.pdf"

export const Courses = () => {
    return (
        <div id="course-outline" className={`min-h-screen flex flex-col items-center overflow-x-hidden justify-center text-gray-200 gap-2 py-16 bg-gray-600 `}>
            <div className="flex justify-between w-full">
                <h2 className="text-2xl md:text-3xl font-bold md:self-start ml-[30px] md:ml-[120px] ">Course Outline</h2>
                <a
                    href={CourseList}
                    download="DigitatBull course PDF document"
                    target="_blank"
                    rel="noreferrer"
                    className="border hidden md:block border-white p-2 rounded-lg md:mr-[120px] course-download"
                >
                    Download Course PDF
                </a>
            </div>
            <hr className="w-[82vw] mb-5" />

            <div className="flex flex-col md:flex-row md:gap-10 text-sm font-semibold" >
                <div className="flex flex-col gap-5 rounded-2xl box-shadow p-3 px-7 md:p-8 md:w-[540px] md:border border-gray-400 left">
                    <div className="flex gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">1</span>
                        <ul>
                            <li>X, Y and Z lines - PHASES - DIP seasons</li>
                            <li>A, B and C lines - PHASES - PEAK seasons</li>
                        </ul>
                    </div>
                    <div className="flex   gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">2</span>
                        <ul>
                            <li>Zone 1 and  Zone 4 indicators (PULL-DOWNS and PUSH-UPS)</li>
                            <li>Zone 2 and Zone 3 indicators (DIPS and PEAKS)</li>
                        </ul>
                    </div>
                    <div className="flex   gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">3</span>
                        <ul>
                            <li>PEAK prediction tables (Breaking resistance)</li>
                            <li>DIP prediction tables (Breaking support)</li>
                        </ul>
                    </div>
                    <div />
                    <div className="flex gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">4</span>

                        <ul>
                            <li>% drop and %increase calculators</li>
                        </ul>
                    </div>
                    <div className="flex gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">5</span>
                        <ul>
                            <li>Bull Signals</li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col gap-5 rounded-2xl box-shadow p-3 px-7 md:p-8 md:w-[540px] md:border border-gray-400 animate">
                    <div className="flex gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">6</span>
                        <ul>
                            <li>Manual price input (Running scenarios)</li>
                        </ul>
                    </div>
                    <div className="flex gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">7</span>
                        <ul>
                            <li>Adjusting graph scale (format axis) and date (slicer)</li>
                        </ul>
                    </div>
                    <div className="flex gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">8</span>
                        <ul>
                            <li>Importing stock data into sheet</li>
                        </ul>
                    </div>
                    <div className="flex gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">9</span>
                        <ul>
                            <li>Guidelines of using the S.P.V. tool</li>
                        </ul>
                    </div>
                    <div className="flex gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">10</span>
                        <ul>
                            <li>User questions</li>
                        </ul>
                    </div>


                </div>
            </div >
            <a
                href={CourseList}
                download="DigitatBull course PDF document"
                target="_blank"
                rel="noreferrer"
                className="border md:hidden border-white p-2 rounded-lg mt-[10px]"
            >
                Download Course PDF
            </a>
        </div >
    )
}
