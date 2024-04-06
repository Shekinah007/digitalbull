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
        className="bg-red-500 h-[140px] w-full flex flex-col gap-1 justify-center
                        items-center text-white font-bold rounded-t-[20px] "
      >
        <h4 className="font-bold text-3xl">{type}</h4>
        <div className="w-[130px] h-[2px] bg-white rounded-md"></div>
        <p className="text-sm h-[10px]">{year}</p>
      </div>
      <div className="h-full text-sm flex flex-col gap-2 justify-around self-center items-start">
        <div
          className={`text-sm flex flex-col gap-2  ${
            type == "Basic" && "w-[75%]"
          } self-center`}
        >
          {items.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              <IoMdCheckmarkCircleOutline color="green" size="20px" />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button className="shadow bg-green-500 text-lg p-1 w-[150px] rounded-2xl self-center font-bold text-white">
          {price}
          <span className="text-red-500 text-sm ">USD</span>
        </button>
      </div>
    </div>
  );
};
