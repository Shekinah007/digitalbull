import "./table.css"
export const Courses = () => {
    return (
        <div id="course-outline" className={`min-h-screen flex flex-col items-center justify-center text-gray-200 gap-2 py-16 bg-gray-600 `}>
            <h2 className="text-2xl md:text-3xl font-bold md:self-start md:ml-20 ">Course Outline</h2>
            <hr className="w-[90vw] mb-5" />

            <div div className="flex flex-col md:flex-row md:gap-10 text-sm font-semibold" >
                <div className="flex flex-col gap-5 rounded-2xl box-shadow p-3 px-7 md:p-8 md:w-[540px] md:border border-gray-400">
                    <div className="flex gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">1</span>
                        <ul>
                            <li>X, Y and Z lines - PHASES - DIP seasons</li>
                            <li>1b) A, B and C lines - PHASES - PEAK seasons</li>
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
                    <div className="flex   gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">4</span>

                        <ul>
                            <li>% drop and %increase calculators</li>
                        </ul>
                    </div>
                    <div className="flex   gap-7 md:gap-10 items-center">
                        <span className="h-7 w-7 rounded-full bg-red-500 text-white flex items-center justify-center">5</span>
                        <ul>
                            <li>Bull Pattern 1: Multiple C3Z2 effects DIPS + PHASE 3 on X, Y & Z</li>
                            <li>Bull Pattern 2: Z- line lift + approaching PHASE 1 on X, Y & Z</li>
                            <li>Bull Pattern 3: SUDDEN DROP + STRONG SUPPORT</li>
                            <li>Bull Pattern 4: C- line pressure</li>
                            <li>Bull pattern 5: A- line pressure</li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col gap-5 rounded-2xl box-shadow p-3 px-7 md:p-8 md:w-[540px] md:border border-gray-400">
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
        </div >
    )
}
