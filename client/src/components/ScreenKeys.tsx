import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
const btnStyles: string = "h-[100px] w-[150px] rounded-lg border bg-slate-500 hover:bg-slate-400";
export const LeftSide = () => {
  const content: string[] = ["1", "3", "5", "7"];

  return (
    <div className="my-4 grid gap-4">
      {content.map((num, i) => (
        <button className={`${btnStyles} mr-1`} id={`${parseInt(num)}`} key={`${num}-${i}`}>
          <span className="flex justify-end">
            <ChevronRightIcon className="h-[5rem]" />
          </span>
        </button>
      ))}
    </div>
  );
};

export const RightSide = () => {
  const content: string[] = ["2", "4", "6", "8"];
  return (
    <div className="my-4 grid gap-4">
      {content.map((num, i) => (
        <button className={`${btnStyles} ml-1`} id={`${parseInt(num)}`} key={`${num}-${i}`}>
          <span className="flex justify-start">
            <ChevronLeftIcon className="h-[5rem]" />
          </span>
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
