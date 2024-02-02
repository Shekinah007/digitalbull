import { IoMdCheckmarkCircleOutline } from "react-icons/io";
export const Plans = ({ isIntersecting }) => {
    return (
        <div id="plans" className="min-h-screen flex flex-col items-center justify-center gap-5 bg-white py-10 text-gray-500">
            <h2 className="text-3xl font-bold"><span className="text-red-500">Flexible</span> Plans</h2>
            <p className="text-lg font-semibold">Choose a plan that works best for you</p>
            <div className="flex flex-wrap items-center justify-center gap-10">

                <div className={`card flex flex-col justify-start gap-5 animate`}>
                    <div className="bg-red-500 h-[140px] w-full flex flex-col gap-1 justify-center
                        items-center text-white font-bold rounded-t-[20px] ">
                        <h4 className="font-bold text-3xl">1</h4>
                        <div className="w-[130px] h-[2px] bg-white rounded-md"></div>
                        <p className="text-sm">Year Plan</p>
                    </div>
                    <div className="h-full text-sm flex flex-col gap-2 justify-around self-center items-start">
                        <div className="text-sm flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                                <p>S.P.V.T One-year subscription</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                                <p>User Manual</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                                <p>Q/A Session</p>
                            </div>
                        </div>
                        <button className="bg-green-500 text-lg p-1 w-[150px] rounded-2xl self-center font-bold text-white">250</button>
                    </div>
                </div>

                <div className="card flex flex-col justify-start gap-5 animate">
                    <div className="bg-red-500 h-[140px] w-full flex flex-col gap-1 justify-center
                        items-center text-white font-bold rounded-t-[20px] ">
                        <h4 className="font-bold text-3xl">2</h4>
                        <div className="w-[130px] h-[2px] bg-white rounded-md"></div>
                        <p className="text-sm">Year Plan</p>
                    </div>
                    <div className="h-full text-sm flex flex-col gap-2 justify-around self-center items-start">
                        <div className="text-sm flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                                <p>S.P.V.T One-year subscription</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                                <p>User Manual</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoMdCheckmarkCircleOutline color="green" size="20px" />
                                <p>Q/A Session</p>
                            </div>
                        </div>
                        <button className="shadow bg-green-500 text-lg p-1 w-[150px] rounded-2xl self-center font-bold text-white">400</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
