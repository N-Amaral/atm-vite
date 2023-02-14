import { useEffect } from "react";

// General Stylings
const btnStyles: string = "h-[100px] bg-slate-500 hover:bg-slate-400  border-[3px] border-b-gray-300 rounded-lg";

const NumberKeys = () => {
  const numPad: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00", ""];

  return (
    <>
      {numPad.map((key, i) => (
        <button type="button" className={`${btnStyles} keyboardBtn w-[100px] text-xl font-extrabold`} key={`${key}-${i}`}>
          {key}
        </button>
      ))}
    </>
  );
};

const SideKeys = () => {
  const sidePad: Array<String> = ["anular cancel", "corrigir clear", "", "confirmar enter"];
  return (
    <>
      {sidePad.map((key, i) => (
        <button type="button" className={`${btnStyles} w-[200px] text-xl font-extrabold`} key={`${key}-${i}`}>
          <span>
            {key} <span>{i === 0 ? "X" : i === 1 ? "<" : i === 2 ? "" : "0"}</span>
          </span>
        </button>
      ))}
    </>
  );
};

const Keyboard = () => {
  return (
    <div className="">
      <div className="mb-2 flex justify-center gap-3">
        <div className="grid grid-cols-3 gap-1">
          <NumberKeys />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <SideKeys />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
