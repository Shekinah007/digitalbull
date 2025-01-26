import heroBgImg from "../assets/images/grid vert.png";
import climbImg from "../assets/images/climb2.png";

import { TypeAnimation } from "react-type-animation";

function Hero({ darkMode, parallax }) {
  return (
    <div
      id="top"
      className={`relative
          p-3 md:p-0  bg-gradient-to-b from-white to-gray-300 text-black min-h-[calc(100vh-60px)] 
          flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20
          ${
            darkMode &&
            "dark:bg-gradient-to-b dark:from-black dark:to-red-950 text-white"
          }
        hero-section overflow-x-hidden
        `}
    >
      <img
        ref={parallax.ref}
        src={heroBgImg}
        alt=""
        className="absolute w-[300px] md:w-[600px]  invert -z-1 rotate-45 md:rotate-45 -right-[20px] -top-[200px] pattern-img "
      />
      <div className="md:w-[500px] flex flex-col gap-5 z-10">
        <h1
          id="header-text"
          className="text-2xl header-text md:text-4xl font-bold self-start animate"
        >
          <TypeAnimation
            cursor={false}
            className={""}
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "TRADE WITH CONFIDENCE",
              1000, // wait 1s before replacing "Mice" WITH "Hamsters"
              "TRADE WITH KNOWLEDGE",
              1000,
              "TRADE SKILLFULLY",
              1000,
              "Digitbull",
              (el) => {
                el.classList.add("text-red-500");
                el.classList.add("scale-125");
                el.classList.add("translate-x-6");
              },
              1000,
              (el) => {
                el.classList.remove("text-red-500");
                el.classList.remove("scale-125");
                el.classList.remove("translate-x-6");
              },
            ]}
            wrapper="span"
            speed={20}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <p className="left">
          {" "}
          Reveal the mechanical cycle of stock price movements using our stock price data analysis tools and techniques. Digitbull provides unique training on stock price data analysis and gives you the tools to explore the stock market, gain insights and make informed trading decisions.
        </p>
        <a
          href="https://www.youtube.com/@Digitbull"
          target="blank"
          className="text-white sign-btn self-start  font-semibold p-2 rounded-md animate"
        >
          Visit our Channel
        </a>
      </div>
      <img
        src={climbImg}
        alt="graph image"
        className="w-[500px] z-10 top-enter "
      />
    </div>
  );
}

export default Hero;
