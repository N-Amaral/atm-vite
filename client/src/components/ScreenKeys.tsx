import React from "react";

const btnStyles: string = "h-[100px] w-[150px] rounded-lg border bg-slate-500";
export const LeftSide = () => {
  const content: string[] = ["1", "3", "5", "7"];

  return (
    <div className="grid gap-4">
      {content.map((num, i) => (
        <button className={btnStyles} id={`${parseInt(num)}`} key={`${num}-${i}`}>
          <span className="">{">"}</span>
        </button>
      ))}
    </div>
  );
};

export const RightSide = () => {
  const content: string[] = ["2", "4", "6", "8"];
  return (
    <div className="grid gap-4">
      {content.map((num, i) => (
        <button className={btnStyles} id={`${parseInt(num)}`} key={`${num}-${i}`}>
          <span className="">{"<"}</span>
        </button>
      ))}
    </div>
  );
};

const ScreenKeys = () => {
  return (
    <div className="">
      <RightSide />
      <LeftSide />
    </div>
  );
};

export default ScreenKeys;
