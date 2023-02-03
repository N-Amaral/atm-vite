import React from "react";

type Props = {
  inputs: number;
  formType: string;
};

const Form = ({ inputs, formType }: Props) => {
  const content: Array<React.ReactElement> = [];

  for (let i: number = 0; i < inputs; i++) {
    content.push(
      <li className="" key={`input-${i}`}>
        <input
          className="h-[50px] w-[50px] rounded-lg border-[2px] border-solid border-b-gray-400 bg-slate-600 text-center font-inter text-2xl font-bold text-white"
          type={"tel"}
          maxLength={1}
          required
        />
      </li>
    );
  }
  return <ul className={`grid w-[200px] grid-flow-col grid-cols-${inputs} gap-y-0 gap-x-1`}>{content}</ul>;
};

export default Form;
