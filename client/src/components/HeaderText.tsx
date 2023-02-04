import React from "react";

type Props = { children: React.ReactNode };

export const HeaderThreeText = ({ children }: Props) => {
  return <h3 className=" font-inter text-2xl font-bold">{children}</h3>;
};

export const HeaderOneText = ({ children }: Props) => {
  return <h1 className="border-b-[5px] border-b-gray-900 font-inter text-3xl font-bold uppercase">{children}</h1>;
};
