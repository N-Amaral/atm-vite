import { OperationContext } from "../context/OperationContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  opTitles: string[];
  opValues?: number[];
};

type InnerProps = {
  optionNum: number;
  title: string;
  value?: number;
};

const Option = ({ optionNum, title, value }: InnerProps) => {
  return (
    <Link to={`/${title}`}>
      <li
        id={title}
        className="flex h-[6rem] w-[35rem] content-center rounded-lg border-[3px] border-gray-300 bg-gray-500 hover:cursor-pointer hover:border-gray-500 hover:bg-gray-600 "
      >
        <div className=" m-[1rem] h-[4rem]  w-[4rem] rounded-lg border-[3px] border-solid border-blue-500 bg-white ">
          <span className="flex justify-center pt-2 text-[28px] font-bold">{optionNum + 1}</span>
        </div>
        <div className="justify-end self-center">
          <p className="text-start text-[28px] font-[700] capitalize text-white">{title}</p>
        </div>
      </li>
    </Link>
  );
};

const MenuOptions = ({ opTitles, opValues }: Props) => {
  return (
    <ul className="my-4 grid h-auto grid-cols-2 items-center justify-items-center gap-8">
      {opTitles.map((title, i) => (
        <Option optionNum={i} title={title} value={opValues ? opValues[i] : undefined} key={`${title}-${i}`} />
      ))}
    </ul>
  );
};

export default MenuOptions;
