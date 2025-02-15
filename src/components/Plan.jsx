import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const Plan = ({ handleOpen, items, price, type, year }) => {
  return (
    <div
      onClick={() => {
        handleOpen(true);
      }}
      className="card flex flex-col justify-start gap-5 animate"
    >
      <div
        className="bg-red-500 h-[140px] w-full flex flex-col gap-1 justify-center pt-1 items-center text-white font-bold rounded-t-[20px] "
      >
        <h4 className="font-bold text-3xl">{type}</h4>
        <div className="w-[130px] h-[2px] bg-white rounded-md"></div>
        <p className="text-sm h-[10px] mb-4">{year}</p>
      </div>
      <div className="h-full text-sm flex flex-col gap-2 justify-around self-center items-start">
        <div
          className={`text-sm flex flex-col gap-2  ${
            type == "Basic" && "w-[75%]"
          } self-center`}
        >
          {items.map((item, index) => (
            <div className="flex  items-center gap-2 " key={index}>
              <IoMdCheckmarkCircleOutline
                color="green"
                // size="20px"
                className=" "
              />
              <p className="w-[200px]">{item}</p>
            </div>
          ))}
        </div>
        <button className="shadow bg-green-500 text-lg p-1 w-[150px] rounded-2xl self-center font-bold text-white">
          {price}
          <span className="text-red-500 text-sm ">
            {price !== "Free" && "USD/Month"}
          </span>
        </button>

        <p className="text-red-500 mb-1">{price !== "Free" && "25% discounted from $16/Month"}</p>
      </div>
    </div>
  );
};
