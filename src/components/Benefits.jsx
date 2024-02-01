

// bg-gradient-to-b from-red-950 to-black
const Benefits = ({ isIntersecting }) => {
    return (
        <div className=" bg-white bg-gradient-to-b from-white to-gray-300 p-5 flex flex-col gap-10 min-h-screen">
            <h2 className="text-2xl self-center">Benefits and Learning Outcomes</h2>

            <div className={`flex flex-col md:flex-row  items-center justify-center gap-10 animate ${isIntersecting && "entrance"}`}>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4 md:w-[500px] ">
                        <span className="flex items-center justify-start gap-4">
                            <span className="h-7 w-7 rounded-full bg-red-300 text-white flex items-center justify-center">1</span>
                            <h3 className="text-xl font-semibold">Unveiling Market Trends</h3>
                        </span>
                        <p className="text-sm">
                            Stock market data analysis enables us to uncover trends and
                            patterns that may not be immediately apparent. By examining
                            historical price movements, trading volumes, and other relevant
                            market indicators, analysts can identify recurring patterns,
                            seasonality, and long-term trends. This information can be
                            crucial for investors and traders in making informed decisions
                            about when to enter or exit positions, identify potential
                            breakouts or reversals, and assess the overall market sentiment.
                        </p>
                    </div>
                    <div className={`flex flex-col gap-4 md:w-[500px] animate  ${isIntersecting && "entrance"}`}>
                        <span className="flex items-center justify-start gap-4">
                            <span className="h-7 w-7 rounded-full bg-red-300 text-white flex items-center justify-center">1</span>
                            <h3 className="text-xl font-semibold ">
                                Predictive Modeling and Forecasting:
                            </h3>
                        </span>
                        <p className="text-sm">
                            Data analysis techniques such as statistical modeling empower analysts to develop predictive
                            models
                            for
                            stock
                            market movements. By leveraging historical price data and other relevant variables, analysts can
                            train
                            models to
                            forecast future price movements with varying degrees of accuracy. While forecasting the stock
                            market
                            with
                            precision remains challenging, these models can provide probabilistic predictions and assist
                            investors
                            in making
                            more informed trading decisions.
                        </p>
                    </div>
                    <div className={`flex flex-col gap-4 md:w-[500px] animate`}>
                        <span className="flex items-center justify-start gap-4">
                            <span className="h-7 w-7 rounded-full bg-red-300 text-white flex items-center justify-center">3</span>
                            <h3 className="text-xl font-semibold">  Identifying Investment Opportunities</h3>
                        </span>
                        <p className="text-sm">
                            One of the most fascinating aspects of stock market data analysis is the potential to identify
                            trading
                            opportunities. By examining historical price patterns, valuation metrics, and market anomalies,
                            analysts
                            can
                            spot trading opportunities. This information can be invaluable for investors seeking to uncover
                            hidden
                            gems or
                            adopt contrarian investment strategies.
                        </p>
                    </div>
                </div>
                <div className={`flex flex-col gap-4 md:w-[500px] animate`}>
                    <span className="flex items-center justify-start gap-4">
                        <h3 className="text-xl font-semibold border-b-2 border-red-300">Conclusion</h3>
                    </span>
                    <p className="text-sm">
                        Stock market data analysis is a captivating field that offers a wealth of interesting information
                        for
                        investors,
                        traders, and analysts. By uncovering market trends, understanding investor behavior, identifying
                        correlations,
                        developing predictive models, and identifying investment opportunities, data analysis brings a
                        deeper
                        understanding of the complexities of the stock market. As technology advances and more sophisticated
                        analytical
                        techniques emerge, the potential for extracting intriguing insights from stock market data continues
                        to
                        grow,
                        providing individuals and institutions with a competitive edge in navigating the ever-evolving world
                        of
                        finance
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Benefits